import "./globals.css";
import Link from "next/link";
import React from "react";
import Footer from "./components/footer";

export const metadata = {
  title: "Daniel Green — AI Solutions for Business",
  description:
    "I build custom AI assistants and automations that save time, improve response times, and reduce manual work for businesses.",
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
                href="https://portal.mrgreeny.dev"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Client Portal
              </Link>

              <Link
                href="/contact"
                className="ml-3 px-3 py-1 rounded-md bg-slate-900 text-white text-sm"
              >
                Contact
              </Link>
            </nav>
          </div>
        </header>

        <main className="max-w-5xl mx-auto px-6 min-h-screen">{children}</main>
        <script
          src="https://api.portal.mrgreeny.dev/api/apps/site-assistant/widget.js?clientId=71491920-aaf2-4a25-87b7-2c892de20907&appId=c8b69b8d-faf8-4662-aa42-7bd8ea08a1cc&api=https://api.portal.mrgreeny.dev&frontend=https%3A%2F%2Fportal.mrgreeny.dev"
          async
        ></script>
        <Footer />
      </body>
    </html>
  );
}