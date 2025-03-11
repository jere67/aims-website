"use client"
import React from "react";
import { ParallaxScroll } from "@/components/ui/ParallaxScroll";
import { Button } from "@heroui/react";
import Link from "next/link";

const images = [
  { src: "/gallery/image1.png", title: "Leo (left) exploring an alternative career of becoming an artist in case PhD did not work out. Maxime (right) and Nabila (back) tried to take a photo with the “star”." },
  { src: "/gallery/image2.png", title: "At least we know that Leo (front), Nabila (middle), and Maxime (back) are not gephyrophobic (look for what that means, we worked hard to find this word)." },
  { src: "/gallery/image3.png", title: "Majdi's typical face when he wins argument with us." },
  { src: "/gallery/image4.png", title: "During our photo shooting, we told students to act impressed and they did that nicely. O Hwang (front) nailed it with being hyper-impressed." },
  { src: "/gallery/image4.png", title: "During our photo shooting, we told students to act impressed and they did that nicely. O Hwang (front) nailed it with being hyper-impressed." },
  { src: "/gallery/image3.png", title: "Majdi's typical face when he wins argument with us." },
  { src: "/gallery/image2.png", title: "At least we know that Leo (front), Nabila (middle), and Maxime (back) are not gephyrophobic (look for what that means, we worked hard to find this word)." },
  { src: "/gallery/image1.png", title: "Leo (left) exploring an alternative career of becoming an artist in case PhD did not work out. Maxime (right) and Nabila (back) tried to take a photo with the “star”." },
];

const Gallery = () => {
  return (
    <div className="w-full -mt-16 mb-32">
      <div className="h-full w-full dark:bg-black-100 bg-white absolute left-0 right-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="py-12 relative z-10">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold tracking-tight text-blue-michigan sm:text-4xl md:text-5xl mb-4">
            Our <span className="text-yellow-maize">Gallery</span>
          </h2>
        </div>

        <div className="px-4 md:px-6 max-w-7xl mx-auto">
          <ParallaxScroll images={images} />
        </div>

        <div className="flex justify-center mt-8">
          <Link
            href="/gallery"
          >
            <Button
              className="px-12 py-0 text-xl font-semibold text-yellow-maize bg-blue-michigan rounded-full hover:bg-blue-michigan/90 transition-colors duration-300 shadow-lg hover:shadow-xl"
              size="lg"
            >
              View Full Gallery
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
