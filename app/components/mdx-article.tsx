"use client";

import classNames from "classnames";
import { usePathname } from "next/navigation";

interface Props {
  children: React.ReactNode;
  limitWidth: boolean;
}

export default function MdxArticle({ children, limitWidth }: Props) {
  const pathname = usePathname();

  return (
    <article
      className={classNames({
        "prose prose-neutral prose-invert mx-auto font-sans prose-headings:text-[#C6C6C6] prose-p:text-[#898989] prose-a:text-[#C6C6C6] prose-strong:text-[#C6C6C6] animate-[fadeIn_0.5s] pb-[5%]":
          true,
        "max-w-5xl": limitWidth,
        "max-w-none": !limitWidth,
        "pt-[200px] tabletmd:pt-[80px]": pathname.startsWith("/projects"),
      })}
    >
      {children}
    </article>
  );
}
