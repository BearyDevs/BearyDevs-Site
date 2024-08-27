"use client";

import classNames from "classnames";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { DiVim, DiGitBranch } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { LuClock3 } from "react-icons/lu";
import { Link, ScrollShadow } from "@nextui-org/react";
import { main_nav_routes } from "@/app/navigation";
import { useStats } from "@/app/libs/useStats";
import { ENV } from "@/app/libs/constants";

export default function FooterContainer() {
  const pathname = usePathname();
  const router = useRouter();
  const [show, setShow] = useState(false);
  const { todayData, pageViews } = useStats();

  useEffect(() => {
    if (!show) {
      const interval = setInterval(() => {
        setShow(!show);
      }, 100);

      return () => {
        clearInterval(interval);
      };
    }

    return () => {};
  }, [show]);

  return (
    <div
      className={classNames({
        "bottom-0 absolute overflow-x-auto whitespace-nowrap w-full h-max text-sm":
          true,
        hidden: !show,
        "block animate-[fadeInUp_1s]": show,
      })}
    >
      {pathname === "/" && (
        <div
          className={classNames({
            "text-xs text-gray-500 pl-2 pb-1": true,
            hidden: !show,
            "block animate-[fadeInUp_1.5s]": show,
          })}
        >
          Designed by Bearydevs, inspired by{" "}
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
        className={classNames({
          "h-max mobilexll:px-2 w-full flex items-center justify-between pb-2 lg:pb-0 overflow-x-auto whitespace-nowrap gap-10 mobilexll:text-xs":
            true,
        })}
      >
        <div className="flex items-center font-bold">
          <div
            className={classNames({
              "flex items-center justify-center px-3 relative gap-2 py-[2px] text-gray-300":
                true,
            })}
          >
            <DiVim size={"16px"} /> NORMAL
          </div>

          <div
            className={classNames({
              "flex items-center text-gray-300 px-[10px] relative py-[2px]":
                true,
            })}
          >
            <DiGitBranch size={"16px"} /> main
          </div>
        </div>

        <div className="flex items-center font-bold">
          <div className="flex items-center gap-x-2 not-sr-only">
            {pageViews && (
              <div className="flex items-center justify-start gap-1">
                <p className="uppercase whitespace-nowrap">-- view --</p>
                <span>|</span>
                <Link
                  href={ENV.UMAMI_URL}
                  target="_blank"
                  className="whitespace-nowrap"
                >
                  {pageViews.value} Views today
                </Link>
              </div>
            )}
          </div>

          <div
            className={classNames({
              "flex items-center px-3 relative ml-[-1px] py-[2px] gap-1 text-gray-300":
                true,
            })}
          >
            <FaReact className="mr-2 text-black" size={"16px"} />
            {pathname.startsWith("/projects/") || pathname.startsWith("/blogs/")
              ? `${pathname.slice(1)}.mdx`
              : `app${
                  pathname === "/"
                    ? "/home"
                    : pathname.startsWith("/about/") || pathname === "/about"
                      ? pathname === "/about"
                        ? "/about/greeting.ts"
                        : `${pathname}.ts`
                      : pathname.startsWith("/coding-activity/") ||
                          pathname === "/coding-activity"
                        ? pathname === "/coding-activity"
                          ? "/coding-activity/languages.ts"
                          : `${pathname}.ts`
                        : `${pathname}.tsx`
                }`}
          </div>

          <div
            className={classNames({
              "flex items-center justify-center px-3 relative gap-2 py-[2px] text-gray-300":
                true,
            })}
          >
            <LuClock3 />{" "}
            {new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            }) ?? "00:00"}
          </div>
        </div>
      </ScrollShadow>

      <ScrollShadow
        // hideScrollBar
        orientation="horizontal"
        className={classNames({
          "h-max w-full flex items-center justify-between rounded-b-2xl overflow-x-auto whitespace-nowrap gap-4 mobilexll:text-xs":
            true,
        })}
      >
        <div className="flex items-center font-bold lg:pb-0 pb-2">
          <div
            className={classNames({
              "flex items-center justify-center px-3 relative gap-2 pl-4 py-[2px] lg:rounded-bl-2xl":
                true,
              "bg-teal-400": true,
            })}
          >
            <Link
              className="text-[#121212] text-sm mobilexll:text-xs"
              href="https://github.com/tmux/tmux"
              target="_blank"
            >
              TMUX
            </Link>
          </div>

          <div
            className={classNames({
              "flex items-center text-gray-300 px-3 relative ml-[-1px] py-[2px]":
                true,
            })}
          >
            <DiGitBranch size={"14px"} /> bearydevs
          </div>

          <div className="w-full px-2 flex items-center justify-start gap-1 text-xs h-full whitespace-nowrap">
            {main_nav_routes.map((route, index) => (
              <button
                key={index}
                name="navigation-button"
                onClick={() => router.push(`${route.url}`)}
                className={classNames({
                  "px-3 py-1 transition-colors duration-300 rounded-md flex items-center justify-center gap-2 uppercase text-gray-300":
                    true,
                  "bg-[#103f3cb5]": pathname.startsWith(route.url),
                  "hover:bg-[#103f3c4f]": route.url !== pathname,
                })}
              >
                {route.name}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center font-bold">
          {todayData && <pre>{JSON.stringify(todayData, null, 2)}</pre>}

          <div
            className={classNames({
              "flex items-center text-gray-300 px-3 relative ml-[-1px] py-[2px] gap-1":
                true,
            })}
          >
            {new Date()
              .toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                // year: "2-digit",
                year: "numeric",
              })
              .replace(/ /g, "-")}
          </div>

          <div
            className={classNames({
              "flex items-center justify-center px-3 relative gap-2 py-[2px] lg:rounded-br-2xl whitespace-nowrap":
                true,
              "bg-teal-400": true,
            })}
          >
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
