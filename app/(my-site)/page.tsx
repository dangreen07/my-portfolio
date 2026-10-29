import Link from "next/link";

const areasOfWork = [
  {
    title: "Web development",
    description:
      "I've built web apps and business tools with technologies like Next.js and TypeScript.",
  },
  {
    title: "Email",
    description:
      "I made MailLink for email workflows and a Rust tool for moving IMAP mailboxes.",
  },
  {
    title: "Markets & data",
    description:
      "I've built Quantex, an open-source trading research library, and written about market data and time series.",
  },
];

const projectHighlights = [
  {
    name: "StackMatch",
    blurb:
      "I built StackMatch to find businesses by location and industry, check their websites, and surface contact details.",
  },
  {
    name: "Quantex",
    blurb:
      "An open-source Python library for building and backtesting trading strategies.",
  },
  {
    name: "MailLink",
    blurb:
      "I built MailLink to manage Gmail, Outlook, and SMTP workflows, with webhooks for handling messages.",
  },
  {
    name: "Mailbox Migration Tool",
    blurb:
      "I wrote this Rust tool to move IMAP mailboxes while keeping folders, dates, and read status intact.",
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
          <h1 className="mt-4 text-5xl md:text-7xl font-extrabold leading-tight text-slate-900">
            Projects, tools, and research.
          </h1>
          <p className="mt-5 text-lg md:text-xl text-slate-700 max-w-2xl mx-auto">
            I&apos;m Daniel Green, a full-stack developer. This is a collection of web apps, email tools, open-source projects, and writing I&apos;ve worked on.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/projects"
              className="inline-block bg-slate-900 text-white px-5 py-2.5 rounded-md shadow-sm text-sm font-medium"
            >
              Browse projects
            </Link>
            <Link
              href="/about"
              className="inline-block text-sm text-slate-700 hover:underline font-medium"
            >
              About
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-slate-200">
        <div className="grid md:grid-cols-3 gap-8">
          {areasOfWork.map((area) => (
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
            Projects
          </p>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">
            A few things I&apos;ve made.
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
              Writing
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">Notes on markets, data, and time series.</h2>
          </div>
          <Link href="/blog" className="text-sm font-medium text-slate-700 hover:underline">
            Read the blog →
          </Link>
        </div>
      </section>
    </div>
  );
}