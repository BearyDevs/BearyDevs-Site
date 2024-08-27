"use client";

import { PropsWithChildren } from "react";
import TopContainer from "./topContainer";
import classNames from "classnames";
import FooterContainer from "./footerContainer";
import { ScrollShadow } from "@nextui-org/react";
import { LennyFace } from "./lennyFace";

export default function MainContainer({ children }: PropsWithChildren) {
  return (
    <section
      className={classNames({
        "lg:mt-[100px] animate-[fadeInUp_1s]": true,
        "transition-all duration-500": true,
        "bottom-0 lg:opacity-85 opacity-100": true,
        "flex flex-col w-[100dvw] h-[100dvh] lg:min-w-[80%] lg:max-w-[80%] lg:min-h-[80%] lg:max-h-[80%] lg:rounded-2xl relative":
          true,
        "lg:shadow-[inset_0_0_10px_rgba(255,255,255,0.1),_30px_30px_60px_rgba(4,19,25,1),_0_2px_6px_rgba(255,255,255,0.05)]":
          true, // solaizeOsaka shadow
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
  );
}
