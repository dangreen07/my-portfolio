import Image from "next/image";
import NavBar from "@/components/NavBar";
import { FaExternalLinkAlt, FaCheckCircle } from "react-icons/fa";
import { client } from "@/sanity/client";
import { SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

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
      </main>
    </div>
  );
} 