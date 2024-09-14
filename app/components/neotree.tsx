"use client";

import { FaFolderOpen } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import classNames from "classnames";
import { usePathname, useRouter } from "next/navigation";
import { Link } from "@nextui-org/react";

interface Props {
  startPath: string;
  items: NeotreeItem[];
}

export default function Neotree({ startPath, items }: Props) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="block animate-[fadeInLeft_1s] w-max h-full py-1 pt-6 pl-1 custom900:hidden sticky top-0">
      <Link
        href="https://github.com/nvim-neo-tree/neo-tree.nvim"
        target="_blank"
        className="text-[#00b2ff] font-semibold"
      >
        NeoTree
      </Link>

      <div className="w-full max-h-[calc(100vh-100px)] overflow-y-auto overflow-x-hidden flex items-start justify-center flex-col py-1 pl-2 pr-8 mt-2 bg-[#00171c] border-r-[2px] border-[#003641] text-[#5d7a82]">
        <p className="flex items-center gap-1 cursor-not-allowed italic whitespace-nowrap">
          <IoIosArrowDown /> <FaFolderOpen className="text-[#008dd9]" />
          {startPath}
        </p>
        {items.map((item, i) => {
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
