"use client";
import { useState } from "react";
import Link from "next/link";

// Instagram icon
function InstagramIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 7 9-7" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-red-950 text-white px-8 md:px-16 pb-6 pt-6 md:pt-10">
      <div className="max-w-3xl space-y-5">
        <p className="font-serif font-bold text-md md:text-xl text-white/90">
          Feel free to reach out if you have any questions or suggestions.
        </p>

        <a
          href="https://instagram.com/haliimagazine"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-white text-serif text-medium text-xl hover:opacity-70 transition-opacity"
        >
          <InstagramIcon />
          <span>@haliimagazine</span>
        </a>

        <a
          href="mailto:haliimagazine@gmail.com"
          className="flex items-center gap-3 text-white text-serif text-medium text-xl hover:opacity-70 transition-opacity"
        >
          <EmailIcon />
          <span>haliimagazine@gmail.com</span>
        </a>

        <p className="font-serif font-bold text-md md:text-xl text-white/90">
          We&apos;d be honoured to hear from you.
        </p>

        <p className="font-ephesis text-4xl text-white">Love Kait &amp; Cal</p>

        <div className="pt-2">
          <Link
            href="/magazines"
            className="group inline-flex items-center gap-2 bg-yellow-600 px-6 py-1 font-serif font-bold uppercase text-red-950 transition-all duration-300"
          >
            Read the issues
            <span className="transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </Link>
        </div>
      </div>
      {/* Bottom copyright */}
      <div className="w-full mx-auto mt-12 pt-6 border-t border-white/10">
        <p className="text-xs text-white/40 tracking-widest">
          © {new Date().getFullYear()} Halii Magazine. Halifax, Nova Scotia.
        </p>
      </div>
    </footer>
  );
}
