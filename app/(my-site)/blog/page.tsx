import { getPayload } from "payload";
import Blog from "./blog";
import config from '@/payload.config';
import { cacheLife } from "next/cache";

async function getPosts() {
    "use cache";
    cacheLife('minutes');

    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig });

    const all = await payload.find({
        collection: 'blog-posts',
        pagination: false, // returns all docs
    }).then((value) => value.docs);
    return all;
}

export default async function BlogPage() {
    const posts = await getPosts();

    return <Blog posts={posts} />
}