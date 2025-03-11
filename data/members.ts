// data/members.ts
export interface TeamMember {
  id: string;
  name: string;
  email: string;
  status: string;
  role: string;
  imageUrl: string;
  heroImageUrl: string;
  bio: string;
  interests?: string[];
  education?: string[];
  slug: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "jeremy_pi",
    name: "Jeremy Moon",
    email: "jeremoon@umich.edu",
    status: "Principal Investigator",
    role: "Research Assistant",
    imageUrl: "/people/jeremoon.jpeg",
    heroImageUrl: "",
    bio: "Biography here.",
    interests: ["Artificial Intelligence", "Machine Learning"],
    education: ["B.S.E in Data Science, 2027 - University of Michigan"],
    slug: "jeremoon",
  },
  {
    id: "jeremy_rs",
    name: "Jeremy Moon",
    email: "jeremoon@umich.edu",
    status: "Research Scientist",
    role: "Research Assistant",
    imageUrl: "/people/jeremoon.jpeg",
    heroImageUrl: "",
    bio: "Biography here.",
    interests: ["Artificial Intelligence", "Machine Learning"],
    education: ["B.S.E in Data Science, 2027 - University of Michigan"],
    slug: "jeremoon",
  },
  {
    id: "jeremy_pd",
    name: "Jeremy Moon",
    email: "jeremoon@umich.edu",
    status: "Postdoc",
    role: "Research Assistant",
    imageUrl: "/people/jeremoon.jpeg",
    heroImageUrl: "",
    bio: "Biography here.",
    interests: ["Artificial Intelligence", "Machine Learning"],
    education: ["B.S.E in Data Science, 2027 - University of Michigan"],
    slug: "jeremoon",
  },
  {
    id: "jeremy_phd",
    name: "Jeremy Moon",
    email: "jeremoon@umich.edu",
    status: "PhD Student",
    role: "Research Assistant",
    imageUrl: "/people/jeremoon.jpeg",
    heroImageUrl: "",
    bio: "Biography here.",
    interests: ["Artificial Intelligence", "Machine Learning"],
    education: ["B.S.E in Data Science, 2027 - University of Michigan"],
    slug: "jeremoon",
  },
  {
    id: "jeremy_ms",
    name: "Jeremy Moon",
    email: "jeremoon@umich.edu",
    status: "Graduate",
    role: "Research Assistant",
    imageUrl: "/people/jeremoon.jpeg",
    heroImageUrl: "",
    bio: "Biography here.",
    interests: ["Artificial Intelligence", "Machine Learning"],
    education: ["B.S.E in Data Science, 2027 - University of Michigan"],
    slug: "jeremoon",
  },
  {
    id: "jeremy",
    name: "Jeremy Moon",
    email: "jeremoon@umich.edu",
    status: "Undergraduate",
    role: "Research Assistant",
    imageUrl: "/people/jeremoon.jpeg",
    heroImageUrl: "",
    bio: "Biography here.",
    interests: ["Artificial Intelligence", "Machine Learning"],
    education: ["B.S.E in Data Science, 2027 - University of Michigan"],
    slug: "jeremoon",
  },
];