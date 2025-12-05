"use client";

import Image from "next/image";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Premium Toor Dal",
    description: "Cleaned & graded for best cooking results. Rich in protein and essential nutrients.",
    price: "₹120/kg",
    image: "/turdal.png",
  },
  {
    id: 2,
    name: "Aromatic Turmeric",
    description: "Rich color & aroma for traditional dishes. 100% natural and pure.",
    price: "₹80/kg",
    image: "/turmeric.png",
  },
  {
    id: 3,
    name: "Kabuli Chana",
    description: "High protein & consistent size. Perfect for curries and salads.",
    price: "₹95/kg",
    image: "/chana.png",
  },
];

export default function Products() {
  const [buyingProduct, setBuyingProduct] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [formData, setFormData] = useState({ name: "", contact: "", quantity: "1" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleBuyClick = (product: typeof products[0]) => {
    setSelectedProduct(product);
    setShowModal(true);
    setStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedProduct) return;
    
    setStatus("loading");
    setBuyingProduct(selectedProduct.id.toString());

    try {
      const response = await fetch("/api/buy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          product: selectedProduct.name,
          price: selectedProduct.price,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", contact: "", quantity: "1" });
        setTimeout(() => {
          setShowModal(false);
          setStatus("idle");
        }, 2000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setBuyingProduct(null);
    }
  };

  return (
    <section id="products" className="mt-10">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">Our Products</h3>
          <p className="text-gray-500 text-sm mt-1">Farm-fresh quality delivered to your doorstep</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
          >
            <div className="relative h-48 md:h-56 bg-gradient-to-br from-[#f7fff9] to-[#fff6e6] overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5">
              <h5 className="font-bold text-lg text-gray-900">{product.name}</h5>
              <p className="text-gray-500 text-sm my-2 line-clamp-2">{product.description}</p>
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                <span className="text-2xl font-extrabold text-[#166534]">{product.price}</span>
                <button
                  onClick={() => handleBuyClick(product)}
                  disabled={buyingProduct === product.id.toString()}
                  className="bg-[#166534] text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-[#14532d] transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
                >
                  {buyingProduct === product.id.toString() ? "Processing..." : "Buy Now"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Buy Modal */}
      {showModal && selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="text-xl font-bold text-gray-900">Order {selectedProduct.name}</h4>
                <p className="text-[#166534] font-bold">{selectedProduct.price}</p>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
              >
                ×
              </button>
            </div>

            {status === "success" ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">✅</div>
                <h5 className="text-xl font-bold text-green-600">Order Placed!</h5>
                <p className="text-gray-500 mt-2">We&apos;ll contact you shortly to confirm your order.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#166534] focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="Phone Number or Email"
                  required
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#166534] focus:border-transparent"
                />
                <select
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#166534] focus:border-transparent"
                >
                  <option value="1">1 kg</option>
                  <option value="2">2 kg</option>
                  <option value="5">5 kg</option>
                  <option value="10">10 kg</option>
                  <option value="25">25 kg (Bulk)</option>
                  <option value="50">50 kg (Bulk)</option>
                </select>
                
                {status === "error" && (
                  <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>
                )}
                
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-[#166534] text-white py-3 rounded-xl font-bold hover:bg-[#14532d] transition-colors disabled:opacity-50"
                >
                  {status === "loading" ? "Placing Order..." : "Place Order"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}