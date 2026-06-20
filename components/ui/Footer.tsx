"use client";
import { useState } from "react";
import Link from "next/link";

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

function SpotifyIcon() {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M7 10.5c3.5-1 6.8-.7 10 1" />
      <path d="M8 13.5c2.8-.8 5.3-.5 7.8.8" />
      <path d="M9 16c2-.5 3.8-.3 5.4.5" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-red-950 text-white px-8 md:px-16 pb-6 pt-6 md:pt-10">
      <div className="flex flex-col gap-10 md:flex-row md:justify-between">
        {/* left side with contact info */}
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

          <p className="font-ephesis text-4xl text-white">
            Love Kait &amp; Cal
          </p>

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
        {/* Right side with playlists */}
        <div className="flex flex-col gap-4 md:self-start md:w-64">
          <p className="font-serif font-bold text-md md:text-xl text-white/90">
            Playlists
          </p>

          <a
            href="https://open.spotify.com/playlist/4e4C8MQduKEw4Ku8SelOl2?si=ebtOKsxST0KcikGgWJX7aQ&pi=V-Qv6udqTeemN&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGnlyekgopbRvjw9_WvNrVP5C7wPucAiOyr5jRk8dutmc0V9fnfUWetGaBO1Xk_aem_DHL17QBXYlH8RvIYoAKDdw&nd=1&dlsi=0300affcfd194f0d"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-white text-serif text-medium text-xl hover:opacity-70 transition-opacity"
          >
            <SpotifyIcon />
            <span>Spring Mixtape</span>
          </a>

          <a
            href="https://open.spotify.com/playlist/1mTzLhsGw9ccLpU2W7dVlU?si=QFlOgNLHSPmd1Kg7uGnBxw&pi=VKTQojMiQ1-WQ&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGnI6s2Vot6Q3boTcTH8rCltinEcqioBRAkFbq9khVRQILtl0Wl_618OlQLVUo_aem_j0VYkcBuFbPzS9vkLGuCyw&nd=1&dlsi=61cf454747004d4e"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-white text-serif text-medium text-xl hover:opacity-70 transition-opacity"
          >
            <SpotifyIcon />
            <span>12 Songs of the Month</span>
          </a>
        </div>
      </div>
      {/* Bottom copyright */}
      <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center gap-2 mx-auto mt-12 pt-6 border-t border-white/10">
        <p className="text-xs text-white/40 tracking-widest">
          © {new Date().getFullYear()} Halii Magazine. Halifax, Nova Scotia.
        </p>
        <p className="text-xs text-white/40 tracking-widest">
          Website designed and developed by Kavita Thomas
        </p>
      </div>
    </footer>
  );
}
