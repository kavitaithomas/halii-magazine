// individual magazine viewer

import { notFound } from "next/navigation";
import { getIssue, getIssues, getIssueManifest } from "@/lib/magazines";
import { MagazineViewer } from "@/components/magazine/MagazineViewer";
import type { Metadata } from "next";

interface Props {
  params: { slug: string };
}

// Pre-render all issue pages at build time
export async function generateStaticParams() {
  const issues = await getIssues();
  return issues.map((i) => ({ slug: i.slug }));
}

// SEO metadata per issue
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const issue = await getIssue(params.slug);
  if (!issue) return {};
  return {
    title: `${issue.title} — ${issue.season}`,
    description: issue.description,
    openGraph: {
      images: [{ url: issue.coverImage }],
    },
  };
}

export default async function MagazinePage({ params }: Props) {
  const [issue, manifest] = await Promise.all([
    getIssue(params.slug),
    getIssueManifest(params.slug),
  ]);

  if (!issue) notFound();

  return (
    <main>
      <MagazineViewer
        manifest={manifest}
        title={`${issue.title} · ${issue.season}`}
      />
    </main>
  );
}
