import { Metadata } from "next";
import { PropsWithChildren } from "react";
import { Nav } from "./_components/nav";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Discover the interactive brilliance of my projects, peruse my polished portfolio, and delve into a sneak peek of my formidable technical prowess. Uncover a world where innovation meets functionality, showcased through a meticulously crafted Next.js application. Elevate your digital experience with a seamless blend of creativity and technical finesse.",
};

export default function ProjectLayout({ children }: PropsWithChildren) {
  return (
    <div className="w-full min-h-full flex items-start justify-between flex-grow">
      <div className="animate-[fadeIn_1s] flex-grow w-[100dvw] sm:w-[95dvw] h-auto max-h-screen py-1 px-0 sm:px-4 pl-6 overflow-auto custom900:pl-0">
        <Nav />
        {children}
      </div>
    </div>
  );
}
