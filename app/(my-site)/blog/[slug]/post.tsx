import { redirect } from "next/navigation";
import { getPost } from "./data";
import PostClient from "./post-client";

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug;
    const post = await getPost(slug);

    if (!post) {
        return redirect("/blog");
    }

    return <PostClient post={post} />
}