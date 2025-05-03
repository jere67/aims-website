"use client"
import React from "react";
import { ParallaxScroll } from "@/components/ui/ParallaxScroll";
import { Button } from "@heroui/react";
import Link from "next/link";

const images = [
  { src: "/homepage/gallery/3_Majdi-Engaging-Style.jpg", title: "Majdi's with full confidence while bragging about how much student loves him in the classroom because of his engaging style: “I've gotten animals to pose for photos with me, you really think engaging students is gonna be a challenge?”" },
  { src: "/homepage/gallery/4_Leo-Nabila-Sleeping.jpg", title: "Leo and Nabila's reactions when Majdi starts complaining about his administrative loads, us not meeting deadlines, being behind on research, and so on. Meanwhile Kamal listens carefully as he plans to become a faculty!" },
  { src: "/homepage/gallery/6_Nabila-Japan.jpg", title: "Nabila (a.k.a Meredith-2.0) does not let any workshop or nuclear event miss h er no matter where it is. Photo from the Fukushima - Daiichi site in Japan!" },
  { src: "/homepage/gallery/7_Idaho-Smiles.jpeg", title: "AIMS students and alumni snapped a photo in Idaho Falls during a conference. Meanwhile, Majdi stood there, baffled, wondering: “Have I ever seen them this happy before? Is it me... or is Idaho Falls way more fun than Ann Arbor?” Tough call. What do you think?" },
  { src: "/homepage/gallery/15_Jacob-Out.jpg", title: "Part of our core values is “Support”. Here we support Jacob and push him out of Michigan as he graduates and joins Westinghouse." },
  { src: "/homepage/gallery/17_Lada-Loyality-Photo.jpg", title: "Lada is being super loyal to the photographer. Till today, we have no idea what we were all looking at here and why Lada was completely disinterested." },
  { src: "/homepage/gallery/20_RisingStars.jpg", title: "You are a true AIMS if you can find one AIMS member in this picture and a loyal NERS and Wolverine if you can find two more people from NERS!" },
  { src: "/homepage/gallery/29_Student-Internships.png", title: "We tell Majdi we're working super hard during our internships, and people are basic ally blown away by our brilliance. A spy then sends him this." },
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
