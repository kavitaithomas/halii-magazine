"use client";

const TAGS = [
  "food",
  "movies",
  "music",
  "events",
  "culture",
  "fashion",
  "food",
  "movies",
  "music",
  "events",
  "culture",
  "fashion",
];

export default function ScrollingTicker() {
  return (
    <div className="w-full border-t border-b border-black bg-cream overflow-hidden py-2">
      <div className="flex animate-ticker whitespace-nowrap">
        {/* Duplicate for seamless loop */}
        {[...TAGS, ...TAGS].map((tag, i) => (
          <span
            key={i}
            className="font-coterie text-xs tracking-[0.2em] uppercase text-black mx-6"
          >
            {tag}
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes ticker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-ticker {
          animation: ticker 18s linear infinite;
        }
      `}</style>
    </div>
  );
}
