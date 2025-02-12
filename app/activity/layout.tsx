import React, { PropsWithChildren } from "react";

export default function CodingActivityLayout({ children }: PropsWithChildren) {
  return (
    <div className="w-full min-h-full flex items-start justify-between flex-grow">
      <div className="flex-grow w-[85dvw] h-[75dvh] my-1 px-4 pl-6 overflow-auto lg:h-max lg:pt-2 custom900:pl-0">
        {children}
      </div>
    </div>
  );
}
