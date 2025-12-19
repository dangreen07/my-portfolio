import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
    title: "About — Daniel Green",
    description: "About Daniel Green — developer, maker, and Physics student.",
};

const GITHUB = process.env.NEXT_PUBLIC_GITHUB_URL ?? "#";
const LINKEDIN = process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "#";
const TWITTER = process.env.NEXT_PUBLIC_TWITTER_URL ?? "#";
const MEDIUM = process.env.NEXT_PUBLIC_MEDIUM_URL ?? "#";
const UPWORK = process.env.NEXT_PUBLIC_UPWORK_URL ?? "#";

export default function About() {
    return (
        <div className="py-12">
            <h1 className="text-3xl font-extrabold mb-6">About</h1>

            <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="rounded-full overflow-hidden bg-slate-100">
                    <Image
                        src="/avatar.png"
                        alt="Daniel Green"
                        width={200}
                        height={200}
                    />
                </div>

                <div className="prose max-w-none text-slate-700">
                    <p>
                        I'm Daniel Green — a full‑stack developer and Physics BSc student.
                        I build web applications with Next.js and TypeScript, write backend
                        services in Rust, and enjoy shipping clean, maintainable software.
                    </p>

                    <p>
                        My work sits at the intersection of practical engineering and
                        curiosity: small products, experiments, and notes from the
                        process. I like quantifying tradeoffs and automating repetitive
                        tasks so I can focus on interesting problems.
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                        <a
                            href={GITHUB}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-block text-sm px-3 py-1 border rounded-md"
                        >
                            GitHub
                        </a>

                        <a
                            href={LINKEDIN}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-block text-sm px-3 py-1 border rounded-md"
                        >
                            LinkedIn
                        </a>

                        <a
                            href={TWITTER}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-block text-sm px-3 py-1 border rounded-md"
                        >
                            X / Twitter
                        </a>

                        <a
                            href={MEDIUM}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-block text-sm px-3 py-1 border rounded-md"
                        >
                            Medium
                        </a>

                        <a
                            href={UPWORK}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-block text-sm px-3 py-1 border rounded-md"
                        >
                            Upwork
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}