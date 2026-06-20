"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AllThingsSection from "@/components/home/AllThingsSection";

// ... rest of your impor

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
      {/* HERE */}
      <AllThingsSection />

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
