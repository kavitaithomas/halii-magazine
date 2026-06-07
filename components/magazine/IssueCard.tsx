"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { Issue } from "@/types/magazine";

interface IssueCardProps {
  issue: Issue;
  priority?: boolean;
}

export function IssueCard({ issue, priority = false }: IssueCardProps) {
  const [highlighted, setHighlighted] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      const slug = (e as CustomEvent).detail;
      setHighlighted(slug === issue.slug);
    };
    window.addEventListener("halii:highlight", handler);
    return () => window.removeEventListener("halii:highlight", handler);
  }, [issue.slug]);

  return (
    <div id={`issue-${issue.slug}`}>
      <Link
        href={`/magazines/${issue.slug}`}
        className={`group block transition-all duration-500 ${
          highlighted ? "ring-2 ring-red-950 ring-offset-4 scale-[1.03]" : ""
        }`}
      >
        <article className="flex flex-col">
          {/* Cover image */}
          <div className="relative aspect-3/4 overflow-hidden bg-neutral-100 shadow-md transition-shadow duration-300 group-hover:shadow-xl">
            <Image
              src={issue.coverImage}
              alt={`Cover of ${issue.title}`}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              priority={priority}
            />
          </div>

          {/* Metadata */}
          <div className="pt-3">
            <h3 className="mt-1 font-serif text-lg leading-snug group-hover:underline underline-offset-2">
              {issue.title}
            </h3>
            <p className="mt-1 text-sm text-neutral-500">
              {issue.pageCount} pages
            </p>
          </div>
        </article>
      </Link>
    </div>
  );
}
