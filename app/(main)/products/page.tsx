import Image from "next/image";
import NavBar from "@/components/NavBar";
import { FaExternalLinkAlt, FaCheckCircle } from "react-icons/fa";
import { client } from "@/sanity/client";
import { SanityDocument } from "@sanity/client";
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
    <div className="min-h-screen bg-gray-950 text-white">
      <main className="flex flex-col flex-grow">
        <NavBar />
        <div className="h-24" />

        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Products
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
                    <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
                      <Image
                        src={urlFor(product.image)?.url() || ''}
                        alt={product.name}
                        width={800}
                        height={500}
                        className="rounded-lg object-cover w-full h-auto aspect-video"
                      />
                    </div>
                  </div>

                  <div className="w-full lg:w-1/2 space-y-6">
                    <div className="flex flex-wrap justify-between items-center mb-2">
                      <h2 className="text-3xl md:text-4xl font-bold text-white">{product.name}</h2>
                      <span className="px-4 py-2 bg-blue-600 text-white rounded-full font-semibold">
                        {product.price}
                      </span>
                    </div>

                    <p className="text-lg text-gray-300">{product.description}</p>

                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-white">Key Features:</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {product.features && product.features.map((feature: string, idx: number) => (
                          <li key={idx} className="flex items-start">
                            <FaCheckCircle className="mt-1 mr-3 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href={product.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
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