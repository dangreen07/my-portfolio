import type { Block } from 'payload';

export const CodeBlock: Block = {
    slug: 'code',
    interfaceName: 'CodeBlock',
    fields: [
        {
            name: 'language',
            type: 'select',
            options: [
                { label: 'JavaScript', value: 'javascript' },
                { label: 'TypeScript', value: 'typescript' },
                { label: 'HTML', value: 'html' },
                { label: 'CSS', value: 'css' },
                { label: 'PowerShell', value: 'powershell' },
                { label: "JSON", value: "json" },
                { label: 'Python', value: 'python' },
                // add others you want
            ],
            defaultValue: 'javascript',
        },
        { name: 'code', type: 'code', required: true },
    ],
};