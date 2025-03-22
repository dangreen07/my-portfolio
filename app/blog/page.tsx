import NavBar from "@/components/NavBar";
import { client } from "@/sanity/client";
import { SanityDocument } from "next-sanity";
import Link from "next/link";
import { FaCalendarAlt, FaAngleRight } from "react-icons/fa";
import Image from "next/image";
import SearchBar from "@/components/SearchBar";

const POSTS_QUERY = `*[
    _type == "post"
    && defined(slug.current)
]|order(publishedAt desc)[0...12]{
    _id, 
    title, 
    slug, 
    publishedAt, 
    description,
    mainImage,
    categories[]->{ title }
}`;

const options = { next: { revalidate: 30 } };

export default async function Blog() {
    const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY,  {}, options);

    return (
        <div className="bg-gradient-to-b from-gray-950 to-gray-900">
            <main className="flex flex-col min-h-screen">
                <NavBar />
                <div className="h-24" />
                
                {/* Hero Section */}
                <section className="pt-16 pb-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex-grow">
                    <div className="absolute inset-0 z-0 overflow-hidden">
                        <div className="absolute w-[800px] h-[800px] -top-40 -left-40 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute w-[600px] h-[600px] top-1/2 left-1/2 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                        <div className="absolute w-[700px] h-[700px] -bottom-40 -right-40 bg-teal-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                    </div>
                    
                    <div className="max-w-6xl mx-auto relative z-10">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 tracking-tight">
                                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
                                    Blog Posts
                                </span>
                            </h1>
                            <p className="text-xl text-gray-300/80 max-w-3xl mx-auto leading-relaxed">
                                Thoughts, tutorials, and insights on technology and development
                            </p>
                        </div>
                        
                        {/* Search Bar */}
                        <div className="max-w-2xl mx-auto mb-16 relative">
                            <SearchBar posts={posts} />
                        </div>
                        
                        {/* Post Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {posts.map((post) => (
                                <Link 
                                    key={post._id} 
                                    href={`/blog/${post.slug.current}`}
                                    className="group flex flex-col h-full relative overflow-hidden bg-gray-800/40 rounded-xl border border-gray-700/50 transition-all duration-300 hover:bg-gray-800/60 hover:border-blue-500/30 hover:translate-y-[-4px] shadow-lg shadow-black/20 backdrop-blur-sm"
                                >
                                    {/* Conditional image rendering */}
                                    {post.mainImage && (
                                        <div className="relative h-48 w-full overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/80 z-10"></div>
                                            <Image 
                                                src={post.mainImage.url || '/placeholder-blog.jpg'} 
                                                alt={post.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                    )}
                                    
                                    <div className="flex flex-col flex-grow p-6">
                                        {/* Categories */}
                                        {post.categories && post.categories.length > 0 && (
                                            <div className="flex flex-wrap gap-2 mb-3">
                                                {post.categories.map((category: { title: string }, i: number) => (
                                                    <span key={i} className="px-2 py-1 text-xs font-medium bg-blue-500/20 text-blue-300 rounded-md">
                                                        {category.title}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                        
                                        <div className="flex justify-between items-start mb-2">
                                            <h2 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                                                {post.title}
                                            </h2>
                                            <FaAngleRight className="text-gray-400 group-hover:text-blue-400 transition-all transform group-hover:translate-x-1" />
                                        </div>
                                        
                                        {post.description && (
                                            <p className="text-gray-300 mb-4 line-clamp-3 text-sm flex-grow">
                                                {post.description}
                                            </p>
                                        )}
                                        
                                        <div className="mt-auto pt-4 flex items-center text-gray-400 text-sm border-t border-gray-700/30">
                                            <FaCalendarAlt className="mr-2" />
                                            <span>
                                                {new Date(post.publishedAt).toLocaleDateString('en-US', {
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
            </main>
        </div>
    );
}