import "./globals.css";
import Link from "next/link";
import React from "react";
import Footer from "./components/footer";

export const metadata = {
  title: "Daniel Green's Portfolio",
  description:
    "A personal collection of projects and short writing by Daniel Green.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/avatar.png" sizes="any" />
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <header className="sticky top-0 z-20 bg-white/60 backdrop-blur-sm border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="font-semibold text-lg">
              Daniel Green
            </Link>

            <nav aria-label="Primary" className="flex items-center gap-4 text-sm">
              <Link href="/projects" className="hover:underline">
                Projects
              </Link>
              <Link href="/blog" className="hover:underline">
                Blog
              </Link>
              <Link href="/about" className="hover:underline">
                About
              </Link>

              <Link
                href="https://github.com/dangreen07"
                target="_blank"
                rel="noreferrer"
                className="ml-3 px-3 py-1 rounded-md bg-slate-900 text-white text-sm"
              >
                GitHub
              </Link>
            </nav>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-6 min-h-screen">{children}</main>

        <Footer />
      </body>
    </html>
  );
}