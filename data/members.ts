export interface TeamMember {
  id: string;
  name: string;
  email: string;
  status: string;
  role: string;
  joinedDate: string;
  imageUrl: string;
  heroImageUrl: string;
  bio: string;
  interests?: string[];
  education?: string[];
  degree?: string;
  department: string;
  linkedin?: string;
  website?: string;
  slug: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "jeremoon",
    name: "Jeremy Moon",
    email: "jeremoon@umich.edu",
    status: "Undergraduate",
    role: "Research Assistant",
    joinedDate: "September 2024",
    imageUrl: "/people/jeremoon.jpeg",
    heroImageUrl: "",
    bio: "Hi there! I'm a sophomore attending the University of Michigan. I have a passion for giving life to my ideas and building my version of the digital world, one line of code at a time. I am a highly disciplined and results-oriented software engineer with a particular interest in data science and machine learning. I am currently pursuing a Bachelor of Science in Engineering in Data Science at the University of Michigan, where I have gained a strong foundation in data analysis, algorithms, and software engineering principles. Outside of school, you'll catch me in the gym lifting weights or boxing.",
    interests: ["Artificial Intelligence", "Machine Learning"],
    education: ["University of Michigan"],
    degree: "B.S.E in Data Science, 2027",
    department: "Electrical Engineering and Computer Science",
    linkedin: "https://www.linkedin.com/in/jeremy-moon7/",
    website: "https://jeremymoon.dev",
    slug: "jeremoon",
  },
  {
    id: "yikuny",
    name: "Yikun Yang",
    email: "yikuny@umich.edu",
    status: "Undergraduate",
    role: "Research Assistant",
    joinedDate: "September 2024",
    imageUrl: "/people/yikuny.jpg",
    heroImageUrl: "",
    bio: "I study Data Science and Statistics at the University of Michigan. I’m passionate about developing software and applying data-driven insights to address real-world challenges. In my spare time, I enjoy traveling, hiking, and photography.",
    interests: ["Full Stack Development", "Applied Data Science"],
    education: ["University of Michigan"],
    degree: "B.S. in Data Science and Statistics",
    department: "Department of Statistics, Department of Computer Science and Engineering",
    slug: "yikuny",
  },
];