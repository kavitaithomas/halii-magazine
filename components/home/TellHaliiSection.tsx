import Link from "next/link";

// Starburst SVG shape
function Starburst({
  color,
  size = 180,
  points = 8,
  className = "",
  children,
}: {
  color: string;
  size?: number;
  points?: number;
  className?: string;
  children?: React.ReactNode;
}) {
  // Generate starburst path
  const cx = size / 2;
  const cy = size / 2;
  const outerR = size / 2;
  const innerR = size / 2.8;
  const pathPoints: string[] = [];

  for (let i = 0; i < points * 2; i++) {
    const angle = (i * Math.PI) / points - Math.PI / 2;
    const r = i % 2 === 0 ? outerR : innerR;
    pathPoints.push(`${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`);
  }

  return (
    <div className={`absolute flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="absolute inset-0">
        <polygon points={pathPoints.join(" ")} fill={color} />
      </svg>
      <div className="relative z-10 text-center px-4">{children}</div>
    </div>
  );
}

// Speech bubble shape
function SpeechBubble({
  className = "",
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={`absolute ${className}`}>
      <div
        className="relative bg-stone-100 border border-stone-200 rounded-[40%] flex items-center justify-center text-center px-6 py-8"
        style={{ width: 200, height: 180 }}
      >
        {children}
        {/* Bubble tail */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[16px] border-t-stone-100" />
      </div>
    </div>
  );
}

const QUOTES = [
  {
    text: "What is the best coffee spot in the city?",
    shape: "starburst",
    color: "#e8853a",
    size: 200,
    points: 12,
    rotate: -8,
    position: "top-8 left-[5%]",
  },
  {
    text: "I just moved to Halifax, how do I meet people?",
    shape: "starburst",
    color: "#8db86e",
    size: 180,
    points: 10,
    rotate: 5,
    position: "top-4 right-[8%]",
  },
  {
    text: "Less time on my phone! Harder than it looks, but board games are my friend.",
    shape: "starburst",
    color: "#f5c842",
    size: 210,
    points: 12,
    rotate: 3,
    position: "bottom-8 left-[6%]",
  },
  {
    text: "Cafe Byron has the best cortado!",
    shape: "starburst",
    color: "#f5c842",
    size: 170,
    points: 10,
    rotate: -5,
    position: "bottom-4 right-[10%]",
  },
];

export default function TellHaliiSection() {
  return (
    <section className="relative w-full px-6 py-20 md:py-32 overflow-hidden min-h-[700px]">
      {/* Section heading */}
      <div className="text-center mb-8">
        <h2
          className="font-coterie text-[clamp(2rem,6vw,4rem)] tracking-[0.15em] text-black"
          style={{ fontVariantLigatures: "none" }}
        >
          TELL HALII
        </h2>
        <Link
          href="/tell-halii"
          className="inline-block mt-2 text-black hover:opacity-50 transition-opacity text-xl"
        >
          →
        </Link>
      </div>

      {/* Scattered quote shapes */}
      {QUOTES.map((q, i) => (
        <div
          key={i}
          className={`absolute ${q.position} flex items-center justify-center`}
          style={{
            width: q.size,
            height: q.size,
            transform: `rotate(${q.rotate}deg)`,
          }}
        >
          <svg
            width={q.size}
            height={q.size}
            viewBox={`0 0 ${q.size} ${q.size}`}
            className="absolute inset-0"
          >
            {(() => {
              const cx = q.size / 2;
              const cy = q.size / 2;
              const outerR = q.size / 2;
              const innerR = q.size / 2.8;
              const pts: string[] = [];
              for (let j = 0; j < q.points * 2; j++) {
                const angle = (j * Math.PI) / q.points - Math.PI / 2;
                const r = j % 2 === 0 ? outerR : innerR;
                pts.push(`${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`);
              }
              return <polygon points={pts.join(" ")} fill={q.color} />;
            })()}
          </svg>
          <p
            className="relative z-10 text-center text-black text-xs leading-snug px-6"
            style={{ fontFamily: "var(--font-geist-mono)", maxWidth: q.size * 0.6 }}
          >
            {q.text}
          </p>
        </div>
      ))}

      {/* Centre speech bubble */}
      <div className="relative flex items-center justify-center min-h-[400px]">
        <div
          className="relative bg-stone-100 border border-stone-200 flex items-center justify-center text-center px-8 py-10"
          style={{ borderRadius: "45% 45% 45% 45% / 40% 40% 60% 60%", width: 240, height: 220 }}
        >
          <p className="font-coterie text-xl md:text-2xl tracking-wide text-black leading-tight">
            WE WANT TO<br />HEAR IT<br />FROM YOU
          </p>
          {/* Tail */}
          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-t-[20px] border-t-stone-100" />
        </div>
      </div>
    </section>
  );
}
