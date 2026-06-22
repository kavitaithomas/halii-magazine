// data fetching logic

import { Issue, IssueManifest } from "@/types/magazine";

// Static data (CMS will come later)
const ISSUES: Issue[] = [
  {
    slug: "Feb-25",
    title: "Baby's First Issue",
    issueNumber: 1,
    coverImage: "/magazines/Jan-25/page-001.webp",
    pageCount: 20,
    description: "The Debut",
  },

  {
    slug: "Mar-25",
    title: "March 25",
    issueNumber: 2,
    coverImage: "/magazines/Mar-25/page-001.webp",
    pageCount: 20,
    description: "A Month of New Beginnings",
  },
  {
    slug: "April-25",
    title: "April 25",
    issueNumber: 3,
    coverImage: "/magazines/April-25/page-001.webp",
    pageCount: 20,
    description: "April Showers",
  },
  {
    slug: "May-25",
    title: "May 25",
    issueNumber: 4,
    coverImage: "/magazines/May-25/page-001.webp",
    pageCount: 20,
    description: "Florals for Spring? Groundbreaking.",
  },
  {
    slug: "June-25",
    title: "June 25",
    issueNumber: 5,
    coverImage: "/magazines/June-25/page-001.webp",
    pageCount: 20,
    description: "There's nothing like it.",
  },
  {
    slug: "July-25",
    title: "July 25",
    issueNumber: 6,
    coverImage: "/magazines/July-25/page-001.webp",
    pageCount: 20,
    description: "Hello July!",
  },
  {
    slug: "Aug-25",
    title: "August 25",
    issueNumber: 7,
    coverImage: "/magazines/Aug-25/page-001.webp",
    pageCount: 20,
    description: "Welcome to August",
  },
  {
    slug: "Sept-25",
    title: "September 25",
    issueNumber: 8,
    coverImage: "/magazines/Sept-25/page-001.webp",
    pageCount: 20,
    description: "The Age of September",
  },

  {
    slug: "Oct-25",
    title: "October 25",
    issueNumber: 9,
    coverImage: "/magazines/Oct-25/page-001.webp",
    pageCount: 20,
    description: "HALIIWEEN",
  },
  {
    slug: "Nov-25",
    title: "November 25",
    issueNumber: 10,
    coverImage: "/magazines/Nov-25/page-001.webp",
    pageCount: 20,
    description: "The Mid-November Issue",
  },
  {
    slug: "Dec-25",
    title: "December 25",
    issueNumber: 11,
    coverImage: "/magazines/Dec-25/page-001.webp",
    pageCount: 20,
    description: "HALII Days",
  },
  {
    slug: "Jan-26",
    title: "January 26",
    issueNumber: 12,
    coverImage: "/magazines/Jan-26/page-001.webp",
    pageCount: 20,
    description: "JANUARY",
  },
  {
    slug: "Feb-26",
    title: "February 26",
    issueNumber: 13,
    coverImage: "/magazines/Feb-26/page-001.webp",
    pageCount: 20,
    description: "The Love Bug",
  },
  {
    slug: "Spring-26",
    title: "Spring 26",
    issueNumber: 14,
    coverImage: "/magazines/Spring-26/page-001.webp",
    pageCount: 20,
    description: "The Spring Sleepover",
  },
  {
    slug: "May-26",
    title: "May 26",
    issueNumber: 15,
    coverImage: "/magazines/May-26/page-001.webp",
    pageCount: 20,
    description: "The May Projection",
  },
  {
    slug: "Summer-26",
    title: "Summer 26",
    issueNumber: 16,
    coverImage: "/magazines/Summer-26/page-001.webp",
    pageCount: 23,
    description: "The Summer Solstice",
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
