"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const SPONSOR_IMAGES = [
  "/sponsors/department_of_energy.png",
  "/sponsors/nuclear_energy_university_program.png",
  "/sponsors/nuclear_regulatory_commision.png",
  "/sponsors/nsf.png",
  "/sponsors/inl.png",
  "/sponsors/los_alamos.png",
  "/sponsors/fastest_path_to_zero.png",
  "/sponsors/institute_for_computational_discovery.png",
  "/sponsors/institute_for_data_science.png"
];

export const InfiniteMovingCards = ({
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
  imageWidth = 200,
  imageHeight = 100,
}: {
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
  imageWidth?: number;
  imageHeight?: number;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-8 py-4 w-max flex-nowrap items-center", // Added items-center
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {SPONSOR_IMAGES.map((imagePath, index) => (
          <li 
            key={index} 
            className="relative flex-shrink-0 flex items-center justify-center h-32" // Added fixed height and centering
          >
            <Image
              src={imagePath}
              alt={`Sponsor ${index + 1}`}
              width={imageWidth}
              height={imageHeight}
              className="object-contain max-h-full w-auto" // Modified to maintain aspect ratio
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfiniteMovingCards;