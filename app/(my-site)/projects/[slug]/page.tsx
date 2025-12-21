import config from '@/payload.config';
import { getPayload } from 'payload';
import { redirect } from 'next/navigation';
import Project from './project';
import { cacheLife } from 'next/cache';

async function getProject(slug: string) {
    "use cache";
    cacheLife('hours');

    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig });

    const project = await payload.find({
        collection: 'projects',       // change to your collection slug (e.g., 'blogs')
        where: {
            slug: { equals: slug }
        },
        limit: 1,
        depth: 1,
    }).then((value) => value.docs.at(0) ?? null);

    return project;
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug;

    const project = await getProject(slug);

    if (!project) {
        return redirect("/projects");
    }

    return <Project project={project} />
}