"use client";

import { FaFolderOpen } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import classNames from "classnames";
import { usePathname, useRouter } from "next/navigation";

export const aboutSelect = [
  {
    fileName: "greeting.ts",
    link: "/about",
    slug: "",
  },
  {
    fileName: "gear.ts",
    link: "/about/gear",
    slug: "gear",
  },
  {
    fileName: "personal.ts",
    link: "/about/personal",
    slug: "personal",
  },
  {
    fileName: "work.ts",
    link: "/about/work",
    slug: "work",
  },
] as const;

export default function Neotree() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="block animate-[fadeInLeft_1s] w-[12dvw] h-full py-1 custom900:hidden sticky top-0">
      {/* Neotree title */}
      <h1 className="text-[#00b2ff] font-semibold">Neotree</h1>

      {/* Neotree content */}
      <div className="w-full max-h-[calc(100vh-100px)] overflow-y-auto overflow-x-hidden flex items-start justify-center flex-col py-1 pl-2 pr-8 mt-2 bg-[#00171c] border-r-[2px] border-[#003641] text-[#5d7a82]">
        <p className="flex items-center gap-1 cursor-not-allowed italic">
          <IoIosArrowDown /> <FaFolderOpen className="text-[#008dd9]" />
          about
        </p>
        {aboutSelect.map((item, i) => {
          return (
            <button
              key={i}
              onClick={() => router.push(item.link)}
              className={classNames({
                "hover:text-teal-200 hover:drop-shadow-glow transition-colors duration-300 py-1 pl-6 flex items-center gap-1 italic":
                  true,
                "text-white": pathname === item.link,
              })}
            >
              <FaReact className="text-[#008cd8]" /> {item.fileName}
            </button>
          );
        })}
      </div>
    </div>
  );
}
