"use client";

import { PropsWithChildren } from "react";
import TopContainer from "./topContainer";
import classNames from "classnames";
import FooterContainer from "./footerContainer";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, ReduxState } from "../utils/redux/store";
import { ascii } from "./welcome";
import StarFall from "./starfall";
import { Button } from "@nextui-org/react";
import { setMinimized } from "../utils/redux/slices/minimized";

export default function MainContainer({ children }: PropsWithChildren) {
  const dispatch = useDispatch<AppDispatch>();
  const minimized = useSelector((state: ReduxState) => state.minimized);

  return (
    <>
      <>
        <pre
          className={classNames({
            "text-[2dvw] leading-[0.9] tracking-[-0.1em] lg:text-[1.4dvh] text-teal-200 drop-shadow-glow":
              true,
            "absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-[40%]":
              true,
            "animate-[fadeOut_1s]": !minimized,
            "animate-[fadeIn_1s]": minimized,
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
      </>

      {minimized && <StarFall />}

      <section
        className={classNames({
          "animate-[fadeInUp_0.7s] mt-[40px] md:mt-[55px]": true,
          "transition-all duration-500": true,
          "relative bottom-[-95%] opacity-0": minimized,
          "relative bottom-0 opacity-85": !minimized,
          "flex flex-col min-w-[80%] max-w-[80%] min-h-[85%] max-h-[85%] mobilexll:min-w-[90%] mobilexll:max-w-[90%] bg-gradient-to-br from-[#0d0d0d] via-[#1a1a1a] to-[#262626] rounded-2xl relative":
            true,
          "shadow-[inset_0_0_10px_rgba(255,255,255,0.1),_30px_30px_60px_rgba(4,19,25,1),_0_2px_6px_rgba(255,255,255,0.05)]":
            true, // solaizeOsaka shadow
        })}
        style={{
          backgroundImage: `linear-gradient(135deg, #041319 0%, #041319 50%, #041319 100%)`, // solaizeOsaka
        }}
      >
        <TopContainer />
        <div className="w-full h-full flex-grow flex items-start justify-center mt-4 mb-[70px] p-6 overflow-y-auto no-scrollbar">
          {children}
        </div>
        <FooterContainer />
      </section>
    </>
  );
}
