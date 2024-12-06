import { client } from "@/sanity/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText, SanityDocument } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import SyntaxHighlighter from "react-syntax-highlighter";
import { stackoverflowDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import NavBar from "@/components/NavBar";

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
        <div className="my-2">
          <SyntaxHighlighter language={value.language} style={stackoverflowDark}>
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
      <main className="min-h-screen">
        <NavBar />
        <div className="h-28" />
        <div className="mx-auto max-w-3xl px-8 pb-8 flex flex-col gap-4 container">
          <Link href="/blog" className="hover:underline">
            ← Back to posts
          </Link>
          <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
          <div className="prose">
            <p>Published: {new Date(post.publishedAt).toLocaleDateString()}</p>
            {Array.isArray(post.body) && <PortableText components={myPortableTextComponents} value={post.body} />}
          </div>
        </div>
      </main>
    )
}