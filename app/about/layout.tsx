import { PropsWithChildren } from "react";
import Neotree from "@/app/components/neotree";
import { aboutNav } from "@/app/navigation";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  return {
    title: "Greeting",
  };
}

export default function AboutLayout({ children }: PropsWithChildren) {
  return (
    <div className="w-full min-h-full flex items-start justify-between flex-grow">
      <Neotree startPath="about" items={aboutNav} />

      <div className="animate-[fadeIn_1s] flex-grow w-[85dvw] h-auto max-h-screen py-1 px-4 pl-6 overflow-auto custom900:pl-0">
        {children}
      </div>
    </div>
  );
}
