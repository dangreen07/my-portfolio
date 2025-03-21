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
        
        {/* Portfolio CTA Section */}
        <section className="py-20 mb-20 mx-6 md:mx-16">
          <div className="rounded-3xl p-12 border border-white/10 bg-gradient-to-r from-blue-900/20 to-teal-900/20 shadow-2xl shadow-blue-900/5 backdrop-blur-sm">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Transform Your Digital Presence?</h2>
              <p className="text-xl text-gray-300/90 max-w-2xl mx-auto mb-10">
                Discover how my expertise can elevate your next project and help you stand out in today&apos;s competitive digital landscape.
              </p>
              <div className="flex flex-wrap justify-center gap-5">
                <Link 
                  href="/projects" 
                  className="px-8 py-4 bg-white text-gray-900 rounded-xl font-medium hover:translate-y-[-2px] transition-all shadow-lg"
                >
                  See My Portfolio
                </Link>
                <Link 
                  href="/blog" 
                  className="px-8 py-4 bg-transparent text-white rounded-xl font-medium border border-white/20 hover:bg-white/10 hover:translate-y-[-2px] transition-all"
                >
                  Explore My Insights
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Footer Section */}
        <footer className="border-t border-gray-800/30 pt-16 pb-10 bg-gray-950">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
              {/* About Column */}
              <div className="md:col-span-2 space-y-4">
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Daniel Green</h3>
                <p className="text-gray-400 max-w-md">
                  Building exceptional digital experiences with modern technologies and a focus on performance, accessibility, and user experience.
                </p>
                <div className="flex space-x-4 pt-4">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <FaGithub size={22} />
                    <span className="sr-only">GitHub</span>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.1 10.1 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                    <span className="sr-only">Twitter</span>
                  </a>
                </div>
              </div>
              
              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-5">Quick Links</h3>
                <ul className="space-y-3">
                  <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                  <li><Link href="/projects" className="text-gray-400 hover:text-white transition-colors">Projects</Link></li>
                  <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
                </ul>
              </div>
            </div>
            
            {/* Bottom Bar */}
            <div className="pt-8 border-t border-gray-800/30 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} Daniel Green. All rights reserved.
              </p>
              <div className="mt-4 md:mt-0">
                <ul className="flex space-x-6 text-sm">
                  <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Terms of Service</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
