"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const projects = [
    { title: "Mailbox Migration Tool", date: "July 11, 2025", href: "/projects/mailbox-migration-tool" },
    { title: "Quant Finance Backtesting Library", date: "July 6, 2025", href: "/projects/quant-finance-backtesting-library" },
    { title: "Flappy Bird Game", date: "July 2, 2025", href: "/projects/flappy-bird-game" },
    { title: "ChatPDF Clone", date: "June 12, 2025", href: "/projects/chatpdf-clone" },
    { title: "Fastify with Clerk & PostgreSQL Template", date: "March 3, 2025", href: "/projects/fastify-with-clerk-and-postgresql-template" },
    { title: "Real Time Chat App", date: "Dec 31, 2024", href: "/projects/real-time-chat-app" },
    { title: "Music Streaming App", date: "Dec 21, 2024", href: "/projects/music-streaming-app" },
    { title: "This Portfolio Site", date: "Dec 5, 2024", href: "/projects/this-portfolio-site" },
    { title: "Simple Forms", date: "Nov 24, 2024", href: "/projects/simple-forms" },
];

export default function ProjectsPage() {
    const [q, setQ] = useState("");

    const filtered = useMemo(() => {
        const term = q.trim().toLowerCase();
        if (!term) return projects;
        return projects.filter((p) => p.title.toLowerCase().includes(term));
    }, [q]);

    return (
        <div className="py-12">
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-extrabold">Projects</h1>
                    <p className="mt-1 text-sm text-slate-600">
                        Selected work and experiments — click a card to read more.
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <label htmlFor="project-search" className="sr-only">
                        Search projects
                    </label>
                    <input
                        id="project-search"
                        type="search"
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                        placeholder="Search projects..."
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
                        No projects match “{q}”. Try a different term.
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {filtered.map((p) => (
                            <Link
                                key={p.href}
                                href={p.href}
                                className="block p-4 rounded-lg border border-slate-200 hover:shadow-md transition"
                            >
                                <h3 className="font-medium text-slate-900">{p.title}</h3>
                                <p className="mt-2 text-sm text-slate-500">{p.date}</p>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}