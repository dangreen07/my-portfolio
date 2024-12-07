import NavBar from "@/components/NavBar";
import { client } from "@/sanity/client";
import { SanityDocument } from "next-sanity";
import Link from "next/link";

const POSTS_QUERY = `*[
    _type == "project"
    && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, start_date}`;

const options = { next: { revalidate: 30 } };

export default async function Page() {
    const projects = await client.fetch<SanityDocument[]>(POSTS_QUERY,  {}, options);

    return (
        <main className="min-h-screen">
            <NavBar />
            <div className="h-28" />
            <div className="container mx-auto max-w-3xl px-8 pb-8">
                <h1 className="text-5xl text-center font-bold mb-8">Projects</h1>
                <ul className="flex flex-col gap-y-4">
                    {projects.map((project) => (
                        <li key={project._id} className="hover:underline">
                            <Link href={`/projects/${project.slug.current}`}>
                                <h2 className="text-xl font-semibold">{project.title}</h2>
                                <p>{new Date(project.start_date).toLocaleDateString()}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    )
}