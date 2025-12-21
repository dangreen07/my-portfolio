
import { Suspense } from 'react';
import Post from './post';

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    return <Suspense>
        <Post params={params} />
    </Suspense>
}