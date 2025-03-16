import Image from "next/image";
import NavBar from "@/components/NavBar";
import { FaExternalLinkAlt, FaCheckCircle } from "react-icons/fa";

// SaaS products
const products = [
  {
    id: 1,
    name: "Problem Pilot",
    description: "Our AI analyzes Reddit discussions to uncover valuable SaaS opportunities. Find real software problems with validated pain points that users are actively discussing.",
    image: "/problem-pilot.jpeg",
    price: "$5/mo",
    features: [
      "Market-Validated Problems", 
      "AI-Powered Analysis", 
      "Instant Validation", 
      "Reddit Community Analysis", 
      "Pain Point Scoring"
    ],
    externalUrl: "https://www.problempilot.com/"
  },
  {
    id: 2,
    name: "Flourish Freelance",
    description: "AI-Powered Freelancing Platform that transforms your freelance business with automated client acquisition. Automate outreach, schedule meetings effortlessly, and generate proposals with ease.",
    image: "/flourish-freelance.jpeg",
    price: "$29/mo",
    features: [
      "Smart Lead Generation", 
      "Personalized Outreach", 
      "Intelligent Proposals", 
      "Unlimited Cold Emails", 
      "AI Prospect Nurturing",
      "Link Call Scheduling"
    ],
    externalUrl: "https://www.flourishfreelance.com/"
  }
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950 relative">
      {/* Background gradients */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute w-[800px] h-[800px] -top-100 -right-100 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '15s' }}></div>
        <div className="absolute w-[600px] h-[600px] top-1/3 -left-100 bg-teal-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '20s' }}></div>
        <div className="absolute w-[700px] h-[700px] bottom-0 right-1/4 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '25s' }}></div>
      </div>
      
      <div className="relative z-10">
        <NavBar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="heading-gradient">
                  My SaaS Products
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover innovative SaaS solutions I&apos;ve developed to solve real-world problems
                without breaking the bank with expensive subscriptions.
              </p>
            </div>
            
            <div className="space-y-24">
              {products.map((product, index) => (
                <div 
                  key={product.id}
                  className="flex flex-col lg:flex-row gap-12 items-center"
                >
                  <div className={`w-full lg:w-1/2 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="relative">
                      <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 to-teal-500/30 rounded-3xl blur-xl opacity-50"></div>
                      <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-2 rounded-2xl overflow-hidden">
                        <Image 
                          src={product.image} 
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
                        {product.features.map((feature, idx) => (
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
                      className="mt-6 inline-flex items-center justify-center w-full md:w-auto btn-primary"
                    >
                      Visit Website <FaExternalLinkAlt className="ml-2" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 