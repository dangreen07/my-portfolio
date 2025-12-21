import BlogClient from "./blog-client";
import { getPosts } from "./data";

export default async function Blog() {
    const posts = await getPosts();
    return <BlogClient posts={posts} />
}