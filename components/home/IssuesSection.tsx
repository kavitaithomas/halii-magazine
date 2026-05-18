import Link from "next/link";
import Image from "next/image";

const STARS = [
  {
    src: "/home_assets/silverstar.webp",
    alt: "silver star",
    size: 80,
    className: "top-8 left-12",
    rotate: 15,
  },
  {
    src: "/home_assets/pinkstar.webp",
    alt: "pink star",
    size: 44,
    className: "top-6 left-[28%]",
    rotate: -10,
  },
  {
    src: "/home_assets/pearlstar.webp",
    alt: "pearl star",
    size: 64,
    className: "top-12 left-[48%]",
    rotate: 20,
  },
  {
    src: "/home_assets/pinkstar.webp",
    alt: "pink star",
    size: 90,
    className: "top-4 right-14",
    rotate: 5,
  },
  {
    src: "/home_assets/silverstar.webp",
    alt: "silver star",
    size: 40,
    className: "top-28 right-6",
    rotate: -20,
  },
  {
    src: "/home_assets/pearlstar.webp",
    alt: "pearl star",
    size: 56,
    className: "top-[40%] left-[35%]",
    rotate: 8,
  },
  {
    src: "/home_assets/silverstar.webp",
    alt: "silver star",
    size: 72,
    className: "bottom-24 left-[18%]",
    rotate: -12,
  },
  {
    src: "/home_assets/pinkstar.webp",
    alt: "pink star",
    size: 38,
    className: "bottom-16 left-[42%]",
    rotate: 25,
  },
  {
    src: "/home_assets/pearlstar.webp",
    alt: "pearl star",
    size: 96,
    className: "bottom-8 left-2",
    rotate: -5,
  },
  {
    src: "/home_assets/silverstar.webp",
    alt: "silver star",
    size: 52,
    className: "bottom-20 right-[14%]",
    rotate: 18,
  },
  {
    src: "/home_assets/pinkstar.webp",
    alt: "pink star",
    size: 68,
    className: "bottom-4 right-4",
    rotate: -8,
  },
  {
    src: "/home_assets/pearlstar.webp",
    alt: "pearl star",
    size: 42,
    className: "top-[55%] right-[28%]",
    rotate: 30,
  },
];

export default function IssuesSection() {
  return (
    <section className="relative w-full px-6 md:px-16 py-24 md:py-36 overflow-hidden min-h-[600px]">
      {/* Scattered stars */}
      {STARS.map((star, i) => (
        <div
          key={i}
          className={`absolute pointer-events-none ${star.className}`}
          style={{ transform: `rotate(${star.rotate}deg)` }}
        >
          <Image
            src={star.src}
            alt={star.alt}
            width={star.size}
            height={star.size}
            className="object-contain"
          />
        </div>
      ))}

      {/* Left magazine mockup — replace div with Image when you have the cover */}
      <div className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 w-36 md:w-52 rotate-[-4deg] shadow-xl z-10">
        <div className="w-full aspect-[3/4] bg-neutral-200 flex items-end p-3">
          <span className="font-coterie text-xs tracking-widest text-neutral-600 uppercase">
            January.
          </span>
        </div>
      </div>

      {/* Right magazine spread mockup */}
      <div className="absolute right-4 md:right-10 top-1/2 -translate-y-1/4 w-32 md:w-44 rotate-[3deg] shadow-lg opacity-80 z-10">
        <div className="w-full aspect-[3/4] bg-pink-50 border border-pink-100" />
      </div>

      {/* Centre text */}
      <div className="relative z-20 text-center max-w-md mx-auto">
        <h2
          className="font-coterie text-black mb-4"
          style={{ fontVariantLigatures: "none" }}
        >
          WE ALL HAVE ISSUES...
        </h2>
        <p
          className="text-sm text-black/60 mb-8 leading-relaxed"
          style={{ fontFamily: "var(--font-geist-mono)" }}
        >
          Ours happen monthly, and you can read all about them.
        </p>
        <Link
          href="/magazines"
          className="font-coterie text-xs tracking-[0.2em] text-black border-b border-black pb-0.5 hover:opacity-50 transition-opacity duration-300 inline-flex items-center gap-2"
        >
          HALII Magazine Collection →
        </Link>
      </div>
    </section>
  );
}
