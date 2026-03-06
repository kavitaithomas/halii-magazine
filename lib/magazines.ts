// data fetching logic

import { Issue, IssueManifest } from "@/types/magazine";

// Static data (CMS will come later)
const ISSUES: Issue[] = [
  {
    slug: "Jan 2025",
    title: "Baby's First Issue",
    issueNumber: 1,
    coverImage: "/magazines/Jan-25/cover.webp",
    pageCount: 20,
    description: "The Debut",
  },
];

export async function getIssues(): Promise<Issue[]> {
  return [...ISSUES].sort((a, b) => b.issueNumber - a.issueNumber);
}

export async function getIssue(slug: string): Promise<Issue | null> {
  return ISSUES.find((i) => i.slug === slug) ?? null;
}

export async function getIssueManifest(slug: string): Promise<IssueManifest> {
  // In production, fetch this from your CDN/object storage
  const issue = await getIssue(slug);
  if (!issue) throw new Error(`Issue not found: ${slug}`);

  const pages = Array.from({ length: issue.pageCount }, (_, i) => {
    const n = String(i + 1).padStart(3, "0");
    return `/magazines/${slug}/page-${n}.webp`;
  });

  return { slug, pageCount: issue.pageCount, pages };
}
