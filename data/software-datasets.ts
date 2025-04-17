export type SoftwareItem = {
  id: string
  title: string
  description: string
  longDescription: string
  logoUrl: string
  screenshotUrl: string
  githubUrl: string
  paperUrl: string | null
  documentationUrl: string | null
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
  documentationUrl: string | null
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
    documentationUrl: "https://neorl.readthedocs.io/en/latest/index.html",
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
    paperUrl: "https://doi.org/10.1016/j.pnucene.2024.105568",
    documentationUrl: "https://pymaise.readthedocs.io/en/latest/index.html",
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
    documentationUrl: null,
    technologies: ["Python", "Natural Language Processing (NLP)", "Large Language Models (LLM)", "BERT", "GPT-2"],
    category: "computing",
    featured: true,
    year: 2022,
  },
  {
    id: "aims-umich",
    title: "AIMS-UMICH: Core Repository",
    description: "Central repository for AIMS Lab's open-source software, tools, and the scripts and data to reproduce the results of our papers.",
    longDescription:
      "The AIMS-UMICH repository serves as the central hub for our lab's open-source contributions to the nuclear engineering and AI research communities. It contains a collection of tools, utilities, and resources developed by our team. This repository includes code for data preprocessing, visualization tools, benchmark problems, and tutorials that demonstrate the application of AI techniques to nuclear engineering challenges.",
    logoUrl: "/aims.png",
    screenshotUrl: "/aims.png",
    githubUrl: "https://github.com/aims-umich",
    paperUrl: null,
    documentationUrl: null,
    technologies: ["Various", "Documentation", "Tutorials", "Benchmarks"],
    category: "computing",
    featured: false,
    year: 2021,
  },
]

export const datasetItems: DatasetItem[] = [
  {
    id: "1",
    title: "Real Electronic Signal Data from Particle Accelerator Power Systems for Machine Learning Anomaly Detection",
    description: "Real-time series datasets collected from the high voltage converter modulators (HVCM) of the Spallation Neutron Source facility.",
    longDescription:
      "HVCMs are used to power the linear accelerator klystrons, which in turn produce the high-power radio frequency to accelerate the negative hydrogen ions (H−). Waveform signals have been collected from the operation of more than 15 HVCM systems categorized into four major subsystems during the years 2020-2022. The data collection process occurred in the Spallation Neutron Source facility of Oak Ridge, Tennessee in the United States. For each of the four subsystems, there are two datasets. The first one contains the waveform signals, while the second contains the label of the waveform, whether it has a normal or faulty signal. A variety of waveforms are included in the datasets including insulated-gate bipolar transistor (IGBT) currents in three phases, magnetic flux in the three phases, modulator current and voltage, cap bank current and voltage, and time derivative change of the modulator voltage. The datasets provided are useful to test and develop machine learning and statistical algorithms for applications related to anomaly detection, system fault detection and classification, and signal processing.",
    imageUrl: "/software-datasets/Real electronic signal data from particle accelerator power systems for machine learning anomaly detection.png",
    downloadUrl: "https://data.mendeley.com/datasets/kbbrw99vh8/5",
    paperUrl: "https://doi.org/10.1016/j.dib.2022.108473",
    documentationUrl: null,
    size: "1.28 GB",
    samples: 25000,
    category: "controls",
    featured: true,
    year: 2022,
  },
  {
    id: "2",
    title: "Operational Data for Fault Prognosis in Particle Accelerators with Machine Learning",
    description: "Showcases real-world operational data gathered from the power systems of the Spallation Neutron Source facility",
    longDescription:
      "This dataset serves as a valuable resource for crafting techniques and algorithms aimed at preemptively identifying system faults, enabling timely operator intervention, and effective maintenance oversight. The authors utilized a radio-frequency test facility (RFTF) to conduct controlled laboratory experiments simulating system failures, all without triggering a catastrophic system breakdown. The dataset comprises waveform signals obtained during both regular system operations and deliberate fault induction efforts, offering a substantial amount of data for training statistical or machine learning models. Afterward, the authors carried out 21 test experiments wherein they gradually introduced faults into the RFTF system to evaluate the models' effectiveness in detecting and preempting impending faults. These experiments involved combinations of magnetic flux compensation and adjustments to start pulse width, leading to a gradual deterioration in various waveform aspects such as system output voltage and current. These alterations effectively mimicked real fault scenarios. All experiments took place at the Oak Ridge National Laboratory's Spallation Neutron Source facility in Oak Ridge, Tennessee, United States, during July 2022. The users of this dataset may include researchers in control, predictive maintenance, machine learning, and signal processing.",
    imageUrl: "/software-datasets/Operational data for fault prognosis in particle.png",
    downloadUrl: "https://data.mendeley.com/datasets/9zxrt6pf2k/3",
    paperUrl: "https://doi.org/10.1016/j.dib.2023.109658",
    documentationUrl: null,
    size: "1.38 GB",
    samples: 25000,
    category: "controls",
    featured: true,
    year: 2023,
  },
]

