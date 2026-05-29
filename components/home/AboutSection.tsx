"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

// ── SPINNING CIRCLE ───────────────────────────────────────────────────────────
function SpinningCircle() {
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame: number;
    let angle = 0;
    const spin = () => {
      angle += 0.12;
      if (ringRef.current)
        ringRef.current.style.transform = `rotate(${angle}deg)`;
      frame = requestAnimationFrame(spin);
    };
    frame = requestAnimationFrame(spin);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    // padding-bottom: 100% makes the container a responsive square
    <div className="relative w-full" style={{ paddingBottom: "100%" }}>
      <div className="absolute inset-0">
        {/* Layer 1 — spinning magazine ring */}
        <div ref={ringRef} className="absolute inset-0">
          <img
            src="/home_assets/magazine_spinning.webp"
            alt="Halii Magazine covers"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Layer 3 — "IN AN EXCITING CITY" PNG, centred and still */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ paddingBottom: "6%" }}
        >
          <div className="w-[50%] h-[38%] relative">
            <Image
              src="/home_assets/exciting_city.png"
              alt="Born of complete boredom in an exciting"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// ── SCROLL FADE HOOK ──────────────────────────────────────────────────────────
function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useFadeIn();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.9s ease ${delay}ms, transform 0.9s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

const STARS = [
  {
    src: "/home_assets/silverstar.webp",
    alt: "star",
    size: 28,
    className: "top-[6%] left-[14%]",
    rotate: 20,
  },
  {
    src: "/home_assets/pearlstar.webp",
    alt: "star",
    size: 30,
    className: "top-[10%] left-[58%]",
    rotate: -12,
  },
  {
    src: "/home_assets/silverstar.webp",
    alt: "star",
    size: 24,
    className: "top-[52%] left-[78%]",
    rotate: 35,
  },
  {
    src: "/home_assets/pearlstar.webp",
    alt: "star",
    size: 28,
    className: "top-[70%] left-[6%]",
    rotate: -8,
  },
  // Midground
  {
    src: "/home_assets/pinkstar.webp",
    alt: "star",
    size: 46,
    className: "top-[4%] left-[82%]",
    rotate: 10,
  },
  {
    src: "/home_assets/silverstar.webp",
    alt: "star",
    size: 42,
    className: "top-[38%] left-[3%]",
    rotate: -25,
  },
  {
    src: "/home_assets/pearlstar.webp",
    alt: "star",
    size: 50,
    className: "top-[76%] left-[52%]",
    rotate: 15,
  },
  {
    src: "/home_assets/pinkstar.webp",
    alt: "star",
    size: 40,
    className: "top-[28%] left-[70%]",
    rotate: -18,
  },
  // Foreground — large, vivid
  {
    src: "/home_assets/pinkstar.webp",
    alt: "star",
    size: 88,
    className: "top-[18%] left-[-1%]",
    rotate: 5,
  },
  {
    src: "/home_assets/silverstar.webp",
    alt: "star",
    size: 76,
    className: "top-[58%] left-[86%]",
    rotate: -12,
  },
  {
    src: "/home_assets/pearlstar.webp",
    alt: "star",
    size: 62,
    className: "top-[80%] left-[28%]",
    rotate: 22,
  },
  {
    src: "/home_assets/pinkstar.webp",
    alt: "star",
    size: 54,
    className: "top-[2%] left-[42%]",
    rotate: -30,
  },
];

