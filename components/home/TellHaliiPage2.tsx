"use client";
import Image from "next/image";
import { useState } from "react";

// ── Seasonal prompts — swap these out each season ─────────────────────────────
const PROMPTS = [
  "What's the best hidden gem in Halifax right now?",
  "What are you most excited about this season?",
  "Give us your hottest Halifax recommendation.",
];

export default function TellHaliiPage() {
  const [answers, setAnswers] = useState(["", "", ""]);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (i: number, val: string) => {
    setAnswers((prev) => prev.map((a, idx) => (idx === i ? val : a)));
  };

  const handleSubmit = async () => {
    // TODO: wire up to Sanity when ready
    console.log("Submitted:", answers);
    setSubmitted(true);
  };

  return (
    <main className="w-full min-h-screen flex flex-col">
      {/* ── TOP: bubbles in a compact row ── */}
      <div className="w-full px-6 md:px-16 pt-10 pb-4">
        <h1 className="font-coterie text-3xl md:text-4xl text-black mb-6 tracking-wide">
          TELL HALII
        </h1>

        {/* All 5 bubbles in one row, small and decorative */}
        <div className="flex items-end justify-center gap-2 md:gap-4 h-28 md:h-36">
          <div style={{ transform: "rotate(-8deg)" }} className="shrink-0">
            <Image
              src="/home_assets/greenbubble.webp"
              width={90}
              height={90}
              alt=""
              className="object-contain h-20 md:h-28 w-auto"
            />
          </div>
          <div style={{ transform: "rotate(6deg)" }} className="shrink-0">
            <Image
              src="/home_assets/bluebubble.webp"
              width={75}
              height={75}
              alt=""
              className="object-contain h-16 md:h-24 w-auto"
            />
          </div>

          {/* Speech bubble — slightly bigger as the centrepiece */}
          <div
            className="shrink-0 z-10"
            style={{ transform: "translateY(-8px)" }}
          >
            <Image
              src="/home_assets/speechbubble.webp"
              width={130}
              height={130}
              alt="We want to hear it from you"
              className="object-contain h-24 md:h-32 w-auto"
            />
          </div>

          <div style={{ transform: "rotate(5deg)" }} className="shrink-0">
            <Image
              src="/home_assets/yellowbubble.webp"
              width={90}
              height={90}
              alt=""
              className="object-contain h-20 md:h-28 w-auto"
            />
          </div>
          <div style={{ transform: "rotate(-7deg)" }} className="shrink-0">
            <Image
              src="/home_assets/pinkbubble.webp"
              width={80}
              height={80}
              alt=""
              className="object-contain h-18 md:h-24 w-auto"
            />
          </div>
        </div>
      </div>

      {/* ── BOTTOM: form ── */}
      <div className="flex-1 w-full px-6 md:px-16 pb-12">
        {submitted ? (
          <div className="flex flex-col items-center justify-center h-full gap-4 py-16">
            <p className="font-coterie text-2xl text-black tracking-wide">
              Thank you! 🩷
            </p>
            <p className="text-black/50 text-sm">We read every single one.</p>
            <button
              onClick={() => {
                setAnswers(["", "", ""]);
                setSubmitted(false);
              }}
              className="mt-4 font-coterie text-xs tracking-[0.2em] uppercase border border-black/20 px-6 py-2 hover:bg-black hover:text-white transition-all duration-300"
            >
              Submit another
            </button>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto flex flex-col gap-6">
            {PROMPTS.map((prompt, i) => (
              <div key={i} className="flex flex-col gap-2">
                <label className="font-serif font-bold text-xs tracking-[0.18em] uppercase text-black">
                  {prompt}
                </label>
                <textarea
                  rows={2}
                  value={answers[i]}
                  onChange={(e) => handleChange(i, e.target.value)}
                  placeholder="Type your answer..."
                  className="w-full border-b border-black/20 bg-transparent text-black text-sm py-2 resize-none focus:outline-none focus:border-black/60 transition-colors placeholder:text-black/25"
                />
              </div>
            ))}

            <div className="flex justify-end pt-2">
              <button
                onClick={handleSubmit}
                disabled={answers.every((a) => a.trim() === "")}
                className="group font-serif font-bold text-md uppercase bg-yellow-600 text-red-950 px-8 py-3 inline-flex items-center gap-x-2 transition-all duration-300"
              >
                Send to Halii
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
