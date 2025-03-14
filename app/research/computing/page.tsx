"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@heroui/react"

const topicsData = [
  {
    id: 1,
    title: "Title 1",
    description:
      "Description 1",
    imageUrl: "",
  },
  {
    id: 2,
    title: "Title 2",
    description:
      "Description 2",
    imageUrl: "",
  },
  {
    id: 3,
    title: "Title 3",
    description:
      "Description 3",
    imageUrl: "",
  },
  {
    id: 4,
    title: "Title 4",
    description: "Description 4",
    imageUrl: "",
  },
  {
    id: 5,
    title: "Title 5",
    description: "Description 5",
    imageUrl: "",
  },
]

const recentPapers = [
  {
    id: 1,
    title: "Paper 1",
    authors: "Authors 1",
    journal: "Journal 1",
    year: 2025,
    imageUrl: "",
  },
  {
    id: 2,
    title: "Paper 2",
    authors: "Authors 2",
    journal: "Journal 2",
    year: 2025,
    imageUrl: "",
  },
  {
    id: 3,
    title: "Paper 3",
    authors: "Authors 3",
    journal: "Journal 3",
    year: 2025,
    imageUrl: "",
  },
  {
    id: 4,
    title: "Paper 4",
    authors: "Authors 4",
    journal: "Journal 4",
    year: 2025,
    imageUrl: "",
  },
  {
    id: 5,
    title: "Paper 5",
    authors: "Authors 5",
    journal: "Journal 5",
    year: 2025,
    imageUrl: "",
  },
]

const projects = [
  "Bullet Point",
  "Bullet Point",
  "Bullet Point",
  "Bullet Point",
  "Bullet Point",
  "Bullet Point",
  "Bullet Point",
  "Bullet Point",
]

export default function ReactorsPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slideshowRef = useRef<HTMLDivElement>(null)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === topicsData.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? topicsData.length - 1 : prev - 1))
  }

  return (
    <div className="w-full">
      <div className="h-full w-full dark:bg-black-100 bg-white absolute left-0 right-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="py-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-blue-michigan text-center md:text-5xl mb-6">
              Computing <span className="text-yellow-maize">Research Group</span>
            </h1>
            <p className="text-xl text-center max-w-4xl tracking-tight text-blue-michigan mb-4">
              Description Here !
            </p>
          </div>

          <div className="mb-20 relative">
            <h2 className="text-3xl font-bold tracking-tight text-blue-michigan sm:text-4xl mb-8 text-center">
              Research <span className="text-yellow-maize">Focus Areas</span>
            </h2>
            <div
              ref={slideshowRef}
              className="relative overflow-hidden rounded-xl shadow-xl h-[500px] max-w-6xl mx-auto"
            >
              {topicsData.map((topic, index) => (
                <motion.div
                  key={topic.id}
                  className="absolute top-0 left-0 w-full h-full"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{
                    opacity: currentSlide === index ? 1 : 0,
                    x: currentSlide === index ? 0 : 100,
                    zIndex: currentSlide === index ? 10 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative w-full h-full">
                    <Image src={topic.imageUrl || "/placeholder.svg"} alt={topic.title} fill className="object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                      <h3 className="text-2xl font-bold text-yellow-maize mb-2">{topic.title}</h3>
                      <p className="text-white text-lg">{topic.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/30 hover:bg-white/50 transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6 text-blue-michigan" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/30 hover:bg-white/50 transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6 text-blue-michigan" />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
                {topicsData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full ${currentSlide === index ? "bg-yellow-maize" : "bg-white/50"}`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold tracking-tight text-blue-michigan sm:text-4xl mb-8 text-center">
              Recent <span className="text-yellow-maize">Publications</span>
            </h2>

            <div className="max-w-6xl mx-auto">
              <div className="flex justify-center gap-8 mb-8 flex-wrap">
                {recentPapers.slice(0, 2).map((paper) => (
                  <div
                    key={paper.id}
                    className="bg-white dark:bg-zinc-900 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-16px)] max-w-md"
                  >
                    <div className="relative h-48">
                      <Image
                        src={paper.imageUrl || "/placeholder.svg"}
                        alt={paper.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-blue-michigan mb-2 line-clamp-2">{paper.title}</h3>
                      <p className="text-blue-michigan/60 dark:text-zinc-400 text-sm mb-1">{paper.authors}</p>
                      <p className="text-blue-michigan/80 dark:text-zinc-300 text-sm italic mb-4">
                        {paper.journal}, {paper.year}
                      </p>
                      <Link href="#">
                        <Button
                          className="w-full text-sm font-semibold text-yellow-maize bg-blue-michigan rounded-full hover:bg-blue-michigan/90 transition-colors duration-300"
                          size="sm"
                        >
                          View Paper
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center gap-8 flex-wrap">
                {recentPapers.slice(2, 5).map((paper) => (
                  <div
                    key={paper.id}
                    className="bg-white dark:bg-zinc-900 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-16px)] max-w-md"
                  >
                    <div className="relative h-48">
                      <Image
                        src={paper.imageUrl || "/placeholder.svg"}
                        alt={paper.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-blue-michigan mb-2 line-clamp-2">{paper.title}</h3>
                      <p className="text-blue-michigan/60 dark:text-zinc-400 text-sm mb-1">{paper.authors}</p>
                      <p className="text-blue-michigan/80 dark:text-zinc-300 text-sm italic mb-4">
                        {paper.journal}, {paper.year}
                      </p>
                      <Link href="#">
                        <Button
                          className="w-full text-sm font-semibold text-yellow-maize bg-blue-michigan rounded-full hover:bg-blue-michigan/90 transition-colors duration-300"
                          size="sm"
                        >
                          View Paper
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-20 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-blue-michigan sm:text-4xl mb-8 text-center">
              Current <span className="text-yellow-maize">Projects</span>
            </h2>

            <ul className="space-y-4 text-lg">
              {projects.map((project, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-yellow-maize mr-2 text-2xl leading-none">•</span>
                  <span className="text-blue-michigan">{project}</span>
                </li>
              ))}
            </ul>

            <div className="flex justify-center mt-12">
              <Link href="/research">
                <Button
                  className="px-8 py-0 text-lg font-semibold text-yellow-maize bg-blue-michigan rounded-full hover:bg-blue-michigan/90 transition-colors duration-300 shadow-lg hover:shadow-xl"
                  size="lg"
                >
                  Explore All Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

