export type ResearchItem = {
  id: string
  type: "publication" | "project"
  title: string
  group: "reactors" | "controls" | "computing"
  imageUrl: string
  isRecent: boolean
  authors?: string[]
  journal?: string
  year?: number
  abstract?: string
  keywords?: string[]
  doi?: string
  pdfUrl?: string
  description?: string
  status?: "Ongoing" | "Completed"
  startYear?: number
  endYear?: number
  fundingSource?: string
  collaborators?: string[]
  websiteUrl?: string
}

export const researchItems: ResearchItem[] = [
  {
    id: "1",
    type: "publication",
    title: "Title",
    authors: ["Author"],
    journal: "Journal",
    year: 2024,
    abstract: "Abstract",
    keywords: ["Keywords"],
    doi: "DOI",
    group: "reactors",
    imageUrl: "/research-focus/software.png",
    pdfUrl: "#",
    isRecent: true
  },
  {
    id: "2",
    type: "project",
    title: "Title",
    description: "Description",
    status: "Ongoing",
    startYear: 2022,
    endYear: 2025,
    fundingSource: "Funding Source",
    collaborators: ["Collaborators"],
    group: "reactors",
    imageUrl: "/research-focus/software.png",
    websiteUrl: "#",
    isRecent: true
  },
  {
    id: "3",
    type: "project",
    title: "Title",
    description: "Description",
    status: "Completed",
    startYear: 2020,
    endYear: 2023,
    fundingSource: "Funding",
    collaborators: ["Collaborators"],
    group: "controls",
    imageUrl: "/research-focus/software.png",
    websiteUrl: "#",
    isRecent: false
  },
  {
    id: "4",
    type: "publication",
    title: "Title",
    authors: ["Author"],
    journal: "Journal",
    year: 2024,
    abstract: "Abstract",
    keywords: ["Keywords"],
    doi: "DOI",
    group: "reactors",
    imageUrl: "/research-focus/software.png",
    pdfUrl: "#",
    isRecent: true
  },
  {
    id: "5",
    type: "publication",
    title: "Title",
    authors: ["Author"],
    journal: "Journal",
    year: 2024,
    abstract: "Abstract",
    keywords: ["Keywords"],
    doi: "DOI",
    group: "reactors",
    imageUrl: "/research-focus/software.png",
    pdfUrl: "#",
    isRecent: true
  },
  {
    id: "6",
    type: "publication",
    title: "Title",
    authors: ["Author"],
    journal: "Journal",
    year: 2024,
    abstract: "Abstract",
    keywords: ["Keywords"],
    doi: "DOI",
    group: "reactors",
    imageUrl: "/research-focus/software.png",
    pdfUrl: "#",
    isRecent: true
  },
  {
    id: "7",
    type: "publication",
    title: "Title",
    authors: ["Author"],
    journal: "Journal",
    year: 2024,
    abstract: "Abstract",
    keywords: ["Keywords"],
    doi: "DOI",
    group: "reactors",
    imageUrl: "/research-focus/software.png",
    pdfUrl: "#",
    isRecent: true
  },
  {
    id: "8",
    type: "publication",
    title: "Title",
    authors: ["Author"],
    journal: "Journal",
    year: 2024,
    abstract: "Abstract",
    keywords: ["Keywords"],
    doi: "DOI",
    group: "controls",
    imageUrl: "/research-focus/software.png",
    pdfUrl: "#",
    isRecent: true
  },
  {
    id: "9",
    type: "publication",
    title: "Title",
    authors: ["Author"],
    journal: "Journal",
    year: 2024,
    abstract: "Abstract",
    keywords: ["Keywords"],
    doi: "DOI",
    group: "controls",
    imageUrl: "/research-focus/software.png",
    pdfUrl: "#",
    isRecent: true
  },
  {
    id: "10",
    type: "publication",
    title: "Title",
    authors: ["Author"],
    journal: "Journal",
    year: 2024,
    abstract: "Abstract",
    keywords: ["Keywords"],
    doi: "DOI",
    group: "controls",
    imageUrl: "/research-focus/software.png",
    pdfUrl: "#",
    isRecent: true
  },
  {
    id: "11",
    type: "publication",
    title: "Title",
    authors: ["Author"],
    journal: "Journal",
    year: 2024,
    abstract: "Abstract",
    keywords: ["Keywords"],
    doi: "DOI",
    group: "controls",
    imageUrl: "/research-focus/software.png",
    pdfUrl: "#",
    isRecent: true
  },
  {
    id: "12",
    type: "publication",
    title: "Title",
    authors: ["Author"],
    journal: "Journal",
    year: 2024,
    abstract: "Abstract",
    keywords: ["Keywords"],
    doi: "DOI",
    group: "controls",
    imageUrl: "/research-focus/software.png",
    pdfUrl: "#",
    isRecent: true
  },
  {
    id: "13",
    type: "publication",
    title: "Title",
    authors: ["Author"],
    journal: "Journal",
    year: 2024,
    abstract: "Abstract",
    keywords: ["Keywords"],
    doi: "DOI",
    group: "computing",
    imageUrl: "/research-focus/software.png",
    pdfUrl: "#",
    isRecent: true
  },
  {
    id: "14",
    type: "publication",
    title: "Title",
    authors: ["Author"],
    journal: "Journal",
    year: 2024,
    abstract: "Abstract",
    keywords: ["Keywords"],
    doi: "DOI",
    group: "computing",
    imageUrl: "/research-focus/software.png",
    pdfUrl: "#",
    isRecent: true
  },
  {
    id: "15",
    type: "publication",
    title: "Title",
    authors: ["Author"],
    journal: "Journal",
    year: 2024,
    abstract: "Abstract",
    keywords: ["Keywords"],
    doi: "DOI",
    group: "computing",
    imageUrl: "/research-focus/software.png",
    pdfUrl: "#",
    isRecent: true
  },
  {
    id: "16",
    type: "publication",
    title: "Title",
    authors: ["Author"],
    journal: "Journal",
    year: 2024,
    abstract: "Abstract",
    keywords: ["Keywords"],
    doi: "DOI",
    group: "computing",
    imageUrl: "/research-focus/software.png",
    pdfUrl: "#",
    isRecent: true
  },
  {
    id: "17",
    type: "publication",
    title: "Title",
    authors: ["Author"],
    journal: "Journal",
    year: 2024,
    abstract: "Abstract",
    keywords: ["Keywords"],
    doi: "DOI",
    group: "computing",
    imageUrl: "/research-focus/software.png",
    pdfUrl: "#",
    isRecent: true
  },
]