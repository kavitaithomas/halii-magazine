"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function SpinningCircle() {
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame: number;
    let angle = 0;
    const spin = () => {
      angle += 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `rotate(${angle}deg)`;
      }
      frame = requestAnimationFrame(spin);
    };
    frame = requestAnimationFrame(spin);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="relative w-full" style={{ paddingBottom: "100%" }}>
      <div className="absolute inset-0">
        {/* Layer 1 — spinning magazine ring */}
        <div ref={ringRef} className="absolute inset-0 w-full h-full">
          <img
            src="/home_assets/magazine_spinning.webp"
            alt="Halii Magazine covers"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Layer 2 — "IN AN EXCITING CITY" PNG, dead centre, does not spin */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative w-[42%] h-[42%]">
            <Image
              src="/home_assets/exciting_city.png"
              alt="Born of complete boredom in an exciting city"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
