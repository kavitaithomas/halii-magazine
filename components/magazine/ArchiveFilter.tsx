"use client";
import { useEffect, useRef, useState } from "react";
import type { Issue } from "@/types/magazine";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function getYears(issues: Issue[]): number[] {
  const years = issues.map((i) => {
    // slug format: Jan-25 → year = 2000 + 25
    const parts = i.slug.split("-");
    return 2000 + parseInt(parts[parts.length - 1]);
  });
  return [...new Set(years)].sort((a, b) => b - a);
}

function slugToMonthYear(slug: string): { month: string; year: number } {
  const parts = slug.split("-");
  return {
    month: parts[0],
    year: 2000 + parseInt(parts[parts.length - 1]),
  };
}

interface Props {
  issues: Issue[];
}

export function ArchiveFilter({ issues }: Props) {
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [highlightedSlug, setHighlightedSlug] = useState<string | null>(null);
  const years = getYears(issues);

  const handleFilter = () => {
    if (!selectedMonth && !selectedYear) return;

    // Find the matching issue
    const match = issues.find((issue) => {
      const { month, year } = slugToMonthYear(issue.slug);
      const monthMatch = selectedMonth ? month === selectedMonth : true;
      const yearMatch = selectedYear ? year === selectedYear : true;
      return monthMatch && yearMatch;
    });

    if (!match) return;

    setHighlightedSlug(match.slug);

    // Scroll to the issue card
    const el = document.getElementById(`issue-${match.slug}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    // Remove highlight after 2.5s
    setTimeout(() => setHighlightedSlug(null), 2500);
  };

  const handleClear = () => {
    setSelectedMonth(null);
    setSelectedYear(null);
    setHighlightedSlug(null);
  };

  // Expose highlightedSlug via a data attribute so IssueCard can read it
  // We use a custom event instead — simpler and no prop drilling
  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent("halii:highlight", { detail: highlightedSlug })
    );
  }, [highlightedSlug]);

  return (
    <div className="flex flex-wrap items-center gap-3 mt-3">
      {/* Month picker */}
      <select
        value={selectedMonth ?? ""}
        onChange={(e) => setSelectedMonth(e.target.value || null)}
        className="font-serif text-sm tracking-widest uppercase border border-black/20 rounded-xl px-3 py-1.5 bg-white focus:outline-none focus:border-black/50 cursor-pointer"
      >
        <option value="">Month</option>
        {MONTHS.map((m) => (
          <option key={m} value={m}>
            {m}
          </option>
        ))}
      </select>

      {/* Year picker */}
      <select
        value={selectedYear ?? ""}
        onChange={(e) =>
          setSelectedYear(e.target.value ? parseInt(e.target.value) : null)
        }
        className="font-serif text-sm tracking-widest uppercase border border-black/20 rounded-xl px-3 py-1.5 bg-white focus:outline-none focus:border-black/50 cursor-pointer"
      >
        <option value="">Year</option>
        {years.map((y) => (
          <option key={y} value={y}>
            {y}
          </option>
        ))}
      </select>

      {/* Go button */}
      <button
        onClick={handleFilter}
        disabled={!selectedMonth && !selectedYear}
        className="font-serif text-sm tracking-widest uppercase border border-black/20 rounded-xl px-4 py-1.5 hover:bg-black hover:text-white disabled:opacity-30 transition-all duration-200"
      >
        Go
      </button>

      {/* Clear */}
      {(selectedMonth || selectedYear) && (
        <button
          onClick={handleClear}
          className="font-serif text-sm tracking-widest uppercase text-black/40 hover:text-black transition-colors"
        >
          Clear
        </button>
      )}
    </div>
  );
}
