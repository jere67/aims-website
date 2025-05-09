"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { FaHandsHelping, FaTrophy, FaUsers, FaBalanceScale, FaRegCommentDots } from "react-icons/fa"
import Link from "next/link"
import { Button } from "@heroui/react"

const coreValues = [
  {
    id: "welcome",
    title: "Welcome",
    description:
      "We welcome individuals from all backgrounds, cultures, and perspectives. Our lab thrives on openness, creating a supportive environment where everyone feels respected and can contribute their unique insights to our research.",
    imageUrl: "/flywheel-images/SlideShow_Welcome.jpg",
    color: "#00274C",
    lightColor: "#E3F2FD",
    icon: FaUsers,
  },
  {
    id: "support",
    title: "Support",
    description:
      "We support each other through challenges and successes. Our mentorship approach ensures that every lab member receives the guidance, resources, and encouragement they need to excel in their research and professional development.",
    imageUrl: "/flywheel-images/SlideShow_Support.jpg",
    color: "#4D7FA6",
    lightColor: "#E1F5FE",
    icon: FaHandsHelping,
  },
  {
    id: "compete",
    title: "Compete",
    description:
      "We strive for excellence in all our endeavors. Our competitive spirit drives us to push boundaries, tackle challenging problems, and produce high-quality research that makes meaningful contributions to the field of nuclear engineering.",
    imageUrl: "/flywheel-images/SlideShow_Compete.jpg",
    color: "#FFCB05",
    lightColor: "#FFF9C4",
    icon: FaTrophy,
  },
  {
    id: "respect",
    title: "Respect",
    description:
      "We treat each other with dignity and respect. We value a wide range of opinions, maintain professional conduct, and foster an environment where constructive feedback is shared and received with mutual respect.",
    imageUrl: "/flywheel-images/SlideShow_Respect.jpg",
    color: "#7A9A01",
    lightColor: "#F1F8E9",
    icon: FaBalanceScale,
  },
  {
    id: "listen",
    title: "Listen",
    description:
      "We actively listen to understand, not just to respond. By valuing each person's voice and perspective, we create a collaborative environment that fosters innovation, problem-solving, and mutual growth.",
    imageUrl: "/flywheel-images/SlideShow_Listen.png",
    color: "#A37B45",
    lightColor: "#FFF8E1",
    icon: FaRegCommentDots,
  },
]

const getSegmentPath = (
  cx: number,
  cy: number,
  radius: number,
  startAngleDeg: number,
  endAngleDeg: number,
): string => {
  const startAngleRad = ((startAngleDeg - 90) * Math.PI) / 180
  const endAngleRad = ((endAngleDeg - 90) * Math.PI) / 180
  const x1 = cx + radius * Math.cos(startAngleRad)
  const y1 = cy + radius * Math.sin(startAngleRad)
  const x2 = cx + radius * Math.cos(endAngleRad)
  const y2 = cy + radius * Math.sin(endAngleRad)
  const largeArcFlag = endAngleDeg - startAngleDeg <= 180 ? 0 : 1
  const sweepFlag = 1
  return `M ${cx} ${cy} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} ${sweepFlag} ${x2} ${y2} Z`
}

