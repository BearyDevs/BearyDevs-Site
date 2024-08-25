"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import classNames from "classnames";
import { FaFacebook, FaLinkedin, FaReact } from "react-icons/fa";
import { MdOutlineContactPhone } from "react-icons/md";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { LuMaximize2 } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/libs/redux/store";
import { setMinimized } from "@/app/libs/redux/slices/minimized";
import { ENV } from "@/app/libs/constants";
import { aboutNav } from "@/app/navigation";
import { Nav } from "../projects/_components/nav";

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
        <div className="top-0 h-max w-full flex items-center justify-between px-8 mobilexll:px-4 overflow-x-auto">
          <div
            className={classNames({
              "flex items-center rounded-t-2xl justify-start h-12 gap-[10px] font-semibold":
                true,
              // "group":true
            })}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <button
              name="close-button"
              className={classNames({
                "w-[13px] h-[13px] rounded-full transition-colors": true,
                // "bg-[#898989]": !isHovered,
                // "group-hover:bg-[#FF6057]": isHovered,
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
              className={classNames({
                "w-[13px] h-[13px] rounded-full transition-colors": true,
                // "bg-[#898989]": !isHovered,
                // "group-hover:bg-[#FEBC2D]": isHovered,
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
              className={classNames({
                "w-[13px] h-[13px] rounded-full transition-colors": true,
                // "bg-[#898989]": !isHovered,
                // "group-hover:bg-[#2BC840]": isHovered,
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
          <div className="text-[#7f7f7f] font-extrabold flex items-center justify-center gap-2">
            <button
              name="iterm-button"
              className="hover:text-white transition-colors duration-300"
              onClick={() => window.open("https://iterm2.com", "_blank")}
            >
              iTerm{" "}
            </button>
            <button
              name="solarized-button"
              className="hover:text-white transition-colors duration-300"
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

          <div className="text-[#7f7f7f] font-semibold px-1 py-0.5 flex items-center justify-center gap-3">
            <button
              name="facebook-button"
              className="rounded-full"
              onClick={() =>
                window.open("https://www.facebook.com/bearyman", "_blank")
              }
            >
              <FaFacebook
                className="hover:text-white transition-colors duration-300"
                size={"16px"}
              />
            </button>

            <button
              name="github-button"
              className="rounded-full"
              onClick={() => window.open(ENV.GITHUB_URL, "_blank")}
            >
              <GitHubLogoIcon className="hover:text-white transition-colors duration-300" />
            </button>

            <button
              name="facebook-page-button"
              className="rounded-full flex items-center justify-center gap-3"
              onClick={() =>
                window.open(
                  "https://www.facebook.com/profile.php?id=61554981140896",
                  "_blank",
                )
              }
            >
              <MdOutlineContactPhone
                className="hover:text-white transition-colors duration-300"
                size={"16px"}
              />
            </button>

            <button
              name="linkedin-button"
              className="rounded-full"
              onClick={() => window.open(ENV.LINKEDIN_URL, "_blank")}
            >
              <FaLinkedin className="hover:text-white transition-colors duration-300" />
            </button>
          </div>
        </div>

        {pathname.startsWith("/about") && (
          <div className="custom900_min:hidden flex items-center justify-start text-sm w-full flex-grow py-2 overflow-x-auto animate-[fadeInUp_1s]">
            {aboutNav.map((item, i) => {
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
      </div>

      {pathname.startsWith("/projects") && <Nav />}
    </>
  );
}
