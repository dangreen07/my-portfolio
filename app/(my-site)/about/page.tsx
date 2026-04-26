import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "About — Daniel Green | Freelance Webapp Developer",
    description: "Learn about Daniel Green's freelance webapp development services for SMBs. Full-stack expertise, proven track record, and fast turnaround.",
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
                        I&apos;m Daniel Green - a full-stack developer specializing in custom web applications for small businesses and startups. I work with Next.js and TypeScript on the frontend, build backend services in Rust or Node.js, and am committed to shipping clean, maintainable software that scales.
                    </p>

                    <h3>What I can help with</h3>
                    <p>
                        I take on all types of web application projects: MVPs, feature development on existing apps, performance optimization, and full rewrites. Whether you need a proof-of-concept to validate an idea or a production-ready platform, I can help.
                    </p>

                    <h3>How I work</h3>
                    <p>
                        I start with a discovery call to understand your goals, constraints, and timeline. I communicate regularly throughout the project, provide transparent timelines, and prioritize shipping working software fast. Most projects go from kickoff to MVP in 2-8 weeks.
                    </p>

                    <h3>Tech expertise</h3>
                    <p>
                        <strong>Frontend:</strong> Next.js, React, TypeScript, Tailwind CSS<br/>
                        <strong>Backend:</strong> Node.js, Rust, PostgreSQL, REST APIs, GraphQL<br/>
                        <strong>Infrastructure:</strong> Vercel, AWS, Docker, databases
                    </p>

                    <p>
                        Interested in working together? <Link href="/contact" className="text-slate-900 underline font-semibold">Get in touch</Link> to discuss your project.
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                        <Link
                            href={GITHUB}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-block text-sm px-3 py-1 border rounded-md"
                        >
                            GitHub
                        </Link>

                        <Link
                            href={LINKEDIN}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-block text-sm px-3 py-1 border rounded-md"
                        >
                            LinkedIn
                        </Link>

                        <Link
                            href={TWITTER}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-block text-sm px-3 py-1 border rounded-md"
                        >
                            X / Twitter
                        </Link>

                        <Link
                            href={MEDIUM}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-block text-sm px-3 py-1 border rounded-md"
                        >
                            Medium
                        </Link>

                        <Link
                            href={UPWORK}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-block text-sm px-3 py-1 border rounded-md"
                        >
                            Upwork
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}