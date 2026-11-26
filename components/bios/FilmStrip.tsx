"use client";
import Image from "next/image";

type Photo = { src: string; alt: string };

// Swap these for the photos you want in the strip
const DEFAULT_PHOTOS: Photo[] = [
  { src: "/models/geneva1.webp", alt: "Geneva" },
];

interface Props {
  photos?: Photo[];
  aspect?: string; // shape of each photo window, e.g. "3 / 2" or "4 / 5"
  seconds?: number; // time for one full loop (desktop)
}

// Row of rounded-square sprocket holes
function Sprockets() {
  return (
    <div
      className="flex items-center justify-around"
      style={{ height: "calc(var(--fw) * 0.1)" }}
    >
      {Array.from({ length: 4 }).map((_, i) => (
        <span
          key={i}
          className="h-[70%] aspect-square rounded-[3px] bg-cream"
        />
      ))}
    </div>
  );
}

function Frame({
  photo,
  n,
  aspect,
}: {
  photo: Photo;
  n: number;
  aspect: string;
}) {
  return (
    <div
      className="relative shrink-0 bg-black font-mono select-none"
      style={{
        width: "var(--fw)",
        color: "#f0a868",
        fontSize: "clamp(7px, calc(var(--fw) * 0.04), 12px)",
      }}
    >
      {/* top label */}
      <div className="px-[4%] pt-[2%] h-[1.6em] flex items-end leading-none">
        35mm FILM
      </div>

      <Sprockets />

      {/* photo window */}
      <div
        className="relative mx-[4%] my-[2%] bg-white overflow-hidden"
        style={{ aspectRatio: aspect }}
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="320px"
          className="object-cover"
        />
      </div>

      <Sprockets />

      {/* bottom frame numbers */}
      <div className="px-[4%] pb-[2%] h-[1.6em] flex items-start justify-between leading-none">
        <span>{n}</span>
        <span className="me-[30%]">{n}A</span>
      </div>
    </div>
  );
}

export default function Film({
  photos = DEFAULT_PHOTOS,
  aspect = "3 / 2",
  seconds = 40,
}: Props) {
  // Repeat the photos so each group is wider than the screen
  const reps = Math.max(1, Math.ceil(8 / photos.length));
  const frames = Array.from({ length: reps }, () => photos).flat();

  return (
    <div
      className="w-full overflow-hidden"
      style={
        {
          "--fw": "clamp(120px, 17vw, 220px)",
          "--dur": `${seconds}s`,
        } as React.CSSProperties
      }
    >
      <div className="film-track flex w-max">
        {/* Two identical groups = seamless loop (same trick as the ticker) */}
        {[0, 1].map((g) => (
          <div key={g} className="flex shrink-0" aria-hidden={g === 1}>
            {frames.map((photo, i) => (
              <Frame key={i} photo={photo} n={i + 1} aspect={aspect} />
            ))}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes film {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .film-track {
          animation: film var(--dur) linear infinite;
        }
        .film-track:hover {
          animation-play-state: paused;
        }
        @media (max-width: 768px) {
          .film-track {
            animation-duration: calc(var(--dur) / 2);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .film-track {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
