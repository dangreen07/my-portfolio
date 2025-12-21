import { getPost } from './data';
import { redirect } from 'next/navigation';
import PostClient from './post-client';

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug;
    const post = await getPost(slug);

    if (!post) {
        return redirect("/blog");
    }

    return <PostClient post={post} />
}