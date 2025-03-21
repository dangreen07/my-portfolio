import { client } from "@/sanity/client";
import { SanityDocument } from "next-sanity";
import NavBar from "@/components/NavBar";
import Link from "next/link";
import { PortableText } from '@portabletext/react';
import Image from "next/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import imageUrlBuilder from "@sanity/image-url";
import { FaGithub, FaExternalLinkAlt, FaCalendarAlt, FaLink, FaNewspaper, FaArrowRight } from "react-icons/fa";

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
    const currentYear = new Date().getFullYear();

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
                    
                    <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800/50 mb-10 shadow-xl hover:border-blue-500/30 transition-all">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight leading-tight">
                            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                                {project.title}
                            </span>
                        </h1>
                        
                        <div className="flex items-center text-gray-300/90 mb-8">
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
                    <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800/50 mb-10 shadow-xl hover:border-teal-500/30 transition-all">
                        <h2 className="text-2xl font-bold mb-6 inline-flex items-center">
                            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                                Project Description
                            </span>
                        </h2>
                        
                        <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-strong:text-white prose-code:bg-gray-800/80 prose-code:text-blue-300 prose-code:rounded-md prose-code:px-1">
                            {Array.isArray(project.project_description) && (
                                <PortableText value={project.project_description} />
                            )}
                        </div>
                    </div>
                    
                    {/* Additional Links */}
                    <div className="grid sm:grid-cols-2 gap-8 mb-16">
                        {/* Related Websites */}
                        {project.related_websites && project.related_websites.length > 0 && (
                            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50 shadow-xl hover:border-blue-500/30 hover:translate-y-[-4px] transition-all">
                                <h3 className="text-xl font-bold mb-6 inline-flex items-center">
                                    <FaLink className="mr-2 text-blue-400" /> 
                                    <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                                        Related Websites
                                    </span>
                                </h3>
                                
                                <ul className="space-y-4">
                                    {project.related_websites.map((website: string, index: number) => (
                                        <li key={index} className="flex items-start">
                                            <span className="inline-block w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></span>
                                            <Link 
                                                href={website} 
                                                target="_blank" 
                                                className="text-gray-300/90 hover:text-blue-400 transition-colors break-all"
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
                            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50 shadow-xl hover:border-purple-500/30 hover:translate-y-[-4px] transition-all">
                                <h3 className="text-xl font-bold mb-6 inline-flex items-center">
                                    <FaNewspaper className="mr-2 text-purple-400" /> 
                                    <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                                        Related Blog Posts
                                    </span>
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
                                                className="text-gray-300/90 hover:text-purple-400 transition-colors"
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
            <section className="py-20 mb-20 mx-6 md:mx-16">
                <div className="rounded-3xl p-12 border border-white/10 bg-gradient-to-r from-blue-900/20 to-teal-900/20 shadow-2xl shadow-blue-900/5 backdrop-blur-sm">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to see more?</h2>
                        <p className="text-xl text-gray-300/90 max-w-2xl mx-auto mb-10">
                            Discover more of my projects and products that showcase my expertise in web development and AI integration.
                        </p>
                        <div className="flex flex-wrap justify-center gap-5">
                            <Link 
                                href="/projects" 
                                className="px-8 py-4 bg-white text-gray-900 rounded-xl font-medium hover:translate-y-[-2px] transition-all shadow-lg flex items-center gap-2"
                            >
                                View All Projects <FaArrowRight className="ml-1" />
                            </Link>
                            <Link 
                                href="/products" 
                                className="px-8 py-4 bg-transparent text-white rounded-xl font-medium border border-white/20 hover:bg-white/10 hover:translate-y-[-2px] transition-all"
                            >
                                Check Out My Products
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Footer Section */}
            <footer className="border-t border-gray-800/30 pt-16 pb-10 bg-gray-950 mt-auto">
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
                            © {currentYear} Daniel Green. All rights reserved.
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
        </div>
    );
}