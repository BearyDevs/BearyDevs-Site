import type { Metadata } from "next";
import "./globals.css";
import clsx from "clsx";
import { fontSans, fontThai } from "./utils/fonts";
import MainContainer from "./components/mainContainer";
import { LennyFace } from "./components/lennyFace";
import "animate.css";
import { NextUIProvider } from "@nextui-org/react";
import Providers from "./provider";

export const metadata: Metadata = {
  title: "BearyDevs-Site",
  description: "BearyDevs-Site (Teerapat Wassavanich)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={clsx(
          "font-sans antialiased",
          fontSans.variable,
          fontThai.variable,
        )}
      >
        <Providers>
          {/* <div className="grid-pattern absolute left-0 top-0 h-full w-full opacity-25" /> */}

          <main className="w-[100dvw] h-[100dvh] transition-all duration-300 flex items-start justify-center">
            <video
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-screen min-h-screen opacity-15 object-cover"
              autoPlay={true}
              muted
              loop
            >
              <source src="/videos/vbg.mp4" type="video/mp4" />
            </video>
            <MainContainer>
              <LennyFace />
              {children}
            </MainContainer>

            <footer className="absolute bottom-5 md:text-gray-600 md:hover:text-gray-300 text-gray-400 transition-colors duration-300 cursor-default pb-2 text-xs text-center">
              Teerapat Wassavanich (+6683-8982566) teerapat.tech@gmail.com
              Thailand (TOYLAB Corp.)
            </footer>
          </main>
        </Providers>
      </body>
    </html>
  );
}
