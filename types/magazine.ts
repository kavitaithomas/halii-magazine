// set up to easily switch to CMS later

export interface Issue {
  slug: string; // used in URL: /magazines/Jan-25
  title: string;
  issueNumber: number;
  coverImage: string; // path to cover WebP
  pageCount: number;
  description?: string;
}

export interface IssueManifest {
  slug: string;
  pageCount: number;
  pages: string[]; // array of image paths
}
