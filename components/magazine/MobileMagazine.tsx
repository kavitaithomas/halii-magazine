"use client";
import Image from "next/image";

interface Props {
  pages: string[];
  title: string;
}

export function MobileMagazine({ pages, title }: Props) {
  return (
    <div className="bg-zinc-50 min-h-screen pt-16">
      <div
        className="sticky top-0 z-10 bg-zinc-50 px-4 py-1
                     border-y border-neutral-800"
      >
        <p className="text-sm font-mono text-red-950 text-center">{title}</p>
      </div>

      <div className="flex flex-col gap-1 max-w-lg mx-auto">
        {pages.map((src, i) => (
          <div key={i} className="relative w-full aspect-3/4">
            <Image
              src={src}
              alt={`${title} — Page ${i + 1}`}
              fill
              sizes="100vw"
              className="object-contain"
              loading={i < 2 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
