import { PropsWithChildren } from "react";
import AboutNeotree from "./[slug]/_components/neotree-about";

export const dynamic = "force-dynamic";

export default function AboutLayout({ children }: PropsWithChildren) {
  return (
    <div className="w-full min-h-full flex items-start justify-between flex-grow">
      <AboutNeotree />

      <div className="animate-[fadeIn_1s] flex-grow w-[85dvw] h-auto max-h-screen py-1 px-4 pl-6 overflow-auto no-scrollbar custom900:pl-0">
        {children}
      </div>
    </div>
  );
}
