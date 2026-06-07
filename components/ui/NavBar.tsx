"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Maximize, Minimize } from "lucide-react";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const HIDE_THRESHOLD = 100;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < HIDE_THRESHOLD) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keep state in sync if user exits fullscreen with Escape key
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-cream flex h-16 items-center justify-between px-4 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Link href="/">
        <Image src="/logo.svg" width={100} height={50} alt="HALII logo" />
      </Link>

      <div className="flex items-center gap-x-6 ml-auto">
        <Link
          href="/magazines"
          className="text-black/80 font-serif uppercase font-bold hover:text-yellow-600"
        >
          Magazines
        </Link>
        <Link
          href="/tell-halii"
          className="text-black/80 font-serif uppercase font-bold hover:text-yellow-600"
        >
          Tell Halii
        </Link>
        <button
          onClick={toggleFullscreen}
          className="p-1.5 rounded text-black hover:opacity-60 transition-opacity"
          aria-label="Toggle fullscreen"
        >
          {isFullscreen ? <Minimize size={16} /> : <Maximize size={16} />}
        </button>
      </div>
    </nav>
  );
}