// ── MAIN EXPORT ───────────────────────────────────────────────────────────────
export default function AboutSection() {
  return (
    <div className="w-full bg-white overflow-hidden">
      {/* ══ SECTION 1: Spinning circle + tagline ══════════════════════════════ */}
      <section className="w-full px-6 md:px-16 py-16 md:py-24 flex flex-col md:flex-row items-center gap-10 md:gap-16">
        <div className="w-full max-w-70 md:max-w-none md:w-[35%] shrink-0 mx-auto md:mx-0">
          <SpinningCircle />
        </div>
        <FadeIn delay={150} className="flex-1">
          <p
            className="font-coterie text-black leading-tight"
            style={{
              fontSize: "clamp(1.8rem, 4.5vw, 3.8rem)",
              letterSpacing: "0.02em",
            }}
          >
            HALII MAGAZINE IS YOUR GO-TO SPOT FOR ALL THINGS HALIFAX.
          </p>
        </FadeIn>
      </section>

      <section className="relative w-full px-6 md:px-16 py-12 md:py-20 overflow-hidden">
        {/* ── Stars: z-0, behind everything ── */}
        {STARS.map((star, i) => (
          <div
            key={i}
            className={`absolute pointer-events-none z-0 ${star.className}`}
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

        {/* ── All content: z-10, on top of stars ── */}
        <div className="relative z-10 flex flex-col">
          {/* "...That means all things" */}
          <FadeIn>
            <p
              className="font-serif text-black/70 mb-8"
              style={{ fontSize: "clamp(1.4rem, 2.8vw, 2.4rem)" }}
            >
              ...That means all things
            </p>
          </FadeIn>

          {/* Categories — staggered 3-column layout */}
          <div className="flex flex-row justify-center gap-x-[6vw] md:gap-x-[8vw] font-coterie font-bold text-red-950">
            {/* Column 1 — baseline aligned, pushed down */}
            <FadeIn
              delay={0}
              className="flex flex-col gap-y-2 mt-[8vw] md:mt-64"
            >
              <span style={{ fontSize: "clamp(1.6rem, 5vw, 4rem)" }}>
                BUSINESS
              </span>
              <span
                className="ms-16"
                style={{ fontSize: "clamp(1.6rem, 5vw, 4rem)" }}
              >
                FASHION
              </span>
            </FadeIn>

            {/* Column 2 — tallest, centred vertically */}
            <FadeIn
              delay={120}
              className="flex flex-col gap-y-2 mt-[2vw] md:mt-8"
            >
              <span style={{ fontSize: "clamp(1.6rem, 5vw, 4rem)" }}>ART</span>
              <span
                className="ms-16"
                style={{ fontSize: "clamp(1.4rem, 4.5vw, 3.6rem)" }}
              >
                MUSIC
              </span>
              <span
                className="ms-32"
                style={{ fontSize: "clamp(1.4rem, 4.5vw, 3.6rem)" }}
              >
                FILM
              </span>
              <span
                className="ms-48"
                style={{ fontSize: "clamp(1.6rem, 5vw, 4rem)" }}
              >
                FOOD
              </span>
            </FadeIn>

            {/* Column 3 — slightly elevated */}
            <FadeIn delay={240} className="flex flex-col gap-y-2">
              <span style={{ fontSize: "clamp(1.6rem, 5vw, 4rem)" }}>
                EVENTS
              </span>
              <span
                className="ms-16"
                style={{ fontSize: "clamp(1.6rem, 5vw, 4rem)" }}
              >
                BOOKS
              </span>
            </FadeIn>
          </div>

          {/* "...and we're out of breath" */}
          <FadeIn delay={400}>
            <p
              className="font-serif text-black/70 mt-10 md:mt-14 text-right"
              style={{ fontSize: "clamp(1.4rem, 2.8vw, 2.4rem)" }}
            >
              ... and we&apos;re out of breath
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ══ SECTION 3: Cool people ════════════════════════════════════════════ */}
      <section className="w-full px-6 md:px-16 py-16 md:py-24">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <p
              className=" text-black leading-relaxed"
              style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)" }}
            >
              It&apos;s a magazine featuring cool people,{" "}
              <span className="text-red-900">FOR cool people.</span>
              <br />
              Luckily, Halifax has a lot of them.
            </p>
            <p
              className=" text-black/55 leading-relaxed"
              style={{ fontSize: "clamp(0.9rem, 1.6vw, 1.25rem)" }}
            >
              Whether you&apos;re looking for a local band recommendation or
              your next late night bite, we&apos;ve got you covered, cover to
              cover.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* ══ SECTION 4: Sign off ═══════════════════════════════════════════════ */}
      <section className="w-full px-6 md:px-16 py-16 md:py-20 bg-red-950">
        <FadeIn>
          <div className="max-w-xl mx-auto text-center space-y-6">
            <p
              className=" text-white/80 leading-relaxed"
              style={{ fontSize: "clamp(0.85rem, 1.5vw, 1.15rem)" }}
            >
              So stick around, read some of our issues, old and new, and bask in
              all that HALII has to offer. Feel free to drop us a DM{" "}
              <a
                href="https://instagram.com/haliimagazine"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline underline-offset-2 hover:opacity-70 transition-opacity"
              >
                @haliimagazine
              </a>{" "}
              on Instagram or an email{" "}
              <a
                href="mailto:haliimagazine@gmail.com"
                className="text-white underline underline-offset-2 hover:opacity-70 transition-opacity"
              >
                haliimagazine@gmail.com
              </a>{" "}
              if you have any questions or suggestions!
            </p>
            <p
              className=" text-white/90"
              style={{ fontSize: "clamp(1.2rem, 2.2vw, 1.9rem)" }}
            >
              We&apos;d be honoured to hear from you.
            </p>
            <p className="text-base tracking-widest text-white">
              Love you all, Kait &amp; Cal
            </p>
            <div className="pt-4">
              <Link
                href="/magazines"
                className="inline-block text-xs tracking-[0.2em] uppercase border border-white/40 text-white px-8 py-3 hover:bg-white hover:text-[#6b1a1a] transition-all duration-300"
              >
                Read the issues →
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
