"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-cream flex h-16 items-center justify-between px-4 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Link href="/">
        <Image src="/logo.svg" width={100} height={50} alt="HALII logo" />
      </Link>

      <div className="flex gap-x-4">
        <Link
          href="/magazines"
          className="text-black/80 font-serif uppercase font-bold hover:text-yellow-600"
        >
          Magazines
        </Link>
      </div>
    </nav>
  );
}
