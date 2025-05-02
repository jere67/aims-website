"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs"
import { BookOpen, Code, Shield } from "lucide-react"

const courses = [
  {
    id: "ners442",
    code: "NERS 442",
    title: "Nuclear Power Reactors",
    icon: <BookOpen className="h-5 w-5" />,
    description: [
      "Analysis of nuclear fission power systems including an introduction to nuclear reactor design, reactivity control, reactivity feedback, fuel cycle analysis and fuel management, light water reactor analysis, advanced reactors, and the use of modeling and simulation codes to analyze reactor systems.",
      "This course is designed to enrich your knowledge and expertise in four major aspects: (1) learning about nuclear power reactors, both light water and advanced reactors, (2) learning how to use computer codes to simulate reactor systems, and (3) learning fundamentals of reactor designs and cost analysis for nuclear reactor systems.",
      "The integrated teaching style in this course highlights going over the theory of reactor analysis of lattice physics codes, nodal core simulators, Monte Carlo codes, and reactor kinetics and dynamics where students are then asked to model light water reactor and advanced reactor systems using CASMO4/SIMULATE3 and OpenMC, respectively.",
    ],
    image: [
      {
        src: "/teaching/3_NERS-442.jpg",
        alt: "NERS 442 picture",
      },
    ],
    tools: ["CASMO4", "SIMULATE3", "OpenMC"],
    topics: ["Reactor Physics", "Core Design", "Fuel Management", "Reactivity Control", "Reactor Kinetics"],
  },
  {
    id: "ners462",
    code: "NERS 462",
    title: "Nuclear Reactor Safety",
    icon: <Shield className="h-5 w-5" />,
    description: [
      "This course focuses on the design and operational aspects of nuclear reactor systems related to safety. Key topics include radiation exposure, engineered safety features, system reliability, accident analysis, containment, radionuclide release, and NRC regulations.",
      "A major emphasis is placed on probabilistic risk assessment for typical nuclear power plants, where a background on statistics is covered to carry probabilistic modeling.",
      "This course follows Prof. Radaideh's integrated teaching approach by combining theoretical instruction in statistical and probabilistic safety analysis with major computer-based projects. Students use advanced nuclear safety analysis tools such as TRACE and RELAP5 for accident analysis, PARCS/SIMULATE-3K for power transient analysis, and SAPHIRE for event and fault tree modeling in probabilistic safety assessments.",
    ],
    image: [
      {
        src: "/teaching/5_NERS_462.jpg",
        alt: "NERS 462 picture",
      },
    ],
    tools: ["TRACE", "RELAP5", "PARCS", "SIMULATE-3K", "SAPHIRE"],
    topics: [
      "Probabilistic Risk Assessment",
      "Accident Analysis",
      "System Reliability",
      "Safety Features",
      "Regulatory Compliance",
    ],
  },
  {
    id: "ners590",
    code: "NERS 590",
    title: "Applied Machine Learning for Nuclear Engineers",
    icon: <Code className="h-5 w-5" />,
    description: [
      "This course offers graduate students and senior undergraduates a hands-on introduction to applying machine learning (ML) techniques in nuclear science and engineering. Students will use ML in real-world applications such as nuclear fission and fusion, reactor control, nuclear security, and medical imaging.",
      "The course includes two weekly sessions: one on ML theory and one lab session for programming practice. Students complete weekly lab exercises and a final project applying ML to a problem of their choice. Emphasizing practical, computational skills, the course aims to develop students' data science expertise for research and industry careers.",
      "This course adopts Prof. Radaideh's integrated teaching approach, combining theory and lab sessions on various machine learning topics—such as classical ML, deep learning, convolutional networks, generative AI, reinforcement learning, and large language models. Each topic is followed by hands-on implementation in nuclear power applications using modern ML libraries like PyTorch, TensorFlow, Keras, and Scikit-Learn. This sequence is repeated 12-13 times the whole semester.",
    ],
    image: [
      {
        src: "/teaching/4_NERS-590.jpg",
        alt: "NERS 590 picture",
      },
    ],
    tools: ["PyTorch", "TensorFlow", "Keras", "Scikit-Learn", "Pandas", "NumPy"],
    topics: [
      "Deep Learning",
      "Reinforcement Learning",
      "Convolutional Networks",
      "Generative AI",
      "Large Language Models",
    ],
  },
]

export default function TeachingPage() {
  const [activeTab, setActiveTab] = useState("ners442")

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-blue-michigan py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00274C_1px,transparent_1px),linear-gradient(to_bottom,#00274C_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Teaching
            </motion.h1>
            <motion.p
              className="text-xl text-gray-200 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              An integrated theoretical-computational approach to nuclear engineering education
            </motion.p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-michigan mb-4">Course Offerings</h2>
            <p className="text-lg text-blue-michigan/80 max-w-3xl mx-auto">
              Explore our specialized courses taught by Prof. Radaideh that combine theoretical foundations with practical computational skills.
            </p>
          </div>

          <Tabs defaultValue="ners442" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 gap-2 bg-transparent mb-8">
              {courses.map((course) => (
                <TabsTrigger
                  key={course.id}
                  value={course.id}
                  className={`
                    flex items-center gap-2 py-3 px-4 text-left border rounded-xl transition-all
                    data-[state=active]:border-blue-michigan data-[state=active]:bg-blue-michigan/5
                    data-[state=active]:shadow-md
                  `}
                >
                  <div
                    className={`p-2 rounded-full ${activeTab === course.id ? "bg-blue-michigan text-yellow-maize" : "bg-gray-100 text-blue-michigan"}`}
                  >
                    {course.icon}
                  </div>
                  <div className="text-left">
                    <div className="font-bold">{course.code}</div>
                    <div className="text-sm text-blue-michigan/70 truncate max-w-[200px]">{course.title}</div>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            {courses.map((course) => (
              <TabsContent key={course.id} value={course.id} className="mt-0">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-blue-michigan rounded-xl text-yellow-maize">{course.icon}</div>
                      <div>
                        <h3 className="text-2xl font-bold text-blue-michigan">{course.code}</h3>
                        <p className="text-lg text-blue-michigan/80">{course.title}</p>
                      </div>
                    </div>

                    <div className="space-y-4 mb-8">
                      {course.description.map((paragraph, idx) => (
                        <p key={idx} className="text-blue-michigan/80">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h4 className="text-lg font-bold text-blue-michigan mb-3 flex items-center">
                          <Code className="mr-2 h-5 w-5" /> Tools & Software
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {course.tools.map((tool) => (
                            <span key={tool} className="bg-gray-100 text-blue-michigan px-3 py-1 rounded-full text-sm">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-blue-michigan mb-3 flex items-center">
                          <BookOpen className="mr-2 h-5 w-5" /> Key Topics
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {course.topics.map((topic) => (
                            <span key={topic} className="bg-gray-100 text-blue-michigan px-3 py-1 rounded-full text-sm">
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center mt-8">
                      <div className="relative h-[400px] w-full max-w-3xl rounded-xl overflow-hidden shadow-md">
                        <Image
                          src={course.image[0].src}
                          alt={course.image[0].alt}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-michigan mb-4">Integrated Teaching Approach</h2>
            <p className="text-lg text-blue-michigan/80 max-w-3xl mx-auto">
              "The 50/50 integrated theoretical-computational program at University of Michigan"
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg max-w-5xl mx-auto">
            <div className="relative h-[500px] w-full">
              <Image
                src="/teaching/2_integrated_teaching_style.jpg"
                alt="Integrated teaching style diagram"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
