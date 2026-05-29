"use client";

import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const serviceTypes = [
  "AI Strategy & Audit",
  "Custom AI System Build",
  "Automation & Ongoing Support",
  "Something else",
] as const;

export default function Contact() {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [serviceType, setServiceType] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const token = recaptchaRef.current?.getValue();
      if (!token) {
        throw new Error("reCAPTCHA verification failed");
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ serviceType, email, recaptchaToken: token }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setSubmitStatus("success");
      setServiceType("");
      setEmail("");
      recaptchaRef.current?.reset();
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-12">
      <div className="max-w-xl">
        <h1 className="text-4xl font-extrabold mb-4">Get in touch</h1>
        <p className="text-lg text-slate-700 mb-8">
          Pick the service you&apos;re interested in and leave your email. I&apos;ll reach out to discuss next steps.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <fieldset>
            <legend className="block text-sm font-medium mb-3">What do you need help with? *</legend>
            <div className="space-y-3">
              {serviceTypes.map((type) => (
                <label
                  key={type}
                  className={`block border rounded-lg p-4 cursor-pointer transition-colors ${
                    serviceType === type
                      ? "border-slate-900 bg-slate-50"
                      : "border-slate-200 hover:border-slate-400"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="serviceType"
                      value={type}
                      checked={serviceType === type}
                      onChange={(e) => setServiceType(e.target.value)}
                      required
                      className="accent-slate-900"
                    />
                    <span className="text-sm font-medium">{type}</span>
                  </div>
                </label>
              ))}
            </div>
          </fieldset>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Your email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900"
              placeholder="you@example.com"
            />
          </div>

          {submitStatus === "success" && (
            <div className="p-4 bg-green-50 border border-green-200 rounded-md">
              <p className="text-green-800 font-medium">
                ✓ Thanks! I&apos;ll get back to you within 24 hours.
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

          <div className="flex justify-center">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting || !serviceType}
            className="w-full bg-slate-900 text-white px-6 py-3 rounded-md font-medium hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send inquiry"}
          </button>

          <p className="text-sm text-slate-600 text-center">
            Or email me directly:{" "}
            <a
              href={`mailto:${process.env.NEXT_PUBLIC_ADMIN_EMAIL!}`}
              className="text-slate-900 underline"
            >
              {process.env.NEXT_PUBLIC_ADMIN_EMAIL!}
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
