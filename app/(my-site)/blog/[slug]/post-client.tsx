"use client";

import { useRouter } from "next/navigation";
import { BlogPost } from "@/payload-types";
import { DefaultNodeTypes, SerializedBlockNode } from "@payloadcms/richtext-lexical";
import type { CodeBlock as CodeBlockProps, MathBlock as MathBlockProps } from "@/payload-types";
import { JSXConvertersFunction, RichText as RichTextConverter } from '@payloadcms/richtext-lexical/react';
import type { SerializedLinkNode, SerializedUploadNode, SerializedParagraphNode } from '@payloadcms/richtext-lexical'
import Image from "next/image";
import MathBlock from "../../components/math-block";
import CodeBlock from "../../components/code-block";
import Latex from "react-latex-next";
import type { ReactNode } from "react";

export default function PostClient({ post }: { post: BlogPost }) {
    const router = useRouter();

    function handleBack() {
        try {
            // Prefer history back; if there's no history, navigate to /blog
            router.back();
            // Note: router.back() may be a no-op if there's no history stack.
            // Fallback to /blog after a short tick to ensure back() had a chance.
            setTimeout(() => {
                // If still on the same page (no history), push to blog
                // We use a heuristic: if document.referrer is empty and history length <= 1
                if (typeof window !== "undefined" && (window.history.length <= 1 || document.referrer === "")) {
                    router.push("/blog");
                }
            }, 150);
        } catch {
            // Final fallback
            router.push("/blog");
        }
    }

    return (
        <div className="max-w-3xl mx-auto p-2 sm:p-5">
            <div className="mb-4">
                <button
                    onClick={handleBack}
                    aria-label="Go back"
                    className="inline-flex items-center gap-2 text-sm text-slate-700 hover:underline"
                >
                    ← Back
                </button>
            </div>

            <h1 className="text-5xl font-bold">{post.title}</h1>
            <p>Published at: {new Date(Date.parse(post.publishedAt)).toDateString()}</p>
            <article className="prose prose-headings:font-medium w-full max-w-full mt-5">
                <RichTextConverter data={post.content} converters={jsxConverter} />
            </article>
        </div>
    );
}

type NodeTypes = DefaultNodeTypes | SerializedBlockNode<CodeBlockProps | MathBlockProps>;

type ParagraphChildNode = SerializedParagraphNode['children'][number] & {
    type?: string;
    fields?: Record<string, unknown>;
    text?: string;
    children?: ParagraphChildNode[];
};

const isLinkNode = (node: ParagraphChildNode): node is SerializedLinkNode => node?.type === "link";

const renderParagraphChild = (node: ParagraphChildNode, key: string): ReactNode => {
    if (!node) return null;

    if (isLinkNode(node)) {
        return renderLinkNode(node, key);
    }

    const text = typeof node.text === "string" ? node.text : "";
    if (text) {
        return (
            <Latex key={key}>
                {text}
            </Latex>
        );
    }

    if (Array.isArray(node.children)) {
        return node.children.map((child, index) => renderParagraphChild(child, `${key}-${index}`));
    }

    return null;
};

const renderLinkNode = (node: SerializedLinkNode, key: string): ReactNode => {
    const urlField = node.fields?.url;
    const url = typeof urlField === "string" ? urlField : urlField ? String(urlField) : "#";
    const isHttp = typeof url === "string" && /^(https?:)?\/\//i.test(url);
    const isMailOrTel = typeof url === "string" && /^(mailto:|tel:)/i.test(url);
    const isExternal = isHttp && !isMailOrTel;

    return (
        <a
            key={key}
            href={url}
            className="text-indigo-600 hover:underline"
            {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
            {node.children?.map((child, index) => renderParagraphChild(child, `${key}-${index}`))}
        </a>
    );
};

const jsxConverter: JSXConvertersFunction<NodeTypes> = ({ defaultConverters }) => ({
    ...defaultConverters,
    paragraph: ({ node }: { node: SerializedParagraphNode }) => {
        if (process.env.NODE_ENV !== "production") {
            const childTypes = node.children.map((child) => (child as { type?: string }).type);
            const hasLinkChild = childTypes.includes("link");
            console.debug("[PostClient] paragraph node", {
                childTypes,
                hasLinkChild,
            });
        }

        return (
            <p className="m-0">
                {node.children.map((child, index) => renderParagraphChild(child as ParagraphChildNode, `${index}`))}
            </p>
        );
    },
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
                {node.children.map((value) => {
                    const text = (value as unknown as { 'text': string })['text'];
                    return text;
                })}
                {isExternal ? <span className="sr-only"> (opens in a new tab)</span> : null}
            </a>
        );
    },
    blocks: {
        math: ({ node }) => <MathBlock {...node.fields} />,
        code: ({ node }) => <CodeBlock {...node.fields} />,
    },
});
