"use client";

import { useState } from "react";

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        projectDescription: "",
        budget: "",
        timeline: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Failed to submit form");
            }

            setSubmitStatus("success");
            setFormData({
                name: "",
                email: "",
                company: "",
                projectDescription: "",
                budget: "",
                timeline: "",
            });

            setTimeout(() => setSubmitStatus("idle"), 5000);
        } catch (error) {
            console.error("Error submitting form:", error);
            setSubmitStatus("error");
            setTimeout(() => setSubmitStatus("idle"), 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="py-12">
            <div className="max-w-2xl">
                <h1 className="text-4xl font-extrabold mb-4">Get in touch</h1>
                <p className="text-lg text-slate-700 mb-8">
                    Tell me about your project. I&apos;ll review it and get back to you within 24 hours with a response.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                            Name *
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email *
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900"
                        />
                    </div>

                    <div>
                        <label htmlFor="company" className="block text-sm font-medium mb-2">
                            Company/Business name
                        </label>
                        <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900"
                        />
                    </div>

                    <div>
                        <label htmlFor="projectDescription" className="block text-sm font-medium mb-2">
                            Project description *
                        </label>
                        <textarea
                            id="projectDescription"
                            name="projectDescription"
                            value={formData.projectDescription}
                            onChange={handleChange}
                            required
                            rows={5}
                            className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900"
                            placeholder="Tell me about your project. What problem are you solving? What does success look like?"
                        />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="budget" className="block text-sm font-medium mb-2">
                                Budget range
                            </label>
                            <select
                                id="budget"
                                name="budget"
                                value={formData.budget}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900"
                            >
                                <option value="">Select a range</option>
                                <option value="under-5k">Under $5,000</option>
                                <option value="5k-10k">$5,000 - $10,000</option>
                                <option value="10k-25k">$10,000 - $25,000</option>
                                <option value="25k-50k">$25,000 - $50,000</option>
                                <option value="above-50k">$50,000+</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="timeline" className="block text-sm font-medium mb-2">
                                Timeline
                            </label>
                            <select
                                id="timeline"
                                name="timeline"
                                value={formData.timeline}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900"
                            >
                                <option value="">Select a timeline</option>
                                <option value="urgent">ASAP (1-2 weeks)</option>
                                <option value="soon">Soon (1-2 months)</option>
                                <option value="flexible">Flexible (3+ months)</option>
                            </select>
                        </div>
                    </div>

                    {submitStatus === "success" && (
                        <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                            <p className="text-green-800 font-medium">
                                ✓ Thanks for reaching out! I&apos;ll get back to you soon.
                            </p>
                        </div>
                    )}

                    {submitStatus === "error" && (
                        <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                            <p className="text-red-800 font-medium">
                                Something went wrong. Please try again or email me directly.
                            </p>
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-slate-900 text-white px-6 py-3 rounded-md font-medium hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? "Sending..." : "Send inquiry"}
                    </button>

                    <p className="text-sm text-slate-600 text-center">
                        Or reach out directly: <a href="mailto:harmonickarma65@gmail.com" className="text-slate-900 underline">harmonickarma65@gmail.com</a>
                    </p>
                </form>
            </div>
        </div>
    );
}
