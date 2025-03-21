import Image from "next/image";
import NavBar from "@/components/NavBar";
import { FaExternalLinkAlt, FaCheckCircle, FaGithub } from "react-icons/fa";
import { client } from "@/sanity/client";
import { SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Link from "next/link";

const PRODUCTS_QUERY = `*[
  _type == "product"
  && defined(slug.current)
]|order(publishedAt desc){
  _id, 
  name, 
  slug, 
  description, 
  image, 
  price, 
  features,
  externalUrl
}`;

const options = { next: { revalidate: 30 } };

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export default async function ProductsPage() {
  const products = await client.fetch<SanityDocument[]>(PRODUCTS_QUERY, {}, options);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900">
      <main className="flex flex-col flex-grow">
        <NavBar />
        <div className="h-24" />
        
        {/* Hero Section */}
        <section className="pt-20 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute w-[600px] h-[600px] -top-40 -left-40 bg-blue-600/10 rounded-full blur-3xl"></div>
            <div className="absolute w-[600px] h-[600px] top-1/2 left-1/2 bg-purple-600/10 rounded-full blur-3xl"></div>
            <div className="absolute w-[600px] h-[600px] -bottom-40 -right-40 bg-teal-600/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                  My SaaS Products
                </span>
              </h1>
              <p className="text-xl text-gray-300/80 max-w-3xl mx-auto">
                Discover innovative SaaS solutions I&apos;ve developed to solve real-world problems
                without breaking the bank with expensive subscriptions.
              </p>
            </div>
            
            <div className="space-y-24">
              {products.map((product, index) => (
                <div 
                  key={product._id}
                  className="flex flex-col lg:flex-row gap-12 items-center"
                >
                  <div className={`w-full lg:w-1/2 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="relative">
                      <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 to-teal-500/30 rounded-3xl blur-xl opacity-50"></div>
                      <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-2 rounded-2xl overflow-hidden">
                        <Image 
                          src={urlFor(product.image)?.url() || ''}
                          alt={product.name}
                          width={800}
                          height={500}
                          className="rounded-xl object-cover w-full h-auto aspect-video"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-full lg:w-1/2 space-y-6">
                    <div className="flex flex-wrap justify-between items-center mb-2">
                      <h2 className="text-3xl md:text-4xl font-bold text-white">{product.name}</h2>
                      <span className="px-4 py-2 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-full font-semibold">
                        {product.price}
                      </span>
                    </div>
                    
                    <p className="text-lg text-gray-300">{product.description}</p>
                    
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-white">Key Features:</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {product.features && product.features.map((feature: string, idx: number) => (
                          <li key={idx} className="flex items-start">
                            <FaCheckCircle className="mt-1 mr-3 text-teal-400 flex-shrink-0" />
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <a 
                      href={product.externalUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="mt-6 inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium hover:translate-y-[-2px] transition-all shadow-lg shadow-blue-500/20"
                    >
                      Visit Website <FaExternalLinkAlt className="ml-2" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 mb-20 mx-6 md:mx-16">
          <div className="rounded-3xl p-12 border border-white/10 bg-gradient-to-r from-blue-900/20 to-teal-900/20 shadow-2xl shadow-blue-900/5 backdrop-blur-sm">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Want to see my other work?</h2>
              <p className="text-xl text-gray-300/90 max-w-2xl mx-auto mb-10">
                Check out my open-source projects and read my blog for insights on technology and development.
              </p>
              <div className="flex flex-wrap justify-center gap-5">
                <Link 
                  href="/projects" 
                  className="px-8 py-4 bg-white text-gray-900 rounded-xl font-medium hover:translate-y-[-2px] transition-all shadow-lg"
                >
                  See My Projects
                </Link>
                <Link 
                  href="/blog" 
                  className="px-8 py-4 bg-transparent text-white rounded-xl font-medium border border-white/20 hover:bg-white/10 hover:translate-y-[-2px] transition-all"
                >
                  Read My Blog
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Footer Section */}
        <footer className="border-t border-gray-800/30 pt-16 pb-10 bg-gray-950">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
              {/* About Column */}
              <div className="md:col-span-2 space-y-4">
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Daniel Green</h3>
                <p className="text-gray-400 max-w-md">
                  Building exceptional digital experiences with modern technologies and a focus on performance, accessibility, and user experience.
                </p>
                <div className="flex space-x-4 pt-4">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <FaGithub size={22} />
                    <span className="sr-only">GitHub</span>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.1 10.1 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                    <span className="sr-only">Twitter</span>
                  </a>
                </div>
              </div>
              
              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-5">Quick Links</h3>
                <ul className="space-y-3">
                  <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                  <li><Link href="/projects" className="text-gray-400 hover:text-white transition-colors">Projects</Link></li>
                  <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
                  <li><Link href="/products" className="text-gray-400 hover:text-white transition-colors">Products</Link></li>
                </ul>
              </div>
            </div>
            
            {/* Bottom Bar */}
            <div className="pt-8 border-t border-gray-800/30 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} Daniel Green. All rights reserved.
              </p>
              <div className="mt-4 md:mt-0">
                <ul className="flex space-x-6 text-sm">
                  <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Terms of Service</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
} 