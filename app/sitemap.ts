import { MetadataRoute } from 'next'
import { client } from '@/sanity/client'
import { groq } from 'next-sanity'

// This URL should be replaced with your actual domain
const SITE_URL = 'https://mrgreeny.dev'

// Define interface for blog post data
interface BlogPost {
  slug: string
  publishedAt: string
}

// Function to fetch project slugs from Sanity
async function getProjectSlugs() {
  const query = groq`*[_type == "project" && defined(slug.current)] {
    "slug": slug.current
  }`
  
  const projects = await client.fetch(query)
  return projects.map((project: { slug: string }) => project.slug)
}

// Function to fetch blog post slugs from Sanity
async function getBlogSlugs() {
  const query = groq`*[_type == "post" && defined(slug.current)] {
    "slug": slug.current,
    publishedAt
  }`
  
  const posts = await client.fetch(query)
  return posts.map((post: { slug: string, publishedAt: string }) => ({
    slug: post.slug,
    publishedAt: post.publishedAt
  }))
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Get dynamic routes
  const projectSlugs = await getProjectSlugs()
  const blogPosts = await getBlogSlugs()

  // Static routes
  const staticRoutes = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: `${SITE_URL}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/products`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  // Dynamic project routes
  const projectRoutes = projectSlugs.map((slug: string) => ({
    url: `${SITE_URL}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Dynamic blog routes
  const blogRoutes = blogPosts.map((post: BlogPost) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt) || new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Combine all routes
  return [...staticRoutes, ...projectRoutes, ...blogRoutes]
}
