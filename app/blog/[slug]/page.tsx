import { client } from "@/sanity/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText, SanityDocument } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import { FaCalendarAlt } from "react-icons/fa";
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
        </main>
      </div>
    )
}