"use client";

import { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-typescript";
import "../styles/prism-solarized-osaka.css";

export default function CodeWithLineNumbers({ code = "" }: { code?: string }) {
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    // Split code into lines
    setLines(code?.split("\n") || []);
    // Trigger Prism.js to highlight the code after the component mounts
    Prism.highlightAll();
  }, [code]);

  return (
    <div className="relative mt-8 overflow-auto no-scrollbar">
      <div className="flex">
        {/* Line numbers */}
        <div className="sticky left-0 top-0 bg-gray-800 text-right text-gray-400 pr-4">
          {lines.map((_, i) => (
            <div key={i} className="leading-6">
              {i + 1}
            </div>
          ))}
        </div>

        {/* Scrollable code block with Prism.js highlighting */}
        <div className="pl-4">
          <pre className="language-typescript">
            <code className="language-typescript">{code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
