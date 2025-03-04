"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState, useCallback, memo } from "react";
import { FaReact } from "react-icons/fa";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { LuMaximize2 } from "react-icons/lu";
import { aboutNav, codingActivityNav } from "@/app/navigation";
import { Nav } from "@/app/projects/_components/nav";
import { ScrollShadow } from "@nextui-org/react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/libs/redux/store";
import { setMinimized } from "@/app/libs/redux/slices/minimized";
import { cn } from "@/utils/cn";

interface NavItemProps {
  item: { link: string; fileName: string };
  pathname: string;
  onClick: () => void;
}

const NavItem = memo(({ item, pathname, onClick }: NavItemProps) => (
  <button
    onClick={onClick}
    className={cn(
      "p-1 mx-1 flex items-center gap-1 relative bottom-[-3px] left-[-3px] px-2",
      pathname === item.link && "bg-[#103f3cb5] text-gray-300 font-bold transition-background duration-300 rounded-md",
      pathname.startsWith("/about") && "italic"
    )}
  >
    <FaReact className="text-[#008cd8]" /> {item.fileName}
  </button>
));

NavItem.displayName = "NavItem";

// Window control button component
interface ControlButtonProps {
  name: string;
  ariaLabel: string;
  color: string;
  icon?: React.ReactNode;
  onClick: () => void;
  isHovered: boolean;
}

const ControlButton = ({ name, ariaLabel, color, icon, onClick, isHovered }: ControlButtonProps) => (
  <button
    name={name}
    aria-label={ariaLabel}
    className={cn(
      "w-[13px] h-[13px] rounded-full transition-colors",
      color,
      name === "close-button" && "flex items-center justify-center"
    )}
    onClick={onClick}
  >
    {isHovered && icon}
  </button>
);

export default function TopContainer() {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch<AppDispatch>();
  const [isHovered, setIsHovered] = useState(false);

  const handleClose = useCallback(() => {
    if (window.confirm("Are you sure you want to close this window?")) {
      window.close();
    }
  }, []);

  const handleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(r => console.log(r));
    } else if (document.exitFullscreen) {
      document.exitFullscreen().then(r => console.log(r));
    }
  }, []);

  const handleMinimize = useCallback(() => {
    dispatch(setMinimized(true));
  }, [dispatch]);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  const navigateTo = useCallback((url: string) => () => router.push(url), [router]);

  return (
    <>
      <div className="w-full h-max rounded-t-2xl bg-transparent flex items-start justify-center flex-col z-20">
        <div className="top-0 h-max w-full flex items-center justify-between px-8 mobilexll:px-4 overflow-x-auto tabletmd:pt-2">
          <div
            className="hidden lg:flex items-center rounded-t-2xl justify-start h-12 gap-[10px] font-semibold"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <ControlButton
              name="close-button"
              ariaLabel="Close window"
              color="bg-[#FF6057]"
              onClick={handleClose}
              isHovered={isHovered}
              icon={<span className="text-xs text-gray-800 relative top-[-1.5px]">x</span>}
            />
            
            <ControlButton
              name="minimize-button"
              ariaLabel="Minimize window"
              color="bg-[#FEBC2D]"
              onClick={handleMinimize}
              isHovered={isHovered}
              icon={<span className="text-xs text-gray-800 relative top-[-12px]">_</span>}
            />
            
            <ControlButton
              name="fullscreen-button"
              ariaLabel="Fullscreen window"
              color="bg-[#2BC840]"
              onClick={handleFullscreen}
              isHovered={isHovered}
              icon={<span className="text-[8px] text-gray-800 relative left-[3px]"><LuMaximize2 /></span>}
            />
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
              onClick={() => window.open("https://github.com/craftzdog/solarized-osaka.nvim", "_blank")}
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
            {aboutNav.map((item, i) => (
              <NavItem 
                key={i} 
                item={item} 
                pathname={pathname} 
                onClick={navigateTo(item.link)} 
              />
            ))}
          </ScrollShadow>
        )}

        {pathname.startsWith("/activity") && (
          <ScrollShadow
            orientation="horizontal"
            hideScrollBar
            className="custom900_min:pb-2 custom900:py-2 flex items-center justify-start text-sm w-full flex-grow overflow-x-auto animate-[fadeInUp_0.5s] px-1"
          >
            {codingActivityNav.map((item, i) => (
              <NavItem 
                key={i} 
                item={item} 
                pathname={pathname} 
                onClick={navigateTo(item.link)} 
              />
            ))}
          </ScrollShadow>
        )}
      </div>

      {pathname.startsWith("/projects") && <Nav />}
    </>
  );
}
