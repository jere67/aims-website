// data/members.ts
export interface TeamMember {
  id: string;
  name: string;
  status: string;
  role: string;
  imageUrl: string;
  bio: string;
  interests?: string[];
  education?: string[];
  slug: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "jeremy",
    name: "Jeremy Moon",
    status: "Undergraduate",
    role: "Research Assistant",
    imageUrl: "",
    bio: "Biography here.",
    interests: ["Artificial Intelligence", "Machine Learning"],
    education: ["B.S.E in Data Science, 2027 - University of Michigan"],
    slug: "jeremoon",
  },
];