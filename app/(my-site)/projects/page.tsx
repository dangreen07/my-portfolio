import { getProjects } from "./data";
import Projects from "./projects";

export default async function ProjectsPage() {
    const projects = await getProjects();

    return <Projects projects={projects} />
}