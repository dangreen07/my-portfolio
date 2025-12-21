import { BlocksFeature, lexicalEditor } from "@payloadcms/richtext-lexical";
import { CollectionConfig } from "payload";
import { CodeBlock } from "../blocks/CodeBlock";
import { MathBlock } from "../blocks/MathBlock";
import { revalidatePath } from "next/cache";

export const Projects: CollectionConfig = {
    slug: "projects",
    admin: {
        useAsTitle: 'title'
    },
    hooks: {
        afterChange: [
            async ({ req }) => {
                revalidatePath("/projects");
                return req;
            }
        ]
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
            name: 'slug',
            type: 'text',
            required: true
        },
        {
            name: 'website',
            type: 'text'
        },
        {
            name: "github",
            type: "text"
        },
        {
            name: "start-date",
            type: "date",
            required: true
        },
        {
            name: "related-websites",
            type: "array",
            fields: [
                {
                    name: "website",
                    type: "text"
                }
            ]
        },
        {
            name: 'project-icon',
            type: "upload",
            relationTo: "media",
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