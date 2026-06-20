import Link from "next/link";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="bg-cream overflow-x-hidden pt-16">
      <HeroSection />
      <AboutSection />
      <Footer />
    </main>
  );
}
