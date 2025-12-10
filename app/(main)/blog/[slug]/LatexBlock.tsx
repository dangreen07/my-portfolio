import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';

export default function LatexBlock({ body }: { body: string }) {
    return <Latex>${body}$</Latex>
}