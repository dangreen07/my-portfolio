"use client";

import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/cjs/styles/hljs";

export default function CodeBlock({ code, language }: { code: string; language: string }) {
  const [copied, setCopied] = useState(false);
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <div className="overflow-hidden rounded-xl relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/30 to-teal-500/30 rounded-xl blur opacity-30 pointer-events-none"></div>
      
      <div className="flex items-center justify-between bg-gray-800/90 px-4 py-2 border-b border-gray-700/50 relative z-10">
        <span className="text-sm font-mono text-gray-300">
          {language || 'code'}
        </span>
        <button 
          onClick={copyToClipboard}
          className="text-xs font-medium px-2 py-1 rounded bg-gray-700 hover:bg-gray-600 text-gray-200 transition-colors duration-200 z-20"
          aria-label="Copy code to clipboard"
          type="button"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <div className="relative z-10">
        <pre className="p-0 m-0 bg-transparent">
          <code className="selection-enabled">
            <SyntaxHighlighter 
              language={language || 'text'} 
              style={vs2015}
              useInlineStyles={true}
              className="syntax-highlighter"
              PreTag={({children}) => <>{children}</>}
              CodeTag={({children}) => <>{children}</>}
              customStyle={{
                background: 'rgba(31, 41, 55, 0.95)',
                fontSize: '0.95rem',
                lineHeight: 1.6,
                cursor: 'text',
                padding: '1.5rem',
                borderRadius: '0 0 0.75rem 0.75rem',
                userSelect: 'text',
                WebkitUserSelect: 'text',
                MozUserSelect: 'text',
                msUserSelect: 'text'
              }}
              codeTagProps={{
                style: {
                  userSelect: 'text',
                  WebkitUserSelect: 'text',
                  MozUserSelect: 'text',
                  msUserSelect: 'text',
                  cursor: 'text'
                }
              }}
              wrapLongLines={true}
              showLineNumbers={true}
              lineNumberStyle={{
                color: 'rgba(156, 163, 175, 0.5)',
                paddingRight: '1rem',
                paddingLeft: '1rem',
                borderRight: '1px solid rgba(75, 85, 99, 0.4)',
                marginRight: '1rem',
                userSelect: 'none',
                WebkitUserSelect: 'none',
                MozUserSelect: 'none',
                msUserSelect: 'none',
                cursor: 'default'
              }}
            >
              {code}
            </SyntaxHighlighter>
          </code>
        </pre>
      </div>
      <style jsx global>{`
        .syntax-highlighter,
        .syntax-highlighter span:not(.linenumber),
        .syntax-highlighter code,
        .selection-enabled,
        .selection-enabled span:not(.linenumber),
        .selection-enabled code {
          cursor: text !important;
          user-select: text !important;
          -webkit-user-select: text !important;
          -moz-user-select: text !important;
          -ms-user-select: text !important;
        }
        
        .linenumber,
        span.react-syntax-highlighter-line-number {
          user-select: none !important;
          -webkit-user-select: none !important;
          -moz-user-select: none !important;
          -ms-user-select: none !important;
          cursor: default !important;
        }

        .syntax-highlighter *::selection,
        pre *::selection,
        code *::selection,
        .selection-enabled *::selection {
          background: rgba(66, 153, 225, 0.4) !important;
          color: white !important;
        }
      `}</style>
    </div>
  );
} 