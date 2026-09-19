import Link from "next/link";

const focusAreas = [
  {
    title: "Product engineering",
    description:
      "I build polished web experiences with a product mindset — thoughtful UX, clean architecture, and fast iteration.",
  },
  {
    title: "AI & automation",
    description:
      "I enjoy turning messy workflows into useful systems using AI, integrations, and smart internal tooling.",
  },
  {
    title: "Full-stack delivery",
    description:
      "From idea to implementation, I like shipping end-to-end software that works in the real world and scales with a team.",
  },
];

const principles = [
  "Clarity over complexity",
  "Fast feedback loops",
  "Simple systems that last",
  "Code that is easy to maintain",
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
            I build software that is useful, elegant, and genuinely human.
          </h1>
          <p className="mt-5 text-lg md:text-xl text-slate-700 max-w-2xl mx-auto">
            I&apos;m a full-stack developer focused on product experiences, AI-powered tools,
            and thoughtful web applications that solve real problems.
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
              About me
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
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            What I care about
          </p>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">
            Building systems that feel effortless from the outside.
          </h2>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {principles.map((principle) => (
            <div
              key={principle}
              className="border border-slate-200 rounded-lg p-5 text-slate-700 bg-white"
            >
              <span className="text-slate-900 font-semibold">{principle}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 border-t border-slate-200">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Recent work
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">Exploring ideas at the edge of product and AI.</h2>
          </div>
          <Link href="/projects" className="text-sm font-medium text-slate-700 hover:underline">
            See all projects →
          </Link>
        </div>
      </section>
    </div>
  );
}