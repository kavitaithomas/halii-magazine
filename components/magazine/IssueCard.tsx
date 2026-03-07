import Image from "next/image";
import Link from "next/link";
import { Issue } from "@/types/magazine";

interface IssueCardProps {
  issue: Issue;
  priority?: boolean; // pass true for above-the-fold cards
}

export function IssueCard({ issue, priority = false }: IssueCardProps) {
  return (
    <Link href={`/magazines/${issue.slug}`} className="group block">
      <article className="flex flex-col">
        {/* Cover image */}
        <div
          className="relative aspect-[3/4] overflow-hidden bg-neutral-100
                       shadow-md transition-shadow duration-300
                       group-hover:shadow-xl"
        >
          <Image
            src={issue.coverImage}
            alt={`Cover of ${issue.title}`}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-500
                         group-hover:scale-[1.03]"
            priority={priority}
          />

          {/* Issue number badge */}
          <div
            className="absolute bg-black/80 text-white
                         text-xs font-mono tracking-widest px-2"
          >
            {issue.slug}
          </div>
        </div>

        {/* Metadata */}
        <div className="pt-3">
          <h3
            className="mt-1 font-serif text-3xl leading-snug
                        group-hover:underline underline-offset-2 text-rose-950"
          >
            {issue.title}
          </h3>
          <p className="mt-1 text-m text-neutral-400">{issue.description}</p>
        </div>
      </article>
    </Link>
  );
}
