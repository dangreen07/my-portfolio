"use client";

import { BlogPost } from "@/payload-types";
import { DefaultNodeTypes, SerializedBlockNode } from "@payloadcms/richtext-lexical";
import type { CodeBlock as CodeBlockProps, MathBlock as MathBlockProps } from "@/payload-types";
import { JSXConvertersFunction, RichText as RichTextConverter } from '@payloadcms/richtext-lexical/react';
import MathBlock from "./math-block";
import CodeBlock from "./code-block";

export default function Post({ post }: { post: BlogPost }) {
    return (
        <div className="max-w-3xl mx-auto p-5">
            <h1 className="text-5xl font-bold">{post.title}</h1>
            <p>Published at: {new Date(Date.parse(post.publishedAt)).toDateString()}</p>
            <article className="prose prose-headings:font-medium w-full max-w-full">
                <RichTextConverter data={post.content} converters={jsxConverter} />
            </article>
        </div>
    )
}

type NodeTypes = DefaultNodeTypes | SerializedBlockNode<CodeBlockProps | MathBlockProps>;

const jsxConverter: JSXConvertersFunction<NodeTypes> = ({ defaultConverters }) => ({
    ...defaultConverters,
    blocks: {
        math: ({ node }) => <MathBlock {...node.fields} />,
        code: ({ node }) => <CodeBlock {...node.fields} />
    }
})