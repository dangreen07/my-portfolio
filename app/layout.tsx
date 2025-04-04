import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";
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

        <footer className="border-t border-gray-800/30 pt-16 pb-10 bg-gray-950 mt-auto">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
              {/* About Column */}
              <div className="md:col-span-2 space-y-4">
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Daniel Green</h3>
                <p className="text-gray-400 max-w-md">
                  Building exceptional digital experiences with modern technologies and a focus on performance, accessibility, and user experience.
                </p>
              </div>
              
              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-5">Quick Links</h3>
                <ul className="space-y-3">
                  <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                  <li><Link href="/projects" className="text-gray-400 hover:text-white transition-colors">Projects</Link></li>
                  <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
                  <li><Link href="/products" className="text-gray-400 hover:text-white transition-colors">Products</Link></li>
                </ul>
              </div>
            </div>
            
            {/* Bottom Bar */}
            <div className="pt-8 border-t border-gray-800/30 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} Daniel Green. All rights reserved.
              </p>
              <div className="mt-4 md:mt-0">
                <ul className="flex space-x-6 text-sm">
                  <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Terms of Service</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </body>
      <Analytics />
    </html>
  );
}
