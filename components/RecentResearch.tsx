"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { FileText, Users, BookOpen } from "lucide-react"
import { Button } from "@heroui/react"

const paper = {
  title: "Fairness and social bias quantification in Large Language Models for sentiment analysis",
  authors: ["Mohammed I. Radaideh", "O. Hwang Kwon", "Majdi I. Radaideh"],
  journal: "Knowledge-Based Systems",
  year: 2025,
  doi: "10.1016/j.knosys.2025.113569",
  abstract:
    "Large Language Models (LLMs) have enhanced various Natural Language Processing (NLP) tasks, including text generation and classification. However, studies reveal that LLMs exhibit social biases, such as associating certain occupations with specific genders. While previous research has focused on bias in text generation, limited attention has been given to text classification, such as sentiment analysis. This study quantifies social bias in sentiment analysis using five open-source LLMs: BERT, GPT-2, LLaMA-2, Falcon, and MistralAI, fine-tuned on two large social media datasets, the first one is related to nuclear energy, while the second dataset is general and contains tweets related to various subjects. We conducted approximately 1,500 prompt experiments with variations in words reflecting energy source, gender, politics, age, and ethnicity. A fair language model should provide the same sentiment for both prompts; differing sentiments would indicate bias. Explainable methods were employed to analyze how words related to the five subjects (energy, gender, politics, age, ethnicity) contributed to the sentiment. Findings show that social bias persists in LLMs for sentiment analysis, and while fine-tuning can enhance fairness, it does not always eliminate bias, particularly regarding age groups.",
  imageUrl: "/homepage/recentPaper.png",
  pdfUrl: "https://www.sciencedirect.com/science/article/pii/S095070512500615X",
  category: "computing",
}

export default function RecentResearch() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="w-full py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="flex flex-col items-center justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-blue-michigan sm:text-4xl md:text-5xl mb-4">
            Recent <span className="text-yellow-maize">Research</span>
          </h2>
          <p className="text-lg text-center max-w-2xl text-blue-michigan/80">
            Explore our latest publication that showcases our cutting-edge research in nuclear engineering and
            computational science.
          </p>
        </motion.div>

        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300">
            <div className="flex flex-col">
              <div className="relative h-[400px] w-full">
                <Image
                  src={paper.imageUrl}
                  alt={paper.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-in-out"
                />

                <div className="absolute top-4 left-4">
                  <span className="bg-yellow-maize text-blue-michigan text-sm font-bold px-3 py-1 rounded-full capitalize">
                    {paper.category}
                  </span>
                </div>

                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 text-blue-michigan text-sm font-bold px-3 py-1 rounded-full">
                    {paper.year}
                  </div>
                </div>
              </div>

              <div className="p-6 lg:p-8">
                <div className="flex flex-col">
                  <h3 className="text-2xl font-bold text-blue-michigan mb-4">{paper.title}</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start gap-2">
                      <Users className="text-blue-michigan/70 mt-1 flex-shrink-0" size={18} />
                      <p className="text-blue-michigan/80">{paper.authors.join(", ")}</p>
                    </div>

                    <div className="flex items-start gap-2">
                      <BookOpen className="text-blue-michigan/70 mt-1 flex-shrink-0" size={18} />
                      <p className="text-blue-michigan/80">{paper.journal}</p>
                    </div>

                    <div className="flex items-start gap-2 md:col-span-2">
                      <FileText className="text-blue-michigan/70 mt-1 flex-shrink-0" size={18} />
                      <p className="text-blue-michigan/80">DOI: {paper.doi}</p>
                    </div>
                  </div>

                  <p className="text-blue-michigan/70 mb-8">{paper.abstract}</p>

                  <div className="flex flex-wrap gap-4">
                    <Link
                      href={paper.pdfUrl}
                      className="inline-flex items-center gap-2 bg-blue-michigan text-yellow-maize px-5 py-2.5 rounded-lg font-medium hover:bg-blue-michigan/90 transition-colors"
                    >
                      <FileText size={18} />
                      Read Paper
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="flex justify-center mt-8">
          <Link href="/research" legacyBehavior passHref>
            <Button
              className="px-12 py-0 text-xl font-semibold text-yellow-maize bg-blue-michigan rounded-full hover:bg-blue-michigan/90 transition-colors duration-300 shadow-lg hover:shadow-xl"
              size="lg"
              as="a"
            >
              View Research Directory
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
