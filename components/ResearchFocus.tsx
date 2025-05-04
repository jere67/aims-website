"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useAnimation, useInView } from "framer-motion"
import { ArrowRight, ChevronRight } from "lucide-react"
import { GiReactor } from "react-icons/gi";
import { FaComputer, FaDatabase } from "react-icons/fa6"
import { FaBolt } from "react-icons/fa"
import { Button } from "@heroui/react"

const items = [
  {
    id: 1,
    title: "Reactors",
    text: "We design nuclear reactors!",
    imageUrl: "/research-focus/reactors-alternate.jpg",
    link: "/research/reactors",
    icon: (
      <GiReactor />
    ),
  },
  {
    id: 2,
    title: "Computing",
    text: "We design algorithms!",
    imageUrl: "/research-focus/computing-alternate.png",
    link: "/research/computing",
    icon: (
      <FaComputer />
    ),
  },
  {
    id: 3,
    title: "Controls",
    text: "We control!",
    imageUrl: "/research-focus/controls-alternate.jpg",
    link: "/research/controls",
    icon: (
      <FaBolt />
    ),
  },
  {
    id: 4,
    title: "Software and Datasets",
    text: "We code!",
    imageUrl: "/research-focus/software-alternate.jpg",
    link: "/research/software-datasets",
    icon: (
      <FaDatabase />
    ),
  },
]

export default function ResearchFocus() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  return (
    <section className="w-full pt-8 pb-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(0,39,76,0.05)_0%,rgba(255,255,255,0)_70%)]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[conic-gradient(from_0deg,rgba(0,39,76,0.03),rgba(255,203,5,0.03),rgba(0,39,76,0.03))] rounded-full blur-3xl opacity-30"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-maize/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-michigan/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="flex flex-col items-center justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-blue-michigan sm:text-4xl md:text-5xl mb-4">
            Research <span className="text-yellow-maize">Focus</span>
          </h2>
          <p className='max-w-4xl text-xl text-center tracking-tight text-blue-michigan mb-4'>
            Our lab is split into three groups that have different research focuses and intersect heavily with each other. These groups are Reactors, Computing, and Controls. Our major accomplishments are showcased in the Software and Datasets portion of this website.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          initial="hidden"
          animate={controls}
        >
          {items.map((item, index) => (
            <ResearchFocusCard key={item.id} item={item} index={index} />
          ))}
        </motion.div>
      </div>

      <div className="flex justify-center mt-8">
        <Link href="/research">
          <Button
            className="px-12 py-0 text-xl font-semibold text-yellow-maize bg-blue-michigan rounded-full hover:bg-blue-michigan/90 transition-colors duration-300 shadow-lg hover:shadow-xl"
            size="lg"
          >
            View Directory
          </Button>
        </Link>
      </div>
    </section>
  )
}

function ResearchFocusCard({ item, index }: { item: (typeof items)[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={`relative ${index % 2 === 1 ? "md:translate-y-16" : ""}`}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
          },
        },
      }}
    >
      <Link href={item.link}>
        <motion.div
          className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-blue-michigan/10 h-full transition-all duration-300 hover:shadow-xl hover:border-blue-michigan/30"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ y: -5 }}
        >
          <div className="relative h-56 overflow-hidden">
            <Image
              src={item.imageUrl}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-michigan/80 to-transparent opacity-70"></div>

            <div className="absolute top-4 left-4 bg-white/90 p-2 rounded-full shadow-md">
              <div className="text-blue-michigan">{item.icon}</div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-2xl font-bold text-white mb-1">{item.title}</h3>
            </div>
          </div>

          <div className="p-6">
            <p className="text-blue-michigan/80 mb-6">{item.text}</p>

            <div className="flex items-center justify-between">
              <motion.div
                className="flex items-center text-blue-michigan font-medium"
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ duration: 0.3 }}
              >
                Learn more
                <motion.div
                  animate={{ x: isHovered ? 5 : 0, opacity: isHovered ? 1 : 0.7 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronRight className="ml-1 h-4 w-4" />
                </motion.div>
              </motion.div>

              <motion.div
                className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-michigan/5 text-blue-michigan"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 39, 76, 0.1)" }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.div>
            </div>
          </div>

          <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-yellow-maize/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute -top-3 -left-3 w-24 h-24 bg-blue-michigan/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </motion.div>
      </Link>
    </motion.div>
  )
}

