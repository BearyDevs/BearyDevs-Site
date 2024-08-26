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
    <div className="w-full h-full flex items-start justify-center overflow-hidden">
      <Neotree startPath="about" items={aboutNav} />

      <div className="animate-[fadeIn_1s] flex-grow w-[85%] max-w-screen h-auto overflow-auto py-1 px-4 pl-6 custom900:pl-0">
        {children}
      </div>
    </div>
  );
}
