import { client } from "@/sanity/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText, SanityDocument } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import { FaCalendarAlt, FaGithub } from "react-icons/fa";
import CodeBlock from "./CodeBlock";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

type SanityImage = {
  _type: "image";
  _key: string,
  asset: {
    _ref: string,
    _type: "reference"
  },
  caption?: string
}

type SanityCode = {
  _type: "code";
  code: string,
  language: string,
  _key: string
}

const myPortableTextComponents = {
  types: {
    image: ({ value }: { value: SanityImage }) => {
      const imageUrl = urlFor(value.asset)?.url();
      return (
        <div className="my-8">
          <div className="relative rounded-xl overflow-hidden shadow-xl max-w-4xl mx-auto">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/50 to-teal-500/50 rounded-xl blur opacity-30"></div>
            <div className="relative">
              <Image
                src={imageUrl??""}
                alt={"Blog image"}
                className="aspect-video rounded-lg w-full"
                width={1920}
                height={1080}
                priority
              />
            </div>
          </div>
          {value.caption && (
            <figcaption className="mt-2 text-center text-sm text-gray-400 italic">
              {value.caption}
            </figcaption>
          )}
        </div>
      )
    },
    code: ({ value }: { value: SanityCode }) => {
      return (
        <div className="my-6 rounded-lg overflow-hidden shadow-lg">
          <CodeBlock code={value.code} language={value.language} />
        </div>
      )
    }
  },
  marks: {
    link: ({ value, children }: { value?: { href?: string }, children: React.ReactNode }) => {
      const href = value?.href || '#';
      return (
        <a 
          href={href}
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-400 hover:text-blue-300 transition-colors border-b border-blue-400/30 hover:border-blue-300 pb-0.5"
        >
          {children}
        </a>
      );
    }
  }
};

export default async function PostPage({
    params,
  }: {
    params: { slug: string };
}) {
    const post = await client.fetch<SanityDocument>(POST_QUERY, params, options);
    
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-950 to-gray-900">
        <main className="flex flex-col flex-grow">
          <NavBar />
          <div className="h-24" />
          
          {/* Hero Section */}
          <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex-grow">
            <div className="absolute inset-0 z-0 overflow-hidden">
              <div className="absolute w-[600px] h-[600px] -top-40 -left-40 bg-blue-600/10 rounded-full blur-3xl"></div>
              <div className="absolute w-[600px] h-[600px] top-1/2 left-1/2 bg-purple-600/10 rounded-full blur-3xl"></div>
              <div className="absolute w-[600px] h-[600px] -bottom-40 -right-40 bg-teal-600/10 rounded-full blur-3xl"></div>
            </div>
            
            <div className="max-w-4xl mx-auto relative z-10">
              <Link 
                href="/blog" 
                className="inline-flex items-center text-gray-300 hover:text-white mb-8 transition-colors group"
                target="_blank"
                rel="noopener noreferrer"
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
                Back to posts
              </Link>
              
              <div className="glassmorphic rounded-2xl p-8 mb-8 shadow-xl shadow-black/10">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  {post.title}
                </h1>
                
                <div className="flex items-center text-gray-300 mb-6">
                  <FaCalendarAlt className="mr-2" />
                  <span>Published on {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                </div>
                
                {post.description && (
                  <p className="text-xl text-gray-300/80 leading-relaxed">
                    {post.description}
                  </p>
                )}
              </div>
              
              {/* Post Content */}
              <div className="glassmorphic rounded-2xl p-8 mb-16 shadow-xl shadow-black/10">
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
                  prose-ol:my-4 prose-ol:pl-1
                  prose-img:rounded-lg prose-img:my-8 prose-img:mx-auto
                  prose-hr:border-gray-700 prose-hr:my-8
                  prose-table:my-6 prose-table:border-separate prose-table:border-spacing-0
                  prose-th:bg-gray-800 prose-th:text-white prose-th:p-3 prose-th:border prose-th:border-gray-700
                  prose-td:p-3 prose-td:border prose-td:border-gray-700">
                  {Array.isArray(post.body) && <PortableText components={myPortableTextComponents} value={post.body} />}
                </div>
              </div>
            </div>
          </section>
          
          {/* Next Post CTA */}
          <section className="py-20 mb-20 mx-6 md:mx-16">
            <div className="rounded-3xl p-12 border border-white/10 bg-gradient-to-r from-blue-900/20 to-teal-900/20 shadow-2xl shadow-blue-900/5 backdrop-blur-sm">
              <div className="container mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Want to read more?</h2>
                <p className="text-xl text-gray-300/90 max-w-2xl mx-auto mb-10">
                  Check out my other blog posts or explore my projects for more insights.
                </p>
                <div className="flex flex-wrap justify-center gap-5">
                  <Link 
                    href="/blog" 
                    className="btn-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View All Posts
                  </Link>
                  <Link 
                    href="/projects" 
                    className="btn-outline hover:bg-white/10"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Check Out My Projects
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
                    <li><Link href="/" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Home</Link></li>
                    <li><Link href="/projects" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Projects</Link></li>
                    <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Blog</Link></li>
                    <li><Link href="/products" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Products</Link></li>
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
                    <li><a href="#" className="text-gray-500 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
                    <li><a href="#" className="text-gray-500 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Terms of Service</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </main>
      </div>
    )
}