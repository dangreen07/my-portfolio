import Link from "next/link";

const services = [
  {
    title: "AI Strategy & Audit",
    description:
      "A short discovery engagement to find where AI can help your business. I review your workflows, identify the best use cases, and map out an implementation plan.",
    items: [
      "Workflow review & analysis",
      "AI opportunity identification",
      "Use case prioritization",
      "Implementation roadmap",
    ],
  },
  {
    title: "Custom AI System Build",
    description:
      "I build tailored AI assistants and chatbots trained on your business data. Internal knowledge bots, customer support, lead qualification, onboarding — whatever you need.",
    items: [
      "Trained on your docs, FAQs & SOPs",
      "Integrated with your tools",
      "Custom trained for your business",
      "Deployed and live for your team or customers",
    ],
  },
  {
    title: "Automation & Ongoing Support",
    description:
      "I connect AI to your existing tools — email, Slack, CRM, calendar, helpdesk — and automate repetitive tasks. Then I maintain and improve the system monthly.",
    items: [
      "AI workflow automation",
      "Tool integrations (email, Slack, CRM, etc.)",
      "Prompt & system improvements",
      "Monthly maintenance & support",
    ],
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
            Custom AI solutions for your business
          </h1>
          <p className="mt-3 text-lg text-slate-700 font-medium">
            I build custom AI assistants and automations that save time, improve response times, and reduce manual work.
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
              See what I&apos;ve built
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 border-t border-slate-200">
        <h2 className="text-3xl font-bold mb-8 text-center">Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="border border-slate-200 rounded-lg p-6 flex flex-col"
              >
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-700 mb-4 text-sm">{service.description}</p>
                <ul className="text-sm text-slate-600 space-y-2 mt-auto">
                  {service.items.map((item) => (
                    <li key={item}>✓ {item}</li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-16 border-t border-slate-200">
        <h2 className="text-3xl font-bold mb-8 text-center">What you get</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2">Fewer repetitive questions</h3>
            <p className="text-slate-600 text-sm">
              Your team stops answering the same questions over and over. An AI assistant handles the common stuff.
            </p>
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2">Faster response times</h3>
            <p className="text-slate-600 text-sm">
              Customers and employees get answers in seconds instead of waiting for a human.
            </p>
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2">Less manual admin</h3>
            <p className="text-slate-600 text-sm">
              Automate repetitive tasks like data entry, email routing, and form processing.
            </p>
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2">Better lead handling</h3>
            <p className="text-slate-600 text-sm">
              Qualify, route, and respond to leads automatically. Never miss an opportunity.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}