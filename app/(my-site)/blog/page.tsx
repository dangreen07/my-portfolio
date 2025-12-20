import { getPayload } from "payload";
import Blog from "./blog";
import config from '@/payload.config';

export default async function BlogPage() {
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig });

    const all = await payload.find({
        collection: 'blog-posts',
        pagination: false, // returns all docs
    }).then((value) => value.docs);

    return <Blog posts={all} />
}