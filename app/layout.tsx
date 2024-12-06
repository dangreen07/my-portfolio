import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daniel Green's Portfolio",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        data-theme="mytheme"
        className={`${inter.className} antialiased bg-neutral text-primary`}
      >
        {children}
      </body>
    </html>
  );
}
