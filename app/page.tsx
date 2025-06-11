import Image from "next/image";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import { FaArrowRight, FaGithub, FaCode, FaServer, FaLock, FaDatabase, FaCogs, FaLink, FaProjectDiagram } from "react-icons/fa";
import { SiReact, SiTailwindcss, SiRust, SiNextdotjs, SiFastify, SiOpenai, SiRedis, SiDocker, SiAmazon, SiGoogle, SiRemix, SiPython, SiTypescript } from "react-icons/si";

export default function Home() {
  // Tech stack data configuration
  const frontendTechs = [
    {
      name: "Next.js",
      icon: SiNextdotjs,
      description: "React framework for production",
      color: "white",
      hoverColor: "blue-500"
    },
    {
      name: "Remix",
      icon: SiRemix,
      description: "Full stack web framework",
      color: "purple-400",
      hoverColor: "purple-500"
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
      color: "blue-500",
      hoverColor: "blue-500"
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
      color: "blue-500",
      hoverColor: "blue-500"
    },
    {
      name: "Rust",
      icon: SiRust,
      description: "Performance-focused language",
      color: "orange-500",
      hoverColor: "orange-500"
    },
    {
      name: "Fastify",
      icon: SiFastify,
      description: "Fast Node.js framework",
      color: "white",
      hoverColor: "white"
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
      color: "yellow-500",
      hoverColor: "yellow-500"
    }
  ];

  const dataAiTechs = [
    {
      name: "OpenAI",
      icon: SiOpenai,
      description: "AI integration & LLMs",
      color: "green-500",
      hoverColor: "green-500"
    },
    {
      name: "Langchain",
      icon: FaLink,
      description: "LLM application framework",
      color: "green-400",
      hoverColor: "green-400"
    },
    {
      name: "LangGraph",
      icon: FaProjectDiagram,
      description: "AI workflow orchestration",
      color: "purple-400",
      hoverColor: "purple-400"
    },
    {
      name: "n8n",
      icon: FaCogs,
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
      color: "red-500",
      hoverColor: "red-500"
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
      icon: FaLock,
      description: "Complete auth solution",
      color: "amber-400",
      hoverColor: "amber-400"
    },
    {
      name: "Lucia Auth",
      icon: FaLock,
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
      <div className={`group flex flex-col items-center p-8 bg-gradient-to-b from-gray-900/90 to-gray-800/50 rounded-3xl hover:from-gray-800/90 hover:to-gray-700/50 transition-all duration-300 border border-gray-800/50 hover:border-${tech.hoverColor}/40 hover:translate-y-[-6px] shadow-xl shadow-black/20 hover:shadow-${tech.hoverColor}/10 w-72`}>
        <div className={`w-16 h-16 bg-gray-800/50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-${tech.hoverColor}/20 transition-all duration-300`}>
          <IconComponent className={`w-10 h-10 text-${tech.color} group-hover:scale-110 transition-transform duration-300`} />
        </div>
        <h4 className="text-lg font-semibold mb-3">{tech.name}</h4>
        <p className="text-sm text-gray-400 text-center leading-relaxed">{tech.description}</p>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900">
      <main className="flex flex-col flex-grow">
        <NavBar />
        <div className="h-24" />
        
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 overflow-hidden">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute w-[600px] h-[600px] -top-40 -left-40 bg-blue-600/10 rounded-full blur-3xl"></div>
            <div className="absolute w-[600px] h-[600px] -bottom-40 -right-40 bg-teal-600/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
              <div className="flex-1 space-y-8">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
                  Crafting <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">exceptional digital</span> experiences
                </h1>
                
                <p className="text-xl text-gray-300/90 max-w-2xl leading-relaxed">
                  I build fast, responsive, and intelligent web solutions from frontend to AI integration. Turning complex challenges into seamless user experiences with modern tech stacks.
                </p>
                
                <div className="flex flex-wrap gap-5 pt-4">
                  <Link 
                    href="/projects" 
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium flex items-center gap-2 hover:translate-y-[-2px] transition-all shadow-lg shadow-blue-500/20"
                  >
                    Explore My Work <FaArrowRight className="ml-1" />
                  </Link>
                  
                  <Link 
                    href="/blog" 
                    className="px-6 py-3 bg-gray-800 text-white rounded-lg font-medium border border-gray-700 hover:bg-gray-700 hover:translate-y-[-2px] transition-all"
                  >
                    Read My Insights
                  </Link>
                </div>
              </div>
              
              <div className="flex-1 relative mt-8 lg:mt-0">
                <div className="relative w-full max-w-md mx-auto">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl blur opacity-50"></div>
                  <div className="relative bg-gray-900 p-2 rounded-2xl ring-1 ring-gray-800">
                    <Image 
                      src="/Technologies.png" 
                      alt="Technologies" 
                      width={600} 
                      height={600} 
                      className="rounded-xl shadow-xl"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Skills Section */}
        <section className="py-32 bg-gray-950/80 border-t border-b border-gray-800/30 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-96 h-96 -top-48 -left-48 bg-blue-600/5 rounded-full blur-3xl"></div>
            <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-teal-600/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                  My Tech Stack
                </span>
              </h2>
              <p className="text-xl text-gray-300/80 max-w-3xl mx-auto leading-relaxed">
                A versatile toolkit I&apos;ve mastered to build everything from lightning-fast websites to AI-powered applications
              </p>
            </div>
            
            {/* Frontend & Frameworks */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Frontend & Frameworks</h3>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full"></div>
              </div>
              <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
                {frontendTechs.map((tech, index) => (
                  <TechCard key={index} tech={tech} />
                ))}
              </div>
            </div>
            
            {/* Backend & Infrastructure */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold mb-4 text-teal-400">Backend & Infrastructure</h3>
                <div className="w-16 h-1 bg-gradient-to-r from-teal-400 to-teal-600 mx-auto rounded-full"></div>
              </div>
              <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
                {backendTechs.map((tech, index) => (
                  <TechCard key={index} tech={tech} />
                ))}
              </div>
            </div>
            
            {/* Data & AI */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">Data & AI</h3>
                <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto rounded-full"></div>
              </div>
              <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
                {dataAiTechs.map((tech, index) => (
                  <TechCard key={index} tech={tech} />
                ))}
              </div>
            </div>

            {/* Auth & Development */}
            <div>
              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold mb-4 text-amber-400">Auth & Development</h3>
                <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full"></div>
              </div>
              <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
                {authDevTechs.map((tech, index) => (
                  <TechCard key={index} tech={tech} />
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Areas of Expertise Section */}
        <section className="py-28">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What I Bring to Your Project</h2>
              <p className="text-xl text-gray-300/80 max-w-2xl mx-auto">
                Specialized expertise to transform your vision into reality
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="group p-10 rounded-2xl bg-gradient-to-b from-gray-800/40 to-gray-900/40 border border-gray-700/50 hover:border-blue-500/50 transition-all shadow-xl shadow-black/10 hover:translate-y-[-4px]">
                <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-7 group-hover:bg-blue-500/30 transition-all">
                  <FaCode className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Modern Web Development</h3>
                <p className="text-gray-300/70 leading-relaxed">
                  High-performance applications built with Next.js, Remix, and React. Creating accessible, responsive interfaces that provide exceptional user experiences.
                </p>
              </div>
              
              <div className="group p-10 rounded-2xl bg-gradient-to-b from-gray-800/40 to-gray-900/40 border border-gray-700/50 hover:border-teal-500/50 transition-all shadow-xl shadow-black/10 hover:translate-y-[-4px]">
                <div className="w-16 h-16 bg-teal-500/20 rounded-xl flex items-center justify-center mb-7 group-hover:bg-teal-500/30 transition-all">
                  <FaServer className="w-7 h-7 text-teal-400" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Backend Excellence</h3>
                <p className="text-gray-300/70 leading-relaxed">
                  Robust API development with Fastify, Rust, and cloud infrastructure. Secure authentication, scalable databases, and optimized performance.
                </p>
              </div>
              
              <div className="group p-10 rounded-2xl bg-gradient-to-b from-gray-800/40 to-gray-900/40 border border-gray-700/50 hover:border-purple-500/50 transition-all shadow-xl shadow-black/10 hover:translate-y-[-4px]">
                <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-7 group-hover:bg-purple-500/30 transition-all">
                  <SiOpenai className="w-7 h-7 text-purple-400" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">AI Integration</h3>
                <p className="text-gray-300/70 leading-relaxed">
                  Building intelligent solutions with OpenAI, Langchain, and custom AI workflows. Enhancing applications with natural language processing and predictive capabilities.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
