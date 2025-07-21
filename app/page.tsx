import Link from "next/link";
import NavBar from "@/components/NavBar";
import { FaArrowRight, FaGithub, FaCode, FaServer, FaDatabase, FaCheckCircle, FaStar, FaUsers } from "react-icons/fa";
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
      <div className="card-primary group card-hover">
        <div className="w-14 h-14 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <IconComponent className={`w-8 h-8 text-${tech.color}`} />
        </div>
        <h4 className="text-lg font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors">{tech.name}</h4>
        <p className="text-sm text-gray-400 text-center leading-relaxed">{tech.description}</p>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <main className="flex flex-col flex-grow">
        <NavBar />
        <div className="h-24" />

        {/* Enhanced Hero Section */}
        <section className="relative section-padding overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10"></div>
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          
          <div className="relative max-w-6xl mx-auto px-6 text-center">
            {/* Trust Indicators */}
            <div className="flex justify-center items-center gap-8 mb-8 text-sm text-gray-400 animate-fade-in-down">
              <div className="flex items-center gap-2">
                <FaStar className="text-yellow-400" />
                <span>5+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <FaUsers className="text-blue-400" />
                <span>50+ Projects Delivered</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-green-400" />
                <span>100% Client Satisfaction</span>
              </div>
            </div>

            <h1 className="text-display-xl md:text-display-xl font-bold mb-8 animate-fade-in-up">
              <span className="gradient-text-primary">Full Stack Developer</span>
              <br />
              <span className="text-white text-display-lg">Building Digital Excellence</span>
            </h1>
            
            <p className="text-body-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              I transform ideas into powerful digital solutions. Specializing in 
              <span className="text-blue-400 font-medium"> modern web applications</span>, 
              <span className="text-green-400 font-medium"> AI-powered systems</span>, and 
              <span className="text-purple-400 font-medium"> scalable cloud infrastructure</span> 
              that drive business growth.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <Link
                href="/projects"
                className="btn-primary text-lg px-8 py-4"
              >
                View My Work <FaArrowRight className="inline ml-2" />
              </Link>
              <Link
                href="#contact"
                className="btn-outline text-lg px-8 py-4"
              >
                Let's Talk
              </Link>
            </div>
            
            {/* Social Proof */}
            <div className="mt-16 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <p className="text-sm text-gray-500 mb-6">Trusted by companies worldwide</p>
              <div className="flex justify-center items-center gap-8 opacity-50">
                <SiNextdotjs className="w-8 h-8" />
                <SiReact className="w-8 h-8" />
                <SiOpenai className="w-8 h-8" />
                <SiAmazon className="w-8 h-8" />
                <SiGoogle className="w-8 h-8" />
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Skills Section */}
        <section className="section-padding bg-gradient-to-b from-gray-900/50 to-gray-950">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-display-md font-bold mb-6">
                <span className="gradient-text-secondary">Technical Expertise</span>
              </h2>
              <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
                Cutting-edge technologies and proven methodologies to deliver exceptional results
              </p>
            </div>

            {/* Frontend & Frameworks */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-8 text-center">
                <span className="gradient-text-primary">Frontend & Frameworks</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {frontendTechs.map((tech, index) => (
                  <TechCard key={index} tech={tech} />
                ))}
              </div>
            </div>

            {/* Backend & Infrastructure */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-8 text-center">
                <span className="gradient-text-secondary">Backend & Infrastructure</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {backendTechs.map((tech, index) => (
                  <TechCard key={index} tech={tech} />
                ))}
              </div>
            </div>

            {/* Data & AI */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-8 text-center">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Data & AI</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {dataAiTechs.map((tech, index) => (
                  <TechCard key={index} tech={tech} />
                ))}
              </div>
            </div>

            {/* Auth & Development */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-center">
                <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Auth & Development</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {authDevTechs.map((tech, index) => (
                  <TechCard key={index} tech={tech} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Areas of Expertise Section */}
        <section className="section-padding">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-display-md font-bold mb-6">
                <span className="gradient-text-primary">Areas of Expertise</span>
              </h2>
              <p className="text-body-lg text-gray-300">
                Comprehensive solutions tailored to your business needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="card-secondary group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-6 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FaCode className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Web Development</h3>
                <p className="text-gray-300">
                  Cutting-edge web applications with exceptional performance, accessibility, and user experience. 
                  Built with modern frameworks and best practices.
                </p>
              </div>

              <div className="card-secondary group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-6 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FaServer className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Backend Systems</h3>
                <p className="text-gray-300">
                  Robust, scalable backend architectures with secure APIs, efficient databases, 
                  and seamless cloud integration for enterprise-grade solutions.
                </p>
              </div>

              <div className="card-secondary group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-6 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <SiOpenai className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">AI Integration</h3>
                <p className="text-gray-300">
                  Intelligent automation and AI-powered features that transform business processes. 
                  Custom solutions with machine learning and natural language processing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* New CTA Section */}
        <section className="section-padding-sm bg-gradient-to-r from-blue-900/20 to-purple-900/20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-display-md font-bold mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-body-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create a solution that exceeds your expectations. 
              From concept to deployment, I'll guide you every step of the way.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="/projects"
                className="btn-primary text-lg px-8 py-4"
              >
                View Portfolio
              </Link>
              <Link
                href="/blog"
                className="btn-secondary text-lg px-8 py-4"
              >
                Read Articles
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
