import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Premium Toor Dal",
    description: "Cleaned & graded for best cooking results.",
    price: "₹120/kg",
    label: "Toor",
  },
  {
    id: 2,
    name: "Aromatic Turmeric",
    description: "Rich color & aroma for traditional dishes.",
    price: "₹80/kg",
    label: "Turmeric",
  },
  {
    id: 3,
    name: "Kabuli Chana",
    description: "High protein & consistent size.",
    price: "₹95/kg",
    label: "Chana",
  },
];

export default function Products() {
  return (
    <section id="products" className="mt-7">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold">Our Products</h3>
        <Link href="#" className="text-[#166534] font-bold hover:underline">
          See all
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex md:flex-col gap-4 items-center md:items-start p-4 rounded-lg bg-white shadow-md"
          >
            <div className="min-w-[94px] h-[74px] md:w-full md:h-24 rounded-lg bg-[#fff6e6] flex items-center justify-center font-bold text-gray-700">
              {product.label}
            </div>
            <div className="flex-1">
              <h5 className="font-bold">{product.name}</h5>
              <p className="text-gray-500 text-sm my-1">{product.description}</p>
            </div>
            <div className="md:w-full flex md:flex-row items-center justify-between gap-2">
              <span className="font-extrabold text-[#166534]">{product.price}</span>
              <Link
                href="#contact"
                className="bg-[#166534] text-white px-3 py-2 rounded-lg font-bold text-sm hover:bg-[#14532d] transition-colors"
              >
                Buy
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
