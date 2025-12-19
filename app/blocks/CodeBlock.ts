import type { Block } from 'payload';

export const CodeBlock: Block = {
    slug: 'code',
    interfaceName: 'CodeBlock',
    fields: [
        { name: 'filename', type: 'text' },
        {
            name: 'language',
            type: 'select',
            options: [
                { label: 'JavaScript', value: 'javascript' },
                { label: 'TypeScript', value: 'typescript' },
                { label: 'HTML', value: 'html' },
                { label: 'CSS', value: 'css' },
                { label: 'Python', value: 'python' },
                // add others you want
            ],
            defaultValue: 'javascript',
        },
        { name: 'code', type: 'code', required: true },
    ],
};