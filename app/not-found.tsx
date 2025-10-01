"use client";

import NavBar from "@/components/NavBar";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <NavBar />
      <main className="flex items-center justify-center flex-col py-28 px-6">
        <h1 className="text-5xl font-bold mb-4">404 — Page not found</h1>
        <p className="text-lg text-gray-300 mb-8 max-w-xl text-center">
          The page you are looking for does not exist. You can return to the
          homepage or view my projects.
        </p>
        <div className="flex gap-4">
          <Link
            href="/"
            className="px-5 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white"
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="px-5 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg text-white"
          >
            Projects
          </Link>
        </div>
      </main>
    </div>
  );
}
