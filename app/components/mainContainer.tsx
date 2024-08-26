"use client";

import { PropsWithChildren } from "react";
import TopContainer from "./topContainer";
import classNames from "classnames";
import FooterContainer from "./footerContainer";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, ReduxState } from "../libs/redux/store";
import { ascii } from "./welcome";
import StarFall from "./starfall";
import { Button, ScrollShadow } from "@nextui-org/react";
import { setMinimized } from "../libs/redux/slices/minimized";
import { LennyFace } from "./lennyFace";

export default function MainContainer({ children }: PropsWithChildren) {
  const dispatch = useDispatch<AppDispatch>();
  const minimized = useSelector((state: ReduxState) => state.minimized);

  return (
    <>
      <pre
        className={classNames({
          "text-[2dvw] leading-[0.9] tracking-[-0.1em] lg:text-[1.4dvh] text-teal-200 drop-shadow-glow":
            true,
          "absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-[40%]":
            true,
          "animate-[fadeOut_1s]": !minimized,
          "animate-[fadeIn_5s]": minimized,
        })}
        style={{ animationFillMode: "both" }}
      >
        {ascii}
      </pre>

      <Button
        size="sm"
        variant="light"
        color="secondary"
        className={classNames({
          "absolute bottom-[5%] left-1/2 -translate-x-1/2 -translate-y-[-5%] hover:drop-shadow-glow z-20":
            true,
          "animate-[fadeOut_1s]": !minimized,
          "animate-[fadeIn_1s]": minimized,
        })}
        style={{ cursor: "pointer", animationFillMode: "both" }}
        onClick={() => dispatch(setMinimized(false))}
      >
        {"restore".toUpperCase()}
      </Button>

      {minimized && <StarFall />}

      <section
        className={classNames({
          "animate-[fadeInUp_0.7s] lg:mt-[100px]": true,
          "transition-all duration-500": true,
          "relative bottom-[-95%] opacity-0": minimized,
          "relative bottom-0 opacity-85": !minimized,
          "flex flex-col w-[100dvw] h-[100dvh] lg:min-w-[80%] lg:max-w-[80%] lg:min-h-[80%] lg:max-h-[80%] lg:rounded-2xl relative":
            true,
          "lg:shadow-[inset_0_0_10px_rgba(255,255,255,0.1),_30px_30px_60px_rgba(4,19,25,1),_0_2px_6px_rgba(255,255,255,0.05)]":
            true, // solaizeOsaka shadow
          "bg-gradient-to-br from-[#041319] via-[#041319] to-[#041319]": true, // solaizeOsaka
        })}
      >
        <TopContainer />
        <ScrollShadow className="flex w-full h-full items-center justify-center mt-4 lg:px-2 lg:py-1 mb-6 relative top-[-20px] p-4">
          {children}
        </ScrollShadow>
        <div className="hidden lg:block">
          <LennyFace />
        </div>
        <FooterContainer />
      </section>
    </>
  );
}
