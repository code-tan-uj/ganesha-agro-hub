export default function About() {
  const features = [
    {
      icon: "✓",
      title: "Premium Quality",
      description: "Strict quality checks at every stage to ensure consistent grade and taste. Only the best reaches you.",
    },
    {
      icon: "📍",
      title: "Traceability",
      description: "Traceable sourcing from partner farms with transparent processes. Know where your food comes from.",
    },
    {
      icon: "🌱",
      title: "Sustainability",
      description: "We promote eco-friendly practices and fair farmer compensation. Good for you, good for the planet.",
    },
  ];

  return (
    <section id="about" className="mt-10">
      <div className="bg-gradient-to-br from-[#f7fff9] to-[#fffdf5] p-6 md:p-10 rounded-2xl border border-green-100">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="inline-block bg-[#166534]/10 text-[#166534] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Why Choose Us
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">About Ganesha Agro Hub</h3>
          <p className="text-gray-600 leading-relaxed">
            We connect consumers and retailers with carefully curated pulses and spices. Our products are graded, cleaned, and packed to retain aroma and nutrition. We work closely with farmers to ensure fair prices and sustainable cultivation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="w-12 h-12 bg-[#166534]/10 rounded-xl flex items-center justify-center text-2xl mb-4">
                {feature.icon}
              </div>
              <h4 className="font-bold text-lg mb-2 text-gray-900">{feature.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
