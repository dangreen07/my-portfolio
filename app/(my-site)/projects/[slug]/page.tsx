import Project from './project';
import { Suspense } from 'react';

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    return <Suspense>
        <Project params={params} />
    </Suspense>
}