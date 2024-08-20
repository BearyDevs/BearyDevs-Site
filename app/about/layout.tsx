import { PropsWithChildren } from "react";
import Neotree from "./[slug]/_components/neotree";

export default function AboutLayout({ children }: PropsWithChildren) {
  return (
    <div className="w-full min-h-full flex items-start justify-between flex-grow">
      <Neotree />

      <div className="animate-[fadeIn_1s] flex-grow w-[83dvw] h-screen py-1 px-4 pl-6 overflow-auto no-scrollbar">
        {children}
      </div>
    </div>
  );
}