export default function CoreValues() {
  const [activeValue, setActiveValue] = useState(coreValues[0].id)
  const [hoveredValue, setHoveredValue] = useState<string | null>(null)
  const flywheelRef = useRef<HTMLDivElement>(null)

  const handleValueClick = (valueId: string) => {
    setActiveValue(valueId)
  }

  const activeValueData = coreValues.find((value) => value.id === activeValue) || coreValues[0]

  const segmentAngle = 360 / coreValues.length
  const svgSize = 450
  const center = svgSize / 2
  const radius = svgSize / 2 - 2
  const centerCircleRadius = 60
  const labelRadius = radius * 0.7

  return (
    <section className="w-full py-24 relative overflow-hidden bg-white">
      {/* Background Elements (optional) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(0,39,76,0.05)_0%,rgba(255,255,255,0)_70%)]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[conic-gradient(from_0deg,rgba(0,39,76,0.03),rgba(255,203,5,0.03),rgba(0,39,76,0.03))] rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-blue-michigan sm:text-4xl md:text-5xl mb-6">
            Core <span className="text-yellow-maize">Values</span>
          </h2>
          <p className="max-w-4xl text-xl text-center tracking-tight text-blue-michigan mb-4">
            Students usually join our group for two main reasons: they value the high quality of our research and
            publications, and they hear great things about our lab culture. In AIMS, we have five core values that we
            strive to maintain: <span className="font-bold">Welcome</span>, <span className="font-bold">Support</span>, <span className="font-bold">Compete</span>, <span className="font-bold">Respect</span>, and <span className="font-bold">Listen</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* flywheel */}
          <div ref={flywheelRef} className="hidden relative md:flex justify-center items-center min-h-[450px] md:min-h-[500px]">
            <div className="relative" style={{ width: `${svgSize}px`, height: `${svgSize}px` }}>
              <svg
                viewBox={`0 0 ${svgSize} ${svgSize}`}
                width="100%"
                height="100%"
                className="absolute top-0 left-0 overflow-visible"
              >
                <defs>
                  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                {coreValues.map((value, index) => {
                  const startAngle = index * segmentAngle
                  const endAngle = (index + 1) * segmentAngle
                  const pathData = getSegmentPath(center, center, radius, startAngle, endAngle)
                  const isActive = activeValue === value.id
                  const isHovered = hoveredValue === value.id

                  let segmentFill = "#f3f4f6"
                  if (isActive) {
                    segmentFill = value.lightColor
                  } else if (isHovered) {
                    segmentFill = "#e5e7eb"
                  }

                  return (
                    <motion.path
                      key={value.id}
                      d={pathData}
                      fill={segmentFill}
                      stroke="#4B5563"
                      strokeWidth={1.5}
                      onClick={() => handleValueClick(value.id)}
                      onHoverStart={() => setHoveredValue(value.id)}
                      onHoverEnd={() => setHoveredValue(null)}
                      className="cursor-pointer transition-colors duration-200"
                      style={{ filter: isActive ? 'url(#glow)' : 'none' }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.05, duration: 0.4 }}
                    />
                  )
                })}

                 {coreValues.map((value, index) => {
                    const midAngleDeg = index * segmentAngle + segmentAngle / 2 - 90;
                    const midAngleRad = midAngleDeg * (Math.PI / 180);
                    const labelX = center + labelRadius * Math.cos(midAngleRad);
                    const labelY = center + labelRadius * Math.sin(midAngleRad);
                    const isActive = activeValue === value.id;
                    const IconComponent = value.icon;

                    const labelColor = isActive ? value.color : '#374151';

                    return (
                       <foreignObject
                            key={`${value.id}-label`}
                            x={labelX - 40}
                            y={labelY - 30}
                            width="80"
                            height="60"
                            className="pointer-events-none overflow-visible"
                       >
                         <div className="w-full h-full flex flex-col items-center justify-center text-center">
                            <motion.div
                                animate={{ scale: isActive ? 1.15 : 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <IconComponent
                                    size={24}
                                    color={labelColor}
                                    className="transition-colors duration-200 mb-1"
                                />
                            </motion.div>
                           <motion.span
                             className="text-sm font-medium transition-colors duration-200"
                             style={{ color: labelColor }}
                             animate={{ fontWeight: isActive ? 600 : 500 }}
                           >
                             {value.title}
                           </motion.span>
                         </div>
                       </foreignObject>
                    );
                 })}

              </svg>

              {/* "aims lab" circle */}
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-michigan flex items-center justify-center shadow-lg z-10"
                style={{
                  width: `${centerCircleRadius * 2}px`,
                  height: `${centerCircleRadius * 2}px`,
                }}
              >
                <div className="text-yellow-maize font-bold text-lg text-center leading-tight px-2">AIMS Lab</div>
              </div>
            </div>
          </div>

          {/* images */}
          <div className="flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeValue}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
              >
                <div className="relative h-64 md:h-80 lg:h-96">
                  <Image
                    src={activeValueData.imageUrl}
                    alt={activeValueData.title}
                    fill
                    className="object-cover"
                    priority={true}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-3xl font-bold text-white drop-shadow-md">{activeValueData.title}</h3>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">{activeValueData.description}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* selection buttons for mobile */}
            <div className="mt-8 flex flex-wrap gap-3 justify-center md:hidden">
              {coreValues.map((value) => (
                <button
                  key={value.id}
                  onClick={() => handleValueClick(value.id)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ease-in-out shadow-sm flex items-center gap-2
                            ${
                              activeValue === value.id
                                ? "bg-blue-michigan text-yellow-maize scale-105 shadow-md"
                                : "bg-gray-100 text-blue-michigan hover:bg-gray-200 hover:shadow"
                            }`}
                >
                  <value.icon size={16} />
                  {value.title}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <Link href="/culture" legacyBehavior passHref>
            <Button
              as="a"
              className="px-12 py-3 text-xl font-semibold text-yellow-maize bg-blue-michigan rounded-full hover:bg-blue-michigan/90 transition-colors duration-300 shadow-lg hover:shadow-xl"
              size="lg"
            >
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}