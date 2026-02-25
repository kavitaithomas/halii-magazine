// data fetching logic

export interface Issue {
    slug: string
    title: string
    date: string
    coverImage: string
    pageCount: number
    description?: string
  }
  
  export async function getIssues(): Promise<Issue[]> { ... }
  export async function getIssue(slug: string): Promise<Issue> { ... }