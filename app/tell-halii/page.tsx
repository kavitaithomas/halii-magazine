import Link from "next/link";
import TellHaliiSection2 from "@/components/home/TellHaliiPage2";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="bg-cream overflow-x-hidden pt-16">
      <TellHaliiSection2 />
      <Footer />
    </main>
  );
}
