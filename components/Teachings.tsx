import React from 'react'
import { Carousel, Card } from "@/components/ui/CardsCarousel";
import Image from 'next/image';

const DummyContent = () => {
  return (
    <div
      className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
    >
      <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      We learn how to design nuclear reactors and use computer simulations to model them and ensure they can operate efficiently and safely!
      </p>
      {/* <Image
        src="/research-focus/computing.png"
        alt="Macbook mockup from Aceternity UI"
        height="500"
        width="500"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
      /> */}
    </div>
  )
};
 
const data = [
  {
    category: "NERS 442",
    title: "Nuclear Power Reactors",
    src: "/research-focus/computing.png",
    content: <DummyContent />,
  },
  {
    category: "NERS 590",
    title: "Applied Machine Learning for Nuclear Engineers",
    src: "/research-focus/computing.png",
    content: <DummyContent />,
  },
];

const Teachings = () => {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
      <div className="w-full -mt-16 mb-32">
        <div className="h-full w-full dark:bg-black-100 bg-white absolute left-0 right-0">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>
  
        <div className="py-12 relative z-10">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tight text-blue-michigan sm:text-4xl md:text-5xl mb-16">
              Our <span className="text-yellow-maize">Teachings</span>
            </h2>
          </div>
  
          <div className="container px-4 md:px-6">
            <Carousel items={cards} />
          </div>
        </div>
      </div>
    )
}

export default Teachings