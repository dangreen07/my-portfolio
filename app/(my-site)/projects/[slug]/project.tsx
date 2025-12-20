"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Project as ProjectType } from "@/payload-types";
import {
    DefaultNodeTypes,
    SerializedBlockNode,
    SerializedUploadNode,
    SerializedLinkNode,
} from "@payloadcms/richtext-lexical";
import type {
    CodeBlock as CodeBlockProps,
    MathBlock as MathBlockProps,
} from "@/payload-types";
import { JSXConvertersFunction, RichText as RichTextConverter } from "@payloadcms/richtext-lexical/react";
import CodeBlock from "../../components/code-block";
import MathBlock from "../../components/math-block";

type NodeTypes = DefaultNodeTypes | SerializedBlockNode<CodeBlockProps | MathBlockProps>;

export default function Project({ project }: { project: ProjectType }) {
    const router = useRouter();

    function handleBack() {
        try {
            router.back();
            setTimeout(() => {
                if (typeof window !== "undefined" && (window.history.length <= 1 || document.referrer === "")) {
                    router.push("/projects");
                }
            }, 150);
        } catch {
            router.push("/projects");
        }
    }

    // Helper to safely get a media object (project['project-icon'] might be a number or object)
    function getIconData(icon: unknown) {
        if (!icon) return null;
        if (typeof icon === "object" && icon !== null) {
            const obj = icon as Record<string, unknown>;
            const url = typeof obj.url === "string" ? obj.url : undefined;
            const alt = typeof obj.alt === "string" ? obj.alt : project.title + " icon";
            const width = typeof obj.width === "number" ? obj.width : undefined;
            const height = typeof obj.height === "number" ? obj.height : undefined;
            return { url, alt, width, height };
        }
        return null;
    }

    const icon = getIconData(project["project-icon"]);

    return (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6">
            <div className="mb-4">
                <button
                    onClick={handleBack}
                    aria-label="Go back"
                    className="inline-flex items-center gap-2 text-sm text-slate-700 hover:underline"
                >
                    ← Back
                </button>
            </div>

            <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                <div className="flex-1 min-w-0">
                    <h1 className="text-2xl sm:text-4xl font-extrabold leading-tight">{project.title}</h1>
                    <div className="mt-1 text-sm text-slate-500">
                        {project["start-date"] ? new Date(project["start-date"]).toLocaleDateString(undefined, {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                        }) : null}
                    </div>
                </div>

                {icon?.url ? (
                    <div className="w-24 h-24 rounded-md overflow-hidden bg-slate-100">
                        <Image
                            src={icon.url}
                            alt={icon.alt ?? project.title}
                            width={icon.width ?? 256}
                            height={icon.height ?? 256}
                            className="w-full h-full object-cover"
                            sizes="96px"
                        />
                    </div>
                ) : null}
            </header>

            <div className="flex flex-wrap gap-2 mb-6">
                {project.website ? (
                    <a
                        href={String(project.website)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-sm bg-indigo-600 text-white px-3 py-1 rounded-md"
                    >
                        Visit website
                    </a>
                ) : null}
                {project.github ? (
                    <a
                        href={String(project.github)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-sm border px-3 py-1 rounded-md"
                    >
                        View on GitHub
                    </a>
                ) : null}
            </div>

            <article className="prose prose-sm sm:prose lg:prose-lg max-w-none">
                <RichTextConverter data={project.content} converters={projectJsxConverter} />
            </article>
        </div>
    );
}

/**
 * Typed RichText converters for uploads/links/blocks.
 * - Uploads render via next/image responsively.
 * - Links: external http(s) open in new tab + rel, and get an sr-only hint.
 * - Math/code blocks delegate to your components.
 */
const projectJsxConverter: JSXConvertersFunction<NodeTypes> = ({ defaultConverters }) => ({
    ...defaultConverters,

    upload: ({ node }: { node: SerializedUploadNode }) => {
        const upload = node.value;
        if (!upload || typeof upload !== "object") return null;

        const { url, alt, width, height } = upload as {
            url?: string;
            alt?: string;
            width?: number;
            height?: number;
        };

        if (!url) return null;

        // If you don't know dims, either supply defaults or use <img>
        return (
            <Image
                src={url}
                alt={alt ?? "An Image"}
                width={width ?? 800}
                height={height ?? 600}
                className="max-w-full h-auto mx-auto"
            />
        );
    },
    link: ({
        node,
    }: {
        node: SerializedLinkNode;
    }) => {
        // common places the url might live on the node
        const url = node.fields.url;

        const isHttp = typeof url === "string" && /^(https?:)?\/\//i.test(url);
        const isMailOrTel = typeof url === "string" && /^(mailto:|tel:)/i.test(url);
        const isExternal = isHttp && !isMailOrTel;

        return (
            <a
                href={String(url)}
                className="text-indigo-600 hover:underline"
                {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
                {node.fields.url}
                {isExternal ? <span className="sr-only"> (opens in a new tab)</span> : null}
            </a>
        );
    },

    blocks: {
        math: ({ node }) => <MathBlock {...(node.fields as MathBlockProps)} />,
        code: ({ node }) => <CodeBlock {...(node.fields as CodeBlockProps)} />,
    },
});