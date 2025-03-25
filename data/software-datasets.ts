export type SoftwareItem = {
  id: string
  title: string
  description: string
  longDescription: string
  logoUrl: string
  screenshotUrl: string
  githubUrl: string
  paperUrl: string | null
  technologies: string[]
  category: "reactors" | "controls" | "computing"
  featured: boolean
  year: number
}

export type DatasetItem = {
  id: string
  title: string
  description: string
  longDescription: string
  imageUrl: string
  downloadUrl: string
  paperUrl: string | null
  size: string
  samples: number
  category: "reactors" | "controls" | "computing"
  featured: boolean
  year: number
}

export const softwareItems: SoftwareItem[] = [
  {
    id: "neorl",
    title: "NEORL: NeuroEvolution Optimization with Reinforcement Learning",
    description: "A set of implementations of hybrid algorithms combining neural networks and evolutionary computation based on a wide range of machine learning and evolutionary intelligence architectures.",
    longDescription:
      "NEORL aims to solve large-scale optimization problems relevant to operation & optimization research, engineering, business, and other disciplines. NEORL can be used for multidisciplinary applications for research, industrial, academic, and/or teaching purposes. NEORL can be used as a standalone platform or an additional benchmarking tool to supplement or validate other optimization packages. Our objective when we built NEORL is to give the user a simple and easy-to-use framework with an access to a wide range of algorithms, covering both standalone and hybrid algorithms in evolutionary, swarm, supervised learning, deep learning, and reinforcement learning. We hope NEORL will allow beginners to enjoy more advanced optimization and algorithms, without being involved in too many theoretical/implementation details, and give experts an opportunity to solve large-scale optimization problems.",
    logoUrl: "/software-datasets/neorl.png",
    screenshotUrl: "/software-datasets/neorl.png",
    githubUrl: "https://github.com/aims-umich/neorl",
    paperUrl: "https://doi.org/10.1016/j.nucengdes.2023.112423",
    technologies: ["Python", "Reinforcement Learning"],
    category: "controls",
    featured: true,
    year: 2022,
  },
  {
    id: "pymaise",
    title: "PyMAISE: Michigan Artificial Intelligence Standard Environment",
    description: "A Python benchmarking library for nuclear reactor applications.",
    longDescription:
      "It offers to streamline the building, tuning, and comparison of various ML models for user-provided data sets. Also, pyMAISE offers benchmarked data sets, written in Jupyter Notebooks, for AI/ML comparison.",
    logoUrl: "/software-datasets/pymaise.png",
    screenshotUrl: "/software-datasets/pymaise.png",
    githubUrl: "https://github.com/aims-umich/pyMAISE",
    paperUrl: "https://pymaise.readthedocs.io/en/latest/benchmarks.html",
    technologies: ["Python"],
    category: "computing",
    featured: true,
    year: 2023,
  },
  {
    id: "opennlp",
    title: "OpenNLP: A Natural Language Processing Package for Classification Problems",
    description: "A natural language processing toolkit for classification problems.",
    longDescription:
      "This package provides various types of tools, including classical machine learning models, neural networks, and large language models. In our particular case, we used this tool for sentiment detection, but users can leverage this for any classification problem. The models include classical machine learning models built using scikit-learn, neural network models built using Keras, and large language models including BERT, GPT, and Llama2. Further models will continue to be added as the package evolves.",
    logoUrl: "/software-datasets/opennlp.png",
    screenshotUrl: "/software-datasets/opennlp.png",
    githubUrl: "https://github.com/aims-umich/OpenNLP",
    paperUrl: "https://doi.org/10.1016/j.rser.2024.114570",
    technologies: ["Python", "Natural Language Processing (NLP)", "Large Language Models (LLM)", "BERT", "GPT-2"],
    category: "computing",
    featured: true,
    year: 2022,
  },
  {
    id: "aims-umich",
    title: "AIMS-UMICH: Core Repository",
    description: "Central repository for AIMS Lab's open-source tools, utilities, and educational resources",
    longDescription:
      "The AIMS-UMICH repository serves as the central hub for our lab's open-source contributions to the nuclear engineering and AI research communities. It contains a collection of tools, utilities, and educational resources developed by our team. This repository includes code for data preprocessing, visualization tools, benchmark problems, and tutorials that demonstrate the application of AI techniques to nuclear engineering challenges.",
    logoUrl: "/aims.png",
    screenshotUrl: "/aims.png",
    githubUrl: "https://github.com/aims-umich",
    paperUrl: null,
    technologies: ["Various", "Documentation", "Tutorials", "Benchmarks"],
    category: "computing",
    featured: false,
    year: 2021,
  },
]

export const datasetItems: DatasetItem[] = [
  {
    id: "1",
    title: "Title",
    description: "Description",
    longDescription:
      "Long Description",
    imageUrl: "",
    downloadUrl: "",
    paperUrl: "",
    size: "xx GB",
    samples: 25000,
    category: "controls",
    featured: true,
    year: 2023,
  },
  {
    id: "2",
    title: "Title",
    description: "Description",
    longDescription:
      "Long Description",
    imageUrl: "",
    downloadUrl: "",
    paperUrl: "",
    size: "xx GB",
    samples: 25000,
    category: "controls",
    featured: true,
    year: 2023,
  },
  {
    id: "3",
    title: "Title",
    description: "Description",
    longDescription:
      "Long Description",
    imageUrl: "",
    downloadUrl: "",
    paperUrl: "",
    size: "xx GB",
    samples: 25000,
    category: "controls",
    featured: true,
    year: 2023,
  },
  {
    id: "4",
    title: "Title",
    description: "Description",
    longDescription:
      "Long Description",
    imageUrl: "",
    downloadUrl: "",
    paperUrl: "",
    size: "xx GB",
    samples: 25000,
    category: "controls",
    featured: true,
    year: 2023,
  },
]

