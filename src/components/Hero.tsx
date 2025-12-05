import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-[1fr_420px] gap-8 py-12 items-center">
      <div>
        <h2 className="text-2xl md:text-4xl font-bold text-[#052e17] mb-2">
          Natural. Trusted. Premium Pulses & Spices.
        </h2>
        <p className="text-gray-500 mb-4">
          From Jabalpur farms to your kitchen — Ganesha Agro Hub sources, grades and packs high-quality pulses and spices with transparency and care.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="#products"
            className="bg-[#166534] text-white px-4 py-2 rounded-lg font-bold hover:bg-[#14532d] transition-colors"
          >
            View Products
          </Link>
          <Link
            href="#contact"
            className="px-4 py-2 rounded-lg border-2 border-[#166534] text-[#166534] font-bold hover:bg-[#166534] hover:text-white transition-colors"
          >
            Contact Us
          </Link>
        </div>

        <div className="mt-5 text-gray-500 text-sm flex flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#166534] rounded-full"></span>
            Direct from farmers
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#F6C84C] rounded-full"></span>
            Premium quality
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center p-6 rounded-2xl bg-gradient-to-b from-[#fffaf0] to-white shadow-lg">
        <Image
          src="/ganesha-agro-hub-logo.jpeg"
          alt="Ganesha Agro Hub logo large"
          width={260}
          height={260}
          className="object-contain rounded-xl"
        />
      </div>
    </section>
  );
}
