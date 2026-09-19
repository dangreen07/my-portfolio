import Link from "next/link";

const focusAreas = [
  {
    title: "Product ideas",
    description:
      "I like turning rough concepts into working products — from lead-gen tools and workflow apps to AI helpers that solve a real problem.",
  },
  {
    title: "Research & analysis",
    description:
      "My work often sits at the intersection of data, experimentation, and decision-making — especially around finance, time series, and practical tooling.",
  },
  {
    title: "Practical systems",
    description:
      "I build automation, internal tools, APIs, and experiments across web apps, email tooling, backtesting, and general software projects.",
  },
];

const projectHighlights = [
  {
    name: "StackMatch",
    blurb:
      "A business discovery app for finding companies by location and industry, checking site quality, and surfacing contact details.",
  },
  {
    name: "Quantex",
    blurb:
      "An open-source Python library for building, backtesting, and deploying quantitative trading strategies.",
  },
  {
    name: "MailLink",
    blurb:
      "A service-account email tool for managing Gmail, Outlook, and SMTP workflows with webhooks and message handling.",
  },
  {
    name: "Mailbox Migration Tool",
    blurb:
      "A Rust IMAP migration utility that preserves folder structure, dates, and read state during mailbox transfers.",
  },
];

export default function Home() {
  return (
    <div className="py-10 md:py-16">
      <section
        id="hero"
        className="flex flex-col justify-center items-center text-center gap-6 min-h-[70vh]"
      >
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Daniel Green
          </p>
          <h1 className="mt-4 text-5xl md:text-7xl font-extrabold leading-tight text-slate-900">
            I build practical tools, product ideas, and research projects.
          </h1>
          <p className="mt-5 text-lg md:text-xl text-slate-700 max-w-2xl mx-auto">
            I work across product thinking, AI, data, email infrastructure, and software experiments —
            with a focus on what&apos;s useful, testable, and worth building.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/projects"
              className="inline-block bg-slate-900 text-white px-5 py-2.5 rounded-md shadow-sm text-sm font-medium"
            >
              View my projects
            </Link>
            <Link
              href="/about"
              className="inline-block text-sm text-slate-700 hover:underline font-medium"
            >
              More about me
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-slate-200">
        <div className="grid md:grid-cols-3 gap-8">
          {focusAreas.map((area) => (
            <div
              key={area.title}
              className="border border-slate-200 rounded-xl p-6 bg-slate-50/60"
            >
              <h2 className="text-xl font-bold mb-3 text-slate-900">{area.title}</h2>
              <p className="text-slate-700 text-sm leading-6">{area.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 border-t border-slate-200">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Selected work
          </p>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">
            Product ideas, AI experiments, and tools built around real use cases.
          </h2>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {projectHighlights.map((project) => (
            <div
              key={project.name}
              className="border border-slate-200 rounded-lg p-5 bg-white"
            >
              <h3 className="text-lg font-bold text-slate-900">{project.name}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">{project.blurb}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 border-t border-slate-200">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Writing & research
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">I also write about market data, time series, and practical analysis.</h2>
          </div>
          <Link href="/blog" className="text-sm font-medium text-slate-700 hover:underline">
            Read the blog →
          </Link>
        </div>
      </section>
    </div>
  );
}