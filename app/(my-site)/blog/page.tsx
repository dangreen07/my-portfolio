import BlogClient from "./blog-client";
import { getPosts } from "./data";

export const metadata = {
    title: "Blog — Daniel Green",
    description: "Short essays, technical write-ups, and notes from building things.",
};

export default async function BlogPage() {
    const posts = await getPosts();
    return <BlogClient posts={posts} />
}