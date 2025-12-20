import config from '@/payload.config';
import { getPayload } from 'payload';
import Post from './post';
import { redirect } from 'next/navigation';

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig });

    const slug = (await params).slug;

    const post = await payload.find({
        collection: 'blog-posts',       // change to your collection slug (e.g., 'blogs')
        where: {
            slug: { equals: slug }
        },
        limit: 1,
        depth: 0                   // reduce populated data if you don't need relations
    }).then((value) => value.docs.at(0) ?? null);

    if (!post) {
        return redirect("/blog");
    }

    return <Post post={post} />
}