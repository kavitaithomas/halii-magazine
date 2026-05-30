import { getIssues } from "@/lib/magazines";
import { IssueCard } from "./IssueCard";

export async function MagazineArchive() {
  const issues = await getIssues();

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <header className="mb-12">
        <p className="text-xs font-serif tracking-widest text-black/80 uppercase mb-2">
          All Issues
        </p>
        <h1 className="font-coterie text-4xl text-black md:text-5xl">
          The Archive
        </h1>
      </header>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {issues.map((issue, i) => (
          <IssueCard
            key={issue.slug}
            issue={issue}
            /* preload first 4 covers */
            priority={i < 4}
          />
        ))}
      </div>
    </section>
  );
}
