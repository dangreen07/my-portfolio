import { MathBlock as MathBlockProps } from "@/payload-types";
import 'katex/dist/katex.min.css';
import katex from 'katex';

export default function MathBlock(props: MathBlockProps) {
    return <div className="max-w-full overflow-x-auto" dangerouslySetInnerHTML={{
        __html: katex.renderToString(`${props.latex}`, {
            displayMode: true
        })
    }}></div>
}