import React, { PropsWithChildren } from "react";

export default function ContactLayout({ children }: PropsWithChildren) {
  return (
    <div className="w-full min-h-full flex items-start justify-between flex-grow">
      <div className="animate-[fadeIn_1s] flex-grow w-[85dvw] h-auto max-h-screen py-1 px-4 pl-6 overflow-auto custom900:pl-0">
        {children}
      </div>
    </div>
  );
}
