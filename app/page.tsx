import Navbar from "@/components/layout/Navbar";
import HeroSearch from "@/components/home/HeroSearch";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSearch />
      <FeaturedProperties />
      <Footer />
    </main>
  );
}