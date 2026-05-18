"use client";
import Link from "next/link";

// vector stars
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

// Placeholder model silhouette — replace src with real images
function ModelFigure({ index }: { index: number }) {
  const heights = [
    "h-44",
    "h-52",
    "h-48",
    "h-56",
    "h-52",
    "h-44",
    "h-50",
    "h-48",
    "h-54",
  ];
  return (
    <div
      className={`relative ${heights[index % heights.length]} w-16 shrink-0 flex items-end`}
    >
      {/* Replace this div with <Image> when you have model photos */}
      <div className="w-full h-full bg-neutral-100 rounded-sm opacity-60" />
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative w-full pt-8 pb-6 px-4 md:px-8">
      {/* Big headline */}
      <div className="relative flex items-baseline gap-3 md:gap-5 leading-none">
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
      <div className="relative mt-4 flex items-end gap-3 overflow-x-auto no-scrollbar pb-2">
        <Sparkle className="absolute top-4 left-[12%] opacity-70 scale-75" />
        <Sparkle className="absolute top-2 left-[55%] opacity-80" />
        <Sparkle className="absolute bottom-6 right-[18%] opacity-60 scale-90" />
        <Sparkle className="absolute top-8 right-[5%] opacity-50 scale-75" />

        {Array.from({ length: 9 }).map((_, i) => (
          <ModelFigure key={i} index={i} />
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
