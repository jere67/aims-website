import React from 'react'
import { Carousel } from './Carousel';

const Gallery = () => {
  const slideData = [
    {
      title: "Leo (left) exploring an alternative career of becoming an artist in case PhD did not work out. Maxime (right) and Nabila (back) tried to take a photo with the “star”.",
      src: "/gallery/image1.png",
    },
    {
      title: "At least we know that Leo (front), Nabila (middle), and Maxime (back) are not gephyrophobic (look for what that means, we worked hard to find this word).",
      src: "/gallery/image2.png",
    },
    {
      title: "Majdi’s typical face when he wins argument with us.",
      src: "/gallery/image3.png",
    },
    {
      title: "During our photo shooting, we told students to act impressed and they did that nicely. O Hwang (front) nailed it with being hyper-impressed.",
      src: "/gallery/image4.png",
    },
  ];
  return (
    <div className="min-h-screen bg-white text-blue-michigan py-16">
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
          <Carousel slides={slideData} />
        </div>
      </div>
    </div>
  )
}

export default Gallery