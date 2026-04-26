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
            Custom web applications built for your business
          </h1>
          <p className="mt-3 text-lg text-slate-700 font-medium">
            I help small businesses and startups build fast, reliable web applications. From concept to production.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-block bg-slate-900 text-white px-4 py-2 rounded-md shadow-sm text-sm"
            >
              Start a project
            </Link>
            <Link
              href="/projects"
              className="inline-block text-sm text-slate-600 hover:underline"
            >
              See what I've built
            </Link>
          </div>
        </div>
      </section>

      {/* Why hire me */}
      <section className="py-16 border-t border-slate-200">
        <h2 className="text-3xl font-bold mb-8 text-center">Why work with me</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2">Fast turnaround</h3>
            <p className="text-slate-600 text-sm">
              Get your MVP built in 2-8 weeks. I prioritize speed without sacrificing quality.
            </p>
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2">Full-stack expertise</h3>
            <p className="text-slate-600 text-sm">
              Handle everything from frontend UI to backend infrastructure. No coordination overhead.
            </p>
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2">Clear communication</h3>
            <p className="text-slate-600 text-sm">
              Regular updates, responsive to questions. SMBs appreciate a developer they can actually reach.
            </p>
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2">Modern tech stack</h3>
            <p className="text-slate-600 text-sm">
              Next.js, TypeScript, React, PostgreSQL, and more. Built for scale from day one.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}