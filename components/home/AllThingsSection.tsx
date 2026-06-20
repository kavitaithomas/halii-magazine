"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function useFadeIn(delay = 0) {
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

function Blob({
  src,
  alt,
  delay = 0,
  className = "",
}: {
  src: string;
  alt: string;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useFadeIn();
  return (
    <div
      ref={ref}
      className={`cursor-default ${className}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateY(0) rotate(0deg)"
          : "translateY(40px) rotate(-4deg)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "rotate(6deg) scale(1.05)";
        e.currentTarget.style.transition =
          "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "rotate(0deg) scale(1)";
        e.currentTarget.style.transition =
          "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)";
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={300}
        height={300}
        className="w-full h-auto object-contain drop-shadow-sm"
      />
    </div>
  );
}

export default function AllThingsSection() {
  return (
    <section className="w-full px-8 md:px-16 lg:px-32 py-8">
      {/* "...That means all things" */}
      <p className="font-serif text-black/70 mb-8 text-sm md:text-base tracking-wide">
        ...That means all things
      </p>

      {/* ── DESKTOP layout — matches reference image exactly ── */}
      <div className="hidden md:block">
        {/* Row 1 */}
        <div className="flex items-end justify-between gap-1">
          <div className="w-[28%]">
            <Blob
              src="/home_assets/all_things/food.webp"
              alt="Food"
              delay={0}
            />
          </div>
          <div className="w-[26%]">
            <Blob
              src="/home_assets/all_things/business.webp"
              alt="Business"
              delay={100}
            />
          </div>
          <div className="w-[46%]">
            <Blob
              src="/home_assets/all_things/fashion_books.webp"
              alt="Fashion & Books"
              delay={200}
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex items-start justify-between gap-1 -mt-14">
          <div className="w-[27%]">
            <Blob
              src="/home_assets/all_things/music.webp"
              alt="Music"
              delay={150}
            />
          </div>
          <div className="w-[25%]">
            <Blob
              src="/home_assets/all_things/events.webp"
              alt="Events"
              delay={250}
            />
          </div>
          <div className="w-[23%]">
            <Blob
              src="/home_assets/all_things/art.webp"
              alt="Art"
              delay={200}
            />
          </div>
          <div className="w-[23%]">
            <Blob
              src="/home_assets/all_things/movies.webp"
              alt="Movies"
              delay={300}
            />
          </div>
        </div>
      </div>

      {/* ── MOBILE layout — single column, alternating left/right ── */}
      <div className="md:hidden flex flex-col gap-2">
        <div className="w-[55%] self-start">
          <Blob src="/home_assets/all_things/food.webp" alt="Food" delay={0} />
        </div>
        <div className="w-[50%] self-end">
          <Blob
            src="/home_assets/all_things/business.webp"
            alt="Business"
            delay={80}
          />
        </div>
        <div className="w-[70%] self-start">
          <Blob
            src="/home_assets/all_things/fashion_books.webp"
            alt="Fashion & Books"
            delay={160}
          />
        </div>
        <div className="w-[55%] self-end">
          <Blob
            src="/home_assets/all_things/music.webp"
            alt="Music"
            delay={240}
          />
        </div>
        <div className="w-[50%] self-start">
          <Blob
            src="/home_assets/all_things/events.webp"
            alt="Events"
            delay={320}
          />
        </div>
        <div className="w-[45%] self-end">
          <Blob src="/home_assets/all_things/art.webp" alt="Art" delay={400} />
        </div>
        <div className="w-[45%] self-start">
          <Blob
            src="/home_assets/all_things/movies.webp"
            alt="Movies"
            delay={480}
          />
        </div>
      </div>

      {/* "...and we're out of breath" */}
      <p className="font-serif text-black/70 mt-6 text-right text-sm md:text-base tracking-wide">
        ... and we&apos;re out of breath
      </p>
    </section>
  );
}
