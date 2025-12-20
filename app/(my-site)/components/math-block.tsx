import { MathBlock as MathBlockProps } from "@/payload-types";
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';

export default function MathBlock(props: MathBlockProps) {
    return <div className="max-w-full overflow-x-auto"><Latex>$${props.latex}$$</Latex></div>
}