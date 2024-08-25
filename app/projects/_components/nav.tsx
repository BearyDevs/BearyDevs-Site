"use client";
import { getFileIcon } from "@/app/libs/icons";
import { ScrollShadow } from "@nextui-org/react";
import classNames from "classnames";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export const Nav = () => {
  const params = useSearchParams();

  return (
    <ScrollShadow
      orientation="horizontal"
      className={classNames({
        "sticky top-0 z-50 mb-3 flex select-none items-center rounded-md overflow-x-auto mobilexll:pb-1 py-1":
          true,
        "bg-gradient-to-r from-[#002b3780] via-[#0a2c2c1b] to-[#103f3c00]":
          true,
        // "bg-transparent": true,
      })}
    >
      {menu.map((item) => {
        const isActive =
          params.get("tag")?.toLowerCase() === item.title ||
          (!params.get("tag") && item.title === "all-projects");
        return (
          <Link
            key={item.title}
            href={item.href}
            className={`flex shrink-0 text-gray-300 items-center py-1 gap-1.5 px-3 leading-none transition-all hover:bg-[#103f3c4f] ${isActive ? "bg-[#103f3cb5] text-white" : "bg-transparent"}`}
          >
            {getFileIcon(item.title)}
            {item.title}
          </Link>
        );
      })}
    </ScrollShadow>
  );
};

const menu = [
  {
    title: "all-projects",
    href: "/projects",
  },
  {
    title: "next",
    href: "/projects?tag=Next",
  },
  {
    title: "react",
    href: "/projects?tag=React",
  },
  {
    title: "node",
    href: "/projects?tag=Node",
  },
  {
    title: "react-native",
    href: "/projects?tag=React-Native",
  },
  {
    title: "html",
    href: "/projects?tag=HTML",
  },
  {
    title: "unity",
    href: "/projects?tag=Unity",
  },
];
