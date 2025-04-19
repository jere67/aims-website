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
    id: "reactors-1",
    type: "publication",
    title: "Multi-objective combinatorial methodology for nuclear reactor site assessment: A case study for the United States",
    authors: ["Omer Erdem", "Kevin Daley", "Gabrielle Hoelzle", "Majdi I. Radaideh"],
    journal: "Energy Conversion and Management: X",
    year: 2025,
    abstract: "As clean energy demand grows to meet sustainability and net-zero goals, nuclear energy emerges as a reliable option. However, high capital costs remain a challenge for nuclear power plants (NPP), where repurposing coal power plant sites (CPP) with existing infrastructure is one way to reduce these costs. Additionally, Brownfield sites — previously developed or underutilized lands often impacted by industrial activity — present another compelling alternative. This study introduces a novel multi-objective optimization methodology, leveraging combinatorial search to evaluate over 30,000 potential NPP sites in the United States. Our approach addresses gaps in the current practice of assigning pre-determined weights to each site attribute that could lead to bias in the ranking. Each site is assigned a performance-based score, derived from a detailed combinatorial analysis of its site attributes. The methodology generates a comprehensive database comprising site locations (inputs), attributes (outputs), site score (outputs), and the contribution of each attribute to the site score. We then use this database to train a neural network model, enabling rapid predictions of nuclear siting suitability across any location in the United States. Our findings highlight that CPP sites are highly competitive for nuclear development, but some Brownfield sites are able to compete with them. Notably, four CPP sites in Ohio, North Carolina, and New Hampshire, and two Brownfield sites in Florida and California rank among the most promising locations. These results underscore the potential of integrating machine learning and optimization techniques to transform nuclear siting, paving the way for a cost-effective and sustainable energy future.",
    keywords: ["Multi-objective combinatorial methodology", "Nuclear power plant", "Neural network"],
    doi: "https://doi.org/10.1016/j.ecmx.2025.100923",
    group: "reactors",
    imageUrl: "/research-directory/reactors/reactors-1.jpg",
    pdfUrl: "https://www.sciencedirect.com/science/article/pii/S2590174525000558?via%3Dihub",
    isRecent: true
  },
  {
    id: "reactors-2",
    type: "publication",
    title: "Multiphysics Modeling of Heat Pipe Microreactor with Critical Control Drum Position Search",
    authors: ["Dean Price", "Nathan Roskoff", "Majdi I. Radaideh", "Brendan Kochunas"],
    journal: "Nuclear Science and Engineering",
    year: 2024,
    abstract: "A multiphysics coupling methodology for heat pipe microreactors is presented in this work that includes a focus on a critical control drum position search routine and burnup capabilities. As the Serpent code is used for neutronics calculations, the recently developed GRsecant method for finding critical control drum positions is employed, which has explicit measures to manage the uncertainty introduced from the Monte Carlo calculation method. This work complements existing multiphysics modeling tools for heat pipe microreactors because it can be used to generate cross sections with fuel compositions determined by depletion with critical control drum positions. These methods are applied to a microreactor design motivated by the eVinciTM heat pipe microreactor. The convergence of the multiphysics coupling routine is analyzed at multiple burnup points. The multiphysics iterations with critical control drum search were observed to converge for all calculations performed in this work. Overall, the multiphysics coupling procedure enables the calculation of both thermal and neutronics characteristics with control drums in their critical positions for the core lifetime.",
    keywords: ["Multiphysics Modeling", "Heat Pipe Microreactor", "Critical Control Drum Position Search"],
    doi: "https://doi.org/10.1080/00295639.2024.2409582",
    group: "reactors",
    imageUrl: "/research-directory/reactors/reactors-2.jpg",
    pdfUrl: "https://www.tandfonline.com/doi/full/10.1080/00295639.2024.2409582",
    isRecent: true
  },
  {
    id: "reactors-3",
    type: "publication",
    title: "Thermal Modeling of an eVinci™-like heat pipe microreactor using OpenFOAM",
    authors: ["Dean Price", "Nathan Roskoff", "Majdi I. Radaideh", "Brendan Kochunas"],
    journal: "Nuclear Engineering and Design",
    year: 2023,
    abstract: "The simulation of heat pipe microreactors is an active area of research. In this paper, a thermal analysis of a heat pipe microreactor motivated by the eVinci™ design is performed. Thorough discussion on the modeling of heat pipes without a dedicated heat pipe modeling code, such as Sockeye, is also provided. The performance of two heat pipe modeling techniques is compared, one a more accurate approach which explicitly tracks heat pipe temperatures, and the other an approximation which simplifies the thermal hydraulic model development. One-way coupling is used where the Serpent neutronics code is used to generate a power distribution which is applied in an OpenFOAM model to calculate a temperature distribution. After a detailed convergence analysis, the core temperature distribution resulting from a core with control drums facing outward, or fully withdrawn, is compared with one having the control drums facing inward, or fully inserted. Finally, a parametric analysis was performed where the thermal resistances associated with the heat pipe model were varied and core temperatures were tracked. It was observed that the relationship between average and maximum core temperatures had a highly linear relationship to the thermal resistances used in the heat pipe model.",
    keywords: ["Thermal Modeling", "Heat Pipe Microreactor", "OpenFOAM"],
    doi: "https://doi.org/10.1016/j.nucengdes.2023.112709",
    group: "reactors",
    imageUrl: "/research-directory/reactors/reactors-3.jpg",
    pdfUrl: "https://www.sciencedirect.com/science/article/pii/S0029549323005587?via%3Dihub",
    isRecent: true
  },
  {
    id: "reactors-4",
    type: "publication",
    title: "NEORL: NeuroEvolution Optimization with Reinforcement Learning—Applications to carbon-free energy systems",
    authors: ["Majdi I. Radaideh", "Katelin Du", "Paul Seurin", "Devin Seyler", "Xubo Gu", "Haijia Wang", "Koroush Shirvan"],
    journal: "Nuclear Engineering and Design",
    year: 2023,
    abstract: "We present an open-source Python framework for NeuroEvolution Optimization with Reinforcement Learning (NEORL) developed at the Massachusetts Institute of Technology. NEORL offers a global optimization interface of state-of-the-art algorithms in the field of evolutionary computation, neural networks through reinforcement learning, and hybrid neuroevolution algorithms. NEORL features diverse set of algorithms, user-friendly interface, parallel computing support, automatic hyperparameter tuning, detailed documentation, and demonstration of applications in mathematical and real-world engineering optimization. NEORL encompasses various optimization problems from combinatorial, continuous, mixed discrete/continuous, to high-dimensional, expensive, and constrained engineering optimization. In this paper, NEORL is tested in a variety of engineering applications relevant to low carbon energy research in addressing solutions to climate change. The examples include nuclear reactor control, nuclear fuel optimization, mechanical and structural design optimization, and fuel cell power production. The results demonstrate NEORL competitiveness against other algorithms and optimization frameworks in the literature, and a potential tool to solve large-scale optimization problems. More details about NEORL can be found here: https://neorl.readthedocs.io/en/latest/index.html.",
    keywords: ["NeuroEvolution Optimization", "Reinforcement Learning", "Carbon-free energy systems"],
    doi: "https://doi.org/10.1016/j.nucengdes.2023.112423",
    group: "reactors",
    imageUrl: "/research-directory/reactors/reactors-4.png",
    pdfUrl: "https://www.sciencedirect.com/science/article/pii/S0029549323002728?via%3Dihub",
    isRecent: true
  },
  {
    id: "reactors-5",
    type: "publication",
    title: "Multiobjective optimization of nuclear microreactor reactivity control system operation with swarm and evolutionary algorithms",
    authors: ["Dean Price", "Majdi I. Radaideh", "Brendan Kochunas"],
    journal: "Nuclear Engineering and Design",
    year: 2022,
    abstract: "To improve the marketability of novel microreactor designs, there is a need for automated and optimal control of these reactors. This paper presents a methodology for performing multiobjective optimization of control drum operation for a microreactor under normal and off-nominal conditions. Two different case studies are used where the control drum configuration is optimized for the reactor to be critical with some desired power distribution that would satisfy peaking limits. A surrogate model for power distribution is developed based on a feedforward neural network. The process for determining weights for scalarization of the multiobjective optimization problem is also detailed. Six optimization algorithms: evolutionary strategies, differential evolution, grey wolf optimization, Harris hawks optimization, moth flame optimization and particle swarm optimization, are all applied to these cases and the results analyzed. Although all these algorithms will demonstrate optima-seeking behavior, for real-time control it is necessary to identify the best algorithm to efficiently provide reasonable optima without operator interference. The moth flame optimization algorithm was found to perform particularly well on both cases. Overall, it was found that the algorithms capable of supplying the best optima were also the most consistent. Finally, the found optima were verified with the original model used to train surrogates.",
    keywords: ["Multiobjective optimization", "Nuclear microreactor reactivity", "Swarm and evolutionary algorithms"],
    doi: "https://doi.org/10.1016/j.nucengdes.2022.111776",
    group: "reactors",
    imageUrl: "/research-directory/reactors/reactors-5.jpg",
    pdfUrl: "https://www.sciencedirect.com/science/article/pii/S0029549322001303?via%3Dihub",
    isRecent: true
  },
  {
    id: "reactors-6",
    type: "publication",
    title: "PESA: Prioritized experience replay for parallel hybrid evolutionary and swarm algorithms - Application to nuclear fuel",
    authors: ["Majdi I. Radaideh", "Koroush Shirvan"],
    journal: "Nuclear Engineering and Technology",
    year: 2022,
    abstract: "We propose a new approach called PESA (Prioritized replay Evolutionary and Swarm Algorithms) combining prioritized replay of reinforcement learning with hybrid evolutionary algorithms. PESA hybridizes different evolutionary and swarm algorithms such as particle swarm optimization, evolution strategies, simulated annealing, and differential evolution, with a modular approach to account for other algorithms. PESA hybridizes three algorithms by storing their solutions in a shared replay memory, then applying prioritized replay to redistribute data between the integral algorithms in frequent form based on their fitness and priority values, which significantly enhances sample diversity and algorithm exploration. Additionally, greedy replay is used implicitly to improve PESA exploitation close to the end of evolution. PESA features in balancing exploration and exploitation during search and the parallel computing result in an agnostic excellent performance over a wide range of experiments and problems presented in this work. PESA also shows very good scalability with number of processors in solving an expensive problem of optimizing nuclear fuel in nuclear power plants. PESA's competitive performance and modularity over all experiments allow it to join the family of evolutionary algorithms as a new hybrid algorithm; unleashing the power of parallel computing for expensive optimization.",
    keywords: ["Nuclear fuel", "Particle swarm optimization", "Parallel computing"],
    doi: "https://doi.org/10.1016/j.net.2022.05.001",
    group: "reactors",
    imageUrl: "/research-directory/reactors/reactors-6.jpg",
    pdfUrl: "https://www.sciencedirect.com/science/article/pii/S1738573322002480?via%3Dihub",
    isRecent: false
  },
  {
    id: "reactors-7",
    type: "publication",
    title: "Animorphic ensemble optimization: a large-scale island model",
    authors: ["Dean Price", "Majdi I. Radaideh"],
    journal: "Neural Computing and Applications",
    year: 2022,
    abstract: "In this paper, a flexible large-scale ensemble-based optimization algorithm is presented for complex optimization problems. According to the no free lunch theorem, no single optimization algorithm demonstrates superior performance across all optimization problems. Therefore, with the animorphic ensemble optimization (AEO) algorithm presented here, a set of algorithms can be used as an ensemble which demonstrate stronger performance across a wider range of optimization problems than any standalone algorithm. AEO is a high-level ensemble designed to handle large ensembles using a well-defined stochastic migration process. The high-level nature of AEO allows for an arbitrary number of diverse standalone algorithms to interface with one another through an island model interface strategy, where various populations change size according to the performance of the algorithm associated with each population. In this study, AEO is demonstrated using ensembles of both evolutionary and swarm algorithms such as differential evolution, particle swarm, gray wolf optimization, moth-flame optimization, and more, and strong performance is observed. Quantitative diagnostics metrics to describe the migration of individuals across populations are also presented and observed with application to some test problems. In the end, AEO demonstrated strong consistent performance across more than 150 benchmark functions of 10–50 dimensions.",
    keywords: ["Animorphic ensemble optimization", "Swarm algorithms", "Quantitative diagnostics metrics"],
    doi: "https://doi.org/10.1007/s00521-022-07878-y",
    group: "reactors",
    imageUrl: "/research-directory/reactors/reactors-7.png",
    pdfUrl: "https://link.springer.com/article/10.1007/s00521-022-07878-y",
    isRecent: false
  },
  {
    id: "reactors-8",
    type: "publication",
    title: "Large-scale design optimisation of boiling water reactor bundles with neuroevolution",
    authors: ["Majdi I. Radaideh", "Benoit Forget", "Koroush Shirvan"],
    journal: "Annals of Nuclear Energy",
    year: 2021,
    abstract: "We combine advances in deep reinforcement learning (RL) with evolutionary computation to perform large-scale optimisation of boiling water reactor (BWR) bundles using CASMO4/SIMULATE3 codes; capturing fine details, radial/axial fuel heterogeneity, and real-world constraints. RL constructs neural networks that learn how to assign fuel and poison enrichment by narrowing the search space into the areas where human/physics knowledge demonstrate merit. Evolution strategies diversify the search in these areas, through obtaining guidance from RL candidates. With very efficient/parallel implementation, our optimisation approach is able to solve a coupled multi-zone BWR bundle optimisation with 40 constraints. The methodology is applied to a GE14-10×10 bundle, showing the ability of neuroevolution to find 100 feasible designs. The optimal bundle has 7 axial zones with non-uniform enrichment radially and axially. The results of this work also demonstrate that our neuroevolution methodology is sufficiently generic to adapt to other assembly and reactor designs with minor adjustments.",
    keywords: ["Optimization", "Reinforcement learning", "Boiling water reactor"],
    doi: "https://doi.org/10.1016/j.anucene.2021.108355",
    group: "reactors",
    imageUrl: "/research-directory/reactors/reactors-8.jpg",
    pdfUrl: "https://www.sciencedirect.com/science/article/pii/S0306454921002310?via%3Dihub",
    isRecent: false
  },
  {
    id: "reactors-9",
    type: "publication",
    title: "Rule-based reinforcement learning methodology to inform evolutionary algorithms for constrained optimization of engineering applications",
    authors: ["Majdi I. Radaideh", "Koroush Shirvan"],
    journal: "Knowledge-Based Systems",
    year: 2021,
    abstract: "For practical engineering optimization problems, the design space is typically narrow, given all the real-world constraints. Reinforcement Learning (RL) has commonly been guided by stochastic algorithms to tune hyperparameters and leverage exploration. Conversely in this work, we propose a rule-based RL methodology to guide evolutionary algorithms (EA) in constrained optimization. First, RL proximal policy optimization agents are trained to master matching some of the problem rules/constraints, then RL is used to inject experiences to guide various evolutionary/stochastic algorithms such as genetic algorithms, simulated annealing, particle swarm optimization, differential evolution, and natural evolution strategies. Accordingly, we develop RL-guided EAs, which are benchmarked against their standalone counterparts. RL-guided EA in continuous optimization demonstrates significant improvement over standalone EA for two engineering benchmarks. The main problem analyzed is nuclear fuel assembly combinatorial optimization with high-dimensional and computationally expensive physics. The results demonstrate the ability of RL to efficiently learn the rules that nuclear fuel engineers follow to realize candidate solutions. Without these rules, the design space is large for RL/EA to find many candidates. With imposing the rule-based RL methodology, we found that RL-guided EA outperforms standalone algorithms by a wide margin, with > 10 times improvement in exploration capabilities and computational efficiency. These insights imply that when facing a constrained problem with numerous local optima, RL can be useful in focusing the search space in the areas where expert knowledge has demonstrated merit, while evolutionary/stochastic algorithms utilize their exploratory features to improve the number of feasible solutions.",
    keywords: ["Reinforcement Learning", "Constrained optimization", "Evolutionary/stochastic algorithms"],
    doi: "https://doi.org/10.1016/j.knosys.2021.106836",
    group: "reactors",
    imageUrl: "/research-directory/reactors/reactors-9.jpg",
    pdfUrl: "https://www.sciencedirect.com/science/article/pii/S095070512100099X?via%3Dihub",
    isRecent: false
  },
  {
    id: "reactors-10",
    type: "publication",
    title: "Physics-informed reinforcement learning optimization of nuclear assembly design",
    authors: ["Majdi I. Radaideh", "Isaac Wolverton", "Joshua Joseph", "James J. Tusar", "Uuganbayar Otgonbaatar", "Nicholas Roy", "Benoit Forget", "Koroush Shirvan"],
    journal: "Nuclear Engineering and Design",
    year: 2021,
    abstract: "Optimization of nuclear fuel assemblies if performed effectively, will lead to fuel efficiency improvement, cost reduction, and safety assurance. However, assembly optimization involves solving high-dimensional and computationally expensive combinatorial problems. As such, fuel designers’ expert judgement has commonly prevailed over the use of stochastic optimization (SO) algorithms such as genetic algorithms and simulated annealing. To improve the state-of-art, we explore a class of artificial intelligence (AI) algorithms, namely, reinforcement learning (RL) in this work. We propose a physics-informed AI optimization methodology by establishing a connection through reward shaping between RL and the tactics fuel designers follow in practice by moving fuel rods in the assembly to meet specific constraints and objectives. The methodology utilizes RL algorithms, deep Q learning and proximal policy optimization, and compares their performance to SO algorithms. The methodology is applied on two boiling water reactor assemblies of low-dimensional ( ~2 x 10⁶ combinations) and high-dimensional ( ~10³¹ combinations) natures. The results demonstrate that RL is more effective than SO in solving high dimensional problems, i.e., 10 × 10 assembly, through embedding expert knowledge in form of game rules and effectively exploring the search space. For a given computational resources and timeframe relevant to fuel designers, RL algorithms outperformed SO through finding more feasible patterns, 4–5 times more than SO, and through increasing search speed, as indicated by the RL outstanding computational efficiency. The results of this work clearly demonstrate RL effectiveness as another decision support tool for nuclear fuel assembly optimization.",
    keywords: ["Reinforcement Learning", "Nuclear assembly design", "Stochastic optimization"],
    doi: "https://doi.org/10.1016/j.nucengdes.2020.110966",
    group: "reactors",
    imageUrl: "/research-directory/reactors/reactors-10.jpg",
    pdfUrl: "https://www.sciencedirect.com/science/article/pii/S002954932030460X?via%3Dihub",
    isRecent: false
  },
  {
    id: "reactors-11",
    type: "publication",
    title: "Multiphysics Modeling and Validation of Spent Fuel Isotopics Using Coupled Neutronics/Thermal-Hydraulics Simulations",
    authors: ["Dean Price", "Majdi I. Radaideh", "Travis Mui", "Mihir Katare", "Tomasz Kozlowski"],
    journal: "Science and Technology of Nuclear Installations",
    year: 2020,
    abstract: "Multiphysics coupling of neutronics/thermal-hydraulics models is essential for accurate modeling of nuclear reactor systems with physics feedback. In this work, SCALE/TRACE coupling is used for neutronic analysis and spent fuel validation of BWR assemblies, which have strong coolant feedback. 3D axial power profiles with coolant feedback are captured in these advanced simulations. The methodology is applied to two BWR assemblies (2F2DN23/SF98 and 2F2D1/F6), discharged from the Fukushima Daini-2 unit. Coupling is performed externally, where the SCALE/T5-DEPL module transfers axial power data in all axial nodes to TRACE, which in turn calculates the coolant density and temperature for each of these nodes. Within a burnup step, the data exchange process is repeated until convergence of all coupling parameters (axial power, coolant density, and coolant temperature) is observed. Analysis of axial power, criticality, and coolant properties at the assembly level is used to verify the coupling process. The 2F2D1/F6 benchmark seems to have insignificant void feedback compared to 2F2DN23/SF98 case, which experiences large power changes during operation. Spent fuel isotopic data are used to validate the coupling methodology, which demonstrated good results for uranium isotopes and satisfactory results for other actinides. This work has a major challenge of lack of documented data to build the coupled models (boundary conditions, control rod history, spatial location in the core, etc.), which encourages more advanced methods to approximate such missing data to achieve better modeling and simulation results.",
    keywords: ["Multiphysics Modeling", "Spent Fuel Isotopics", "Coupled Neutronics", "Thermal-Hydraulics Simulations"],
    doi: "https://doi.org/10.1016/j.nucengdes.2020.110966",
    group: "reactors",
    imageUrl: "/research-directory/reactors/reactors-11.png",
    pdfUrl: "https://onlinelibrary.wiley.com/doi/10.1155/2020/2764634",
    isRecent: false
  },
  {
    id: "computing-1",
    type: "publication",
    title: "Data efficiency assessment of generative adversarial networks in energy applications",
    authors: ["Umme Mahbuba Nabila", "Linyu Lin", "Xingang Zhao", "William L. Gurecky", "Pradeep Ramuhalli", "Majdi I. Radaideh"],
    journal: "Energy and AI",
    year: 2025,
    abstract: "This study investigates the data requirements of generative artificial intelligence (AI), particularly generative adversarial networks (GANs), for reliable data augmentation in energy applications. Generative AI, though seen as a solution to data limitations, requires substantial data to learn meaningful distributions—a challenge often overlooked. This study addresses the challenge through synthetic data generation for critical heat flux (CHF) and power grid demand, focusing on renewable and nuclear energy. Two variants of GAN employed are conditional GAN (cGAN) and Wasserstein GAN (wGAN). Our findings include the strong dependency of GAN on data size, with performance declining on smaller datasets and varying performance when generalizing to unseen experiments. Mass flux and heated length significantly influence CHF predictions. wGAN is more robust to feature exclusion, making it suitable for constrained synthetic data generation. In energy demand forecasting, wGAN performed well for solar, wind, and load predictions. Longer lookback hours and larger datasets improved predictions, especially for load power. Seasonal variations posed challenges, with wGAN achieving a relatively high error of Root Mean Squared Error (RMSE) of 0.32 for load power prediction, compared to RMSE of 0.07 under same-season conditions. Feature exclusions impacted cGAN the most, while wGAN showed greater robustness. This study concludes that, while generative AI is effective for data augmentation, it requires substantial data and careful training to generate realistic synthetic data and generalize to new experiments in engineering applications.",
    keywords: ["Generative adversarial networks", "Energy demand forecasting", "Synthetic data"],
    doi: "https://doi.org/10.1016/j.egyai.2025.100501",
    group: "computing",
    imageUrl: "/research-directory/computing/computing-1.jpg",
    pdfUrl: "https://www.sciencedirect.com/science/article/pii/S2666546825000333?via%3Dihub",
    isRecent: true
  },
  {
    id: "computing-2",
    type: "publication",
    title: "pyMAISE: A Python platform for automatic machine learning and accelerated development for nuclear power applications",
    authors: ["Patrick A. Myers", "Nataly Panczyk", "Shashank Chidige", "Connor Craig", "Jacob Cooper", "Veda Joynt", "Majdi I. Radaideh"],
    journal: "Progress in Nuclear Energy",
    year: 2025,
    abstract: "Despite significant advancements in artificial intelligence and machine learning (AI/ML) algorithms and their potential in nuclear engineering applications, the field still lacks a framework that automates ML model development and deployment for nuclear engineering problems. To address this, pyMAISE (Michigan Artificial Intelligence Standard Environment) is introduced, which is a Python package that features automated hyperparameter tuning, model explainability, model training, validation, postprocessing, and deployment for various ML models relevant to nuclear engineering. pyMAISE provides a platform for researchers to demonstrate new models on benchmarked datasets and currently supports nine benchmark problems across reactor physics and design, reactor control, thermal hydraulics, fuel performance, safety analysis, and anomaly detection. In this work, pyMAISE is demonstrated in three applications: critical heat flux prediction, microreactor power prediction, and fault detection in electronic signals. pyMAISE provided efficient model search and performance results that meet or exceed other studies. For critical heat flux prediction, feedforward neural networks (FNN) and random forests were the top models achieving R^2 = 0.999 when six input features were used. FNN was the best performer for predicting microreactor quadrant power R^2 = 0.97, 0.26 greater than the closest classical ML model. In fault detection, pyMAISE models achieved 81% test accuracy in detecting faulty signals using long short-term memory, which may prevent various accident scenarios that could cause facility downtime. As pyMAISE continues to develop through a multi-phase approach, the goal is to integrate uncertainty quantification and deployment tools to expedite the creation of explainable and licensable AI technologies for nuclear power plants.",
    keywords: ["Machine learning", "Nuclear power", "Feedforward neural networks"],
    doi: "https://doi.org/10.1016/j.egyai.2025.100501",
    group: "computing",
    imageUrl: "/research-directory/computing/computing-2.png",
    pdfUrl: "https://www.sciencedirect.com/science/article/pii/S0149197024005183?via%3Dihub",
    isRecent: true
  },
  {
    id: "computing-3",
    type: "publication",
    title: "A comparative analysis of text-to-image generative AI models in scientific contexts: a case study on nuclear power",
    authors: ["Veda Joynt", "Jacob Cooper", "Naman Bhargava", "Katie Vu", "O. Hwang Kwon", "Todd R. Allen", "Aditi Verma", "Majdi I. Radaideh"],
    journal: "Scientific Reports",
    year: 2024,
    abstract: "In this work, we propose and assess the potential of generative artificial intelligence (AI) as a tool for facilitating public engagement around potential clean energy sources. Such an application could increase energy literacy—an awareness of low-carbon energy sources among the public therefore leading to increased participation in decision-making about the future of energy systems. We explore the use of generative AI to communicate technical information about low-carbon energy sources to the general public, specifically in the realm of nuclear energy. We explored 20 AI-powered text-to-image generators and compared their individual performances on general and scientific nuclear-related prompts. Of these models, DALL-E, DreamStudio, and Craiyon demonstrated promising performance in generating relevant images from general-level text related to nuclear topics. However, these models fall short in three crucial ways: (1) they fail to accurately represent technical details of energy systems; (2) they reproduce existing biases surrounding gender and work in the energy sector; and (3) they fail to accurately represent indigenous landscapes—which have historically been sites of resource extraction and waste deposition for energy industries. This work is performed to motivate the development of specialized generative tools to improve energy literacy and effectively engage the public with low-carbon energy sources.",
    keywords: ["Generative AI", "Nuclear power", "Text-to-image"],
    doi: "https://doi.org/10.1038/s41598-024-79705-4",
    group: "computing",
    imageUrl: "/research-directory/computing/computing-3.webp",
    pdfUrl: "https://www.nature.com/articles/s41598-024-79705-4",
    isRecent: true
  },
  {
    id: "computing-4",
    type: "publication",
    title: "Sentiment analysis of the United States public support of nuclear power on social media using large language models",
    authors: ["O. Hwang Kwon", "Katie Vu", "Naman Bhargava", "Mohammed I. Radaideh", "Jacob Cooper", "Veda Joynt", "Majdi I. Radaideh"],
    journal: "Renewable and Sustainable Energy Reviews",
    year: 2024,
    abstract: "This study utilized large language models (LLMs) to analyze public sentiment in the United States (US) regarding nuclear power on social media, focusing on X/Twitter, considering climate change challenges and advancements in nuclear power technology. Approximately, 1.26 million nuclear tweets from 2008–2023 were examined to fine-tune LLMs for sentiment classification. We found the crucial role of accurate data labeling for model performance, with potential implications for a 15% improvement, achieved through high-confidence labels. LLMs demonstrated better performance compared to traditional machine learning classifiers, with reduced susceptibility to overfitting and up to 96% classification accuracy. LLMs are used to segment the US public tweets into policy and energy-related categories, revealing that 68% are politically themed. Policy tweets tended to convey negative sentiment, often reflecting opposing political perspectives and focusing on nuclear deals and international relations. Energy-related tweets covered diverse topics with predominantly neutral to positive sentiment, indicating broad support for nuclear power in 48 out of 50 US states. The US public positive sentiments toward nuclear power stemmed from its high power density, reliability regardless of weather conditions, environmental benefits, application versatility, and recent innovations and advancements in both fission and fusion technologies. Negative sentiments primarily focused on waste management, high capital costs, and safety concerns. The neutral campaign highlighted global nuclear facts and advancements, with varying tones leaning towards positivity or negativity. An interesting neutral theme was the advocacy for the combined use of renewable and nuclear energy to attain net-zero goals.",
    keywords: ["Large language models", "Sentiment Analysis", "Nuclear power"],
    doi: "https://doi.org/10.1016/j.rser.2024.114570",
    group: "computing",
    imageUrl: "/research-directory/computing/computing-4.png",
    pdfUrl: "https://www.sciencedirect.com/science/article/pii/S136403212400296X?via%3Dihub",
    isRecent: true
  },
  {
    id: "computing-5",
    type: "publication",
    title: "Model calibration of the liquid mercury spallation target using evolutionary neural networks and sparse polynomial expansions",
    authors: ["Majdi I. Radaideh", "Hoang Tran", "Lianshan Lin", "Hao Jiang", "Drew Winder", "Sarma Gorti", "Guannan Zhang", "Justin Mach", "Sarah Cousineau"],
    journal: "Nuclear Instruments and Methods in Physics Research Section B: Beam Interactions with Materials and Atoms",
    year: 2022,
    abstract: "The mercury constitutive model predicting the strain and stress in the target vessel plays a central role in improving the lifetime prediction and future target designs of the mercury targets at the Spallation Neutron Source. We leverage the experiment strain data collected over multiple years to improve the mercury constitutive model through a combination of large scale simulations of the target behavior and the use of machine learning tools for parameter estimation. We present two interdisciplinary approaches for surrogate-based model calibration of expensive simulations using evolutionary neural networks and sparse polynomial expansions. The newly calibrated simulations achieve 7% average improvement on the prediction accuracy and 8% reduction in mean absolute error compared to previously reported reference parameters, with some individual sensors experiencing up to 30% improvement. The calibrated simulations can aid in fatigue analysis to estimate the mercury target lifetime, which reduces abrupt failure and saves tremendous amount of costs.",
    keywords: ["Model calibration", "Liquid mercury spallation target", "Evolutionary neural networks"],
    doi: "hhttps://doi.org/10.1016/j.nimb.2022.06.001",
    group: "computing",
    imageUrl: "/research-directory/computing/computing-5.jpg",
    pdfUrl: "https://www.sciencedirect.com/science/article/pii/S0168583X2200146X?via%3Dihub",
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

// project copy + paste
// {
//   id: "2",
//   type: "project",
//   title: "Title",
//   description: "Description",
//   status: "Ongoing",
//   startYear: 2022,
//   endYear: 2025,
//   fundingSource: "Funding Source",
//   collaborators: ["Collaborators"],
//   group: "reactors",
//   imageUrl: "/research-focus/software.png",
//   websiteUrl: "#",
//   isRecent: true
// },