import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Discover the interactive brilliance of my projects, peruse my polished portfolio, and delve into a sneak peek of my formidable technical prowess. Uncover a world where innovation meets functionality, showcased through a meticulously crafted Next.js application. Elevate your digital experience with a seamless blend of creativity and technical finesse.",
};

export default function ProjectLayout({ children }: PropsWithChildren) {
  return (
    <div className="w-full h-full flex items-start justify-center">
      <div className="animate-[fadeIn_1s] w-[100dvw] sm:w-[85dvw] h-auto max-h-max py-1 lg:pb-6 px-2 sm:px-4 pl-6 custom900:pl-0">
        {children}
      </div>
    </div>
  );
}
