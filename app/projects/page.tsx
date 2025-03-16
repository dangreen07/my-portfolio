import NavBar from "@/components/NavBar";
import { client } from "@/sanity/client";
import { SanityDocument } from "next-sanity";
import Link from "next/link";
import { FaCalendarAlt, FaAngleRight } from "react-icons/fa";

const POSTS_QUERY = `*[
    _type == "project"
    && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, start_date, description}`;

const options = { next: { revalidate: 30 } };

export default async function ProjectsPage() {
    const projects = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 to-black">
            <NavBar />
            
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex-grow">
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <div className="absolute w-[600px] h-[600px] -top-40 -left-40 bg-blue-500/15 rounded-full blur-3xl"></div>
                    <div className="absolute w-[600px] h-[600px] top-1/2 left-1/2 bg-purple-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute w-[600px] h-[600px] -bottom-40 -right-40 bg-teal-500/15 rounded-full blur-3xl"></div>
                </div>
                
                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            <span className="heading-gradient">
                                My Projects
                            </span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            A showcase of my technical expertise and creative solutions
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projects.map((project) => (
                            <Link 
                                key={project._id} 
                                href={`/projects/${project.slug.current}`}
                                className="group relative overflow-hidden bg-gray-800/50 rounded-xl border border-gray-700 p-6 transition-all duration-300 hover:bg-gray-800 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10"
                            >
                                <div className="flex flex-col h-full">
                                    <div className="flex justify-between items-start mb-2">
                                        <h2 className="text-2xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                                            {project.title}
                                        </h2>
                                        <FaAngleRight className="text-gray-400 group-hover:text-blue-400 transition-all transform group-hover:translate-x-1" />
                                    </div>
                                    
                                    {project.description && (
                                        <p className="text-gray-300 mb-4 line-clamp-2">
                                            {project.description}
                                        </p>
                                    )}
                                    
                                    <div className="mt-auto pt-4 flex items-center text-gray-400 text-sm">
                                        <FaCalendarAlt className="mr-2" />
                                        <span>
                                            {new Date(project.start_date).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}