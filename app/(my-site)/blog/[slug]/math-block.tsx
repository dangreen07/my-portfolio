import { MathBlock as MathBlockProps } from "@/payload-types";
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';

export default function MathBlock(props: MathBlockProps) {
    return <Latex>$${props.latex}$$</Latex>
}