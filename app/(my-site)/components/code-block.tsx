import { useState } from "react";
import { CodeBlock as CodeBlockProps } from "@/payload-types";

export default function CodeBlock(props: CodeBlockProps) {
    const { code = "" } = props;
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            if (typeof navigator !== "undefined" && navigator.clipboard) {
                await navigator.clipboard.writeText(code);
            } else {
                // fallback for older browsers / SSR safety
                const ta = document.createElement("textarea");
                ta.value = code;
                document.body.appendChild(ta);
                ta.select();
                document.execCommand("copy");
                ta.remove();
            }
            setCopied(true);
            window.setTimeout(() => setCopied(false), 2000);
        } catch {
            // silent fail — user can still manually select
            setCopied(false);
        }
    };

    return (
        <div className="relative my-4">
            <button
                type="button"
                onClick={handleCopy}
                aria-pressed={copied}
                className="absolute right-2 top-2 z-10 inline-flex items-center gap-2
                   rounded-md bg-slate-800/60 px-2 py-1 text-xs font-medium
                   text-slate-200 shadow-sm backdrop-blur-sm hover:bg-slate-800"
                title="Copy code"
            >
                {copied ? "Copied" : "Copy"}
            </button>

            <pre
                className="max-w-full overflow-auto rounded-md bg-slate-900/95 p-4
                   text-sm leading-6 text-slate-100 shadow-sm"
                aria-label="Code block"
            >
                <code className="whitespace-pre font-mono">{code}</code>
            </pre>
        </div>
    );
}