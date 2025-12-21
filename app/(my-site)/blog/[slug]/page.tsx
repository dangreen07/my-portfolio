import config from '@/payload.config';
import { getPayload } from 'payload';
import Post from './post';
import { redirect } from 'next/navigation';
import { cacheLife } from 'next/cache';

async function getPosts(slug: string) {
    'use cache';
    cacheLife('hours');

    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig });

    const post = await payload.find({
        collection: 'blog-posts',       // change to your collection slug (e.g., 'blogs')
        where: {
            slug: { equals: slug }
        },
        limit: 1,
        depth: 1,
    }).then((value) => value.docs.at(0) ?? null);

    return post;
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug;

    const post = await getPosts(slug);

    if (!post) {
        return redirect("/blog");
    }

    return <Post post={post} />
}