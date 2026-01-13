import type { MetadataRoute } from 'next';
import { getPosts } from './(my-site)/blog/data';
import { getProjects } from './(my-site)/projects/data';

const baseUrl = "https://mrgreeny.dev"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const [blogs, projects] = await Promise.all([getPosts(), getProjects()]);
    return [
        {
            url: `${baseUrl}/`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.5
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/projects`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.5
        },
        ...blogs.map((value) => ({
            url: `${baseUrl}/blog/${value.slug}`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.6
        })),
        ...projects.map((value) => ({
            url: `${baseUrl}/projects/${value.slug}`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.4
        }))
    ];
}