import Image from "next/image";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import { FaArrowRight, FaGithub, FaCode, FaServer } from "react-icons/fa";
import { SiReact, SiTailwindcss, SiRust, SiNextdotjs } from "react-icons/si";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="flex flex-col flex-grow">
        <NavBar />
        <div className="h-28" />
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute w-[500px] h-[500px] -top-40 -left-40 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute w-[500px] h-[500px] -bottom-40 -right-40 bg-teal-500/20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
              <div className="flex-1 space-y-8">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Creating <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">impactful digital</span> experiences
                </h1>
                
                <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
                  Full-stack developer specializing in modern web technologies and innovative solutions with a focus on user experience and technical excellence.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="/projects" 
                    className="btn-primary flex items-center"
                  >
                    View Projects <FaArrowRight className="ml-2" />
                  </Link>
                  
                  <Link 
                    href="/blog" 
                    className="btn-secondary"
                  >
                    Read My Blog
                  </Link>
                </div>
              </div>
              
              <div className="flex-1 relative">
                <div className="relative w-full max-w-md mx-auto">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl blur opacity-75"></div>
                  <div className="relative bg-gray-900 p-1 rounded-2xl">
                    <Image 
                      src="/Technologies.png" 
                      alt="Technologies" 
                      width={600} 
                      height={600} 
                      className="rounded-xl shadow-2xl"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Skills Section */}
        <section className="py-24 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
                  Technical Expertise
                </span>
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                The tools and frameworks I use to build modern web applications
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center p-6 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-all">
                <SiNextdotjs className="w-12 h-12 text-white mb-4" />
                <h3 className="text-lg font-semibold">Next.js</h3>
                <p className="text-sm text-gray-400 text-center mt-2">React framework for production</p>
              </div>
              
              <div className="flex flex-col items-center p-6 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-all">
                <SiTailwindcss className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold">Tailwind CSS</h3>
                <p className="text-sm text-gray-400 text-center mt-2">Utility-first CSS framework</p>
              </div>
              
              <div className="flex flex-col items-center p-6 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-all">
                <SiRust className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-lg font-semibold">Rust</h3>
                <p className="text-sm text-gray-400 text-center mt-2">Performance and reliability</p>
              </div>
              
              <div className="flex flex-col items-center p-6 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-all">
                <FaGithub className="w-12 h-12 text-white mb-4" />
                <h3 className="text-lg font-semibold">GitHub</h3>
                <p className="text-sm text-gray-400 text-center mt-2">Version control and CI/CD</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Areas of Expertise Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Areas of Expertise</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Specialized skills I bring to every project
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group p-8 rounded-xl bg-gray-800/30 border border-gray-700 hover:border-blue-500/50 transition-all">
                <div className="w-14 h-14 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-all">
                  <FaCode className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Frontend Development</h3>
                <p className="text-gray-400">
                  Creating responsive, intuitive user interfaces with modern frameworks and design principles.
                </p>
              </div>
              
              <div className="group p-8 rounded-xl bg-gray-800/30 border border-gray-700 hover:border-teal-500/50 transition-all">
                <div className="w-14 h-14 bg-teal-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-teal-500/30 transition-all">
                  <FaServer className="w-6 h-6 text-teal-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Backend Development</h3>
                <p className="text-gray-400">
                  Building robust, scalable server applications and APIs with performance in mind.
                </p>
              </div>
              
              <div className="group p-8 rounded-xl bg-gray-800/30 border border-gray-700 hover:border-purple-500/50 transition-all">
                <div className="w-14 h-14 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-500/30 transition-all">
                  <SiReact className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Full-Stack Applications</h3>
                <p className="text-gray-400">
                  Developing complete web solutions from concept to deployment with a seamless user experience.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Portfolio CTA Section */}
        <section className="py-16 bg-transparent mb-20 mx-4 md:mx-12">
          <div className="glassmorphic rounded-3xl p-10 border border-white/10 bg-gradient-to-r from-blue-900/20 to-teal-900/20">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Explore My Portfolio</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
                Check out my projects and work to see my technical skills and creativity in action.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/projects" 
                  className="btn-white"
                >
                  View My Work
                </Link>
                <Link 
                  href="/blog" 
                  className="btn-outline hover:text-white"
                >
                  Read My Blog
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
