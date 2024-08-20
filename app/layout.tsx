import type { Metadata } from "next";
import "./globals.css";
import clsx from "clsx";
import { fontSans, fontThai } from "./utils/fonts";
import MainContainer from "./components/mainContainer";
import { LennyFace } from "./components/lennyFace";
import "animate.css";
import Providers from "./provider";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || ""),
  title: {
    default: "BearyDevs",
    template: "%s | BearyDevs",
  },
  description:
    "Get to know me!, Teerapat Wassavanich (BearyDevs), through this website! I'm a full-stack developer and founder-ceo of TOYLAB Co.,Ltd. I've poured all my skills and creativity into my work and passion for programming. If you're seeking a developer who works hard and is dedicated to your next project or simply looking for inspiration, feel free to get in touch!",
  openGraph: {
    title: "BearyDevs",
    description:
      "Get to know me!, Teerapat Wassavanich (BearyDevs), through this website! I'm a full-stack developer and founder-ceo of TOYLAB Co.,Ltd. I've poured all my skills and creativity into my work and passion for programming. If you're seeking a developer who works hard and is dedicated to your next project or simply looking for inspiration, feel free to get in touch!",
    url: process.env.NEXT_PUBLIC_APP_URL,
    siteName: "BearyDevs",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Wiscaksono",
    card: "summary_large_image",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
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
