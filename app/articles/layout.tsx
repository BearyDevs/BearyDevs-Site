import { PropsWithChildren } from "react";

export default function ArticlesLayout({ children }: PropsWithChildren) {
  return (
    <div className="w-full h-full flex items-start justify-center">
      <div className="animate-[fadeIn_1s] w-[100dvw] sm:w-[85dvw] h-auto max-h-max py-1 lg:pb-6 px-2 sm:px-4 pl-6 custom900:pl-0">
        {children}
      </div>
    </div>
  );
}
