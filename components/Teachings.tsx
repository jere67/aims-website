"use client"

import type React from "react"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ChevronRight, Code, Shield, BookOpen } from "lucide-react"

export default function Teachings() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="w-full py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(0,39,76,0.05)_0%,rgba(255,255,255,0)_70%)]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[conic-gradient(from_0deg,rgba(0,39,76,0.03),rgba(255,203,5,0.03),rgba(0,39,76,0.03))] rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="flex flex-col items-center justify-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-blue-michigan sm:text-4xl md:text-5xl mb-4">
            Teaching <span className="text-yellow-maize">Philosophy</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/teaching/1_Majdi-opening-figure.png"
              alt="Professor majdi teaching in classroom"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-michigan/80 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <span className="bg-yellow-maize text-blue-michigan text-sm font-bold px-3 py-1 rounded-full">
                Hands-on Learning
              </span>
              <h3 className="text-white text-2xl font-bold mt-2">Integrated Theoretical-Computational Approach</h3>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg text-blue-michigan/80 mb-6">
              Enrolling in one of Prof. Radaideh&apos;s courses, you&apos;ll quickly find yourself immersed in hands-on
              learning—often in front of a computer, writing code or troubleshooting reactor simulations.
            </p>
            <p className="text-lg text-blue-michigan/80 mb-6">
              His teaching philosophy centers on an integrated theoretical-computational approach, where core
              theoretical concepts are immediately reinforced through practical application in a lab-based setting that
              extends throughout the semester.
            </p>
            <p className="text-lg text-blue-michigan/80 mb-8">
              Students gain experience with nuclear reactor simulation tools, programming, machine learning algorithms,
              and high-performance computing systems—all while deepening their understanding of the underlying theory.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <CourseHighlight
                icon={<BookOpen className="h-6 w-6" />}
                title="NERS 442"
                subtitle="Nuclear Power Reactors"
              />
              <CourseHighlight
                icon={<Shield className="h-6 w-6" />}
                title="NERS 462"
                subtitle="Nuclear Reactor Safety"
              />
              <CourseHighlight
                icon={<Code className="h-6 w-6" />}
                title="NERS 590"
                subtitle="Applied ML for Nuclear Engineers"
              />
            </div>

            <Link
              href="/teaching"
              className="inline-flex items-center text-blue-michigan font-medium hover:text-blue-michigan/80 transition-colors"
            >
              Explore all courses
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function CourseHighlight({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle: string }) {
  return (
    <div className="flex items-center p-4 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="p-2 bg-blue-michigan/10 rounded-full mr-3">
        <div className="text-blue-michigan">{icon}</div>
      </div>
      <div>
        <h4 className="font-bold text-blue-michigan">{title}</h4>
        <p className="text-sm text-blue-michigan/70">{subtitle}</p>
      </div>
    </div>
  )
}
