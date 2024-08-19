import { PropsWithChildren } from "react";
import TopContainer from "./topContainer";
import classNames from "classnames";
import FooterContainer from "./footerContainer";

export default function MainContainer({ children }: PropsWithChildren) {
  return (
    <section
      className={classNames({
        "animate-[fadeInUp_0.7s] mt-[55px] overflow-auto": true,
        "opacity-85": true,
        "flex flex-col min-w-[80%] max-w-[80%] min-h-[85%] max-h-[85%] mobilexll:min-w-[90%] mobilexll:max-w-[90%] bg-gradient-to-br from-[#0d0d0d] via-[#1a1a1a] to-[#262626] rounded-2xl relative":
          true,
        "shadow-[inset_0_0_10px_rgba(255,255,255,0.1),_30px_30px_60px_rgba(4,19,25,1),_0_2px_6px_rgba(255,255,255,0.05)]":
          true, //solaizeOsaka shadow
        // "shadow-[inset_0_0_10px_rgba(255,255,255,0.1),_30px_30px_60px_rgba(80,80,80,0.4),_0_2px_6px_rgba(255,255,255,0.05)]":true //White shadow
      })}
      style={{
        // backgroundImage: `linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 50%, #262626 100%)`, // gray
        backgroundImage: `linear-gradient(135deg, #041319 0%, #041319 50%, #041319 100%)`, // solaizeOsaka
      }}
    >
      <TopContainer />
      <div className="flex-grow flex items-center justify-center mb-14 p-6">
        {children}
      </div>
      <FooterContainer />
    </section>
  );
}
