"use client";

import classNames from "classnames";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { DiVim, DiGitBranch } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { LuClock3 } from "react-icons/lu";
import { SiTypescript } from "react-icons/si";
import { TbBrandPagekit } from "react-icons/tb";
import { aboutSelect } from "../about/[slug]/_components/neotree-about";
// import { FaFolderOpen } from "react-icons/fa6";
import { Link } from "@nextui-org/react";

export default function FooterContainer() {
  const pathname = usePathname();
  const router = useRouter();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(!show);
    }, 10);

    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={classNames({
        "bottom-0 absolute overflow-x-auto whitespace-nowrap w-full h-max text-sm":
          true,
        hidden: !show,
        "block animate-[fadeInUp_1s]": show,
      })}
    >
      {pathname.startsWith("/about") && (
        <div className="custom900_min:hidden flex items-center justify-start text-sm w-full flex-grow py-1 overflow-x-auto no-scrollbar animate-[fadeInUp_1s]">
          {/* <div className="flex items-center justify-center text-[#00b2ff] font-bold px-2 gap-2"> */}
          {/*   NeoTree */}
          {/* </div> */}

          {/* <FaFolderOpen className="text-[#008dd9] mx-1 ml-2" /> */}

          {aboutSelect.map((item, i) => {
            return (
              <button
                key={i}
                onClick={() => router.push(item.link)}
                className={classNames({
                  "px-2 mx-1 flex items-center gap-1 relative bottom-[-3px] left-[-3px] italic":
                    true,
                  "bg-[#969696] text-[#000000] font-bold transition-background duration-300":
                    pathname === item.link,
                })}
              >
                <FaReact className="text-[#008cd8]" /> {item.fileName}
              </button>
            );
          })}
        </div>
      )}

      <div className="h-max w-full bg-[#002b37] flex items-center justify-between overflow-x-auto whitespace-nowrap gap-10 mobilexll:text-xs no-scrollbar">
        <div className="flex items-center font-bold">
          <div className="flex items-center justify-center bg-[#0075b3] text-white px-3 relative gap-2 py-[2px]">
            <DiVim size={"20px"} /> NORMAL
          </div>

          <div className="flex items-center bg-[#7e8f90] text-[#001115] px-3 relative ml-[-1px] py-[2px]">
            <DiGitBranch size={"20px"} /> main
          </div>

          <FaReact className="mx-4 text-[#008cd8]" size={"16px"} />

          <div className="pr-5 flex items-center gap-2 transition-all duration-1000">
            <SiTypescript className="text-gray-400" />{" "}
            {`app${pathname === "/" ? "/home" : pathname}.tsx`}
          </div>
        </div>

        <div className="flex items-center font-bold">
          <div className="flex items-center bg-[#7e8f90] text-[#001115] px-3 relative ml-[-1px] py-[2px] gap-1">
            <TbBrandPagekit size={"20px"} />{" "}
            {pathname === "/" ? "home" : pathname.slice(1)}.tsx
          </div>

          <div className="flex items-center justify-center bg-[#0075b3] text-[#001115] px-3 relative gap-2 py-[2px]">
            <LuClock3 />{" "}
            {new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            })}
          </div>
        </div>
      </div>

      <div className="h-max w-full bg-[#002b37] flex items-center justify-between rounded-b-2xl overflow-x-auto whitespace-nowrap gap-4 mobilexll:text-xs no-scrollbar">
        <div className="flex items-center font-bold">
          <div className="flex items-center justify-center bg-[#00b2ff] px-3 relative gap-2 pl-4 py-[2px] rounded-bl-2xl">
            <Link
              className="text-[#121212] mobilexll:text-xs"
              href="https://github.com/tmux/tmux"
              target="_blank"
            >
              TMUX
            </Link>
          </div>

          <div className="flex items-center bg-[#484e52] text-gray-300 px-3 relative ml-[-1px] py-[2px]">
            <DiGitBranch size={"20px"} /> bearydevs
          </div>
        </div>

        <div className="flex items-center font-bold">
          <div className="flex items-center bg-[#484e52] text-gray-300 px-3 relative ml-[-1px] py-[2px] gap-1">
            {new Date()
              .toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                // year: "2-digit",
                year: "numeric",
              })
              .replace(/ /g, "-")}
          </div>

          <div className="flex items-center justify-center bg-[#00b2ff] px-3 relative gap-2 py-[2px] rounded-br-2xl whitespace-nowrap">
            <Link
              className="text-[#121212] mobilexll:text-xs"
              href="https://www.apple.com/th/newsroom/2021/10/introducing-m1-pro-and-m1-max-the-most-powerful-chips-apple-has-ever-built/"
              target="_blank"
            >
              BearyDevs-Macbook-Pro-M1Max.local
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
