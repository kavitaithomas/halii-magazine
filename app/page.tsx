import Link from "next/link";
import HeroSection from "@/components/home/HeroSection";
import ScrollingTicker from "@/components/home/ScrollingTicker";
import WhatsNewSection from "@/components/home/WhatsNewSection";
import IssuesSection from "@/components/home/IssuesSection";
import TellHaliiSection from "@/components/home/TellHaliiSection";
import AboutSection from "@/components/home/AboutSection";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <main className="bg-cream overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <TellHaliiSection />
      <Footer />
    </main>
  );
}
