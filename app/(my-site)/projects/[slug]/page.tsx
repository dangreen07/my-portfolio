import type { Metadata } from 'next';
import { getProject } from './data';
import Project from './project';
import { Suspense } from 'react';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const project = await getProject(slug);

    if (!project) {
        return {};
    }

    return {
        title: project.title,
        description: project.description || `Learn more about ${project.title}, a project by Daniel Green.`,
    };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    return <Suspense>
        <Project params={params} />
    </Suspense>
}