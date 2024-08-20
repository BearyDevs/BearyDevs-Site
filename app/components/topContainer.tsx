"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import classNames from "classnames";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { MdOutlineContactPhone } from "react-icons/md";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { LuMaximize2 } from "react-icons/lu";

export const nav_routes = [
  {
    url: "/",
    name: "home",
    lastmod: new Date().toISOString(),
  },
  {
    url: "/about",
    name: "about",
    lastmod: new Date().toISOString(),
  },
];

export default function TopContainer() {
  const router = useRouter();
  const pathname = usePathname();
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
    if (window.confirm("Are you sure you want to minimize this window?")) {
      window.close();
    } else {
      router.push(`${pathname}`);
    }
  };

  return (
    <div className="w-full h-max rounded-t-2xl bg-transparent flex items-start justify-center flex-col ">
      <div className="top-0 h-max w-full flex items-center justify-between px-8 mobilexll:px-4">
        <div
          className="flex items-center rounded-t-2xl justify-start h-12 gap-[10px] group font-semibold"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <button
            className={classNames({
              "w-[13px] h-[13px] rounded-full transition-colors": true,
              "bg-[#898989]": !isHovered,
              "group-hover:bg-[#FF6057]": isHovered,
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
            className={classNames({
              "w-[13px] h-[13px] rounded-full transition-colors": true,
              "bg-[#898989]": !isHovered,
              "group-hover:bg-[#FEBC2D]": isHovered,
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
            className={classNames({
              "w-[13px] h-[13px] rounded-full transition-colors": true,
              "bg-[#898989]": !isHovered,
              "group-hover:bg-[#2BC840]": isHovered,
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
            className="hover:text-white transition-colors duration-300"
            onClick={() => window.open("https://iterm2.com", "_blank")}
          >
            iTerm{" "}
          </button>
          <button
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
            className="rounded-full"
            onClick={() =>
              window.open(process.env.NEXT_PUBLIC_GITHUB_URL, "_blank")
            }
          >
            <GitHubLogoIcon className="hover:text-white transition-colors duration-300" />
          </button>

          <button
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
            className="rounded-full"
            onClick={() =>
              window.open(process.env.NEXT_PUBLIC_LINKEDIN_URL, "_blank")
            }
          >
            <FaLinkedin className="hover:text-white transition-colors duration-300" />
          </button>
        </div>
      </div>
      <div className="w-full px-2 flex items-center justify-start gap-1 text-sm">
        {nav_routes.map((route, index) => (
          <button
            key={index}
            onClick={() => router.push(`${route.url}`)}
            className={classNames({
              "px-3 py-1 transition-colors duration-300 rounded-md flex items-center justify-center gap-2":
                true,
              "bg-[#103f3cb5]": route.url === pathname,
              "hover:bg-[#103f3c4f]": route.url !== pathname,
            })}
          >
            {route.name}
          </button>
        ))}
      </div>
    </div>
  );
}
