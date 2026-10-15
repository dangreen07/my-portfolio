import type { Metadata } from 'next';
import { getPost } from './data';
import { redirect } from 'next/navigation';
import PostClient from './post-client';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) {
        return {};
    }

    return {
        title: post.title,
        description: post.description || `Read ${post.title} on Daniel Green's blog.`,
    };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug;
    const post = await getPost(slug);

    if (!post) {
        return redirect("/blog");
    }

    return <PostClient post={post} />
}