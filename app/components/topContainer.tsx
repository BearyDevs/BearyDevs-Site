"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import classNames from "classnames";
import { FaReact } from "react-icons/fa";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { LuMaximize2 } from "react-icons/lu";
import { aboutNav, codingActivityNav } from "@/app/navigation";
import { Nav } from "@/app/projects/_components/nav";
import { ScrollShadow } from "@nextui-org/react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/libs/redux/store";
import { setMinimized } from "@/app/libs/redux/slices/minimized";

export default function TopContainer() {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch<AppDispatch>();

  const [isHovered, setIsHovered] = useState(false);

  const handleClose = () => {
    if (window.confirm("Are you sure you want to close this window?")) {
      window.close();
    } else {
      router.push(`${pathname}`);
    }
  };

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      router.push(pathname);
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  const handleMinimize = () => {
    dispatch(setMinimized(true));
  };

  return (
    <>
      <div className="w-full h-max rounded-t-2xl bg-transparent flex items-start justify-center flex-col z-20">
        <div className="top-0 h-max w-full flex items-center justify-between px-8 mobilexll:px-4 overflow-x-auto tabletmd:pt-2">
          <div
            className={classNames({
              "flex items-center rounded-t-2xl justify-start h-12 gap-[10px] font-semibold":
                true,
              "hidden lg:flex": true,
              // "group":true
            })}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <button
              name="close-button"
              aria-label="Close window"
              className={classNames({
                "w-[13px] h-[13px] rounded-full transition-colors": true,
                "bg-[#FF6057]": true,
                "flex items-center justify-center": true,
              })}
              onClick={handleClose}
            >
              {isHovered && (
                <span className="text-xs text-gray-800 relative top-[-1.5px]">
                  x
                </span>
              )}
            </button>
            <button
              name="minimize-button"
              aria-label="Minimize window"
              className={classNames({
                "w-[13px] h-[13px] rounded-full transition-colors": true,
                "bg-[#FEBC2D]": true,
              })}
              onClick={handleMinimize}
            >
              {isHovered && (
                <span className="text-xs text-gray-800 relative top-[-12px]">
                  _
                </span>
              )}
            </button>
            <button
              name="fullscreen-button"
              aria-label="Fullscreen window"
              className={classNames({
                "w-[13px] h-[13px] rounded-full transition-colors": true,
                "bg-[#2BC840]": true,
              })}
              onClick={handleFullscreen}
            >
              {isHovered && (
                <span className="text-[8px] text-gray-800 relative left-[3px]">
                  <LuMaximize2 />
                </span>
              )}
            </button>
          </div>
          <div className="text-[#7f7f7f] font-extrabold flex items-center justify-center gap-2 w-full">
            <button
              name="ghostty-button"
              aria-label="ghostty.org"
              className="hover:text-white transition-colors duration-300 hidden lg:inline"
              onClick={() => window.open("https://ghostty.org/", "_blank")}
            >
              Ghostty
            </button>
            <button
              name="beary-dev"
              aria-label="github.com/BearyDevs"
              className="transition-colors duration-300 text-center lg:hidden inline"
              onClick={() => window.open("https://github.com/BearyDevs", "_blank")}
            >
              BearyDevs
            </button>

            <button
              name="solarized-button"
              aria-label="solarized-osaka.nvim"
              className="hover:text-white transition-colors duration-300 hidden lg:block"
              onClick={() =>
                window.open(
                  "https://github.com/craftzdog/solarized-osaka.nvim",
                  "_blank",
                )
              }
            >
              <GitHubLogoIcon className="size-3" />
            </button>
          </div>
        </div>

        {pathname.startsWith("/about") && (
          <ScrollShadow
            orientation="horizontal"
            hideScrollBar
            className="custom900_min:hidden flex items-center justify-start text-sm w-full flex-grow py-2 overflow-x-auto animate-[fadeInUp_0.5s]"
          >
            {aboutNav.map((item, i) => {
              return (
                <button
                  key={i}
                  onClick={() => router.push(item.link)}
                  className={classNames({
                    "p-1 mx-1 flex items-center gap-1 relative bottom-[-3px] left-[-3px] italic px-2":
                      true,
                    "bg-[#103f3cb5] text-gray-300 font-bold transition-background duration-300 rounded-md":
                      pathname === item.link,
                  })}
                >
                  <FaReact className="text-[#008cd8]" /> {item.fileName}
                </button>
              );
            })}
          </ScrollShadow>
        )}

        {pathname.startsWith("/activity") && (
          <ScrollShadow
            orientation="horizontal"
            hideScrollBar
            className="custom900_min:pb-2 custom900:py-2 flex items-center justify-start text-sm w-full flex-grow overflow-x-auto animate-[fadeInUp_0.5s] px-1"
          >
            {codingActivityNav.map((item, i) => {
              return (
                <button
                  key={i}
                  onClick={() => router.push(item.link)}
                  className={classNames({
                    "p-1 mx-1 flex items-center gap-1 relative bottom-[-3px] left-[-3px] text-sm px-2":
                      true,
                    "bg-[#103f3cb5] text-gray-300 font-bold transition-background duration-300 rounded-md":
                      pathname === item.link,
                  })}
                >
                  <FaReact className="text-[#008cd8]" /> {item.fileName}
                </button>
              );
            })}
          </ScrollShadow>
        )}
      </div>

      {pathname.startsWith("/projects") && <Nav />}
    </>
  );
}
