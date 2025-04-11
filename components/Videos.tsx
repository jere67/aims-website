import React from 'react'
import { VideoLoader } from './ui/VideoLoader'

interface props {
  title: string;
  highlightedText: string;
  videoSrc: string;
  thumbnailSrc: string;
  thumbnailAlt?: string;
}

const Videos = ({ title, highlightedText, videoSrc, thumbnailSrc, thumbnailAlt = "Hero Video" }: props) => {
  return (
    <div className="relative flex flex-col mb-24">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold tracking-tight text-blue-michigan sm:text-4xl md:text-5xl mb-6">
          {title} <span className="text-yellow-maize">{highlightedText}</span>
        </h2>
      </div>
      <VideoLoader
        className="block"
        animationStyle="from-center"
        videoSrc={videoSrc}
        thumbnailSrc={thumbnailSrc}
        thumbnailAlt={thumbnailAlt}
      />
    </div>
  );
}

export default Videos