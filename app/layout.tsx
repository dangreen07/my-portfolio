import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Daniel Green - Software Engineer & Physics Student",
  description:
    "Portfolio of Daniel Green - Software engineer and Physics BSc student. Building web applications with Next.js, TypeScript, React, and exploring Rust. View projects and technical writings.",
  openGraph: {
    title: "Daniel Green - Software Engineer & Physics Student",
    description:
      "Portfolio of Daniel Green - Software engineer and Physics BSc student. Building web applications with Next.js, TypeScript, React, and exploring Rust. View projects and technical writings.",
    siteName: "Daniel Green Portfolio",
    images: [
      {
        url: "/favicon.ico",
        width: 64,
        height: 64,
        alt: "Daniel Green Portfolio",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Daniel Green - Software Engineer & Physics Student",
    description:
      "Portfolio of Daniel Green - Software engineer and Physics BSc student. Building web applications with Next.js, TypeScript, React, and exploring Rust.",
    images: ["/favicon.ico"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0B0F14" },
    { media: "(prefers-color-scheme: dark)", color: "#0B0F14" },
  ],
};

const PoppinsFont = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" className="scroll-smooth">
      <body
        className={`${PoppinsFont.className} antialiased min-h-screen bg-[#0B0F14] text-[#E6E6E6]`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-3 focus:py-2 focus:rounded-md focus:bg-[#4F8FF7] focus:text-black"
        >
          Skip to content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
