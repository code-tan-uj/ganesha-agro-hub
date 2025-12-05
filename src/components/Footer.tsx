import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-12 py-8 text-gray-500 text-sm border-t border-gray-200">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Image
            src="/ganesha-agro-hub-logo.jpeg"
            alt="logo"
            width={48}
            height={48}
            className="object-contain rounded-xl"
          />
          <div>
            <strong className="text-gray-900 text-base">Ganesha Agro Hub</strong>
            <div className="text-xs text-gray-500">Premium Pulses & Spices • Jabalpur</div>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <Link href="#about" className="text-gray-500 hover:text-[#166534] transition-colors">
            About
          </Link>
          <Link href="#products" className="text-gray-500 hover:text-[#166534] transition-colors">
            Products
          </Link>
          <Link href="#contact" className="text-gray-500 hover:text-[#166534] transition-colors">
            Contact
          </Link>
          <a href="tel:+919876543210" className="text-gray-500 hover:text-[#166534] transition-colors">
            Call Us
          </a>
        </div>
        
        <div className="text-center md:text-right">
          <div className="text-gray-400 text-xs mb-1">Made with ❤️ in India</div>
          <div>© {year} Ganesha Agro Hub</div>
        </div>
      </div>
    </footer>
  );
}
