"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const posts = [
    {
        title: "Setting up PostgreSQL & Clerk with Fastify",
        date: "March 22, 2025",
        href: "/blog/setting-up-postgresql-and-clerk-with-fastify",
    },
    // Add more posts here as you publish them
];

export default function BlogPage() {
    const [q, setQ] = useState("");

    const filtered = useMemo(() => {
        const term = q.trim().toLowerCase();
        if (!term) return posts;
        return posts.filter((p) => p.title.toLowerCase().includes(term));
    }, [q]);

    return (
        <div className="py-12">
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-extrabold">Blog</h1>
                    <p className="mt-1 text-sm text-slate-600">
                        Short essays, technical write-ups, and notes from building things.
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <label htmlFor="blog-search" className="sr-only">
                        Search blog posts
                    </label>
                    <input
                        id="blog-search"
                        type="search"
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                        placeholder="Search posts..."
                        className="w-full sm:w-64 px-3 py-2 border rounded-md text-sm
                       bg-white border-slate-200 focus:outline-none
                       focus:ring-2 focus:ring-indigo-300"
                    />
                    <Link
                        href="/"
                        className="hidden sm:inline-block text-sm px-3 py-2 border rounded-md"
                    >
                        Home
                    </Link>
                </div>
            </div>

            <div>
                {filtered.length === 0 ? (
                    <div className="py-12 text-center text-slate-600">
                        No posts match “{q}”. Try a different term.
                    </div>
                ) : (
                    <div className="space-y-3">
                        {filtered.map((post) => (
                            <Link
                                key={post.href}
                                href={post.href}
                                className="block p-4 rounded-md border border-slate-200 hover:bg-slate-50"
                            >
                                <h3 className="font-medium text-slate-900">{post.title}</h3>
                                <p className="text-sm text-slate-500 mt-1">{post.date}</p>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}