import type { Metadata } from "next";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import localFont from "next/font/local";
import Head from "next/head";

import "./globals.css";
import { Favicon } from "./components/Favicon";

const neueHaasUnica = localFont({
  src: [
    {
      path: "../public/fonts/NeueHaasUnica-Medium.woff",

      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-neueHaasUnica",
});

export const metadata: Metadata = {
  title: "Elena Catani",
  description: "Frontend developer based in Milan",
  referrer: "origin-when-cross-origin",
  keywords: ["Elena Catani", "Frontend developer"],
  twitter: {
    title: "Elena Catani",
    description: "Frontend developer",
    images: "http://elenacatani.com/api/og",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Favicon />
        <meta name="og:title" content="Elena Catani" />
        <meta name="og:description" content="Frontend developer" />
        <meta property="og:image" content="http://elenacatani.com/api/og" />
        <meta name="og:url" content="https://elenacatani.com" />
      </head>

      <body className={neueHaasUnica.variable}>
        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
