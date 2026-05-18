"use client";
import Link from "next/link";
import Image from "next/image";

function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M10 0L11.5 8.5L20 10L11.5 11.5L10 20L8.5 11.5L0 10L8.5 8.5L10 0Z"
        fill="#C8A84B"
      />
    </svg>
  );
}

// move to CMS
const MODELS = [
  {
    src: "/models/geneva1.webp",
    alt: "Geneva",
    width: 110,
    heightClass: "h-52",
  },
  { src: "/models/jacy1.webp", alt: "Jacy", width: 100, heightClass: "h-60" },
  {
    src: "/models/katherine1.webp",
    alt: "Katherine",
    width: 105,
    heightClass: "h-56",
  },
  { src: "/models/kat1.webp", alt: "Kat", width: 95, heightClass: "h-64" },
  {
    src: "/models/madeline1.webp",
    alt: "Madeline",
    width: 108,
    heightClass: "h-52",
  },
  { src: "/models/jacy2.webp", alt: "Jacy", width: 100, heightClass: "h-58" },
];

export default function HeroSection() {
  return (
    <section className="relative w-full pt-8 pb-6 px-4 md:px-8">
      {/* Big headline */}
      <div className="relative flex items-baseline justify-center gap-3 md:gap-5 leading-none">
        <h1
          className="font-coterie text-[clamp(4rem,14vw,10rem)] text-black leading-none tracking-tight"
          style={{ letterSpacing: "-0.02em" }}
        >
          HALII
        </h1>
        <h1
          className="font-ephesis text-[clamp(3rem,11vw,8rem)] text-red-900 leading-none"
          style={{ marginTop: "0.1em" }}
        >
          Magazine
        </h1>

        {/* Scattered sparkles */}
        <Sparkle className="absolute top-2 right-[38%] opacity-80" />
        <Sparkle className="absolute bottom-0 right-[22%] opacity-60 scale-75" />
        <Sparkle className="absolute top-6 right-[10%] opacity-70 scale-90" />
      </div>

      {/* Model parade row */}
      <div className="relative mt-4 flex items-center justify-center gap-28 overflow-x-auto no-scrollbar pb-2">
        {/* Sparkles scattered behind models */}
        <Sparkle className="absolute top-4 left-[10%] opacity-70 scale-75 pointer-events-none" />
        <Sparkle className="absolute top-2 left-[38%] opacity-80 pointer-events-none" />
        <Sparkle className="absolute top-6 left-[62%] opacity-60 scale-90 pointer-events-none" />
        <Sparkle className="absolute bottom-8 right-[18%] opacity-70 scale-75 pointer-events-none" />
        <Sparkle className="absolute top-3 right-[5%] opacity-50 pointer-events-none" />

        {MODELS.map((model, i) => (
          <img
            key={i}
            src={model.src}
            alt={model.alt}
            className="shrink-0 h-auto w-36 object-cover object-top"
          />
        ))}
      </div>

      {/* CTA */}
      <div className="mt-6 flex justify-center">
        <Link
          href="/magazines/Jan-25"
          className="font-coterie text-sm tracking-widest text-black flex items-center gap-2 hover:gap-4 transition-all duration-300"
        >
          March issue out now <span className="text-lg">→</span>
        </Link>
      </div>
    </section>
  );
}
