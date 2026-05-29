"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

// ── SPINNING MAGAZINE CIRCLE ──────────────────────────────────────────────────
function SpinningCircle() {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame: number;
    let angle = 0;
    const spin = () => {
      angle += 0.15; // slow spin speed
      if (imgRef.current) {
        imgRef.current.style.transform = `rotate(${angle}deg)`;
      }
      frame = requestAnimationFrame(spin);
    };
    frame = requestAnimationFrame(spin);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 shrink-0">
      {/* Spinning outer ring of magazines */}
      <div ref={imgRef} className="absolute inset-0">
        <img
          src="/magazine_spinning.webp"
          alt="Magazine covers"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Centre text — does NOT spin */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8 pointer-events-none">
        <p className="font-coterie text-xs tracking-[0.15em] text-black/50 uppercase mb-1">
          Born of complete boredom
        </p>
        <p className="font-coterie text-base md:text-lg tracking-wide text-red-900 font-bold leading-tight uppercase">
          In an
          <br />
          exciting
          <br />
          city
        </p>
      </div>
    </div>
  );
}

// ── SCROLL FADE IN HOOK ───────────────────────────────────────────────────────
function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

// ── MOON PHASE SVG ────────────────────────────────────────────────────────────
// 7 phases: new → waxing crescent → first quarter → waxing gibbous →
//           full → waning gibbous → last quarter
function MoonPhase({ phase, label }: { phase: number; label: string }) {
  const size = 64;
  const r = 28;
  const cx = 32;
  const cy = 32;

  // Each phase is drawn with two arcs to create the crescent/gibbous shapes
  const paths: Record<number, string> = {
    0: "", // new moon — dark circle only
    1: `M ${cx} ${cy - r} A ${r} ${r} 0 1 1 ${cx} ${cy + r} A ${r * 0.3} ${r} 0 1 0 ${cx} ${cy - r}`,
    2: `M ${cx} ${cy - r} A ${r} ${r} 0 1 1 ${cx} ${cy + r} A 0 ${r} 0 1 0 ${cx} ${cy - r}`,
    3: `M ${cx} ${cy - r} A ${r} ${r} 0 1 1 ${cx} ${cy + r} A ${r * 0.3} ${r} 0 1 1 ${cx} ${cy - r}`,
    4: `M ${cx} ${cy - r} A ${r} ${r} 0 1 1 ${cx} ${cy + r} A ${r} ${r} 0 1 1 ${cx} ${cy - r}`,
    5: `M ${cx} ${cy - r} A ${r} ${r} 0 1 0 ${cx} ${cy + r} A ${r * 0.3} ${r} 0 1 0 ${cx} ${cy - r}`,
    6: `M ${cx} ${cy - r} A ${r} ${r} 0 1 0 ${cx} ${cy + r} A 0 ${r} 0 1 1 ${cx} ${cy - r}`,
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* Dark base circle */}
        <circle cx={cx} cy={cy} r={r} fill="#2a1a2e" />
        {/* Lit portion */}
        {phase > 0 && <path d={paths[phase]} fill="#e8e0d0" />}
        {/* Full moon */}
        {phase === 4 && <circle cx={cx} cy={cy} r={r} fill="#e8e0d0" />}
      </svg>
      <span className="font-coterie text-xs tracking-[0.12em] uppercase text-black/70 text-center">
        {label}
      </span>
    </div>
  );
}

const MOON_PHASES = [
  { phase: 0, label: "Books" },
  { phase: 1, label: "Film" },
  { phase: 2, label: "Art" },
  { phase: 3, label: "Fashion" },
  { phase: 4, label: "Food" },
  { phase: 5, label: "Music" },
  { phase: 6, label: "Business" },
];

// ── DIVIDER LINE ──────────────────────────────────────────────────────────────
function Divider() {
  const { ref, visible } = useFadeIn();
  return (
    <div
      ref={ref}
      className="w-full h-px bg-red-900/40 my-0 transition-all duration-1000"
      style={{
        transform: visible ? "scaleX(1)" : "scaleX(0)",
        transformOrigin: "left",
        transitionDuration: "1.2s",
      }}
    />
  );
}

// ── FADE SECTION WRAPPER ──────────────────────────────────────────────────────
function FadeSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, visible } = useFadeIn();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ── MAIN PAGE ─────────────────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <main className="bg-white w-full overflow-x-hidden">
      {/* ── SECTION 1: Spinning circle + tagline ── */}
      <section className="w-full px-8 md:px-20 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12 md:gap-20">
        <SpinningCircle />
        <FadeSection delay={200}>
          <p
            className="font-coterie text-[clamp(1.8rem,4.5vw,3.5rem)] text-black leading-tight max-w-lg"
            style={{ letterSpacing: "-0.01em" }}
          >
            HALII Magazine is your go-to spot for all things Halifax.
          </p>
        </FadeSection>
      </section>

      <Divider />

      {/* ── SECTION 2: Moon phases / categories ── */}
      <section className="w-full px-8 md:px-20 py-16 md:py-24">
        <FadeSection>
          <p className="font-ephesis text-[clamp(1.5rem,3vw,2.5rem)] text-black/70 mb-12 md:mb-16">
            ...That means all things
          </p>
        </FadeSection>

        <div className="flex flex-wrap md:flex-nowrap items-end justify-between gap-6 md:gap-4">
          {MOON_PHASES.map((m, i) => (
            <FadeSection key={m.label} delay={i * 100}>
              <MoonPhase phase={m.phase} label={m.label} />
            </FadeSection>
          ))}
        </div>

        <FadeSection delay={400}>
          <p className="font-ephesis text-[clamp(1.5rem,3vw,2.5rem)] text-black/70 mt-12 md:mt-16 text-right">
            ... and we&apos;re out of breath
          </p>
        </FadeSection>
      </section>

      <Divider />

      {/* ── SECTION 3: Cool people ── */}
      <section className="w-full px-8 md:px-20 py-16 md:py-24">
        <FadeSection>
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <p className="font-coterie text-[clamp(1.1rem,2.2vw,1.6rem)] text-black leading-relaxed">
              It&apos;s a magazine featuring cool people,{" "}
              <span className="text-red-900">FOR cool people.</span>
              <br />
              Luckily, Halifax has a lot of them.
            </p>
            <p className="font-coterie text-[clamp(0.95rem,1.8vw,1.3rem)] text-black/60 leading-relaxed">
              Whether you&apos;re looking for a local band recommendation or
              your next late night bite, we&apos;ve got you covered, cover to
              cover.
            </p>
          </div>
        </FadeSection>
      </section>

      <Divider />

      {/* ── SECTION 4: Sign off ── */}
      <section className="w-full px-8 md:px-20 py-16 md:py-24 bg-[#6b1a1a]">
        <FadeSection>
          <div className="max-w-xl mx-auto text-center space-y-6">
            <p className="font-coterie text-[clamp(0.9rem,1.6vw,1.2rem)] text-white/80 leading-relaxed">
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
            <p className="font-ephesis text-[clamp(1.2rem,2.5vw,2rem)] text-white/90">
              We&apos;d be honoured to hear from you.
            </p>
            <p className="font-coterie text-lg tracking-widest text-white">
              Love you all, Kait &amp; Cal
            </p>

            <div className="pt-4">
              <Link
                href="/magazines"
                className="inline-block font-coterie text-xs tracking-[0.2em] uppercase border border-white/40 text-white px-8 py-3 hover:bg-white hover:text-[#6b1a1a] transition-all duration-300"
              >
                Read the issues →
              </Link>
            </div>
          </div>
        </FadeSection>
      </section>
    </main>
  );
}
