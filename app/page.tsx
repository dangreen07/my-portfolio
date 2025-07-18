import Link from "next/link";
import NavBar from "@/components/NavBar";
import { FaArrowRight, FaGithub, FaCode, FaServer, FaDatabase } from "react-icons/fa";
import { SiReact, SiTailwindcss, SiRust, SiNextdotjs, SiFastify, SiOpenai, SiRedis, SiDocker, SiAmazon, SiGoogle, SiRemix, SiPython, SiTypescript, SiSanity, SiPayloadcms, SiN8N, SiLangchain, SiClerk, SiLucia } from "react-icons/si";

export default function Home() {
  // Tech stack data configuration
  const frontendTechs = [
    {
      name: "Next.js",
      icon: SiNextdotjs,
      description: "React framework for production",
      color: "white",
      hoverColor: "blue-400"
    },
    {
      name: "Remix",
      icon: SiRemix,
      description: "Full stack web framework",
      color: "purple-400",
      hoverColor: "purple-400"
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      description: "Utility-first styling",
      color: "blue-400",
      hoverColor: "blue-400"
    },
    {
      name: "React",
      icon: SiReact,
      description: "UI component library",
      color: "blue-400",
      hoverColor: "blue-400"
    }
  ];

  const backendTechs = [
    {
      name: "Python",
      icon: SiPython,
      description: "Versatile programming language",
      color: "yellow-400",
      hoverColor: "yellow-400"
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      description: "Type-safe JavaScript",
      color: "blue-400",
      hoverColor: "blue-400"
    },
    {
      name: "Rust",
      icon: SiRust,
      description: "Performance-focused language",
      color: "orange-400",
      hoverColor: "orange-400"
    },
    {
      name: "Fastify",
      icon: SiFastify,
      description: "Fast Node.js framework",
      color: "white",
      hoverColor: "white"
    },
    {
      name: "Sanity",
      icon: SiSanity,
      description: "Headless CMS solution",
      color: "red-400",
      hoverColor: "red-400"
    },
    {
      name: "PayloadCMS",
      icon: SiPayloadcms,
      description: "Modern headless CMS",
      color: "indigo-400",
      hoverColor: "indigo-400"
    },
    {
      name: "Docker",
      icon: SiDocker,
      description: "Containerization platform",
      color: "blue-400",
      hoverColor: "blue-400"
    },
    {
      name: "AWS",
      icon: SiAmazon,
      description: "Cloud infrastructure",
      color: "yellow-400",
      hoverColor: "yellow-400"
    }
  ];

  const dataAiTechs = [
    {
      name: "OpenAI",
      icon: SiOpenai,
      description: "AI integration & LLMs",
      color: "green-400",
      hoverColor: "green-400"
    },
    {
      name: "Langchain",
      icon: SiLangchain,
      description: "LLM application framework",
      color: "green-400",
      hoverColor: "green-400"
    },
    {
      name: "n8n",
      icon: SiN8N,
      description: "Workflow automation",
      color: "orange-400",
      hoverColor: "orange-400"
    },
    {
      name: "Neon",
      icon: FaDatabase,
      description: "Serverless Postgres",
      color: "green-400",
      hoverColor: "green-400"
    },
    {
      name: "Redis",
      icon: SiRedis,
      description: "In-memory data store",
      color: "red-400",
      hoverColor: "red-400"
    },
    {
      name: "Google API",
      icon: SiGoogle,
      description: "Third-party integrations",
      color: "blue-400",
      hoverColor: "blue-400"
    }
  ];

  const authDevTechs = [
    {
      name: "Clerk",
      icon: SiClerk,
      description: "Complete auth solution",
      color: "amber-400",
      hoverColor: "amber-400"
    },
    {
      name: "Lucia Auth",
      icon: SiLucia,
      description: "Authentication library",
      color: "purple-400",
      hoverColor: "purple-400"
    },
    {
      name: "GitHub",
      icon: FaGithub,
      description: "Version control & CI/CD",
      color: "white",
      hoverColor: "white"
    }
  ];

  // Tech interface
  interface Tech {
    name: string;
    icon: React.ComponentType<{ className?: string }>;
    description: string;
    color: string;
    hoverColor: string;
  }

  // Reusable tech card component
  const TechCard = ({ tech }: { tech: Tech }) => {
    const IconComponent = tech.icon;
    return (
      <div className="group flex flex-col items-center p-6 bg-gray-900 hover:bg-gray-800 transition-all duration-200 border border-gray-700 hover:border-gray-600 rounded-lg">
        <div className="w-12 h-12 flex items-center justify-center mb-4">
          <IconComponent className={`w-8 h-8 text-${tech.color}`} />
        </div>
        <h4 className="text-base font-medium mb-2 text-white">{tech.name}</h4>
        <p className="text-sm text-gray-400 text-center">{tech.description}</p>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <main className="flex flex-col flex-grow">
        <NavBar />
        <div className="h-24" />

        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Full Stack Developer
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              I build fast, scalable web applications and AI-powered solutions.
              Specializing in modern JavaScript frameworks, backend systems, and cloud infrastructure.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/projects"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors rounded-lg"
              >
                View Projects <FaArrowRight className="inline ml-2" />
              </Link>
              <Link
                href="/blog"
                className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium transition-colors rounded-lg"
              >
                Read Blog
              </Link>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Technical Skills
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Technologies and tools I use to build robust applications
              </p>
            </div>

            {/* Frontend & Frameworks */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-8 text-center text-blue-400">Frontend & Frameworks</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {frontendTechs.map((tech, index) => (
                  <TechCard key={index} tech={tech} />
                ))}
              </div>
            </div>

            {/* Backend & Infrastructure */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-8 text-center text-green-400">Backend & Infrastructure</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {backendTechs.map((tech, index) => (
                  <TechCard key={index} tech={tech} />
                ))}
              </div>
            </div>

            {/* Data & AI */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-8 text-center text-purple-400">Data & AI</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {dataAiTechs.map((tech, index) => (
                  <TechCard key={index} tech={tech} />
                ))}
              </div>
            </div>

            {/* Auth & Development */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-center text-orange-400">Auth & Development</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {authDevTechs.map((tech, index) => (
                  <TechCard key={index} tech={tech} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Areas of Expertise Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Areas of Expertise</h2>
              <p className="text-xl text-gray-300">
                What I bring to your project
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-gray-900 border border-gray-700 hover:border-gray-600 transition-colors rounded-lg">
                <div className="w-12 h-12 bg-blue-600 flex items-center justify-center mb-6 rounded-lg">
                  <FaCode className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Web Development</h3>
                <p className="text-gray-300">
                  Modern, responsive web applications built with Next.js, React, and TypeScript.
                  Focus on performance, accessibility, and user experience.
                </p>
              </div>

              <div className="p-8 bg-gray-900 border border-gray-700 hover:border-gray-600 transition-colors rounded-lg">
                <div className="w-12 h-12 bg-green-600 flex items-center justify-center mb-6 rounded-lg">
                  <FaServer className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Backend Systems</h3>
                <p className="text-gray-300">
                  Scalable APIs and microservices using Python, Rust, and Node.js.
                  Database design, authentication, and cloud deployment.
                </p>
              </div>

              <div className="p-8 bg-gray-900 border border-gray-700 hover:border-gray-600 transition-colors rounded-lg">
                <div className="w-12 h-12 bg-purple-600 flex items-center justify-center mb-6 rounded-lg">
                  <SiOpenai className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">AI Integration</h3>
                <p className="text-gray-300">
                  Building intelligent applications with OpenAI, Langchain, and custom AI workflows.
                  Natural language processing and automation solutions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
