import { client } from "@/sanity/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText, SanityDocument } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import NavBar from "@/components/NavBar";
import { FaCalendarAlt } from "react-icons/fa";

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
  }
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
        <div className="py-4">
          <Image
            src={imageUrl??""}
            alt={"An Image"}
            className="aspect-video rounded-md"
            width="1920"
            height="1080"
            />
        </div>
      )
    },
    code: ({ value }: { value: SanityCode }) => {
      return (
        <div className="my-4 overflow-hidden rounded-lg">
          <SyntaxHighlighter 
            language={value.language || 'text'} 
            style={vs2015}
            customStyle={{
              borderRadius: '0.5rem',
              padding: '1.5rem',
              margin: 0,
            }}
            wrapLongLines={true}
          >
            {value.code}
          </SyntaxHighlighter>
        </div>
      )
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
              href="/blog" 
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
              Back to posts
            </Link>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 mb-8 glassmorphic">
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
            </div>
            
            {/* Post Content */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 mb-8 glassmorphic">
              <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-blue-400 prose-strong:text-white prose-code:bg-gray-800 prose-code:text-blue-300">
                {Array.isArray(post.body) && <PortableText components={myPortableTextComponents} value={post.body} />}
              </div>
            </div>
          </div>
        </section>
        
        {/* Next Post CTA */}
        <section className="bg-transparent">
          <div className="border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/10 to-teal-900/10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-6">Want to read more?</h2>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/blog" 
                  className="btn-white"
                >
                  View All Posts
                </Link>
                <Link 
                  href="/projects" 
                  className="btn-outline hover:text-white"
                >
                  Check Out My Projects
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
}