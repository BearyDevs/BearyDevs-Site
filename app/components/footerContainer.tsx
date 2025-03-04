"use client";

import { usePathname, useRouter } from "next/navigation";
import { DiVim, DiGitBranch } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { LuClock3 } from "react-icons/lu";
import { Link, ScrollShadow } from "@nextui-org/react";
import { main_nav_routes } from "@/app/navigation";
import { cn } from "@/utils/cn";

// Generate file path based on pathname
const getFilePath = (pathname: string): string => {
  if (pathname.startsWith("/projects/") || pathname.startsWith("/articles/")) {
    return `${pathname.slice(1)}.mdx`;
  }
  
  const basePath = "app";
  
  if (pathname === "/") return `${basePath}/page.tsx`;
  
  if (pathname.startsWith("/about/") || pathname === "/about") {
    return pathname === "/about" 
      ? `${basePath}/about/greeting.ts` 
      : `${pathname}.ts`;
  }
  
  if (pathname.startsWith("/activity/") || pathname === "/activity") {
    return pathname === "/activity"
      ? `${basePath}/activity/languages.ts`
      : `${pathname}.ts`;
  }
  
  return `${basePath}${pathname}.tsx`;
};

// Navigation button component
const NavButton = ({ 
  route, 
  pathname, 
  onClick 
}: { 
  route: { name: string; url: string }; 
  pathname: string; 
  onClick: () => void;
}) => {
  // Special handling for home route
  const isActive = route.url === "/" 
    ? pathname === "/" 
    : pathname.startsWith(route.url);
    
  return (
    <button
      name="navigation-button"
      onClick={onClick}
      className={cn(
        "px-3 py-[5px] transition-colors duration-300 rounded-md flex items-center justify-center gap-2 uppercase text-gray-300",
        isActive 
          ? "bg-[#103f3cb5]" 
          : "hover:bg-[#103f3c4f]"
      )}
    >
      {route.name}
    </button>
  );
};

export default function FooterContainer() {
  const pathname = usePathname();
  const router = useRouter();

  // Format current time
  const currentTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  
  // Format current date
  const currentDate = new Date()
    .toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
    .replace(/ /g, "-");

  return (
    <div className="bottom-0 absolute overflow-x-scroll whitespace-nowrap w-full h-max text-sm">
      {pathname === "/" && (
        <div className="text-xs text-gray-500 pl-2 pb-1">
          Designed by{" "}
          <Link
            className="font-bold text-xs hover:text-white transition-colors duration-300 text-gray-500"
            href="https://github.com/BearyDevs"
            target="_blank"
            rel="noreferrer"
          >
            BearyDevs
          </Link>
          , inspired by{" "}
          <Link
            className="font-bold text-xs hover:text-white transition-colors duration-300 text-gray-500"
            href="https://github.com/wiscaksono"
            target="_blank"
            rel="noreferrer"
          >
            Wiscaksono
          </Link>
        </div>
      )}

      <ScrollShadow
        orientation="horizontal"
        hideScrollBar
        className="h-max mobilexll:px-2 w-full flex items-center justify-between lg:pb-0 overflow-x-scroll whitespace-nowrap gap-10 mobilexll:text-xs"
      >
        <div className="flex items-center font-bold">
          <div className="flex items-center justify-center px-3 relative gap-2 py-2 text-gray-300">
            <DiVim size={16} /> NORMAL
          </div>

          <div className="flex items-center text-gray-300 px-[10px] relative py-2">
            <DiGitBranch size={16} /> main
          </div>
        </div>

        <div className="flex items-center font-bold py-[6px]">
          <div className="flex items-center gap-x-2 not-sr-only">
            <Link
              href="https://cloud.umami.is/share/NcJoEW8LPSU5K0DW/bearydevs.com"
              target="_blank"
              className="whitespace-nowrap text-gray-300"
            >
              <p className="whitespace-nowrap text-xs text-teal-200">
                -- statistics --
              </p>
            </Link>
          </div>

          <div className="flex items-center px-3 relative ml-[-1px] py-[2px] gap-1 text-gray-300">
            <FaReact className="mr-2 text-black" size={16} />
            {getFilePath(pathname)}
          </div>

          <div className="flex items-center justify-center px-3 relative gap-2 py-[2px] text-gray-300">
            <LuClock3 /> {currentTime || "00:00"}
          </div>
        </div>
      </ScrollShadow>

      <ScrollShadow
        hideScrollBar
        orientation="horizontal"
        className="h-max w-full flex items-center justify-between rounded-b-2xl overflow-x-scroll whitespace-nowrap gap-4 mobilexll:text-xs"
      >
        <div className="flex items-center font-bold lg:pb-1 pb-3">
          <div className="flex items-center justify-center px-3 relative gap-2 pl-4 rounded-r-md py-[5px] lg:rounded-bl-2xl bg-teal-400">
            <Link
              className="text-[#121212] text-sm mobilexll:text-xs"
              href="https://github.com/tmux/tmux"
              target="_blank"
            >
              TMUX
            </Link>
          </div>

          <div className="w-full px-2 flex items-center justify-start gap-1 text-xs h-full whitespace-nowrap">
            {main_nav_routes.map((route, index) => (
              <NavButton
                key={index}
                route={route}
                pathname={pathname}
                onClick={() => router.push(route.url)}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center font-bold lg:pb-1 pb-3">
          <div className="flex items-center text-gray-300 px-3 relative ml-[-1px] py-[5px] gap-1">
            {currentDate}
          </div>

          <div className="flex items-center justify-center px-3 relative rounded-l-md gap-2 py-[5px] lg:rounded-br-2xl whitespace-nowrap bg-teal-400">
            <Link
              className="text-[#121212] text-sm mobilexll:text-xs"
              href="https://www.apple.com/th/newsroom/2021/10/introducing-m1-pro-and-m1-max-the-most-powerful-chips-apple-has-ever-built/"
              target="_blank"
            >
              BearyDevs-Macbook-Pro-M1Max.local
            </Link>
          </div>
        </div>
      </ScrollShadow>
    </div>
  );
}
