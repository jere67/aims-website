import { useRef, useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import DottedMap from "dotted-map"
import { useTheme } from "next-themes"

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; country?: string }
    end: { lat: number; lng: number; country?: string }
  }>
  lineColor?: string
}

interface TooltipState {
  x: number
  y: number
  country: string
}

export default function WorldMap({ dots = [], lineColor = "#0ea5e9" }: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()
  const [tooltip, setTooltip] = useState<TooltipState | null>(null)

  const map = useMemo(() => new DottedMap({ height: 100, grid: "diagonal" }), [])

  const svgMap = useMemo(
    () =>
      map.getSVG({
        radius: 0.4,
        color: theme === "dark" ? "#FFFFFF40" : "#00000040",
        shape: "circle",
        backgroundColor: theme === "dark" ? "black" : "white",
      }),
    [theme, map],
  )

  const projectPoint = useMemo(
    () => (lat: number, lng: number) => {
      const x = (lng + 180) * (800 / 360)
      const y = (90 - lat) * (400 / 180)
      return { x, y }
    },
    [],
  )

  const createCurvedPath = useMemo(
    () => (start: { x: number; y: number }, end: { x: number; y: number }) => {
      const midX = (start.x + end.x) / 2
      const midY = Math.min(start.y, end.y) - 50
      return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`
    },
    [],
  )

  const pathsAndPoints = useMemo(
    () =>
      dots.map((dot) => {
        const startPoint = projectPoint(dot.start.lat, dot.start.lng)
        const endPoint = projectPoint(dot.end.lat, dot.end.lng)
        return {
          path: createCurvedPath(startPoint, endPoint),
          startPoint: { ...startPoint, country: dot.start.country },
          endPoint: { ...endPoint, country: dot.end.country },
        }
      }),
    [dots, projectPoint, createCurvedPath],
  )

  const handleMouseEnter = (point: { x: number; y: number; country?: string }) => {
    if (!point.country || !svgRef.current || !containerRef.current) return

    const svgPoint = svgRef.current.createSVGPoint()
    svgPoint.x = point.x
    svgPoint.y = point.y

    const ctm = svgRef.current.getScreenCTM()
    if (!ctm) return

    const screenPoint = svgPoint.matrixTransform(ctm)
    const containerRect = containerRef.current.getBoundingClientRect()

    const x = screenPoint.x - containerRect.left
    const y = screenPoint.y - containerRect.top

    setTooltip({ x, y, country: point.country })
  }

  const handleMouseLeave = () => {
    setTooltip(null)
  }

  const tooltipWidth = tooltipRef.current?.offsetWidth || 80
  const dotRadius = 3
  const spacingAboveDot = 10

  return (
    <div ref={containerRef} className="w-full aspect-[2/1] dark:bg-black bg-white rounded-lg relative font-sans">
      <div
        className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
        dangerouslySetInnerHTML={{ __html: svgMap }}
      />

      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        {pathsAndPoints.map(({ path, startPoint, endPoint }, i) => (
          <g key={`path-group-${i}`}>
            <motion.path
              d={path}
              fill="none"
              stroke="url(#path-gradient)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.5 * i, ease: "easeOut" }}
              className="pointer-events-none"
            />
            <circle
              cx={startPoint.x}
              cy={startPoint.y}
              r={dotRadius}
              fill={lineColor}
              className="pointer-events-auto cursor-pointer"
              onMouseEnter={() => handleMouseEnter(startPoint)}
              onMouseLeave={handleMouseLeave}
              aria-label={`Location: ${startPoint.country}`}
            />
            <circle
              cx={endPoint.x}
              cy={endPoint.y}
              r={dotRadius}
              fill={lineColor}
              className="pointer-events-auto cursor-pointer"
              onMouseEnter={() => handleMouseEnter(endPoint)}
              onMouseLeave={handleMouseLeave}
              aria-label={`Location: ${endPoint.country}`}
            />
          </g>
        ))}

        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <AnimatePresence>
        {tooltip && (
          <motion.div
            ref={tooltipRef}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute bg-white dark:bg-zinc-800 text-blue-michigan dark:text-white px-3 py-1 rounded-lg shadow-lg text-sm font-medium pointer-events-none z-10"
            style={{
              left: tooltip.x - tooltipWidth / 2,
              top: tooltip.y - dotRadius - spacingAboveDot - 20,
            }}
          >
            {tooltip.country}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}