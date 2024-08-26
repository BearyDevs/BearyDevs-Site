import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "BearyDevs's personal blog where I share my thoughts and learnings.",
};

export default function MyBlogsLayout({ children }: PropsWithChildren) {
  return (
    <div className="w-full h-full flex items-start justify-center overflow-hidden">
      <div className="animate-[fadeIn_1s] flex-grow w-[85%] max-w-screen h-auto overflow-auto py-1 px-4 pl-6 custom900:pl-0">
        {children}
      </div>
    </div>
  );
}
