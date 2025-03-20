"use client"
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { TypewriterEffectSmooth } from "./ui/TypewriterEffect";
import { useEffect, useState } from "react";

const Hero = () => {
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

  const [line0Delay, setLine0Delay] = useState(false);
  const [line1Delay, setLine1Delay] = useState(false);
  const [line2Delay, setLine2Delay] = useState(false);
  const [line3Delay, setLine3Delay] = useState(false);

  useEffect(() => {
    const timer0 = setTimeout(() => setLine0Delay(true), 4000);
    const timer1 = setTimeout(() => setLine1Delay(true), 5000);
    const timer2 = setTimeout(() => setLine2Delay(true), 6000);
    const timer3 = setTimeout(() => setLine3Delay(true), 7000);

    return () => {
      clearTimeout(timer0);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="pb-24 pt-36">
      <div className="relative z-20">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-[#fdfdfd] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">

        </div>
      </div>
      
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          
          {!line0Delay && <div className="h-[3.05rem]"></div>}
          {line0Delay && <TextGenerateEffect
            words="Welcome to the AIMS Lab!"
            className="uppercase tracking-widest text-lg text-center text-blue-michigan max-w-100"
          />}

          <video
            src="/animated_logo.mp4"
            autoPlay
            muted
            className="w-64 h-64 md:w-[40rem] object-contain my-6"
          />

          <div className="min-h-[120px] flex flex-col items-center justify-start">
            {line1Delay && (
              <div className="h-[40px] flex items-center">
                <TypewriterEffectSmooth words={line1} />
              </div>
            )}

            {line2Delay && (
              <div className="h-[40px] flex items-center">
                <TypewriterEffectSmooth words={line2} />
              </div>
            )}

            {line3Delay && (
              <div className="h-[40px] flex items-center">
                <TypewriterEffectSmooth words={line3} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;