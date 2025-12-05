export default function About() {
  const features = [
    {
      title: "Quality",
      description: "Strict quality checks at every stage to ensure consistent grade and taste.",
    },
    {
      title: "Traceability",
      description: "Traceable sourcing from partner farms with transparent processes.",
    },
    {
      title: "Sustainability",
      description: "We promote eco-friendly practices and fair farmer compensation.",
    },
  ];

  return (
    <section id="about" className="mt-6">
      <div className="bg-[#f7fff9] p-6 md:p-8 rounded-xl">
        <h3 className="text-xl font-bold mb-2">About Ganesha Agro Hub</h3>
        <p className="text-gray-500 mb-4 max-w-3xl">
          We connect consumers and retailers with carefully curated pulses and spices. Our products are graded, cleaned, and packed to retain aroma and nutrition. We work closely with farmers to ensure fair prices and sustainable cultivation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-4 rounded-lg shadow-sm"
            >
              <h4 className="font-bold mb-2">{feature.title}</h4>
              <p className="text-gray-500 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
