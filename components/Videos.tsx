import React from 'react'
import { VideoLoader } from './ui/VideoLoader'

const Videos = () => {
  return (
    <div className='relative flex flex-col mb-24'>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold tracking-tight text-blue-michigan sm:text-4xl md:text-5xl mb-6">
          Meet Professor <span className="text-yellow-maize">Majdi</span>
        </h2>
      </div>
      <VideoLoader
        className="block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/64mYe6pMimw?si=GZwnBQ-6gVZApUI3"
        thumbnailSrc="/meet_majdi.png"
        thumbnailAlt="Hero Video"
      />
    </div>
  )
}

export default Videos