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
    mobileSize: 14,
    className: "top-[6%] left-[14%]",
    rotate: 20,
  },
  {
    src: "/home_assets/pearlstar.webp",
    alt: "star",
    size: 30,
    mobileSize: 16,
    className: "top-[10%] left-[58%]",
    rotate: -12,
  },
  {
    src: "/home_assets/silverstar.webp",
    alt: "star",
    size: 24,
    mobileSize: 12,
    className: "top-[52%] left-[78%]",
    rotate: 35,
  },
  {
    src: "/home_assets/pearlstar.webp",
    alt: "star",
    size: 28,
    mobileSize: 14,
    className: "top-[70%] left-[6%]",
    rotate: -8,
  },
  {
    src: "/home_assets/silverstar.webp",
    alt: "star",
    size: 46,
    mobileSize: 22,
    className: "top-[4%] left-[82%]",
    rotate: 10,
  },
  {
    src: "/home_assets/silverstar.webp",
    alt: "star",
    size: 42,
    mobileSize: 20,
    className: "top-[38%] left-[3%]",
    rotate: -25,
  },
  {
    src: "/home_assets/pearlstar.webp",
    alt: "star",
    size: 50,
    mobileSize: 24,
    className: "top-[76%] left-[52%]",
    rotate: 15,
  },
  {
    src: "/home_assets/pearlstar.webp",
    alt: "star",
    size: 40,
    mobileSize: 20,
    className: "top-[28%] left-[70%]",
    rotate: -18,
  },
  {
    src: "/home_assets/pearlstar.webp",
    alt: "star",
    size: 88,
    mobileSize: 40,
    className: "top-[18%] left-[-1%]",
    rotate: 5,
  },
  {
    src: "/home_assets/silverstar.webp",
    alt: "star",
    size: 76,
    mobileSize: 36,
    className: "top-[58%] left-[90%]",
    rotate: -12,
  },
  {
    src: "/home_assets/pearlstar.webp",
    alt: "star",
    size: 62,
    mobileSize: 30,
    className: "top-[80%] left-[28%]",
    rotate: 22,
  },
  {
    src: "/home_assets/silverstar.webp",
    alt: "star",
    size: 54,
    mobileSize: 26,
    className: "top-[2%] left-[42%]",
    rotate: -30,
  },
];

// ── MAIN EXPORT ───────────────────────────────────────────────────────────────
export default function AboutSection() {
  return (
    <div className="w-full bg-white overflow-hidden">
      <section className="w-full px-12 md:px-24 pt-6 md:pt-12 flex flex-col md:flex-row items-center justify-center gap-y-8 md:gap-16">
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

      <section className="relative w-full px-12 md:px-24 py-12 md:py-20 overflow-hidden">
        {/* Stars — z-0, behind everything */}
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
              style={{
                width: `clamp(${star.mobileSize}px, ${star.size * 0.08}vw + ${star.mobileSize}px, ${star.size}px)`,
                height: "auto",
              }}
            />
          </div>
        ))}

        {/* Content — z-10, on top of stars */}
        <div className="relative z-10 flex flex-col">
          <FadeIn>
            <p className="font-serif font-bold mb-1 text-lg md:text-3xl md:ps-12 md:mb-0">
              ...That means all things
            </p>
          </FadeIn>

          {/* ── DESKTOP: staggered 3-column layout ── */}
          <div className="hidden md:flex flex-row justify-center font-serif font-bold text-blue-800">
            <FadeIn delay={0} className="flex flex-col gap-y-1 mt-64">
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

            <FadeIn delay={120} className="flex flex-col gap-y-1 mt-16">
              <span style={{ fontSize: "clamp(1.6rem, 5vw, 4rem)" }}>ART</span>
              <span
                className="ms-16"
                style={{ fontSize: "clamp(1.6rem, 5vw, 4rem)" }}
              >
                MUSIC
              </span>
              <span
                className="ms-32"
                style={{ fontSize: "clamp(1.6rem, 5vw, 4rem)" }}
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

            <FadeIn delay={240} className="flex flex-col gap-y-1">
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

          {/* ── MOBILE: staggered groups ── */}
          <div className="md:hidden font-coterie font-bold text-blue-800 py-4 flex flex-col gap-y-3 w-fit mx-auto">
            {/* Group 1 — 2 items, left-anchored */}
            <FadeIn delay={0} className="flex flex-col items-start gap-y-1">
              <span className="text-3xl">ART</span>
              <span className="text-3xl ms-8">MUSIC</span>
            </FadeIn>

            {/* Group 2 — 3 items, shifted right */}
            <FadeIn
              delay={120}
              className="flex flex-col items-start gap-y-1 ms-12"
            >
              <span className="text-3xl">FILM</span>
              <span className="text-3xl ms-8">FOOD</span>
              <span className="text-3xl ms-16">EVENTS</span>
            </FadeIn>

            {/* Group 3 — 3 items, back left */}
            <FadeIn delay={240} className="flex flex-col items-start gap-y-1">
              <span className="text-3xl ms-4">BOOKS</span>
              <span className="text-3xl ms-12">BUSINESS</span>
              <span className="text-3xl ms-18">FASHION</span>
            </FadeIn>
          </div>

          <FadeIn delay={400}>
            <p className="font-serif font-bold mt-1 text-right text-lg md:text-3xl md:pe-12 md:mt-0">
              ... and we&apos;re out of breath
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ══ SECTION 3 */}
      <section className="w-full px-6 md:px-12 pb-8 md:pb-16">
        <div className="text-center">
          <p
            className="font-serif text-red-950 font-bold uppercase"
            style={{ fontSize: "clamp(1.6rem, 4vw, 3.5rem)" }}
          >
            It&apos;s a magazine{" "}
            <span className="text-pink-900">featuring</span> cool people,{" "}
            <span className="text-pink-900">FOR </span>
            cool people.
          </p>

          <p
            className="font-serif uppercase text-black font-medium mt-2 py-6 md:pb-10"
            style={{ fontSize: "clamp(1rem, 2vw, 1.8rem)" }}
          >
            Luckily, Halifax has a lot of them.
          </p>

          <p className="text-black font-bold text-lg md:text-xl font-serif leading-relaxed max-w4xl mx-auto">
            Whether you&apos;re looking for a local band recommendation or your
            next late night bite, we&apos;ve got you covered, cover to cover.
          </p>
          <p className="text-black font-bold text-lg md:text-xl font-serif mx-auto">
            So stick around, read some of our issues, old and new, and bask in
            all that HALII has to offer.
          </p>
        </div>
      </section>
    </div>
  );
}
