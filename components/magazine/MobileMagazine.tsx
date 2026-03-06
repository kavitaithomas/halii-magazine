'use client'
import Image from 'next/image'

interface Props {
  pages: string[]
  title: string
}

export function MobileMagazine({ pages, title }: Props) {
  return (
    <div className="bg-neutral-950 min-h-screen">
      <div className="sticky top-0 z-10 bg-neutral-900 px-4 py-3
                     border-b border-neutral-800">
        <p className="text-sm font-mono text-neutral-400 text-center">
          {title}
        </p>
      </div>

      <div className="flex flex-col gap-1 max-w-lg mx-auto">
        {pages.map((src, i) => (
          <div key={i} className="relative w-full aspect-[3/4]">
            <Image
              src={src}
              alt={`${title} — Page ${i + 1}`}
              fill
              sizes="100vw"
              className="object-contain"
              loading={i < 2 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
