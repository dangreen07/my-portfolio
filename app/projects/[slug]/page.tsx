import { client } from "@/sanity/client";
import { SanityDocument } from "next-sanity";
import NavBar from "@/components/NavBar";
import Link from "next/link";
import { PortableText } from '@portabletext/react';
import Image from "next/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import imageUrlBuilder from "@sanity/image-url";
import { FaGithub, FaExternalLinkAlt, FaCalendarAlt, FaLink, FaNewspaper } from "react-icons/fa";

const POST_QUERY = `*[_type == "project" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

export default async function ProjectPage({
    params,
  }: {
    params: { slug: string };
}) {
    const project = await client.fetch<SanityDocument>(POST_QUERY, params, options);

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 to-black">
            <NavBar />
            
            {/* Hero Section */}
            <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex-grow">
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <div className="absolute w-[600px] h-[600px] -top-40 -left-40 bg-blue-500/15 rounded-full blur-3xl"></div>
                    <div className="absolute w-[600px] h-[600px] top-1/2 left-1/2 bg-purple-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute w-[600px] h-[600px] -bottom-40 -right-40 bg-teal-500/15 rounded-full blur-3xl"></div>
                </div>
                
                <div className="max-w-4xl mx-auto relative z-10">
                    <Link 
                        href="/projects" 
                        className="inline-flex items-center text-gray-300 hover:text-white mb-8 transition-colors group"
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to projects
                    </Link>
                    
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 mb-8 glassmorphic">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                            {project.title}
                        </h1>
                        
                        <div className="flex items-center text-gray-300 mb-6">
                            <FaCalendarAlt className="mr-2" />
                            <span>Started on {new Date(project.start_date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}</span>
                        </div>
                        
                        <div className="flex flex-wrap gap-4 mt-8">
                            {project.github_page && (
                                <Link 
                                    href={project.github_page} 
                                    target="_blank" 
                                    className="flex items-center gap-2 btn-secondary"
                                >
                                    <FaGithub className="text-xl" />
                                    <span>GitHub Repo</span>
                                </Link>
                            )}
                            
                            {project.hosting_site && project.project_icon && (
                                <Link 
                                    href={project.hosting_site} 
                                    target="_blank" 
                                    className="flex items-center gap-2 btn-primary"
                                >
                                    {urlFor(project.project_icon)?.url() && (
                                        <Image 
                                            src={urlFor(project.project_icon)?.url() || ""} 
                                            alt="Project Icon" 
                                            width={24} 
                                            height={24} 
                                            className="rounded-sm"
                                        />
                                    )}
                                    <span>Live Demo</span>
                                    <FaExternalLinkAlt className="text-sm" />
                                </Link>
                            )}
                        </div>
                    </div>
                    
                    {/* Project Description */}
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 mb-8 glassmorphic">
                        <h2 className="text-2xl font-bold mb-6 text-white inline-flex items-center">
                            Project Description
                        </h2>
                        
                        <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-blue-400 prose-strong:text-white prose-code:bg-gray-800 prose-code:text-blue-300">
                            {Array.isArray(project.project_description) && (
                                <PortableText value={project.project_description} />
                            )}
                        </div>
                    </div>
                    
                    {/* Additional Links */}
                    <div className="grid sm:grid-cols-2 gap-8 mb-12">
                        {/* Related Websites */}
                        {project.related_websites && project.related_websites.length > 0 && (
                            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 glassmorphic">
                                <h3 className="text-xl font-bold mb-4 text-white inline-flex items-center">
                                    <FaLink className="mr-2 text-blue-400" /> 
                                    Related Websites
                                </h3>
                                
                                <ul className="space-y-3">
                                    {project.related_websites.map((website: string, index: number) => (
                                        <li key={index} className="flex items-start">
                                            <span className="inline-block w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></span>
                                            <Link 
                                                href={website} 
                                                target="_blank" 
                                                className="text-gray-300 hover:text-blue-400 transition-colors break-all"
                                            >
                                                {website}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        
                        {/* Related Blog Posts */}
                        {project.related_blog_posts && project.related_blog_posts.length > 0 && (
                            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 glassmorphic">
                                <h3 className="text-xl font-bold mb-4 text-white inline-flex items-center">
                                    <FaNewspaper className="mr-2 text-blue-400" /> 
                                    Related Blog Posts
                                </h3>
                                
                                <ul className="space-y-3">
                                    {project.related_blog_posts.map((post: {
                                        slug: {
                                            _type: string;
                                            current: string;
                                        }
                                        title: string;
                                    }, index: number) => (
                                        <li key={index} className="flex items-start">
                                            <span className="inline-block w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></span>
                                            <Link 
                                                href={`/blog/${post.slug.current}`} 
                                                className="text-gray-300 hover:text-blue-400 transition-colors"
                                            >
                                                {post.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </section>
            
            {/* Next Project CTA */}
            <section className="bg-transparent">
                <div className="border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/10 to-teal-900/10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-2xl font-bold mb-6">Ready to see more?</h2>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link 
                                href="/projects" 
                                className="btn-white"
                            >
                                View All Projects
                            </Link>
                            <Link 
                                href="/products" 
                                className="btn-outline text-white"
                            >
                                Check Out My Products
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}