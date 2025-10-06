import Link from "next/link";
import NavBar from "@/components/NavBar";

export default function Home() {
  // Public env vars for external links (rendered server-side, safe for client)
  const LINKEDIN_URL = process.env.NEXT_PUBLIC_LINKEDIN_URL || "#";
  const GITHUB_URL = process.env.NEXT_PUBLIC_GITHUB_URL || "#";
  const RESUME_URL = process.env.NEXT_PUBLIC_RESUME_URL || "";
  const EMAIL = process.env.NEXT_PUBLIC_EMAIL || "";

  const btnBase =
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F8FF7] focus-visible:ring-offset-2 ring-offset-[#0B0F14] transition-colors";
  const btnPrimary =
    "bg-[#4F8FF7] text-[#0B0F14] hover:bg-[#387EF6] " + btnBase;
  const btnSecondary =
    "text-[#4F8FF7] border border-[#4F8FF7] hover:bg-[#1A2331]/50 " + btnBase;

  return (
    <div className="min-h-screen">
      {/* Site header */}
      <header aria-label="Site header" className="pt-2">
        <NavBar />
      </header>

      {/* Main content */}
      <main id="main" role="main" className="flex flex-col">
        {/* Hero */}
        <section
          aria-labelledby="hero-title"
          className="px-6 pt-16 md:pt-24 pb-12 md:pb-16"
        >
          <div className="mx-auto max-w-3xl text-center">
            <h1
              id="hero-title"
              className="text-4xl md:text-5xl font-semibold tracking-tight text-[#E6E6E6]"
            >
              Daniel Green
            </h1>
            <p className="mt-4 md:mt-6 text-base md:text-lg leading-relaxed text-[#B3B9C4]">
              I&apos;m a software engineer and Physics BSc. I build fast,
              reliable web apps and data tools. Open to internships and junior
              roles in software or quantitative work.
            </p>

            <div className="mt-8 md:mt-10 flex flex-wrap justify-center gap-3 md:gap-4">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={btnPrimary}
                aria-label="Open LinkedIn profile in a new tab"
              >
                LinkedIn
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={btnSecondary}
                aria-label="Open GitHub profile in a new tab"
              >
                GitHub
              </a>
              {RESUME_URL ? (
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={btnSecondary}
                  aria-label="Open resume in a new tab"
                >
                  Resume
                </a>
              ) : null}
              {EMAIL ? (
                <a
                  href={`mailto:${EMAIL}`}
                  className={btnSecondary}
                  aria-label="Send me an email"
                >
                  Email
                </a>
              ) : null}
            </div>
          </div>
        </section>

        {/* About */}
        <section
          aria-labelledby="about-title"
          className="px-6 py-12 md:py-16 border-t border-white/10"
        >
          <div className="mx-auto max-w-3xl">
            <h2
              id="about-title"
              className="text-xl md:text-2xl font-semibold text-[#E6E6E6]"
            >
              About
            </h2>
            <p className="mt-4 text-base md:text-lg text-[#C7CCD6] leading-relaxed">
              I like turning rough ideas into simple, fast software, then
              improving it with measurements. I work mostly with
              TypeScript/React/Next.js and Python, and I&apos;m learning Rust. I care about
              clear code, good docs, and small, safe changes.
            </p>

            {/* Compact skills as readable tags */}
            <ul
              role="list"
              className="mt-6 flex flex-wrap gap-2 md:gap-3 text-sm"
              aria-label="Key tools and skills"
            >
              {[
                "Next.js",
                "React",
                "TypeScript",
                "Python",
                "Rust",
                "SQL",
                "Postgres",
                "Docker",
                "AWS",
              ].map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[#D9DEE6]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section
          aria-labelledby="projects-title"
          className="px-6 py-12 md:py-16 border-t border-white/10"
        >
          <div className="mx-auto max-w-4xl">
            <div className="max-w-3xl">
              <h2
                id="projects-title"
                className="text-xl md:text-2xl font-semibold text-[#E6E6E6]"
              >
                Projects
              </h2>
              <p className="mt-4 text-base md:text-lg text-[#B3B9C4]">
                A few builds I&apos;m proud of — short notes, real screenshots, and
                links to code.
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 text-[#4F8FF7] hover:text-[#77A7F8] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F8FF7] focus-visible:ring-offset-2 ring-offset-[#0B0F14] rounded-md px-1"
                aria-label="View selected projects"
              >
                View projects
                <span
                  aria-hidden="true"
                  className="inline-block translate-x-0 transition-transform group-hover:translate-x-0.5"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
