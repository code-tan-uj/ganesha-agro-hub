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
      const response = await fetch("/api/contact", {
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
    <section id="contact" className="mt-10">
      <div className="bg-gradient-to-br from-[#166534] to-[#064e3b] text-white p-6 md:p-10 rounded-2xl shadow-xl">
        <div className="max-w-2xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-2">Get in Touch</h3>
          <p className="text-white/80 text-sm md:text-base">
            Have questions or want to place a bulk order? Send us a message or call. We&apos;d love to hear from you!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3.5 rounded-xl bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F6C84C] border-0"
            />
            <input
              type="text"
              name="contact"
              placeholder="Email or phone"
              required
              value={formData.contact}
              onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
              className="w-full px-4 py-3.5 rounded-xl bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F6C84C] border-0"
            />
            <select
              name="interest"
              required
              value={formData.interest}
              onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
              className="w-full px-4 py-3.5 rounded-xl bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#F6C84C] md:col-span-2 border-0"
            >
              <option value="" className="text-gray-400">Select your interest</option>
              <option value="toor-dal">Premium Toor Dal</option>
              <option value="turmeric">Aromatic Turmeric</option>
              <option value="chana">Kabuli Chana</option>
              <option value="bulk-order">Bulk Order Inquiry</option>
              <option value="partnership">Partnership / Retail</option>
              <option value="other">Other</option>
            </select>
            <textarea
              name="message"
              placeholder="Your message..."
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3.5 rounded-xl bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F6C84C] md:col-span-2 border-0 resize-none"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="md:col-span-2 bg-[#F6C84C] text-[#064e3b] font-extrabold px-6 py-4 rounded-xl hover:bg-[#f5d76e] transition-all duration-200 hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100 text-lg shadow-lg"
            >
              {status === "loading" ? "Sending..." : "Send Message →"}
            </button>
          </div>
        </form>

        {status === "success" && (
          <div className="mt-6 p-4 bg-green-100 text-green-800 rounded-xl flex items-center gap-3">
            <span className="text-2xl">✅</span>
            <div>
              <p className="font-bold">Message Sent!</p>
              <p className="text-sm">We&apos;ll get back to you within 24 hours.</p>
            </div>
          </div>
        )}

        {status === "error" && (
          <div className="mt-6 p-4 bg-red-100 text-red-800 rounded-xl flex items-center gap-3">
            <span className="text-2xl">❌</span>
            <div>
              <p className="font-bold">Something went wrong</p>
              <p className="text-sm">Please try again or contact us directly.</p>
            </div>
          </div>
        )}

        <div className="mt-8 pt-6 border-t border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a href="https://maps.google.com/?q=Jabalpur,Madhya+Pradesh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/90 hover:text-white transition-colors group">
              <span className="text-2xl">📍</span>
              <div>
                <p className="text-sm text-white/60">Location</p>
                <p className="font-medium group-hover:underline">Jabalpur, Madhya Pradesh</p>
              </div>
            </a>
            <a href="tel:+919876543210" className="flex items-center gap-3 text-white/90 hover:text-white transition-colors group">
              <span className="text-2xl">📞</span>
              <div>
                <p className="text-sm text-white/60">Phone</p>
                <p className="font-medium group-hover:underline">+91 70006 25003</p>
              </div>
            </a>
            <a href="mailto:ganeshaagrohub@gmail.com" className="flex items-center gap-3 text-white/90 hover:text-white transition-colors group">
              <span className="text-2xl">✉️</span>
              <div>
                <p className="text-sm text-white/60">Email</p>
                <p className="font-medium group-hover:underline">ganeshaagrohub@gmail.com</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
