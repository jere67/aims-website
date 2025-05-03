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
  category: "reactors" | "controls" | "computing"
  featured: boolean
  year: number
}

export type pyMAISEDatasetItem = {
  id: string
  title: string
  description: string
  longDescription: string
  disclosure?: string
  disclosureUrl?: string
  imageUrl: string
  downloadUrl?: string
  inputDownloadUrl?: string
  outputDownloadUrl?: string
  paperUrl: string | null
  documentationUrl: string | null
  size: string
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
    category: "controls",
    featured: true,
    year: 2023,
  },
]

export const pyMAISEItems: pyMAISEDatasetItem[] = [
  {
    id: "1",
    title: "Power Control of the Massachusetts Institute of Technology Research Reactor",
    description: "The MIT reactor data set represents the institution’s light-water-cooled 6 MW thermal power reactor.",
    longDescription:
      "The data set is used to find a relationship between the six control blade heights and the power produced by the 22 fuel elements in the core. Therefore, the data set is constructed by perturbing the depths of the control blades in the reactor—the corresponding output results in the power levels for each of the 22 fuel elements. The data was generated using MCNP, and the data set size includes 1000 simulations/samples [RPS+23]. The goal is to use pyMAISE to build, tune, and compare the performance of various ML models in predicting the core power distribution based on the control blade insertion depth.",
    imageUrl: "/software-datasets/pymaise/1_MIT-Reactor-Dataset.jpg",
    inputDownloadUrl: "https://github.com/aims-umich/pyMAISE/blob/develop/pyMAISE/datasets/crx.csv",
    outputDownloadUrl: "https://github.com/aims-umich/pyMAISE/blob/develop/pyMAISE/datasets/powery.csv",
    paperUrl: "https://doi.org/10.1016/j.nucengdes.2023.112423",
    documentationUrl: "https://pymaise.readthedocs.io/en/latest/benchmarks/mit_reactor.html",
    size: "509 KB",
    category: "controls",
    featured: false,
    year: 2023,
  },
  {
    id: "2",
    title: "Nuclear Fuel and Materials Performance Dataset",
    description: "This data set comprises 13 inputs and four outputs with 400 data points.",
    longDescription:
      "This data originates from [RK20], and a graphical representation is provided in the figure below. Case 1 from the pellet-cladding mechanical interaction (PCMI) benchmark was selected for the data set. This benchmark simulates a beginning of life (BOL) ramp of a 10-pellet pressurized water reactor (PWR) fuel rod to an average linear heat rate of 40kW/m. The inner and outer cladding diameters are reduced, so the fuel-clad interaction occurs during the ramp time. Axial power and rod surface temperature profiles were assumed to be uniform at 330ºC. The 13 input parameters were uniformly randomly sampled independently within their uncertainty bounds and simulated in BISON. The rod response was recorded in 4 outputs.",
    imageUrl: "/software-datasets/pymaise/2_Fuel-Performance-Dataset.png",
    inputDownloadUrl: "https://github.com/aims-umich/pyMAISE/blob/develop/pyMAISE/datasets/fp_inp.csv",
    outputDownloadUrl: "https://github.com/aims-umich/pyMAISE/blob/develop/pyMAISE/datasets/fp_out.csv",
    paperUrl: "https://doi.org/10.1016/j.ress.2019.106731",
    documentationUrl: "https://pymaise.readthedocs.io/en/latest/benchmarks/fuel_performance.html",
    size: "60.5 KB",
    category: "controls",
    featured: false,
    year: 2019,
  },
  {
    id: "3",
    title: "Synthetic Critical Heat Flux Dataset",
    description: "The CHF dataset was taken from the Nuclear Regulatory Commission CHF database.",
    longDescription:
      "This dataset was generated from vertical water-cooled uniformly heated tubes, producing 24,579 samples from 59 different sources of measurements. The dataset was collected over experimental measurements spanning 60 years of CHF data collection methods such as visual identification, physical burnout, changes in the test section resistances, and the usage of thermocouples. The parameters collected consist of pressure (P), test section diameter (D), heated length (L), mass flux (G), inlet temperature (T), outlet equilibrium quality (X), and CHF.",
    disclosure: "This dataset is a modified synthetic version by adding noise to a larger full dataset available by request from the OECD/NEA, described in this reference: ",
    disclosureUrl: "https://www.oecd-nea.org/upload/docs/application/pdf/2024-01/nea_wkp_2023_1_2024-01-18_16-23-40_237.pdf",
    imageUrl: "/software-datasets/pymaise/3_CHF_Dataset.png",
    inputDownloadUrl: "https://github.com/aims-umich/pyMAISE/blob/develop/pyMAISE/datasets/chf_train_synth.csv",
    outputDownloadUrl: "https://github.com/aims-umich/pyMAISE/blob/develop/pyMAISE/datasets/chf_test_synth.csv",
    paperUrl: "https://doi.org/10.1016/j.egyai.2025.100501",
    documentationUrl: "https://pymaise.readthedocs.io/en/latest/benchmarks/chf.html",
    size: "326.4 KB",
    category: "controls",
    featured: false,
    year: 2025,
  },
  {
    id: "4",
    title: "The Microreactor Dataset",
    description: "The data set was built using MCNP simulations of the HOLOS-Quad reactor design",
    longDescription:
      "Note: In the tutorial below, scroll down to the section “Increasing Samples Using Reactor Symmetry”, which describe how symmetry is utilized to quadrable the original sample s ize in the CSV above which enhances the performance of the model. It is highly recommended to use the tutorial below first to understand which columns are used as inputs and which are used as outputs plus the normalization tricks used to improve model perf ormance. You can then use the dataset on your own.",
    imageUrl: "/software-datasets/pymaise/4_Microreactor_Dataset.png",
    downloadUrl: "https://github.com/aims-umich/pyMAISE/blob/develop/pyMAISE/datasets/microreactor.csv",
    paperUrl: "https://doi.org/10.1016/j.nucengdes.2022.111776",
    documentationUrl: "https://pymaise.readthedocs.io/en/latest/benchmarks/HTGR_microreactor.html",
    size: "246 KB",
    category: "controls",
    featured: false,
    year: 2022,
  },
  {
    id: "5",
    title: "Nuclear Cross-section Dataset",
    description: "This data set consists of 1000 observations with eight inputs and one output.",
    longDescription:
      "The data is taken from [RSOGradyK19], a sensitivity analysis using the Shapley effect. The geometry of the problem is a pressurized water reactor (PWR) lattice based on the BEAVRS benchmark. Note: The first 8 columns are used as model inputs while the ninth column (k) is used as model output.",
    imageUrl: "/software-datasets/pymaise/5_NuclearCrossSection_Dataset.png",
    downloadUrl: "https://github.com/aims-umich/pyMAISE/blob/develop/pyMAISE/datasets/xs.csv",
    paperUrl: "https://doi.org/10.1016/j.anucene.2019.02.002",
    documentationUrl: "https://pymaise.readthedocs.io/en/latest/benchmarks/reactor_physics.html",
    size: "92.7 KB",
    category: "controls",
    featured: false,
    year: 2019,
  },
  {
    id: "6",
    title: "NEACRP C1 Rod Ejection Accident Dataset",
    description: "The NEACRP C1 rod ejection accident (REA) data represents one benchmark for reactor transient analysis.",
    longDescription:
      "The data set is used to find the relationship between the REA/reactor parameters and the power/thermal behavior of the system during/after the event. Therefore, the data set is constructed by perturbing the inputs listed above—the corresponding output results in values of interest to the safety analysis of the transient. The data were generated using deterministic simulations by the PARCS code, where the data set size includes 2000 samples. The goal is to use pyMAISE to build, tune, and compare the performance of various ML models in predicting the transient outcomes based on the REA properties.",
    imageUrl: "/software-datasets/pymaise/6_NEACRP_C1_Rod_Ejection.jpg",
    inputDownloadUrl: "https://github.com/aims-umich/pyMAISE/blob/develop/pyMAISE/datasets/rea_inputs.csv",
    outputDownloadUrl: "https://github.com/aims-umich/pyMAISE/blob/develop/pyMAISE/datasets/rea_outputs.csv",
    paperUrl: "https://doi.org/10.1016/j.pnucene.2024.105568",
    documentationUrl: "https://pymaise.readthedocs.io/en/latest/benchmarks/rod_ejection.html",
    size: "240.2 KB",
    category: "controls",
    featured: false,
    year: 2024,
  },
]