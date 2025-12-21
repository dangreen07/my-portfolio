import { redirect } from "next/navigation";
import { getProject } from "./data";
import ProjectClient from "./project-client";

export default async function Project({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug;
    const project = await getProject(slug);

    if (!project) {
        return redirect("/projects");
    }

    return <ProjectClient project={project} />
}