"use client";
import dynamic from "next/dynamic";
import React from "react";

const HTMLFlipBookDynamic = dynamic(() => import("react-pageflip"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-150 w-full">
      <span className="text-sm font-mono text-neutral-400 animate-pulse">
        Loading magazine...
      </span>
    </div>
  ),
});

// Cast to any to bypass react-pageflip's incomplete type definitions
export const HTMLFlipBook = HTMLFlipBookDynamic as any;
