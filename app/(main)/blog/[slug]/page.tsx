import { client } from "@/sanity/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText, SanityDocument } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import { FaCalendarAlt, FaArrowLeft } from "react-icons/fa";
import CodeBlock from "./CodeBlock";
import LatexBlock from "./LatexBlock";

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
  caption?: string,
  alt?: string
}

type SanityCode = {
  _type: "code";
  code: string,
  language: string,
  _key: string
}

type SanityLatex = {
  _type: 'latex';
  body: string
}

const myPortableTextComponents = {
  types: {
    image: ({ value }: { value: SanityImage }) => {
      const imageUrl = urlFor(value.asset)?.url();
      const altText = value.alt || value.caption || "Blog image";

      return (
        <div className="my-10">
          <div className="relative overflow-hidden max-w-4xl mx-auto">
            <Image
              src={imageUrl ?? ""}
              alt={altText}
              className="w-full h-auto max-h-[80vh] object-contain"
              width={1920}
              height={1080}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
              priority
              quality={90}
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIHN0b3AtY29sb3I9IiMxZDRlZDgiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjMjAzNjVmIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2cpIi8+PC9zdmc+"
            />
          </div>
          {value.caption && (
            <figcaption className="mt-3 text-center text-sm text-gray-400 italic">
              {value.caption}
            </figcaption>
          )}
        </div>
      )
    },
    code: ({ value }: { value: SanityCode }) => {
      return (
        <div className="my-6 overflow-hidden">
          <CodeBlock code={value.code} language={value.language} />
        </div>
      )
    },
    latex: ({ value }: { value: SanityLatex }) => {
      return (
        <div className="text-gray-300 flex justify-center">
          <div className="">
            <LatexBlock body={value.body} />
          </div>
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
          className="text-blue-400 hover:text-blue-300 transition-colors underline"
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
    <div className="min-h-screen bg-gray-950 text-white">
      <main className="flex flex-col flex-grow">
        <NavBar />
        <div className="h-24" />

        {/* Content */}
        <div className="max-w-4xl mx-auto px-6 py-12">
          <Link
            href="/blog"
            className="inline-flex items-center text-gray-300 hover:text-white mb-8 transition-colors"
          >
            <FaArrowLeft className="mr-2" />
            Back to posts
          </Link>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {post.title}
            </h1>

            <div className="flex items-center text-gray-400 mb-8">
              <FaCalendarAlt className="mr-2" />
              <span>Published on {new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>

            {post.description && (
              <p className="text-xl text-gray-300 leading-relaxed">
                {post.description}
              </p>
            )}
          </div>

          {/* Post Content */}
          <div className="mb-16">
            <div className="prose prose-invert prose-lg max-w-none 
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
                prose-ul:my-4 prose-ul:pl-6 prose-li:my-2 prose-li:text-gray-300
                prose-ol:my-4 prose-ol:pl-6
                prose-img:my-8 prose-img:mx-auto
                prose-hr:border-gray-700 prose-hr:my-8
                prose-table:my-6 prose-table:border-separate prose-table:border-spacing-0
                prose-th:bg-gray-800 prose-th:text-white prose-th:p-3 prose-th:border prose-th:border-gray-700
                prose-td:p-3 prose-td:border prose-td:border-gray-700">
              {Array.isArray(post.body) && <PortableText components={myPortableTextComponents} value={post.body} />}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}