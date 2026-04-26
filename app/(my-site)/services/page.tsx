import Link from "next/link";

export const metadata = {
    title: "Services — Daniel Green | Freelance Webapp Development",
    description: "Custom web application development services for SMBs. Design, development, optimization, and technical consultation.",
};

export default function Services() {
    return (
        <div className="py-12">
            <h1 className="text-4xl font-extrabold mb-6">Services</h1>
            <p className="text-lg text-slate-700 mb-12 max-w-2xl">
                I offer end-to-end web application development for small businesses and startups. Whether you&apos;re starting from scratch or scaling existing software, I can help.
            </p>

            {/* Service offerings */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="border border-slate-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-3">Full Project Development</h3>
                    <p className="text-slate-700 mb-4">
                        Take your idea from concept to production. I handle design, development, testing, and deployment. Perfect for MVPs, new products, or complete rewrites.
                    </p>
                    <ul className="text-sm text-slate-600 space-y-2">
                        <li>✓ Discovery & planning</li>
                        <li>✓ UI/UX design & prototyping</li>
                        <li>✓ Full-stack development</li>
                        <li>✓ Testing & optimization</li>
                        <li>✓ Deployment & support</li>
                    </ul>
                </div>

                <div className="border border-slate-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-3">Feature Development</h3>
                    <p className="text-slate-700 mb-4">
                        Add new features to your existing web application. I can integrate with your current codebase, maintain your tech stack, and ship features quickly.
                    </p>
                    <ul className="text-sm text-slate-600 space-y-2">
                        <li>✓ Feature scoping</li>
                        <li>✓ Design & implementation</li>
                        <li>✓ Integration with existing code</li>
                        <li>✓ Testing & QA</li>
                        <li>✓ Deployment assistance</li>
                    </ul>
                </div>

                <div className="border border-slate-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-3">Performance & Optimization</h3>
                    <p className="text-slate-700 mb-4">
                        Your app is slow, expensive to run, or hard to maintain? I audit your codebase and optimize for speed, cost, and developer experience.
                    </p>
                    <ul className="text-sm text-slate-600 space-y-2">
                        <li>✓ Performance audits</li>
                        <li>✓ Database optimization</li>
                        <li>✓ Infrastructure improvements</li>
                        <li>✓ Code quality assessment</li>
                        <li>✓ Cost reduction strategies</li>
                    </ul>
                </div>

                <div className="border border-slate-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-3">Technical Consultation</h3>
                    <p className="text-slate-700 mb-4">
                        Need advice on architecture, tech stack, or hiring decisions? I offer hourly consulting to help you make informed technical decisions.
                    </p>
                    <ul className="text-sm text-slate-600 space-y-2">
                        <li>✓ Architecture review</li>
                        <li>✓ Tech stack selection</li>
                        <li>✓ Hiring guidance</li>
                        <li>✓ Scalability planning</li>
                        <li>✓ Strategic advice</li>
                    </ul>
                </div>
            </div>

            {/* Process */}
            <section className="border-t border-slate-200 pt-12">
                <h2 className="text-2xl font-bold mb-8">How I work</h2>
                <div className="space-y-6">
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
                            1
                        </div>
                        <div>
                            <h3 className="font-bold mb-1">Discovery Call</h3>
                            <p className="text-slate-700">
                                30-minute call to understand your goals, budget, timeline, and any constraints. No pressure, just conversation.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
                            2
                        </div>
                        <div>
                            <h3 className="font-bold mb-1">Proposal & Planning</h3>
                            <p className="text-slate-700">
                                I send a detailed proposal with scope, timeline, deliverables, and cost. We align on approach before starting.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
                            3
                        </div>
                        <div>
                            <h3 className="font-bold mb-1">Regular Updates</h3>
                            <p className="text-slate-700">
                                Weekly progress updates, demo calls, and open communication. You see working software early and often.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
                            4
                        </div>
                        <div>
                            <h3 className="font-bold mb-1">Launch & Support</h3>
                            <p className="text-slate-700">
                                Deploy to production with confidence. I provide post-launch support and maintenance options.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech stack */}
            <section className="border-t border-slate-200 pt-12 mt-12">
                <h2 className="text-2xl font-bold mb-6">Tech Stack</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div>
                        <h3 className="font-bold mb-3">Frontend</h3>
                        <ul className="text-sm text-slate-700 space-y-1">
                            <li>• Next.js</li>
                            <li>• React</li>
                            <li>• TypeScript</li>
                            <li>• Tailwind CSS</li>
                            <li>• Modern web APIs</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-3">Backend</h3>
                        <ul className="text-sm text-slate-700 space-y-1">
                            <li>• Node.js / Express</li>
                            <li>• Rust</li>
                            <li>• PostgreSQL</li>
                            <li>• REST & GraphQL</li>
                            <li>• Authentication systems</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-3">Infrastructure</h3>
                        <ul className="text-sm text-slate-700 space-y-1">
                            <li>• Vercel</li>
                            <li>• AWS</li>
                            <li>• Docker</li>
                            <li>• CI/CD pipelines</li>
                            <li>• Database design</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="border-t border-slate-200 pt-12 mt-12">
                <h2 className="text-2xl font-bold mb-8">FAQ</h2>
                <div className="space-y-6 max-w-2xl">
                    <div>
                        <h3 className="font-bold mb-2">How much does a project cost?</h3>
                        <p className="text-slate-700">
                            It depends on scope. Most projects I take on range from $5,000 to $50,000+. A simple MVP might be on the lower end, while a complex platform with many features will be higher. We discuss budget in the discovery call and I provide a detailed estimate before we start.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold mb-2">How long does it take?</h3>
                        <p className="text-slate-700">
                            A typical MVP takes 2-8 weeks depending on complexity. More complex projects take longer. I provide a realistic timeline upfront and keep you updated as we progress.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold mb-2">Do you sign NDAs?</h3>
                        <p className="text-slate-700">
                            Yes, absolutely. I take confidentiality seriously and am happy to sign NDAs or other legal agreements your company requires.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold mb-2">Can you maintain/support the app after launch?</h3>
                        <p className="text-slate-700">
                            Yes. I offer post-launch support, maintenance, and feature development. We can set up an ongoing retainer or hire me as needed.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold mb-2">What if I need custom database design?</h3>
                        <p className="text-slate-700">
                            That&apos;s a core strength. I can design databases for scale, optimize queries, and build APIs that work efficiently.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold mb-2">Can you work with my existing codebase?</h3>
                        <p className="text-slate-700">
                            Yes. I can integrate with existing Next.js, React, Node.js, or other JavaScript projects. If it&apos;s a different tech stack, I can learn it or recommend whether it makes sense.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="border-t border-slate-200 pt-12 mt-12 text-center">
                <h2 className="text-2xl font-bold mb-4">Ready to start your project?</h2>
                <p className="text-slate-700 mb-6 max-w-xl mx-auto">
                    Let&apos;s talk about your idea. No obligation — just a conversation about whether we&apos;re a good fit.
                </p>
                <Link
                    href="/contact"
                    className="inline-block bg-slate-900 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-slate-800"
                >
                    Start a discovery call
                </Link>
            </section>
        </div>
    );
}
