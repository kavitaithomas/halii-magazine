'use client'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, Maximize, Minimize } from 'lucide-react'

interface Props {
  title: string
  currentPage: number
  pageCount: number
  onPrev: () => void
  onNext: () => void
  onGoToPage: (n: number) => void
  onToggleFullscreen: () => void
  isFullscreen: boolean
}

export function ViewerToolbar({ title, currentPage, pageCount,
  onPrev, onNext, onGoToPage, onToggleFullscreen, isFullscreen }: Props) {

  const [inputVal, setInputVal] = useState('')

  const handlePageJump = (e: React.FormEvent) => {
    e.preventDefault()
    const n = parseInt(inputVal) - 1
    if (!isNaN(n) && n >= 0 && n < pageCount) {
      onGoToPage(n)
    }
    setInputVal('')
  }

  return (
    <div className="w-full flex items-center justify-between
                   px-6 py-3 bg-neutral-900 border-b border-neutral-800">

      {/* Title */}
      <span className="text-sm font-mono text-neutral-400 truncate max-w-[200px]">
        {title}
      </span>

      {/* Page controls */}
      <div className="flex items-center gap-3">
        <button
          onClick={onPrev}
          className="p-1.5 rounded text-neutral-400 hover:text-white
                       hover:bg-neutral-800 transition-colors"
          aria-label="Previous page"
        >
          <ChevronLeft size={18} />
        </button>

        <form onSubmit={handlePageJump} className="flex items-center gap-2">
          <input
            type="number"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder={String(currentPage + 1)}
            className="w-12 text-center bg-neutral-800 text-white text-sm
                         rounded px-1.5 py-0.5 font-mono border border-neutral-700
                         focus:outline-none focus:border-neutral-500"
            min="1"
            max={pageCount}
          />
          <span className="text-neutral-500 text-sm font-mono">
            / {pageCount}
          </span>
        </form>

        <button
          onClick={onNext}
          className="p-1.5 rounded text-neutral-400 hover:text-white
                       hover:bg-neutral-800 transition-colors"
          aria-label="Next page"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Fullscreen toggle */}
      <button
        onClick={onToggleFullscreen}
        className="p-1.5 rounded text-neutral-400 hover:text-white
                     hover:bg-neutral-800 transition-colors"
        aria-label="Toggle fullscreen"
      >
        {isFullscreen ? <Minimize size={16} /> : <Maximize size={16} />}
      </button>

    </div>
  )
}