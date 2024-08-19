"use client";

import classNames from "classnames";
import { useEffect, useState } from "react";
import { DiVim, DiGitBranch } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { LuClock3 } from "react-icons/lu";
import { SiTypescript } from "react-icons/si";
import { TbBrandPagekit } from "react-icons/tb";

export default function FooterContainer() {
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
      <div className="h-max w-full bg-[#002b37] flex items-center justify-between overflow-x-auto whitespace-nowrap gap-10 mobilexll:text-xs no-scrollbar">
        <div className="flex items-center font-bold">
          <div className="flex items-center justify-center bg-[#0075b3] text-white px-3 relative gap-2 py-[2px]">
            <DiVim size={"20px"} /> NORMAL
          </div>

          <div className="flex items-center bg-[#7e8f90] text-[#001115] px-3 relative ml-[-1px] py-[2px]">
            <DiGitBranch size={"20px"} /> main
          </div>

          <FaReact className="mx-4 text-[#008cd8]" size={"16px"} />

          <div className="pr-5 flex items-center gap-2">
            <SiTypescript className="text-gray-400" />{" "}
            {`app/components/Homepage.tsx`}
          </div>
        </div>

        <div className="flex items-center font-bold">
          <div className="flex items-center bg-[#7e8f90] text-[#001115] px-3 relative ml-[-1px] py-[2px] gap-1">
            <TbBrandPagekit size={"20px"} /> Homepage.tsx
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
          <div className="flex items-center justify-center bg-[#00b2ff] text-[#121212] px-3 relative gap-2 pl-4 py-[2px] rounded-bl-2xl">
            TMUX
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
                year: "2-digit",
              })
              .replace(/ /g, "-")}
          </div>

          <div className="flex items-center justify-center bg-[#00b2ff] text-[#121212] px-3 relative gap-2 py-[2px] rounded-br-2xl whitespace-nowrap">
            BearyDevs-Macbook-Pro-M1Max.local
          </div>
        </div>
      </div>
    </div>
  );
}
