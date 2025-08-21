import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductHighlights from '@/components/ProductHighlights';
import Footer from '@/components/Footer';


export default function Home() {

  return (
    <main>
      <Navbar />
      <Hero />
      <ProductHighlights />
      <Footer />
    </main>
  );
}

