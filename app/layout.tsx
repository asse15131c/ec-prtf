import type { Metadata } from "next";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import localFont from "next/font/local";

import "./globals.css";

import { Favicon } from "./components/Favicon";

const textGyreHero = localFont({
  src: [
    {
      path: "../public/fonts/NeueHaasUnica-Medium.woff",
      // path: "../public/fonts/TeXGyreHerosCondensed-Regular.woff",

      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-textGyreHero",
});

export const metadata: Metadata = {
  title: "Elena Catani",
  description: "Frontend developer based in Milan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <Favicon /> */}
      {/* <link rel="icon" href="/favicon.ico" sizes="any" /> */}
      <link rel="icon" type="image/svg+xml" href="/images/favicon.svg" />
      <link rel="icon" type="image/png" href="/images/favicon.png"></link>
      <body className={textGyreHero.variable}>
        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
