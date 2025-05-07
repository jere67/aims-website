import React from 'react'
import { LoadingCarousel } from "./Carousel"

const Gallery = () => {
  return (
    <div className="min-h-screen bg-white text-blue-michigan py-32">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            The <span className="text-yellow-maize">Gallery</span>
          </h1>
          <p className="max-w-2xl mx-auto text-blue-michigan text-lg">
            Showcasing some of our favorite moments!
          </p>
        </div>

        <div className="relative overflow-hidden w-full h-full py-16">
          <LoadingCarousel autoplayInterval={10000} showNavigation={true} />
        </div>
      </div>
    </div>
  )
}

export default Gallery