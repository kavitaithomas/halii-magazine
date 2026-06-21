import Link from "next/link";

import SpinningCircle from "@/components/home/SpinningCircle";
import { getIssues } from "@/lib/magazines";

export default async function HeroSection() {
  // Always links to the most recently published issue
  const issues = await getIssues();
  const latestSlug = issues[0]?.slug ?? "Jan-25";

  return (
    <section className="relative w-full md:pt-22 pb-12 px-8 md:px-32 flex flex-col justify-between">
      {/* ── Circle + headline ── */}
      <div className="flex-1 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
        {/* Spinning circle — left on desktop, top on mobile */}
        <div className="w-full mt-16 md:mt-0 max-w-64 md:max-w-none md:w-[38%] shrink-0">
          <SpinningCircle />
        </div>

        {/* Logo + tagline — right on desktop, bottom on mobile */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-3 md:gap-5">
          {/* Mobile: two-line logo */}
          <img
            src="/HaliiMagazine_twoline.svg"
            alt="Halii Magazine"
            className="block pt-2 md:hidden w-full max-w-xs"
          />

          {/* Desktop: inline logo */}
          <img
            src="/HaliiMagazine_inline.svg"
            alt="Halii Magazine"
            className="hidden md:block w-full"
          />

          <p
            className="font-coterie pt-8 md:pt-0 text-black leading-tight"
            style={{
              fontSize: "clamp(1.4rem, 3vw, 2.4rem)",
              letterSpacing: "0.02em",
            }}
          >
            IS YOUR GO-TO SPOT FOR ALL THINGS HALIFAX.
          </p>
          <Link
            href={`/magazines/${latestSlug}`}
            className="text-lg uppercase tracking-widest text-red-950 font-serif flex items-center gap-x-2 hover:gap-4 transition-all duration-300"
          >
            Read the latest issue{" "}
            <span className="text-lg text-red-950">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
