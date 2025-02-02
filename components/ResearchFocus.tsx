"use client"

import { Check, Loader2 } from "lucide-react"
import Image from "next/image"

const roadmapItems = [
  {
    id: 1,
    title: "Reactors",
    text: "Description here",
    imageUrl: "/research-focus/reactors.png",
    colorful: true,
  },
  {
    id: 2,
    title: "Computing",
    text: "Description here",
    imageUrl: "/research-focus/computing.png",
    colorful: false,
  },
  {
    id: 3,
    title: "Controls",
    text: "Description here",
    imageUrl: "/research-focus/controls.png",
    colorful: true,
  },
  {
    id: 4,
    title: "Software and Datasets",
    text: "Description Here",
    imageUrl: "/research-focus/software.png",
    colorful: false,
  },
]

export default function Roadmap() {
  return (
    <div className="w-full -mt-16 mb-32">
      {/* Background layers matching Hero.tsx */}
      <div className="h-full w-full dark:bg-black-100 bg-white absolute left-0 right-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="py-12 relative z-10">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold tracking-tight text-blue-michigan sm:text-4xl md:text-5xl mb-16">
            Research <span className="text-yellow-maize">Focus</span>
          </h2>
        </div>

        <div className="container px-4 md:px-6">
          <div className="relative grid gap-8 md:grid-cols-2 md:gap-12">
            {roadmapItems.map((item, index) => (
              <div key={item.id} className={`relative ${index % 2 === 1 ? "md:translate-y-28" : ""}`}>
                <div className="bg-white dark:bg-zinc-900/50 rounded-[2.4375rem] p-6 md:p-8 overflow-hidden shadow-lg border border-blue-michigan/5 dark:border-white/5">
                  <div className="relative z-10">
                    {/* <div className="flex items-center justify-between mb-8">
                      <span className="text-sm font-medium text-blue-michigan/60 dark:text-zinc-400">{item.date}</span>
                      <div className="flex items-center bg-blue-michigan/5 dark:bg-white/5 rounded-full px-3 py-1">
                        {item.status === "done" ? (
                          <Check className="w-4 h-4 mr-2 text-blue-michigan dark:text-green-500" />
                        ) : (
                          <Loader2 className="w-4 h-4 mr-2 text-blue-michigan dark:text-blue-500 animate-spin" />
                        )}
                        <span className="text-sm font-medium text-blue-michigan dark:text-white">
                          {item.status === "done" ? "Done" : "In progress"}
                        </span>
                      </div>
                    </div> */}

                    <div className="relative mb-6 rounded-xl overflow-hidden">
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        width={550}
                        height={300}
                        className="w-full object-cover"
                      />
                    </div>

                    <h3 className="text-xl font-bold text-blue-michigan dark:text-white mb-3">{item.title}</h3>
                    <p className="text-blue-michigan/60 dark:text-zinc-400">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="flex justify-center mt-16">
            <a href="#" className="inline-block px-8 py-4 text-blue-michigan dark:text-white border border-blue-michigan/10 dark:border-white/10 rounded-full hover:bg-blue-michigan/5 dark:hover:bg-white/5 transition-colors">
              Our roadmap
            </a>
          </div> */}
        </div>
      </div>
    </div>
  )
}

