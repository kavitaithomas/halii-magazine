"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Maximize, Minimize } from "lucide-react";
import Link from "next/link";

interface Props {
  title: string;
  currentPage: number;
  pageCount: number;
  onPrev: () => void;
  onNext: () => void;
  onGoToPage: (n: number) => void;
  onToggleFullscreen: () => void;
  isFullscreen: boolean;
}

export function ViewerToolbar({
  title,
  currentPage,
  pageCount,
  onPrev,
  onNext,
  onGoToPage,
  onToggleFullscreen,
  isFullscreen,
}: Props) {
  const [inputVal, setInputVal] = useState("");

  const handlePageJump = (e: React.FormEvent) => {
    e.preventDefault();
    const n = parseInt(inputVal) - 1;
    if (!isNaN(n) && n >= 0 && n < pageCount) {
      onGoToPage(n);
    }
    setInputVal("");
  };

  return (
    <div className="w-full relative flex items-center px-6 py-1 bg-zinc-50 border-b border-t border-red-950">
      {/* Left */}
      <div className="flex items-center gap-x-10">
        <Link className="flex flex-row items-center" href="/magazines">
          <ChevronLeft size={18} />
          <p className="text-md uppercase text-black">Back to the Archive</p>
        </Link>
        <p className="text-sm font-bold text-black max-w-50">{title}</p>
      </div>

      {/* Center */}
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-3">
        <button
          onClick={onPrev}
          className="p-1.5 rounded text-red-950"
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
            className="w-12 text-center bg-red-950 text-white text-sm
            rounded px-1.5 py-0.5 border border-neutral-700
            focus:outline-none focus:border-neutral-500"
            min="1"
            max={pageCount}
          />
          <span className="text-red-950 text-sm">/ {pageCount}</span>
        </form>

        <button
          onClick={onNext}
          className="p-1.5 rounded text-red-950"
          aria-label="Next page"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Right */}
      <div className="ml-auto">
        <button
          onClick={onToggleFullscreen}
          className="p-1.5 rounded text-black"
          aria-label="Toggle fullscreen"
        >
          {isFullscreen ? <Minimize size={16} /> : <Maximize size={16} />}
        </button>
      </div>
    </div>
  );
}
