import { getProjects } from "./data";
import Projects from "./projects";

export const metadata = {
    title: "Projects — Daniel Green",
    description: "Selected projects and products built by Daniel Green.",
};

export default async function ProjectsPage() {
    const projects = await getProjects();

    return <Projects projects={projects} />
}