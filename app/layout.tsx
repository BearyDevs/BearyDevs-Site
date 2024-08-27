import type { Metadata } from "next";
import "./globals.css";
import clsx from "clsx";
import { fontSans, fontThai } from "./libs/fonts";
import MainContainer from "./components/mainContainer";
import "animate.css";
import Providers from "./provider";
import VideoBG from "./videoBG";
import { ENV } from "./libs/constants";
import Head from "next/head";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  metadataBase: new URL(ENV.APP_URL),
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
    url: ENV.APP_URL,
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
    title: "BearyDevs",
    card: "summary_large_image",
  },
  verification: {
    google: ENV.GOOGLE_SITE_VERIFICATION,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <Head>
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="9cda3559-4a4c-4ace-9282-875889cf02df"
        ></script>
      </Head>
      <body
        className={clsx(
          "font-sans antialiased",
          fontSans.variable,
          fontThai.variable,
        )}
      >
        <Providers>
          <main className="w-[100dvw] h-[100dvh] transition-all duration-300 flex items-start justify-center">
            <VideoBG />
            <MainContainer>{children}</MainContainer>
          </main>
        </Providers>
      </body>
    </html>
  );
}
