import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {children}
            <footer className="border-t border-white/10 pt-16 pb-10 bg-[#0B0F14] mt-auto">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                        {/* About Column */}
                        <div className="md:col-span-2 space-y-4">
                            <h3 className="text-xl font-bold text-[#4F8FF7]">Daniel Green</h3>
                            <p className="text-gray-400 max-w-md">
                                I build small, reliable tools for the web. I care about performance, accessibility, and clear code.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-lg font-semibold mb-5">Quick Links</h3>
                            <ul className="space-y-3">
                                <li><Link href="/" className="text-gray-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F8FF7] focus-visible:ring-offset-2 ring-offset-[#0B0F14] rounded">Home</Link></li>
                                <li><Link href="/projects" className="text-gray-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F8FF7] focus-visible:ring-offset-2 ring-offset-[#0B0F14] rounded">Projects</Link></li>
                                <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F8FF7] focus-visible:ring-offset-2 ring-offset-[#0B0F14] rounded">Blog</Link></li>
                                <li><Link href="/products" className="text-gray-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F8FF7] focus-visible:ring-offset-2 ring-offset-[#0B0F14] rounded">Products</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}