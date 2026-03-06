'use client'
import dynamic from 'next/dynamic'
import { ComponentProps } from 'react'

// react-pageflip uses browser APIs — must be loaded client-side only
const HTMLFlipBook = dynamic(
  () => import('react-pageflip').then((m) => m.default),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center h-[600px] w-full">
        <span className="text-sm font-mono text-neutral-400 animate-pulse">
          Loading magazine...
        </span>
      </div>
    ),
  }
)

export { HTMLFlipBook }