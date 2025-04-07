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
  degrees?: string[];
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
    heroImageUrl: "/heroImages/moon.jpg",
    bio: "Hi there! I'm a sophomore attending the University of Michigan. I have a passion for giving life to my ideas and building my version of the digital world, one line of code at a time. I am a highly disciplined and results-oriented software engineer with a particular interest in data science and machine learning. I am currently pursuing a Bachelor of Science in Engineering in Data Science at the University of Michigan, where I have gained a strong foundation in data analysis, algorithms, and software engineering principles. Outside of school, you'll catch me in the gym lifting weights or boxing.",
    interests: ["Artificial Intelligence", "Machine Learning"],
    education: ["University of Michigan"],
    degrees: ["B.S.E in Data Science, 2027"],
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
    degrees: ["B.S. in Data Science and Statistics"],
    department: "Department of Statistics, Department of Computer Science and Engineering",
    slug: "yikuny",
  },
  {
    id: "malradai",
    name: "Mohammed I. Radaideh",
    email: "malradai@umich.edu",
    status: "Postdoc",
    role: "Postdoctoral Research Fellow",
    joinedDate: "TO BE FILLED",
    imageUrl: "/people/malradai.jpg",
    heroImageUrl: "",
    bio: "Dr. Radaideh’s current research is related to Sustainable Aviation Fuel (SAF) certification using machine learning and generative AI and alternative fuels' numerical combustion analysis. He also works on projects related to sentiment analysis using large language models. He got his BSc and MSc in mechanical engineering from Jordan University of Science and Technology in 2016 and 2019. He got his PhD in mechanical engineering from Khalifa University/UAE in 2023.",
    interests: ["Alternative Fuel Combustion and Certification", "Renewable Energy", "Machine Learning", "Large Language Models"],
    education: ["Khalifa University (2023)", "Jordan University of Science and Technology (2019)", "Jordan University of Science and Technology (2016)"],
    degrees: ["PhD in Mechanical Engineering", "M.S. in Mechanical Engineering", "B.S. in Mechanical Engineering"],
    department: "Department of Mechanical Engineering",
    linkedin: "https://www.linkedin.com/in/mohammed-i-radaideh-0677b3136/",
    website: "https://scholar.google.com/citations?user=m2iR6vcAAAAJ&hl=en",
    slug: "malradai",
  },
];