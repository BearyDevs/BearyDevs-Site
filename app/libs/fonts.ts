import {
  Inter as FontSans,
  Noto_Sans_Thai as FontThai,
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontThai = FontThai({
  subsets: ["thai"],
  variable: "--font-thai",
});
