"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, ArrowRight } from "lucide-react"
import { newsItems } from "@/data/news"
import { Button } from "@heroui/react"

export default function News() {
  const [isHovered, setIsHovered] = useState<string | null>(null)
  const [recentNews, setRecentNews] = useState<typeof newsItems>([])

  useEffect(() => {
    const sortedNews = [...newsItems].sort((a, b) => b.timestamp - a.timestamp).slice(0, 5)
    setRecentNews(sortedNews)
  }, [])

  return (
    <div className="w-full -mt-16 mb-12">
      <div className="h-full w-full dark:bg-black-100 bg-white absolute left-0 right-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="py-20 relative z-10">
        <div className="flex flex-col items-center justify-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-blue-michigan sm:text-4xl md:text-5xl mb-0">
            Recently in <span className="text-yellow-maize">AIMS</span>
          </h2>
        </div>

        <div className="container px-4 mx-auto">
          {recentNews.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 my-10">
              <div className="md:col-span-7 h-[400px]">
                <NewsCard
                  item={recentNews[0]}
                  isHovered={isHovered === recentNews[0].id}
                  onHover={() => setIsHovered(recentNews[0].id)}
                  onLeave={() => setIsHovered(null)}
                  isWide
                />
              </div>
              <div className="md:col-span-5 h-[400px]">
                <NewsCard
                  item={recentNews[1]}
                  isHovered={isHovered === recentNews[1].id}
                  onHover={() => setIsHovered(recentNews[1].id)}
                  onLeave={() => setIsHovered(null)}
                  isWide
                />
              </div>
              
              <div className="md:col-span-4 h-[400px]">
                <NewsCard
                  item={recentNews[2]}
                  isHovered={isHovered === recentNews[2].id}
                  onHover={() => setIsHovered(recentNews[2].id)}
                  onLeave={() => setIsHovered(null)}
                />
              </div>
              <div className="md:col-span-4 h-[400px]">
                <NewsCard
                  item={recentNews[3]}
                  isHovered={isHovered === recentNews[3].id}
                  onHover={() => setIsHovered(recentNews[3].id)}
                  onLeave={() => setIsHovered(null)}
                />
              </div>
              <div className="md:col-span-4 h-[400px]">
                <NewsCard
                  item={recentNews[4]}
                  isHovered={isHovered === recentNews[4].id}
                  onHover={() => setIsHovered(recentNews[4].id)}
                  onLeave={() => setIsHovered(null)}
                />
              </div>
            </div>
          )}

          <div className="flex justify-center mt-8">
            <Link href="/news">
              <Button
                className="px-12 py-0 text-xl font-semibold text-yellow-maize bg-blue-michigan rounded-full hover:bg-blue-michigan/90 transition-colors duration-300 shadow-lg hover:shadow-xl"
                size="lg"
              >
                View All News
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function NewsCard({
  item,
  isHovered,
  onHover,
  onLeave,
  isWide = false,
}: {
  item: (typeof newsItems)[0]
  isHovered: boolean
  onHover: () => void
  onLeave: () => void
  isWide?: boolean
}) {
  return (
    <Link href={`/news/${item.slug}`} className="block h-full">
      <div
        className="group relative w-full h-full rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200"
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
      >
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={item.imageUrl}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-michigan/90 via-blue-michigan/40 to-transparent z-0"></div>
        </div>

        <div className="absolute inset-0 z-10 flex flex-col justify-between p-6">
          <div>
            <span className="inline-block px-3 py-1 bg-yellow-maize text-blue-michigan text-xs font-bold rounded-full mb-3 capitalize">
              {item.category}
            </span>

            <h3 className={`text-white font-bold mb-3 line-clamp-3 ${isWide ? "text-2xl" : "text-xl"}`}>
              {item.title}
            </h3>

            <p
              className={`text-white/80 line-clamp-3 transition-opacity duration-300 ${isWide || isHovered ? "opacity-100" : "opacity-0 md:opacity-0"}`}
            >
              {item.excerpt}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center text-white/80 text-sm">
              <Calendar className="h-4 w-4 mr-2" />
              {item.date}
            </div>

            <div className="flex items-center text-yellow-maize font-medium">
              <span>Read more</span>
              <motion.div animate={{ x: isHovered ? 5 : 0 }} transition={{ duration: 0.3 }}>
                <ArrowRight className="ml-2 h-4 w-4" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
