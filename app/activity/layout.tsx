import React, { PropsWithChildren } from "react";
// import { codingActivityNav } from "@/app/navigation";
// import Neotree from "../components/neotree";

export default function CodingActivityLayout({ children }: PropsWithChildren) {
  return (
    <div className="w-full min-h-full flex items-start justify-between flex-grow">
      {/* <Neotree startPath="coding-activity" items={codingActivityNav} /> */}

      <div className="animate-[fadeIn_1s] flex-grow w-[85dvw] h-auto max-h-screen py-1 px-4 pl-6 overflow-auto custom900:pl-0">
        {children}
      </div>
    </div>
  );
}
