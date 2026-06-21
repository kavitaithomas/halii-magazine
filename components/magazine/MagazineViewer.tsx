/*
goal: component that uses react page-flip to create an online interactive magazine
input: array of image URLs and page count
- mobile responsive
- shows loading state while images fetch

- node webp-converted lib 
-download magazine as png (each mag its own folder) then convert each png to webp

run: node scripts/convert-pngs.cjs
*/

"use client";
import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { HTMLFlipBook } from "./PageFlipWrapper";
import { ViewerToolbar } from "./ViewToolbar";
import { MobileMagazine } from "./MobileMagazine";
import { useMediaQuery } from "@/lib/hooks";
import type { IssueManifest } from "@/types/magazine";

interface Props {
  manifest: IssueManifest;
  title: string;
}

export function MagazineViewer({ manifest, title }: Props) {
  const bookRef = useRef<any>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const onFlip = useCallback((e: any) => {
    setCurrentPage(e.data);
  }, []);

  // Nav functions
  const goToPrev = () => bookRef.current?.pageFlip().flipPrev();
  const goToNext = () => bookRef.current?.pageFlip().flipNext();
  const goToPage = (n: number) => bookRef.current?.pageFlip().flip(n);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "ArrowLeft") goToPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  if (isMobile) {
    return <MobileMagazine pages={manifest.pages} title={title} />;
  }

  return (
    <div className="pt-16 flex flex-col items-center bg-zinc-50">
      <ViewerToolbar
        title={title}
        currentPage={currentPage}
        pageCount={manifest.pageCount}
        onPrev={goToPrev}
        onNext={goToNext}
        onGoToPage={goToPage}
      />

      <div className="flex-1 flex items-center justify-center p-8 w-screen h-screen">
        <HTMLFlipBook
          ref={bookRef}
          width={550}
          height={733}
          minWidth={300}
          maxWidth={1000}
          minHeight={400}
          maxHeight={1280}
          showCover={true}
          mobileScrollSupport={false}
          onFlip={onFlip}
          className="shadow-2xl"
        >
          {manifest.pages.map((src, i) => (
            <div key={i} className="relative w-full h-full bg-white">
              <Image
                src={src}
                alt={`Page ${i + 1}`}
                fill
                sizes="50vw"
                className="object-cover"
                loading={i < 4 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </HTMLFlipBook>
      </div>
    </div>
  );
}
