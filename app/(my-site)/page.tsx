import Link from "next/link";

const projects = [
  {
    title: "Mailbox Migration Tool",
    date: "July 11, 2025",
    href: "/projects/mailbox-migration-tool",
  },
  {
    title: "Quant Finance Backtesting Library",
    date: "July 6, 2025",
    href: "/projects/quant-finance-backtesting-library",
  },
  { title: "Flappy Bird Game", date: "July 2, 2025", href: "/projects/flappy-bird-game" },
  { title: "ChatPDF Clone", date: "June 12, 2025", href: "/projects/chatpdf-clone" },
  {
    title: "Fastify with Clerk & PostgreSQL Template",
    date: "March 3, 2025",
    href: "/projects/fastify-with-clerk-and-postgresql-template",
  },
  { title: "Real Time Chat App", date: "Dec 31, 2024", href: "/projects/real-time-chat-app" },
  { title: "Music Streaming App", date: "Dec 21, 2024", href: "/projects/music-streaming-app" },
  { title: "This Portfolio Site", date: "Dec 5, 2024", href: "/projects/this-portfolio-site" },
  { title: "Simple Forms", date: "Nov 24, 2024", href: "/projects/simple-forms" },
];

const blog = [
  {
    title: "Setting up PostgreSQL & Clerk with Fastify",
    date: "March 22, 2025",
    href: "/blog/setting-up-postgresql-and-clerk-with-fastify",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section
        id="hero"
        className="h-[calc(100vh-4rem)] flex flex-col justify-center items-center text-center gap-6"
      >
        <div className="max-w-3xl">
          <h1 className="text-5xl font-extrabold leading-tight">
            Work. Thoughts. Things I ship.
          </h1>
          <p className="mt-3 text-lg text-slate-700 font-medium">
            A personal collection of projects and short writing.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#projects"
              className="inline-block bg-slate-900 text-white px-4 py-2 rounded-md shadow-sm text-sm"
            >
              See projects
            </a>
            <a
              href="#blog"
              className="inline-block text-sm text-slate-600 hover:underline"
            >
              Read the blog
            </a>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-12">
        <h2 className="text-2xl font-semibold mb-4">Selected projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="block p-4 rounded-lg border border-slate-200 hover:shadow-md transition"
            >
              <h3 className="font-medium">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-500">{p.date}</p>
            </Link>
          ))}
        </div>
        <div className="mt-4">
          <a href="/projects" className="text-sm text-slate-700 hover:underline">
            View all projects →
          </a>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="py-12">
        <h2 className="text-2xl font-semibold mb-4">Latest from the blog</h2>
        <div className="space-y-3">
          {blog.map((b) => (
            <Link
              key={b.href}
              href={b.href}
              className="block p-4 rounded-md border border-slate-200 hover:bg-slate-50"
            >
              <h3 className="font-medium">{b.title}</h3>
              <p className="text-sm text-slate-500 mt-1">{b.date}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}