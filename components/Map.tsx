"use client"
import { useState, useEffect, useRef, useCallback } from "react"
import dynamic from "next/dynamic"
import { Loader2 } from "lucide-react"

const WorldMap = dynamic(() => import("@/components/ui/WorldMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full aspect-[2/1] flex flex-col items-center justify-center">
      <div className="flex items-center bg-blue-michigan/5 dark:bg-white/5 rounded-full px-4 py-2">
        
      <div className="pt-12 relative z-10">
        <div className="flex flex-col items-center justify-center">
          <Loader2 className="w-5 h-5 text-blue-michigan dark:text-blue-500 animate-spin" />
          <h2 className="text-base font-bold tracking-tight text-blue-michigan mb-16">
            Loading Map
          </h2>
        </div>
      </div>
      </div>
    </div>
  ),
})

const mapData = [
  {
    start: { lat: 64.2008, lng: -149.4937 },
    end: { lat: 34.0522, lng: -118.2437 },
  },
  {
    start: { lat: 64.2008, lng: -149.4937 },
    end: { lat: -15.7975, lng: -47.8919 },
  },
  {
    start: { lat: -15.7975, lng: -47.8919 },
    end: { lat: 38.7223, lng: -9.1393 },
  },
  {
    start: { lat: 51.5074, lng: -0.1278 },
    end: { lat: 28.6139, lng: 77.209 },
  },
  {
    start: { lat: 28.6139, lng: 77.209 },
    end: { lat: 43.1332, lng: 131.9113 },
  },
  {
    start: { lat: 28.6139, lng: 77.209 },
    end: { lat: -1.2921, lng: 36.8219 },
  },
]

export default function Map() {
  const [isVisible, setIsVisible] = useState(false)
  const mapRef = useRef<HTMLDivElement>(null)

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    const [entry] = entries
    if (entry.isIntersecting) {
      setIsVisible(true)
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "1200px",
      threshold: 0.1,
    })

    if (mapRef.current) {
      observer.observe(mapRef.current)
    }

    return () => {
      if (mapRef.current) {
        observer.unobserve(mapRef.current)
      }
    }
  }, [handleIntersection])

  return (
    <div className="w-full -mt-16 mb-32">
      <div className="h-full w-full dark:bg-black-100 bg-white absolute left-0 right-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="pt-12 relative z-10">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold tracking-tight text-blue-michigan sm:text-4xl md:text-5xl mb-16">
            Where We Come <span className="text-yellow-maize">From</span>
          </h2>
        </div>
      </div>

      <div ref={mapRef}>{isVisible && <WorldMap dots={mapData} />}</div>
    </div>
  )
}