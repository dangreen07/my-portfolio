import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {children}
            <footer className="border-t border-gray-800/30 pt-16 pb-10 bg-gray-950 mt-auto">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    {/* About Column */}
                    <div className="md:col-span-2 space-y-4">
                        <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Daniel Green</h3>
                        <p className="text-gray-400 max-w-md">
                        Building exceptional digital experiences with modern technologies and a focus on performance, accessibility, and user experience.
                        </p>
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
                </div>
            </footer>
        </div>
    )
}