import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'

const Sponsors = () => {
  return (
    <div className="w-full -mt-16 mb-32">
      <div className="h-full w-full dark:bg-black-100 bg-white absolute left-0 right-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="py-12 relative z-10">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold tracking-tight text-blue-michigan sm:text-4xl md:text-5xl mb-4">
            Our <span className="text-yellow-maize">Sponsors</span>
          </h2>
          <p className='text-xl tracking-tight text-blue-michigan mb-16'>
            We are grateful to all our current and past sponsors for their support!
          </p>
        </div>

        <div className="container px-4 md:px-6">
          <InfiniteMovingCards
            direction="right"
            speed="slow" // normal or slow ??
          />
        </div>
      </div>
    </div>
  )
}

export default Sponsors