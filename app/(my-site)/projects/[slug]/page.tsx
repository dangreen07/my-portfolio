import config from '@/payload.config';
import { getPayload } from 'payload';
import { redirect } from 'next/navigation';
import Project from './project';

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig });

    const slug = (await params).slug;

    const project = await payload.find({
        collection: 'projects',       // change to your collection slug (e.g., 'blogs')
        where: {
            slug: { equals: slug }
        },
        limit: 1,
        depth: 1,
    }).then((value) => value.docs.at(0) ?? null);

    if (!project) {
        return redirect("/projects");
    }

    return <Project project={project} />
}