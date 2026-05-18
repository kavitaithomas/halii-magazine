import Link from "next/link";

const CATEGORIES = [
  { label: "EATS", href: "/whats-new/eats" },
  { label: "FASHION", href: "/whats-new/fashion" },
  { label: "MEDIA", href: "/whats-new/media" },
];

export default function WhatsNewSection() {
  return (
    <section className="w-full px-6 md:px-16 py-16 md:py-24">
      {/* Section heading */}
      <h2
        className="font-coterie text-[clamp(2.5rem,7vw,5rem)] text-center tracking-[0.15em] text-black mb-16 md:mb-24"
        style={{ fontVariantLigatures: "none" }}
      >
        WHAT&apos;S NEW
      </h2>

      {/* Three category columns */}
      <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto">
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.label}
            href={cat.href}
            className="group flex flex-col items-center gap-4"
          >
            {/* Placeholder content box — replace with article preview images */}
            <div className="w-full aspect-[3/4] bg-neutral-50 border border-neutral-100 group-hover:border-neutral-300 transition-colors duration-300" />

            <span className="font-coterie text-sm md:text-base tracking-[0.25em] text-black group-hover:opacity-60 transition-opacity duration-300">
              {cat.label}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
