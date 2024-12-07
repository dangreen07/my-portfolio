import { client } from "@/sanity/client";
import { SanityDocument } from "next-sanity";
import NavBar from "@/components/NavBar";
import Link from "next/link";
import {PortableText} from '@portabletext/react';
import Image from "next/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import imageUrlBuilder from "@sanity/image-url";

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
    const projects = await client.fetch<SanityDocument>(POST_QUERY, params, options);

    return (
        <main className="min-h-screen">
            <NavBar />
            <div className="h-28" />
            <div className="mx-auto max-w-3xl px-8 pb-8 flex flex-col gap-4 container">
                <Link href="/projects" className="hover:underline">
                    ← Back to projects
                </Link>
                <h1 className="text-4xl font-bold mb-4">{projects.title}</h1>
                <p>Project Start Date: {new Date(projects.start_date).toLocaleDateString()}</p>
                <div className="justify-between gap-2 hidden sm:flex">
                    <Link className="btn btn-md btn-primary w-fit" href={projects.github_page} target="_blank" >
                        <span><Image className="invert" src={"/Github-Icon.svg"} alt={"GitHub Icon"} width={24} height={24} /></span>
                        <span className="text-xl font-semibold">Github Page</span>
                    </Link>
                    <Link className="btn btn-md btn-primary w-fit" href={projects.hosting_site} target="_blank" >
                        <span><Image src={urlFor(projects.project_icon)?.url()??""} alt={"Project Icon"} width={24} height={24} /></span>
                        <span className="text-xl font-semibold">Hosted Project</span>
                    </Link>
                </div>
                <div className="flex sm:hidden flex-col">
                    <div className="flex flex-col gap-2">
                        <Link className="btn btn-md btn-primary" href={projects.github_page} target="_blank" >
                            <span><Image className="invert" src={"/Github-Icon.svg"} alt={"GitHub Icon"} width={24} height={24} /></span>
                            <span className="text-xl font-semibold">Github Page</span>
                        </Link>
                        <Link className="btn btn-md btn-primary" href={projects.hosting_site} target="_blank" >
                            <span><Image src={urlFor(projects.project_icon)?.url()??""} alt={"Project Icon"} width={24} height={24} /></span>
                            <span className="text-xl font-semibold">Hosted Project</span>
                        </Link>
                    </div>
                </div>
                <div className="prose text-white max-w-3xl">
                    {Array.isArray(projects.project_description) && <PortableText value={projects.project_description} />}
                </div>
                { projects.related_websites != null && <h3 className="text-2xl font-bold">Related Websites</h3> }
                { projects.related_websites != null &&<ul className="list-inside flex flex-col gap-2">
                    {projects.related_websites.map((website: string, index: number) => {
                        return (
                            <li key={index} className="list-disc"><Link className="link link-primary" target="_blank" href={website}>{website}</Link></li>
                        )
                    })}
                </ul> }
                { projects.related_blog_posts != null && <h3 className="text-2xl font-bold">Related Blogs</h3> }
                { projects.related_blog_posts != null && <ul className="list-inside flex flex-col gap-2">
                    {projects.related_blog_posts.map((current: {
                        slug: {
                            _type: string;
                            current: string;
                        }
                        title: string;
                    }, index: number) => {
                        return (
                            <li key={index} className="list-disc"><Link className="link link-primary" target="_blank" href={"/blog/" + current.slug.current}>{current.title}</Link></li>
                        )
                    })}
                </ul> }
            </div>
        </main>
    )
}