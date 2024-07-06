import type { Metadata } from "next";

import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import localFont from "next/font/local";

import "./globals.css";

// import { Favicon } from "./components/Favicon";

const neueHaasUnica = localFont({
  src: [
    {
      path: "./NeueHaasUnica-Medium.woff2",

      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-neueHaasUnica",
});

export const metadata: Metadata = {
  title: "Elena Catani",
  description: "Web Development & Graphic Design ",
  keywords: [
    "Elena Catani",
    "Frontend developer",
    "Web Developer",
    "Web Development",
    "Graphic Design",
  ],
  openGraph: {
    title: "Elena Catani",
    description: "Web Development & Graphic Design",
    url: "https://wwww.elenacatani.com",
  },
  twitter: {
    title: "Elena Catani",
    description: "Web Development & Graphic Design",
    card: "summary_large_image",
  },
  icons: {
    icon: [
      {
        url: "favicon-blue.svg",
        href: "favicon-blue.svg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "favicon-white.svg",
        href: "favicon-white.svg",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={neueHaasUnica.variable}>
        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
