"use client"

import Image from "next/image"

export default function AboutUs() {
  return (
    <div className="w-full mb-32">
      <div className="h-full w-full dark:bg-black-100 bg-white absolute left-0 right-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="py-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <Image
                src="/group_photo.jpg"
                alt="Our research team"
                width={4000}
                height={3000}
                className="rounded-lg shadow-lg"
              />

            </div>

            <div className="flex flex-col">
              <h3 className="text-lg font-medium tracking-tight text-blue-michigan mb-2">ABOUT THE LAB</h3>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-black mb-6">
                The Intersection Of <span className="text-blue-900">Artificial Intelligence</span> and <span className="text-yellow-maize">Nuclear Engineering</span>.
              </h2>

              <p className="text-xl text-blue-michigan/80 dark:text-zinc-300 mb-8">
                We work at the intersection of nuclear engineering & computer science to develop scalable and deployable algorithms for optimization, control, and safety performance in complex systems like nuclear power plants.
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

