"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: "",
    interest: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/interest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", contact: "", message: "", interest: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="mt-7">
      <div className="bg-gradient-to-b from-[#064e3b] to-[#064e3b] text-white p-6 md:p-8 rounded-xl">
        <h3 className="text-xl font-bold mb-2">Get in touch</h3>
        <p className="opacity-90 text-sm">
          Have questions or want to place an order? Send us a message or call. We&apos;d love to hear from you!
        </p>

        <form onSubmit={handleSubmit} className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#F6C84C]"
            />
            <input
              type="text"
              name="contact"
              placeholder="Email or phone"
              required
              value={formData.contact}
              onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
              className="w-full px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#F6C84C]"
            />
            <select
              name="interest"
              required
              value={formData.interest}
              onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
              className="w-full px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#F6C84C] md:col-span-2"
            >
              <option value="">Select your interest</option>
              <option value="toor-dal">Premium Toor Dal</option>
              <option value="turmeric">Aromatic Turmeric</option>
              <option value="chana">Kabuli Chana</option>
              <option value="bulk-order">Bulk Order Inquiry</option>
              <option value="partnership">Partnership / Retail</option>
              <option value="other">Other</option>
            </select>
            <textarea
              name="message"
              placeholder="Message..."
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#F6C84C] md:col-span-2"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="md:col-span-2 bg-[#F6C84C] text-[#166534] font-extrabold px-4 py-3 rounded-lg hover:bg-[#e5b83d] transition-colors disabled:opacity-50"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>

        {status === "success" && (
          <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-lg">
            Thank you! We&apos;ll get back to you soon.
          </div>
        )}

        {status === "error" && (
          <div className="mt-4 p-3 bg-red-100 text-red-800 rounded-lg">
            Something went wrong. Please try again or contact us directly.
          </div>
        )}

        <div className="mt-4 flex flex-wrap gap-4 items-center text-white/95 text-sm">
          <div>📍 Jabalpur, Madhya Pradesh</div>
          <div>📞 +91 98765 43210</div>
          <div>✉️ info@ganeshaagrohub.com</div>
        </div>
      </div>
    </section>
  );
}
