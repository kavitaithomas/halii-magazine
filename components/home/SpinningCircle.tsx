"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function SpinningCircle() {
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame: number;
    let angle = 0;

    // Faster spin on small screens
    const speed = window.innerWidth < 768 ? 0.3 : 0.12;

    const spin = () => {
      angle += speed;
      if (ringRef.current)
        ringRef.current.style.transform = `rotate(${angle}deg)`;
      frame = requestAnimationFrame(spin);
    };
    frame = requestAnimationFrame(spin);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    // padding-bottom: 100% makes the container a responsive square
    <div className="relative w-full" style={{ paddingBottom: "100%" }}>
      <div className="absolute inset-0">
        {/* Layer 1 — spinning magazine ring */}
        <div ref={ringRef} className="absolute inset-0">
          <img
            src="/home_assets/magazine_spinning.webp"
            alt="Halii Magazine covers"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Layer 3 — "IN AN EXCITING CITY" PNG, centred and still */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ paddingBottom: "6%" }}
        >
          <div className="w-[50%] h-[38%] relative">
            <Image
              src="/home_assets/Exciting_City.webp"
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
