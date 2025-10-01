import NavBar from "@/components/NavBar";
import { client } from "@/sanity/client";
import { SanityDocument } from "@sanity/client";
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
    const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

    return (
        <div className="min-h-screen bg-gray-950 text-white">
            <main className="flex flex-col min-h-screen">
                <NavBar />
                <div className="h-24" />

                {/* Hero Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 flex-grow">
                    <div className="max-w-7xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Blog
                        </h1>
                        <p className="text-xl text-gray-300 mb-12">
                            Thoughts, tutorials, and insights on technology and development
                        </p>

                        {/* Search Bar */}
                        <div className="max-w-2xl mx-auto mb-16">
                            <SearchBar posts={posts} />
                        </div>

                        {/* Post Grid */}
                        <div className="space-y-6">
                            {posts.map((post) => (
                                <Link
                                    key={post._id}
                                    href={`/blog/${post.slug.current}`}
                                    className="group flex bg-gray-900 border border-gray-700 hover:border-gray-600 hover:bg-gray-800 transition-all duration-200 rounded-lg overflow-hidden"
                                >
                                    {/* Conditional image rendering */}
                                    {post.mainImage && (
                                        <div className="relative h-32 w-48 flex-shrink-0 overflow-hidden">
                                            <Image
                                                src={post.mainImage.url || '/placeholder-blog.jpg'}
                                                alt={post.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    )}

                                    <div className="p-6 flex-1">
                                        {/* Categories */}
                                        {post.categories && post.categories.length > 0 && (
                                            <div className="flex flex-wrap gap-2 mb-3">
                                                {post.categories.map((category: { title: string }, i: number) => (
                                                    <span key={i} className="px-2 py-1 text-xs font-medium bg-blue-600 text-white rounded">
                                                        {category.title}
                                                    </span>
                                                ))}
                                            </div>
                                        )}

                                        <div className="flex justify-between items-start mb-2">
                                            <h2 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                                {post.title}
                                            </h2>
                                            <FaAngleRight className="text-gray-400 group-hover:text-blue-400 transition-colors" />
                                        </div>

                                        {post.description && (
                                            <p className="text-gray-300 mb-4 text-sm">
                                                {post.description}
                                            </p>
                                        )}

                                        <div className="flex items-center text-gray-400 text-sm border-t border-gray-700 pt-4">
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