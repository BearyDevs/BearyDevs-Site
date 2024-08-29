"use client";

import { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-typescript";
import "../styles/prism-solarized-osaka.css";
import { ScrollShadow } from "@nextui-org/react";

export default function CodeWithLineNumbers({ code = "" }: { code?: string }) {
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    // Split code into lines, remove trailing empty lines
    const trimmedCode = code?.trim().split("\n") || [];
    setLines(trimmedCode);
    Prism.highlightAll();
  }, [code]);

  return (
    <ScrollShadow className="relative lg:pt-8 overflow-auto max-w-full lg:max-h-[calc(100dvh-330px)] max-h-[calc(100dvh-170px)] scroll-container lg:pb-[5%] pb-[10%] overflow-y-auto">
      <div className="flex">
        {/* Line numbers */}
        <div className="relative left-0 top-0 bg-gray-800 text-right text-gray-400 pr-4 line-numbers-wrapper">
          {lines.map((_, i) => (
            <div key={i} className="leading-6 line-numbers">
              {i + 1}
            </div>
          ))}
        </div>

        {/* Scrollable code block with Prism.js highlighting */}
        <div className="pl-4 overflow-y-auto">
          <pre className="language-typescript">
            <code className="language-typescript">{code}</code>
          </pre>
        </div>
      </div>
    </ScrollShadow>
  );
}
