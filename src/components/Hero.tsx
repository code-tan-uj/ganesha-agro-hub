import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-[1fr_420px] gap-8 py-8 md:py-16 items-center">
      <div>
        <div className="inline-block bg-[#f7fff9] text-[#166534] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
          🌾 Farm Fresh • Premium Quality
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-[#052e17] mb-4 leading-tight">
          Natural. Trusted.<br />
          <span className="text-[#166534]">Premium Pulses & Spices.</span>
        </h2>
        <p className="text-gray-600 mb-6 text-lg leading-relaxed">
          From Jabalpur farms to your kitchen — Ganesha Agro Hub sources, grades and packs high-quality pulses and spices with transparency and care.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="#products"
            className="bg-[#166534] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#14532d] transition-all duration-200 hover:scale-105 shadow-lg shadow-green-900/20"
          >
            View Products →
          </Link>
          <Link
            href="#contact"
            className="px-6 py-3 rounded-xl border-2 border-[#166534] text-[#166534] font-bold hover:bg-[#166534] hover:text-white transition-all duration-200"
          >
            Contact Us
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap gap-6">
          <div className="flex items-center gap-2 text-gray-600">
            <span className="w-3 h-3 bg-[#166534] rounded-full"></span>
            <span className="font-medium">Direct from farmers</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <span className="w-3 h-3 bg-[#F6C84C] rounded-full"></span>
            <span className="font-medium">Premium quality</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <span className="w-3 h-3 bg-[#064e3b] rounded-full"></span>
            <span className="font-medium">100% Natural</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center p-8 rounded-3xl bg-gradient-to-br from-[#f7fff9] via-[#fffaf0] to-white shadow-2xl border border-gray-100">
        <Image
          src="/ganesha-agro-hub-logo.jpeg"
          alt="Ganesha Agro Hub logo large"
          width={300}
          height={300}
          className="object-contain rounded-2xl"
          priority
        />
      </div>
    </section>
  );
}
