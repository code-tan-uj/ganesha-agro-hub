import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-8 py-8 text-gray-500 text-sm border-t border-gray-100">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Image
            src="/ganesha-agro-hub-logo.jpeg"
            alt="logo"
            width={42}
            height={42}
            className="object-contain rounded-lg"
          />
          <div>
            <strong className="text-gray-800">Ganesha Agro Hub</strong>
            <div className="text-xs text-gray-500">Premium Pulses & Spices</div>
          </div>
        </div>
        <div className="text-center">
          © {year} Ganesha Agro Hub. All rights reserved.
        </div>
        <div className="flex gap-3">
          <Link href="#" className="text-gray-500 hover:text-[#166534]">
            Privacy
          </Link>
          <Link href="#" className="text-gray-500 hover:text-[#166534]">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
