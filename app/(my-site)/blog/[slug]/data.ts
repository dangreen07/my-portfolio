"use server";

import config from '@/payload.config';
import { getPayload } from 'payload';

export async function getPost(slug: string) {

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