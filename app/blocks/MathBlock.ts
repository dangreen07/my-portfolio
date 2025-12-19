import type { Block } from 'payload';

export const MathBlock: Block = {
    slug: 'math',
    interfaceName: 'MathBlock',
    fields: [
        { name: 'latex', type: 'textarea', required: true, admin: { description: 'LaTeX string (no surrounding $$ needed if you treat it as a block)' } },
        { name: 'display', type: 'checkbox', defaultValue: true },
    ],
};