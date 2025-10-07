import Link from "next/link";
import NavBar from "@/components/NavBar";

export default function Home() {
  // Public env vars for external links (rendered server-side, safe for client)
  const LINKEDIN_URL = process.env.NEXT_PUBLIC_LINKEDIN_URL || "#";
  const GITHUB_URL = process.env.NEXT_PUBLIC_GITHUB_URL || "#";

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
          className="px-6 pt-20 md:pt-28 pb-16 md:pb-20"
        >
          <div className="mx-auto max-w-4xl">
            <div className="max-w-3xl mx-auto text-center">
              <h1
                id="hero-title"
                className="text-5xl md:text-6xl font-bold tracking-tight text-[#E6E6E6] mb-6"
              >
                Daniel Green
              </h1>
              <p className="text-xl md:text-2xl leading-relaxed text-[#B3B9C4] mb-8 font-medium">
                Full stack developer and Physics BSc student
              </p>
              <p className="text-lg md:text-xl text-[#94A3B8] leading-relaxed max-w-2xl mx-auto">
                I build web applications with Next.js, Typescript and backend API&apos;s with Rust.
              </p>
            </div>

            <div className="mt-12 md:mt-16 flex flex-wrap justify-center gap-4 md:gap-6">
              <a
                href="/projects"
                className={btnPrimary}
                aria-label="View my projects"
              >
                View Projects
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
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={btnSecondary}
                aria-label="Open LinkedIn profile in a new tab"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* About */}
        <section
          aria-labelledby="about-title"
          className="px-6 py-16 md:py-20 border-t border-white/10"
        >
          <div className="mx-auto max-w-4xl">
            <h2
              id="about-title"
              className="text-2xl md:text-3xl font-bold text-[#E6E6E6] mb-6"
            >
              About
            </h2>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div>
                <p className="text-lg md:text-xl text-[#B3B9C4] leading-relaxed mb-6">
                  I&apos;m a software engineer and Physics BSc student with a passion for building reliable web applications. My work focuses on creating clean, maintainable code that solves real problems.
                </p>
                <p className="text-base md:text-lg text-[#94A3B8] leading-relaxed">
                  I enjoy exploring the intersection of quantitative analysis and software engineering, using data-driven approaches to build better applications.
                </p>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-[#E6E6E6] mb-4">
                  Technologies I work with
                </h3>
                <div className="grid grid-cols-2 gap-3">
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
                    "Tailwind CSS",
                    "Node.js",
                    "Git"
                  ].map((item) => (
                    <div
                      key={item}
                      className="text-sm text-[#C7CCD6] py-2 px-3 rounded-md bg-white/5 border border-white/10"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section
          aria-labelledby="projects-title"
          className="px-6 py-16 md:py-20 border-t border-white/10"
        >
          <div className="mx-auto max-w-4xl">
            <div className="max-w-3xl mx-auto text-center">
              <h2
                id="projects-title"
                className="text-2xl md:text-3xl font-bold text-[#E6E6E6] mb-6"
              >
                Selected Projects
              </h2>
              <p className="text-lg md:text-xl text-[#B3B9C4] leading-relaxed mb-8">
                A collection of projects that showcase different technologies and approaches. Each includes technical details, challenges faced, and lessons learned.
              </p>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#4F8FF7] text-[#0B0F14] font-medium rounded-md hover:bg-[#387EF6] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F8FF7] focus-visible:ring-offset-2 ring-offset-[#0B0F14] transition-colors"
                aria-label="View all projects"
              >
                View All Projects
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
