import Link from "next/link";

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
            <Link
              href="/projects"
              className="inline-block bg-slate-900 text-white px-4 py-2 rounded-md shadow-sm text-sm"
            >
              See projects
            </Link>
            <Link
              href="/blog"
              className="inline-block text-sm text-slate-600 hover:underline"
            >
              Read the blog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}