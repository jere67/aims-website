"use client"

import Image from "next/image";
import Link from "next/link";
// import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { teamMembers } from "@/data/members";

const hexVariants: Variants = {
  hover: {
    scale: 1.05,
    boxShadow: "0 0 15px rgba(59, 130, 246, 0.7)",
    transition: { duration: 0.3 },
  },
  rest: {
    scale: 1,
    boxShadow: "0 0 5px rgba(59, 130, 246, 0.3)",
    transition: { duration: 0.3 },
  },
};

export default function TeamShowcase() {
  // const [isLargeScreen, setIsLargeScreen] = useState(false);

  // useEffect(() => {
  //   const handleResize = () => setIsLargeScreen(window.innerWidth >= 1024);
  //   handleResize();
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-cyan-900/20 opacity-50" />
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold tracking-tight text-blue-300 mb-8 text-center">
          Meet Our <span className="text-yellow-300">Innovators</span>
        </h2>
        <p className="text-lg text-blue-200 mb-12 text-center max-w-3xl mx-auto">
          Our lab thrives on the diverse expertise of our team, driving cutting-edge research in nuclear engineering and beyond.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              className="w-64 h-80 bg-gray-800/50 rounded-xl p-4 transform-gpu clip-path-hexagon overflow-hidden"
              variants={hexVariants}
              whileHover="hover"
              initial="rest"
              animate="rest"
            >
              <Link href={`/members/${member.slug}`} className="block h-full">
                <div className="relative w-full h-40">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    width={256}
                    height={160}
                    className="rounded-lg object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-semibold text-blue-200">{member.name}</h3>
                  <p className="text-sm text-blue-400">{member.role}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}