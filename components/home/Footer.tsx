"use client";
import { useState } from "react";

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

// TikTok icon
function TikTokIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
    </svg>
  );
}

export default function Footer() {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    // TODO: wire up to your backend/email service
    console.log("Message:", message);
    setMessage("");
  };

  return (
    <footer className="w-full bg-red-950 text-white px-8 md:px-16 py-12 md:py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12 md:gap-8">
        {/* Left — social links */}
        <div className="flex flex-col gap-4">
          <p className="font-coterie text-sm tracking-widest text-white/70">
            Let&apos;s connect
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:opacity-60 transition-opacity"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:opacity-60 transition-opacity"
              aria-label="TikTok"
            >
              <TikTokIcon />
            </a>
          </div>
        </div>

        {/* Right — message form */}
        <div className="flex flex-col gap-4 md:w-80">
          <p className="font-coterie text-sm tracking-widest text-white/70">
            Send us a message!
          </p>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
            placeholder=""
            className="w-full bg-white/10 border border-white/20 text-white placeholder-white/30 px-3 py-2 text-sm resize-none focus:outline-none focus:border-white/50 transition-colors"
          />
          <div className="flex justify-end">
            <button
              onClick={handleSend}
              className="font-coterie text-xs tracking-[0.2em] bg-white/10 hover:bg-white/20 border border-white/30 text-white px-5 py-2 transition-colors duration-200"
            >
              send
            </button>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-white/10">
        <p className="text-xs text-white/30 font-coterie tracking-widest">
          © {new Date().getFullYear()} Halii Magazine. Halifax, Nova Scotia.
        </p>
      </div>
    </footer>
  );
}
