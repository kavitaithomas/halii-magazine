"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Maximize, Minimize, Menu, X } from "lucide-react";
import ScrollingTicker from "@/components/home/ScrollingTicker";

export default function Navbar() {
  const pathname = usePathname();
  const isMagazineViewer =
    pathname?.startsWith("/magazines/") && pathname !== "/magazines";

  const [visible, setVisible] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* ── Top bar ── */}
      <div className="bg-red-950 flex h-16 items-center justify-between px-4">
        <Link href="/">
          <Image src="/logo.svg" width={100} height={50} alt="HALII logo" />
        </Link>

        {/* Desktop links — hidden on mobile */}
        <div className="hidden md:flex items-center gap-x-6 ml-auto">
          <Link
            href="/magazines"
            className="text-cream font-serif uppercase font-bold hover:text-yellow-600"
          >
            Magazines
          </Link>
          <button
            onClick={toggleFullscreen}
            className="p-1.5 rounded text-cream hover:opacity-60 transition-opacity"
            aria-label="Toggle fullscreen"
          >
            {isFullscreen ? <Minimize size={16} /> : <Maximize size={16} />}
          </button>
        </div>

        {/* Mobile hamburger — hidden on desktop */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden p-1.5 text-cream ml-auto"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Only show ticker when NOT on a magazine viewer page */}
      {!isMagazineViewer && <ScrollingTicker />}

      {/* ── Mobile dropdown menu ── */}
      {menuOpen && (
        <div className="md:hidden bg-pink-50 border-t border-black/10 flex flex-col px-4 py-4 gap-y-4">
          <Link
            href="/magazines"
            onClick={() => setMenuOpen(false)}
            className="text-black/80 font-serif uppercase font-bold hover:text-yellow-600"
          >
            Magazines
          </Link>

          <button
            onClick={toggleFullscreen}
            className="flex items-center gap-x-2 text-black/80 font-serif uppercase font-bold w-fit"
          >
            {isFullscreen ? <Minimize size={16} /> : <Maximize size={16} />}
            Fullscreen
          </button>
        </div>
      )}
    </nav>
  );
}
