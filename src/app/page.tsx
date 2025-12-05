import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-[1100px] mx-auto px-4">
        <Hero />
        <About />
        <Products />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
