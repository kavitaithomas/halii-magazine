import Link from "next/link";
import Image from "next/image";

// 3D star decorations — rendered as SVG shapes in different colors
function Star3D({
  color,
  size = 48,
  rotate = 0,
  className = "",
}: {
  color: string;
  size?: number;
  rotate?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={`absolute ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <path
        d="M24 2L28 18L44 14L32 24L44 34L28 30L24 46L20 30L4 34L16 24L4 14L20 18L24 2Z"
        fill={color}
        opacity="0.85"
      />
      <path
        d="M24 6L27 17L40 14L31 23L40 32L27 29L24 42L21 29L8 32L17 23L8 14L21 17L24 6Z"
        fill="white"
        opacity="0.25"
      />
    </svg>
  );
}

export default function IssuesSection() {
  return (
    <section className="relative w-full px-6 md:px-16 py-20 md:py-32 overflow-hidden">
      {/* Scattered star decorations */}
      <Star3D color="#b0b8c8" size={52} rotate={15} className="top-12 left-8 md:left-16" />
      <Star3D color="#8b1a2a" size={36} rotate={-10} className="top-8 left-[30%]" />
      <Star3D color="#c0c0c0" size={44} rotate={25} className="top-16 left-[48%]" />
      <Star3D color="#7a3060" size={56} rotate={5} className="top-6 right-16" />
      <Star3D color="#c0c0c0" size={32} rotate={-20} className="top-32 right-8" />
      <Star3D color="#c8a820" size={40} rotate={12} className="bottom-24 left-[20%]" />
      <Star3D color="#b0b8c8" size={60} rotate={-8} className="bottom-8 left-4" />
      <Star3D color="#c8a820" size={34} rotate={30} className="bottom-16 left-[42%]" />
      <Star3D color="#c0c0c0" size={48} rotate={-15} className="bottom-20 right-[15%]" />

      {/* Left magazine mockup */}
      <div className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 w-36 md:w-48 rotate-[-4deg] shadow-xl">
        {/* Replace with real magazine cover Image */}
        <div className="w-full aspect-[3/4] bg-neutral-200 flex items-end p-3">
          <span className="font-coterie text-xs tracking-widest text-neutral-600 uppercase">
            January.
          </span>
        </div>
      </div>

      {/* Right magazine spread mockup */}
      <div className="absolute right-4 md:right-12 top-1/2 -translate-y-1/4 w-32 md:w-44 rotate-[3deg] shadow-lg opacity-80">
        <div className="w-full aspect-[3/4] bg-pink-50 border border-pink-100" />
      </div>

      {/* Centre text */}
      <div className="relative text-center max-w-md mx-auto py-8">
        <h2
          className="font-coterie text-[clamp(1.8rem,4vw,2.8rem)] tracking-[0.12em] text-black mb-4"
          style={{ fontVariantLigatures: "none" }}
        >
          WE ALL HAVE ISSUES...
        </h2>
        <p className="font-geist-mono text-sm text-black/60 mb-8 leading-relaxed">
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
