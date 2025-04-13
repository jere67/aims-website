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
    heroImageUrl: "/heroImages/jeremoon.jpg",
    bio: "Hi there! I have a passion for giving life to my ideas and building my version of the digital world, one line of code at a time. I am a highly disciplined and results-oriented software engineer with a particular interest in data science and machine learning. I am currently pursuing a Bachelor of Science in Engineering in Data Science at the University of Michigan, where I have gained a strong foundation in data analysis, algorithms, and software engineering principles. Outside of school, you'll catch me in the gym lifting weights or boxing.",
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
  {
    id: "asgala",
    name: "Andre Gala-Garza",
    email: "asgala@umich.edu",
    status: "Graduate",
    role: "Language Data Scientist - AIMS Computings Group",
    joinedDate: "September 2024",
    imageUrl: "/people/asgala.jpg",
    heroImageUrl: "",
    bio: "Recent Data Science graduate from the University of Michigan with hands-on experience in data analysis and AI-driven application development. A highly motivated and results-oriented professional with a proven track record of leading teams, managing portfolios, and aligning project execution with broader organizational goals. Skilled in machine learning, data visualization, and project management, with a strong focus on delivering actionable insights from real-world data, in order to support research that positively impacts the community. Recognized as an effective communicator, dependable team player, and proactive problem-solver who consistently meets deadlines and drives results. Committed to leading by example, supporting team collaboration, and contributing to data-driven projects that blend innovation with research excellence.",
    interests: ["Natural Language Processing (NLP)", "Artificial Intelligence (AI)"],
    education: ["University of Michigan"],
    degrees: ["Bachelor of Science (B.S.) in Data Science"],
    department: "Department of Biostatistics - University of Michigan School of Public Health",
    linkedin: "https://www.linkedin.com/in/andregalagarza/",
    slug: "asgala",
  },
  {
    id: "huawens",
    name: "Huawen Shen",
    email: "huawens@umich.edu",
    status: "Undergraduate",
    role: "Computings Group",
    joinedDate: "September 2024",
    imageUrl: "/people/huawens.jpg",
    heroImageUrl: "",
    bio: "Huawen Shen studies Computer Science at the University of Michigan, Ann Arbor. His interests include deep learning algorithms and backend development.",
    interests: ["Deep Learning", "Backend Development"],
    education: ["University of Michigan"],
    degrees: ["Bachelor of Science"],
    department: "Department of Computer Science and Engineering",
    linkedin: "https://www.linkedin.com/in/stevenshen1/",
    slug: "huawens",
  },
  {
    id: "akutira",
    name: "Arvind Kutirakulam",
    email: "akutira@umich.edu",
    status: "Undergraduate",
    role: "Computings",
    joinedDate: "September 2024",
    imageUrl: "/people/akutira.png",
    heroImageUrl: "",
    bio: "I'm a Computer Engineering student at the University of Michigan with a focus on machine learning, systems, and full-stack development. I've interned at Volkswagen Group of America, where I improved defect detection using ML and enhanced user experience through frontend features and Apple where I designed applications for the Safari team. I'm passionate about applied machine learning and building developer tools that help other engineers.",
    interests: ["Multiphysics Simulations", "Reactor Design", "Explainable AI", "Large Language Models"],
    education: ["University of Michigan"],
    degrees: ["Bachelor of Science"],
    department: "Department of Electrical and Computer Engineering",
    linkedin: "https://www.linkedin.com/in/arvind-kutirakulam-169333262/",
    slug: "akutira",
  },
  {
    id: "davidgw",
    name: "David Wenger",
    email: "davidgw@umich.edu",
    status: "Undergraduate",
    role: "",
    joinedDate: "August 2024",
    imageUrl: "/people/davidgw.jpg",
    heroImageUrl: "/heroImages/davidgw.jpg",
    bio: "I am a Nuclear Engineering and Radiological Sciences undergraduate student at the University of Michigan, with a passion for optimizing fission reactors and advancing fusion energy. My most recent experience includes studying nuclear reactor coolant - loss e vents using ANSYS PyFluent and running benchmarks for multi - fidelity neural networks with the AI and Multiphysics Simulations (AIMS) lab, enhancing safety systems and improving simulation accuracy for the Michigan Electron Long Beam Accelerator (MELBA) in the Plasma, Pulsed Power, and Microwave Lab (PPML), and conducting instrumentation design and quality control for plant operations at Commonwealth Fusion Systems. I have also explored nuclear fuel pin cell depletion, AI applications in nuclear medicine, an d heat transfer devices. In my time at Penn State, I was honored to receive the John J. Brennan Excellence in Nuclear Engineering Award and the President Walker Award for my academic achievements.",
    interests: ["Fission Reactor Optimization", "Commercial Fusion Power", "Computational Physics"],
    education: ["University of Michigan"],
    degrees: ["Bachelors of Science in Nuclear Engineering"],
    department: "Department of Nuclear Engineering and Radiological Sciences",
    linkedin: "",
    slug: "davidgw",
  },
  {
    id: "abkamal",
    name: "Kamal Kayode Abdulraheem",
    email: "abkamal@umich.edu",
    status: "Postdoc",
    role: "Schmidt AI in Science Postdoctoral Research Fellow",
    joinedDate: "December 2023",
    imageUrl: "/people/abkamal.jpg",
    heroImageUrl: "",
    bio: "Kamal’s research focuses on the design of autonomous control systems for nuclear reactors, integrating advanced control theories with artificial intelligence and machine learning algorithms. He is also actively involved in projects on reduced - order modeling and optimal experimental design.",
    interests: ["Autonomous Control System", "Integrated Energy System", "Thermal Hydraulics", "Modeling and Simulation"],
    education: ["Moscow Engineering Physics Institute (2023)", "University of Manchester (2015)", "University of Port Harcourt (2014)", "Ahmadu Bello University (2008)"],
    degrees: ["PhD in Nuclear Engineering", "MSc in Advanced Control and Systems Engineering", "MSc in Nuclear Engineering", "B.Eng. in Electrical Engineering"],
    department: "Department of Nuclear and Radiological Engineering & Michigan Institute of Data and AI in Society",
    website: "https://scholar.google.com/citations?user=OjXsbxcAAAAJ&hl=en",
    slug: "abkamal",
  },
  {
    id: "unabila",
    name: "Umme Mahbuba Nabila",
    email: "unabila@umich.edu",
    status: "PhD",
    role: "",
    joinedDate: "August 2023",
    imageUrl: "/people/unabila.jpg",
    heroImageUrl: "/heroImages/unabila.jpg",
    bio: "Umme Mahbuba Nabila is a PhD student in the Department of Nuclear Engineering and Radiological Sciences at the University of Michigan, Ann Arbor, starting in Fall 2023. She is a member of the Artificial Intelligence and Multiphysics Simulations (AIMS) lab, led by Professor Majdi Radaideh. Her research interests include innovative reactor design, the application of ML/AI in the nuclear industry, autonomous control systems, and digital twins of nuclear reactors. She earned her BSc in Nuclear Engineering from the University of Dhaka, Bangladesh, in 2021. Her undergraduate thesis involved using simulation tools such as OpenMC and Dragon to investigate excess reactivity control using various combinations of burnable absorbers. In 2023, she obtained her MSc in Nuclear Engineering from the same institution, with a thesis focused on the potential for burning minor actinides (MAs) in light water reactors. In the summer of 2024, Nabila interned at Oak Ridge National Laboratory, where she worked on time series data prediction using generative AI, specifically generative adversarial networks (GANs). Through her research, Nabila hopes to contribute to a cleaner energy future by advancing safer and more efficient nuclear technologies.",
    interests: ["Nuclear Energy", "Advanced Reactor Design", "Machine Learning", "Digital Twin"],
    education: ["University of Michigan (Present)", "University of Dhaka, Bangladesh (2023)", "University of Dhaka, Bangladesh (2022)"],
    degrees: ["Ph.D. in Nuclear Engineering and Radiological Sciences", "M.Sc. in Nuclear Engineering", "B.Sc. in Nuclear Engineering"],
    department: "Department of Nuclear Engineering and Radiological Sciences",
    linkedin: "http://www.linkedin.com/in/ummenabila",
    website: "https://github.com/UmmeNabila",
    slug: "unabila",
  },
  {
    id: "oferdem",
    name: "Omer F. Erdem",
    email: "oferdem@umich.edu",
    status: "PhD",
    role: "",
    joinedDate: "August 2023",
    imageUrl: "/people/oferdem.jpg",
    heroImageUrl: "/heroImages/oferdem.png",
    bio: "Omer F. Erdem is a PhD student in the University of Michigan, Department of Nuclear Engineering and Radiological Sciences. He is funded by the DOE Early Career Grant. His main research interests include application of optimization algorithms to nuclear engineering problems, multiphysics modeling and simulations, reactor design and analysis. He is experienced in different nuclear reactor neutronic simulation codes, different programming languages, CPU parallelization and also electronics design. His PhD research is focused on AI integrated optimization algorithm development and its applications in nuclear engineering. He received his Master’s Degree in nuclear engineering and management from Tsinghua University with a thesis on heat-pipe reactor design and analysis. He received his B.Sc. degree in electronics and communication engineering from Istanbul Technical University with a double major in physics engineering. He aims to achieve better nuclear technologies via implementation of new AI methods and optimization algorithms to satisfy the increasing energy demand of our world.",
    interests: ["Multiobjective Optimization", "Neutronics Simulations", "Core Design"],
    education: ["Tsinghua University (2023)", "Istanbul Technical University (2022)", "Istanbul Technical University (2021)"],
    degrees: ["Masters Degree, Nuclear Engineering and Management", "Bachelors Degree, Physics Engineering", "Bachelors Degree, Electronics and Communication Engineering"],
    department: "Department of Nuclear Engineering and Radiological Sciences",
    linkedin: "https://tr.linkedin.com/in/omer-faruk-erdem-985932155",
    website: "https://scholar.google.com/citations?hl=tr&user=4kfJa3AAAAAJ",
    slug: "oferdem",
  },
];

// easy copy + paste
// {
//   id: "",
//   name: "",
//   email: "@umich.edu",
//   status: "",
//   role: "",
//   joinedDate: "",
//   imageUrl: "",
//   heroImageUrl: "",
//   bio: "",
//   interests: [""],
//   education: [""],
//   degrees: [""],
//   department: "",
//   linkedin: "",
//   slug: "",
// },