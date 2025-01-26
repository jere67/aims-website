"use client"

import { FaLocationArrow } from "react-icons/fa6";
import Button from "./Button";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { TypewriterEffectSmooth } from "./ui/TypewriterEffect";
import Image from 'next/image'
import { useEffect, useState } from "react";

const Hero = () => {
  const words = [
    { text: "Welcome" },
    { text: "to" },
    { text: "the" },
    { text: "AIMS" },
    { text: "Lab!" },
  ];

  const line1 = [
    { text: "We" },
    { text: "work" },
    { text: "at" },
    { text: "the" },
    { text: "intersection" },
    { text: "of" },
    { text: "nuclear" },
    { text: "engineering" },
    { text: "&" },
    { text: "computer" },
    { text: "science" },
  ];

  const line2 = [
    { text: "to" },
    { text: "develop" },
    { text: "scalable" },
    { text: "and" },
    { text: "deployable" },
    { text: "algorithms" },
    { text: "for" },
    { text: "optimization," },
    { text: "control," },
    { text: "and" },
  ];

  const line3 = [
    { text: "safety" },
    { text: "performance" },
    { text: "in" },
    { text: "complex" },
    { text: "systems" },
    { text: "like" },
    { text: "nuclear" },
    { text: "power" },
    { text: "plants." },
  ];

  const [line1Delay, setLine1Delay] = useState(false);
  const [line2Delay, setLine2Delay] = useState(false);
  const [line3Delay, setLine3Delay] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setLine1Delay(true), 100);
    const timer2 = setTimeout(() => setLine2Delay(true), 1100);
    const timer3 = setTimeout(() => setLine3Delay(true), 2100);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            words="Welcome to the AIMS Lab!"
            className="uppercase tracking-widest text-lg text-center text-blue-michigan max-w-100"
          />

          <div className="py-2">
            <Image src="/logo.svg" alt="AIMS Logo" width={600} height={600} />
          </div>

          {line1Delay && (
            <TypewriterEffectSmooth
              words={line1}
            />
          )}

          {line2Delay && (
            <TypewriterEffectSmooth
              words={line2}
            />
          )}

          {line3Delay && (
            <TypewriterEffectSmooth
              words={line3}
            />
          )}

          {/* <a href="">
            <Button
              title="Button Here"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;