import { client } from "@/sanity/client";
import { SanityDocument } from "@sanity/client";
import NavBar from "@/components/NavBar";
import Link from "next/link";
import { PortableText } from '@portabletext/react';
import Image from "next/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import imageUrlBuilder from "@sanity/image-url";
import { FaGithub, FaExternalLinkAlt, FaCalendarAlt, FaLink, FaNewspaper, FaArrowLeft } from "react-icons/fa";

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
        <div className="min-h-screen bg-gray-950 text-white">
            <NavBar />
            <div className="h-24" />

            {/* Content */}
            <div className="max-w-4xl mx-auto px-6 py-12">
                <Link
                    href="/projects"
                    className="inline-flex items-center text-gray-300 hover:text-white mb-8 transition-colors"
                >
                    <FaArrowLeft className="mr-2" />
                    Back to projects
                </Link>

                <div className="mb-12">
                    {project.project_icon && (
                        <div className="flex justify-center mb-6">
                            <Image
                                src={urlFor(project.project_icon)?.width(120).height(120).url() ?? ""}
                                alt={`${project.title} icon`}
                                width={120}
                                height={120}
                                className="shadow-lg"
                            />
                        </div>
                    )}

                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                        {project.title}
                    </h1>

                    <div className="flex items-center justify-center text-gray-400 mb-8">
                        <FaCalendarAlt className="mr-2" />
                        <span>Started on {new Date(project.start_date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}</span>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                        {project.github_page && (
                            <Link
                                href={project.github_page}
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                                className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium border border-gray-700 hover:border-gray-600 transition-colors flex items-center gap-2 rounded-lg"
                            >
                                <FaGithub className="text-xl" />
                                <span>GitHub Repo</span>
                            </Link>
                        )}

                        {project.hosting_site && (
                            <Link
                                href={project.hosting_site}
                                target="_blank"
                                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium flex items-center gap-2 transition-colors rounded-lg"
                            >
                                <FaExternalLinkAlt className="text-sm" />
                                <span>Live Demo</span>
                            </Link>
                        )}
                    </div>
                </div>

                {/* Project Description */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold mb-6">
                        Project Description
                    </h2>

                    <div className="prose prose-invert prose-lg max-w-none overflow-visible
                      prose-headings:font-bold prose-headings:text-white 
                      prose-h1:text-3xl prose-h1:mt-8 prose-h1:mb-4
                      prose-h2:text-2xl prose-h2:mt-6 prose-h2:mb-3
                      prose-h3:text-xl prose-h3:mt-5 prose-h3:mb-2
                      prose-h4:text-lg prose-h4:mt-4 prose-h4:mb-2
                      prose-p:text-gray-300 prose-p:leading-relaxed prose-p:my-4
                      prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-blue-300 prose-a:transition-colors
                      prose-strong:text-white 
                      prose-code:bg-gray-800 prose-code:text-blue-300 prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-code:before:hidden prose-code:after:hidden
                      prose-pre:bg-transparent prose-pre:p-0 prose-pre:my-6
                      prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-4 prose-blockquote:py-1 prose-blockquote:text-gray-300 prose-blockquote:italic prose-blockquote:bg-gray-800/30 prose-blockquote:my-6
                      prose-ul:my-4 prose-ul:pl-6 prose-li:my-2 prose-li:text-gray-300 prose-li:break-words
                      prose-ol:my-4 prose-ol:pl-6">
                        {Array.isArray(project.project_description) && (
                            <PortableText value={project.project_description} />
                        )}
                    </div>
                </div>

                {/* Additional Links */}
                <div className="grid sm:grid-cols-2 gap-8">
                    {/* Related Websites */}
                    {project.related_websites && project.related_websites.length > 0 && (
                        <div className="bg-gray-900 border border-gray-700 p-6 rounded-lg">
                            <h3 className="text-xl font-bold mb-4 text-white">
                                <FaLink className="mr-2 text-blue-400 inline" />
                                Related Websites
                            </h3>

                            <ul className="space-y-3 pl-6">
                                {project.related_websites.map((website: string, index: number) => (
                                    <li key={index} className="flex items-start relative">
                                        <span className="absolute -left-4 inline-block w-2 h-2 bg-blue-400 mt-2 flex-shrink-0"></span>
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
                        <div className="bg-gray-900 border border-gray-700 p-6 rounded-lg">
                            <h3 className="text-xl font-bold mb-4 text-white">
                                <FaNewspaper className="mr-2 text-purple-400 inline" />
                                Related Blog Posts
                            </h3>

                            <ul className="space-y-3 pl-6">
                                {project.related_blog_posts.map((post: {
                                    slug: {
                                        _type: string;
                                        current: string;
                                    }
                                    title: string;
                                }, index: number) => (
                                    <li key={index} className="flex items-start relative">
                                        <span className="absolute -left-4 inline-block w-2 h-2 bg-purple-400 mt-2 flex-shrink-0"></span>
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
        </div>
    );
}