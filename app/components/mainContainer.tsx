"use client";

import { PropsWithChildren } from "react";
import TopContainer from "@/app/components/topContainer";
import FooterContainer from "@/app/components/footerContainer";
import { Button, ScrollShadow } from "@nextui-org/react";
import { LennyFace } from "@/app/components/lennyFace";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, ReduxState } from "@/app/libs/redux/store";
import { setMinimized } from "@/app/libs/redux/slices/minimized";
import StarFall from "@/app/components/starfall";
import { ascii } from "@/app/libs/logo";
import { cn } from "@/utils/cn";

export default function MainContainer({ children }: PropsWithChildren) {
  const dispatch = useDispatch<AppDispatch>();
  const minimized = useSelector((state: ReduxState) => state.minimized);

  const animationStyle = { animationFillMode: "both" };
  
  return (
    <>
      <pre
        className={cn(
          "text-[2dvw] leading-[0.9] tracking-[-0.1em] lg:text-[1.4dvh] text-teal-200 drop-shadow-glow",
          "absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-[40%]",
          minimized ? "animate-[fadeIn_0.5s]" : "animate-[fadeOut_0.5s]"
        )}
        style={animationStyle}
      >
        {ascii}
      </pre>

      <Button
        size="sm"
        variant="light"
        color="secondary"
        className={cn(
          "absolute bottom-[5%] left-1/2 -translate-x-1/2 -translate-y-[-5%] hover:drop-shadow-glow z-20 uppercase",
          minimized ? "animate-[fadeIn_0.5s]" : "animate-[fadeOut_0.5s]"
        )}
        style={{ cursor: "pointer", ...animationStyle }}
        onClick={() => dispatch(setMinimized(false))}
      >
        restore
      </Button>

      <StarFall />

      <section
        className={cn(
          "lg:mt-[50px] animate-[fadeInUp_0.5s] transition-all duration-700",
          "flex flex-col w-[100dvw] h-[100dvh] lg:min-w-[80%] lg:max-w-[80%] lg:min-h-[90%] lg:max-h-[85%] lg:rounded-2xl relative",
          minimized ? "bottom-[-95%] opacity-0" : "bottom-0 lg:opacity-85 opacity-100",
          "lg:shadow-[inset_0_0_10px_rgba(255,255,255,0.3),_30px_30px_60px_rgba(4,19,25,1),_0_2px_6px_rgba(255,255,255,0.05)]",
          "bg-gradient-to-br from-[#041319] via-[#041319] to-[#041319]"
        )}
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
