import { Onest } from "next/font/google";
import localFont from "next/font/local";

export const onest = Onest({
  subsets: ["latin"],
  variable: "--font-onest",
  display: "swap",
});

export const pally = localFont({
  src: "./Pally-Variable.woff2",
  variable: "--font-pally",
  display: "swap",
});
