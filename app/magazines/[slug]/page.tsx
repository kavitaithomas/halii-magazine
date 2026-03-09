import { notFound } from "next/navigation";
import { getIssue, getIssues, getIssueManifest } from "@/lib/magazines";
import { MagazineViewer } from "@/components/magazine/MagazineViewer";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

// Pre-render all issue pages at build time
export async function generateStaticParams() {
  const issues = await getIssues();
  return issues.map((i) => ({ slug: i.slug }));
}

// SEO metadata per issue
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const issue = await getIssue(slug);
  if (!issue) return {};
  return {
    title: `${issue.title}`,
    description: issue.description,
    openGraph: {
      images: [{ url: issue.coverImage }],
    },
  };
}

export default async function MagazinePage({ params }: Props) {
  const { slug } = await params;

  const [issue, manifest] = await Promise.all([
    getIssue(slug),
    getIssueManifest(slug),
  ]);

  if (!issue) notFound();

  return (
    <main>
      <MagazineViewer manifest={manifest} title={`${issue.title}`} />
    </main>
  );
}
