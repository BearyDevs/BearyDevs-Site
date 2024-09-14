"use client";

import { PropsWithChildren } from "react";
import TopContainer from "@/app/components/topContainer";
import classNames from "classnames";
import FooterContainer from "@/app/components/footerContainer";
import { Button, ScrollShadow } from "@nextui-org/react";
import { LennyFace } from "@/app/components/lennyFace";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, ReduxState } from "@/app/libs/redux/store";
import { setMinimized } from "@/app/libs/redux/slices/minimized";
import StarFall from "@/app/components/starfall";
import { ascii } from "@/app/libs/logo";

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
          "animate-[fadeOut_0.5s]": !minimized,
          "animate-[fadeIn_2s]": minimized,
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
          "lg:mt-[100px] animate-[fadeInUp_1s]": true,
          "transition-all duration-700": true,
          "flex flex-col w-[100dvw] h-[100dvh] lg:min-w-[80%] lg:max-w-[80%] lg:min-h-[85%] lg:max-h-[85%] lg:rounded-2xl relative":
            true,
          "bottom-[-95%] opacity-0": minimized,
          "bottom-0 lg:opacity-85 opacity-100": !minimized,
          "lg:shadow-[inset_0_0_5px_rgba(255,255,255,0.05),_15px_15px_30px_rgba(4,19,25,0.8),_0_1px_3px_rgba(255,255,255,0.03)]":
            true, // SolaizeOsaka shadow
          "bg-gradient-to-br from-[#041319] via-[#041319] to-[#041319]": true, // solaizeOsaka
        })}
      >
        <TopContainer />
        <ScrollShadow className="flex w-full h-full items-center justify-center mt-4 lg:px-2 lg:py-1 tabletmd::mb-[50px] mb-[40px] relative top-[-20px] p-4">
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
