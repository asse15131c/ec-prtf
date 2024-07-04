import type { Metadata } from "next";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import localFont from "next/font/local";
import Head from "next/head";

import "./globals.css";

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
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff"></meta>
        <meta property="og:image" content="http://elenacatani.com/api/og" />
        {/* <meta property="og:image" content="http://localhost:3000/api/og" /> */}
      </Head>

      <body className={neueHaasUnica.variable}>
        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
