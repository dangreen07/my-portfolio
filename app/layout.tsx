import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "Daniel Green's Portfolio",
  description: "Software engineer showcasing projects and products",
};

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body className={`${poppins.className} antialiased flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-neutral-900 to-gray-900 text-gray-100`}>
        <main className="flex-grow">
          {children}
        </main>
      </body>
      <Analytics />
    </html>
  );
}
