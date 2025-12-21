import Projects from "./projects";
import { getPayload } from "payload";
import config from '@/payload.config';
import { cacheLife } from "next/cache";

async function getProjects() {
    "use cache";
    cacheLife('minutes');

    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig });

    const all = await payload.find({
        collection: 'projects',
        pagination: false, // returns all docs
    }).then((value) => value.docs);
    return all;
}

export default async function ProjectsPage() {
    const projects = await getProjects();

    return <Projects projects={projects} />
}