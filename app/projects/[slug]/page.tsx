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
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-950 to-gray-900">
            <NavBar />
            <div className="h-24" />
            
            {/* Hero Section */}
            <section className="relative pt-20 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden flex-grow">
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <div className="absolute w-[600px] h-[600px] -top-40 -left-40 bg-blue-600/10 rounded-full blur-3xl"></div>
                    <div className="absolute w-[600px] h-[600px] top-1/2 left-1/2 bg-purple-600/10 rounded-full blur-3xl"></div>
                    <div className="absolute w-[600px] h-[600px] -bottom-40 -right-40 bg-teal-600/10 rounded-full blur-3xl"></div>
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
                    
                    <div className="glassmorphic rounded-2xl p-8 mb-10 shadow-xl shadow-black/10">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight leading-tight text-white">
                            {project.title}
                        </h1>
                        
                        <div className="flex items-center text-gray-300 mb-8">
                            <FaCalendarAlt className="mr-2 text-blue-400" />
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
                                    rel="noopener noreferrer nofollow"
                                    className="px-6 py-3 bg-gray-800/80 text-white rounded-xl font-medium border border-gray-700/50 hover:bg-gray-700 hover:translate-y-[-2px] transition-all flex items-center gap-2 shadow-lg"
                                >
                                    <FaGithub className="text-xl" />
                                    <span>GitHub Repo</span>
                                </Link>
                            )}
                            
                            {project.hosting_site && project.project_icon && (
                                <Link 
                                    href={project.hosting_site} 
                                    target="_blank"
                                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-medium flex items-center gap-2 hover:translate-y-[-2px] transition-all shadow-lg shadow-blue-500/20"
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
                    <div className="glassmorphic rounded-2xl p-8 mb-10 shadow-xl shadow-black/10">
                        <h2 className="text-2xl font-bold mb-6 text-white">
                            Project Description
                        </h2>
                        
                        <div className="prose prose-invert prose-lg max-w-none 
                          prose-headings:font-bold prose-headings:text-white 
                          prose-h1:text-3xl prose-h1:mt-8 prose-h1:mb-4
                          prose-h2:text-2xl prose-h2:mt-6 prose-h2:mb-3
                          prose-h3:text-xl prose-h3:mt-5 prose-h3:mb-2
                          prose-h4:text-lg prose-h4:mt-4 prose-h4:mb-2
                          prose-p:text-gray-200 prose-p:leading-relaxed prose-p:my-4
                          prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-blue-300 prose-a:transition-colors
                          prose-strong:text-white 
                          prose-code:bg-gray-800 prose-code:text-blue-300 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:before:hidden prose-code:after:hidden
                          prose-pre:bg-transparent prose-pre:p-0 prose-pre:my-6
                          prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-4 prose-blockquote:py-1 prose-blockquote:text-gray-300 prose-blockquote:italic prose-blockquote:bg-gray-800/30 prose-blockquote:rounded-r-lg prose-blockquote:my-6
                          prose-ul:my-4 prose-ul:pl-1 prose-li:my-2 prose-li:text-gray-200
                          prose-ol:my-4 prose-ol:pl-1">
                            {Array.isArray(project.project_description) && (
                                <PortableText value={project.project_description} />
                            )}
                        </div>
                    </div>
                    
                    {/* Additional Links */}
                    <div className="grid sm:grid-cols-2 gap-8 mb-16">
                        {/* Related Websites */}
                        {project.related_websites && project.related_websites.length > 0 && (
                            <div className="glassmorphic rounded-2xl p-6 shadow-xl shadow-black/10">
                                <h3 className="text-xl font-bold mb-6 text-white">
                                    <FaLink className="mr-2 text-blue-400 inline" /> 
                                    Related Websites
                                </h3>
                                
                                <ul className="space-y-4">
                                    {project.related_websites.map((website: string, index: number) => (
                                        <li key={index} className="flex items-start">
                                            <span className="inline-block w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></span>
                                            <Link 
                                                href={website} 
                                                target="_blank"
                                                rel="noopener noreferrer nofollow"
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
                            <div className="glassmorphic rounded-2xl p-6 shadow-xl shadow-black/10">
                                <h3 className="text-xl font-bold mb-6 text-white">
                                    <FaNewspaper className="mr-2 text-purple-400 inline" /> 
                                    Related Blog Posts
                                </h3>
                                
                                <ul className="space-y-4">
                                    {project.related_blog_posts.map((post: {
                                        slug: {
                                            _type: string;
                                            current: string;
                                        }
                                        title: string;
                                    }, index: number) => (
                                        <li key={index} className="flex items-start">
                                            <span className="inline-block w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3"></span>
                                            <Link 
                                                href={`/blog/${post.slug.current}`} 
                                                className="text-gray-300 hover:text-purple-400 transition-colors"
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
        </div>
    );
}