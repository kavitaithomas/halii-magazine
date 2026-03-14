// data fetching logic

import { Issue, IssueManifest } from "@/types/magazine";

// Static data (CMS will come later)
const ISSUES: Issue[] = [
  {
    slug: "Jan-25",
    title: "Baby's First Issue",
    issueNumber: 1,
    coverImage: "/magazines/Jan-25/page-001.webp",
    pageCount: 20,
    description: "The Debut",
  },
  {
    slug: "Feb-26",
    title: "Feb 26",
    issueNumber: 14,
    coverImage: "/magazines/Feb-26/page-001.webp",
    pageCount: 20,
    description: "The Love Bug",
  },
  {
    slug: "Mar-25",
    title: "Mar 25",
    issueNumber: 2,
    coverImage: "/magazines/Mar-25/page-001.webp",
    pageCount: 20,
    description: "A Month of New Beginnings",
  },
  {
    slug: "April-25",
    title: "April 25",
    issueNumber: 2,
    coverImage: "/magazines/April-25/page-001.webp",
    pageCount: 20,
    description: "April Showers",
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
