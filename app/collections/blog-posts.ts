import { BlocksFeature, lexicalEditor } from "@payloadcms/richtext-lexical";
import { CollectionConfig } from "payload";
import { MathBlock } from "../blocks/MathBlock";
import { CodeBlock } from "../blocks/CodeBlock";

export const BlogPosts: CollectionConfig = {
    slug: "blog-posts",
    admin: {
        useAsTitle: 'title'
    },
    fields: [
        {
            name: 'title',
            type: "text",
            required: true,
            hooks: {
                beforeChange: [
                    (config) => {
                        const value = config.value;
                        const data = config.data;
                        if (data && value != '') {
                            function slugify(str: string) {
                                return str
                                    .normalize('NFKD')
                                    .replace(/[\u0300-\u036f]/g, '')
                                    .toLowerCase()
                                    .trim()
                                    .replace(/[^a-z0-9\s-]/g, '') // remove punctuation
                                    .replace(/\s+/g, '-')         // spaces -> hyphens
                                    .replace(/-+/g, '-');         // collapse repeated hyphens
                            }
                            data.slug = slugify(value)
                        }
                        return value;
                    }
                ]
            }
        },
        {
            name: "slug",
            type: "text",
            required: true,
        },
        {
            name: "publishedAt",
            type: "date",
            required: true,
        },
        {
            name: "updatedAt",
            type: "date",
            required: true
        },
        {
            name: 'content',
            type: "richText",
            required: true,
            editor: lexicalEditor({
                features: ({ defaultFeatures }) => [
                    ...defaultFeatures,
                    BlocksFeature({
                        blocks: [CodeBlock, MathBlock],
                    }),
                ],
            }),
        }
    ]
}