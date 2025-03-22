import Image from "next/image";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import { FaArrowRight, FaGithub, FaCode, FaServer, FaLock, FaDatabase } from "react-icons/fa";
import { SiReact, SiTailwindcss, SiRust, SiNextdotjs, SiFastify, SiOpenai, SiRedis, SiDocker, SiAmazon, SiGoogle, SiRemix } from "react-icons/si";

export default function Home() {
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
        <section className="py-28 bg-gray-950/80 border-t border-b border-gray-800/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                  My Tech Stack
                </span>
              </h2>
              <p className="text-xl text-gray-300/80 max-w-2xl mx-auto">
                A versatile toolkit I&apos;ve mastered to build everything from lightning-fast websites to AI-powered applications
              </p>
            </div>
            
            <div className="mb-16">
              <h3 className="text-xl font-semibold mb-8 text-center text-blue-400">Frontend & Frameworks</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                <div className="flex flex-col items-center p-6 bg-gray-900/80 rounded-2xl hover:bg-gray-800/80 transition-all border border-gray-800/50 hover:border-blue-500/30 hover:translate-y-[-4px] shadow-lg shadow-black/20">
                  <SiNextdotjs className="w-12 h-12 text-white mb-4" />
                  <h3 className="text-lg font-semibold">Next.js</h3>
                  <p className="text-xs text-gray-400 text-center mt-2">React framework for production</p>
                </div>
                
                <div className="flex flex-col items-center p-6 bg-gray-900/80 rounded-2xl hover:bg-gray-800/80 transition-all border border-gray-800/50 hover:border-blue-500/30 hover:translate-y-[-4px] shadow-lg shadow-black/20">
                  <SiRemix className="w-12 h-12 text-purple-400 mb-4" />
                  <h3 className="text-lg font-semibold">Remix</h3>
                  <p className="text-xs text-gray-400 text-center mt-2">Full stack web framework</p>
                </div>
                
                <div className="flex flex-col items-center p-6 bg-gray-900/80 rounded-2xl hover:bg-gray-800/80 transition-all border border-gray-800/50 hover:border-blue-500/30 hover:translate-y-[-4px] shadow-lg shadow-black/20">
                  <SiTailwindcss className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-lg font-semibold">Tailwind CSS</h3>
                  <p className="text-xs text-gray-400 text-center mt-2">Utility-first styling</p>
                </div>
                
                <div className="flex flex-col items-center p-6 bg-gray-900/80 rounded-2xl hover:bg-gray-800/80 transition-all border border-gray-800/50 hover:border-blue-500/30 hover:translate-y-[-4px] shadow-lg shadow-black/20">
                  <SiReact className="w-12 h-12 text-blue-500 mb-4" />
                  <h3 className="text-lg font-semibold">React</h3>
                  <p className="text-xs text-gray-400 text-center mt-2">UI component library</p>
                </div>
              </div>
            </div>
            
            <div className="mb-16">
              <h3 className="text-xl font-semibold mb-8 text-center text-teal-400">Backend & Infrastructure</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                <div className="flex flex-col items-center p-6 bg-gray-900/80 rounded-2xl hover:bg-gray-800/80 transition-all border border-gray-800/50 hover:border-teal-500/30 hover:translate-y-[-4px] shadow-lg shadow-black/20">
                  <SiRust className="w-12 h-12 text-orange-500 mb-4" />
                  <h3 className="text-lg font-semibold">Rust</h3>
                  <p className="text-xs text-gray-400 text-center mt-2">Performance-focused language</p>
                </div>
                
                <div className="flex flex-col items-center p-6 bg-gray-900/80 rounded-2xl hover:bg-gray-800/80 transition-all border border-gray-800/50 hover:border-teal-500/30 hover:translate-y-[-4px] shadow-lg shadow-black/20">
                  <SiFastify className="w-12 h-12 text-white mb-4" />
                  <h3 className="text-lg font-semibold">Fastify</h3>
                  <p className="text-xs text-gray-400 text-center mt-2">Fast Node.js framework</p>
                </div>
                
                <div className="flex flex-col items-center p-6 bg-gray-900/80 rounded-2xl hover:bg-gray-800/80 transition-all border border-gray-800/50 hover:border-teal-500/30 hover:translate-y-[-4px] shadow-lg shadow-black/20">
                  <SiDocker className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-lg font-semibold">Docker</h3>
                  <p className="text-xs text-gray-400 text-center mt-2">Containerization platform</p>
                </div>
                
                <div className="flex flex-col items-center p-6 bg-gray-900/80 rounded-2xl hover:bg-gray-800/80 transition-all border border-gray-800/50 hover:border-teal-500/30 hover:translate-y-[-4px] shadow-lg shadow-black/20">
                  <SiAmazon className="w-12 h-12 text-yellow-500 mb-4" />
                  <h3 className="text-lg font-semibold">AWS</h3>
                  <p className="text-xs text-gray-400 text-center mt-2">Cloud infrastructure</p>
                </div>
              </div>
            </div>
            
            <div className="mb-16">
              <h3 className="text-xl font-semibold mb-8 text-center text-purple-400">Data & AI</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                <div className="flex flex-col items-center p-6 bg-gray-900/80 rounded-2xl hover:bg-gray-800/80 transition-all border border-gray-800/50 hover:border-purple-500/30 hover:translate-y-[-4px] shadow-lg shadow-black/20">
                  <SiOpenai className="w-12 h-12 text-green-500 mb-4" />
                  <h3 className="text-lg font-semibold">OpenAI</h3>
                  <p className="text-xs text-gray-400 text-center mt-2">AI integration & LLMs</p>
                </div>
                
                <div className="flex flex-col items-center p-6 bg-gray-900/80 rounded-2xl hover:bg-gray-800/80 transition-all border border-gray-800/50 hover:border-purple-500/30 hover:translate-y-[-4px] shadow-lg shadow-black/20">
                  <FaDatabase className="w-12 h-12 text-green-400 mb-4" />
                  <h3 className="text-lg font-semibold">Neon</h3>
                  <p className="text-xs text-gray-400 text-center mt-2">Serverless Postgres</p>
                </div>
                
                <div className="flex flex-col items-center p-6 bg-gray-900/80 rounded-2xl hover:bg-gray-800/80 transition-all border border-gray-800/50 hover:border-purple-500/30 hover:translate-y-[-4px] shadow-lg shadow-black/20">
                  <SiRedis className="w-12 h-12 text-red-500 mb-4" />
                  <h3 className="text-lg font-semibold">Redis</h3>
                  <p className="text-xs text-gray-400 text-center mt-2">In-memory data store</p>
                </div>
                
                <div className="flex flex-col items-center p-6 bg-gray-900/80 rounded-2xl hover:bg-gray-800/80 transition-all border border-gray-800/50 hover:border-purple-500/30 hover:translate-y-[-4px] shadow-lg shadow-black/20">
                  <SiGoogle className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-lg font-semibold">Google API</h3>
                  <p className="text-xs text-gray-400 text-center mt-2">Third-party integrations</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-8 text-center text-amber-400">Auth & Development</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="flex flex-col items-center p-6 bg-gray-900/80 rounded-2xl hover:bg-gray-800/80 transition-all border border-gray-800/50 hover:border-amber-500/30 hover:translate-y-[-4px] shadow-lg shadow-black/20">
                  <FaLock className="w-12 h-12 text-amber-400 mb-4" />
                  <h3 className="text-lg font-semibold">Clerk</h3>
                  <p className="text-xs text-gray-400 text-center mt-2">Complete auth solution</p>
                </div>
                
                <div className="flex flex-col items-center p-6 bg-gray-900/80 rounded-2xl hover:bg-gray-800/80 transition-all border border-gray-800/50 hover:border-amber-500/30 hover:translate-y-[-4px] shadow-lg shadow-black/20">
                  <FaLock className="w-12 h-12 text-purple-400 mb-4" />
                  <h3 className="text-lg font-semibold">Lucia Auth</h3>
                  <p className="text-xs text-gray-400 text-center mt-2">Authentication library</p>
                </div>
                
                <div className="flex flex-col items-center p-6 bg-gray-900/80 rounded-2xl hover:bg-gray-800/80 transition-all border border-gray-800/50 hover:border-amber-500/30 hover:translate-y-[-4px] shadow-lg shadow-black/20">
                  <FaGithub className="w-12 h-12 text-white mb-4" />
                  <h3 className="text-lg font-semibold">GitHub</h3>
                  <p className="text-xs text-gray-400 text-center mt-2">Version control & CI/CD</p>
                </div>
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
