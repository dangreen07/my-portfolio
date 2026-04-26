"use client";

import { Project } from "@/payload-types";
import Link from "next/link";
import { useMemo, useState } from "react";

export default function Projects({ projects }: {
    projects: Project[]
}) {
    const [q, setQ] = useState("");

    const filtered = useMemo(() => {
        const term = q.trim().toLowerCase();
        if (!term) return projects;
        return projects.filter((p) => p.title.toLowerCase().includes(term));
    }, [q, projects]);

    return (
        <div className="py-12">
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-extrabold">Projects</h1>
                    <p className="mt-1 text-sm text-slate-600">
                        Selected projects and products - click a card to read more.
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
                        {filtered.sort((a, b) => Date.parse(b["start-date"]) - Date.parse(a["start-date"])).map((p) => (
                            <Link
                                key={p.slug}
                                href={"/projects/" + p.slug}
                                className="block p-4 rounded-lg border border-slate-200 hover:shadow-md transition"
                            >
                                <h3 className="font-medium text-slate-900">{p.title}</h3>
                                <p className="mt-2 text-sm text-slate-500">{new Date(Date.parse(p["start-date"])).toDateString()}</p>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}