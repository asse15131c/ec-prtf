import type { Metadata } from "next";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import localFont from "next/font/local";

import "./globals.css";
import { Head } from "./components/Head";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head />

      <body className={neueHaasUnica.variable}>
        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
