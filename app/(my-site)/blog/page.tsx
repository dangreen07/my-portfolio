import BlogClient from "./blog-client";
import { getPosts } from "./data";

export default async function BlogPage() {
    const posts = await getPosts();
    return <BlogClient posts={posts} />
}