"use client"

import { useState, useEffect, useRef, useCallback, memo } from "react"
import dynamic from "next/dynamic"
import { Loader2 } from "lucide-react"

const LoadingComponent = memo(() => (
  <div className="w-full aspect-[2/1] flex flex-col items-center justify-center">
    <div className="flex items-center bg-blue-michigan/5 dark:bg-white/5 rounded-full px-4 py-2">
      <Loader2 className="w-5 h-5 text-blue-michigan dark:text-blue-500 animate-spin" />
      <h2 className="text-base font-bold tracking-tight text-blue-michigan ml-2">
        Loading Map
      </h2>
    </div>
  </div>
))
LoadingComponent.displayName = 'LoadingComponent'

const mapData = [
  {
    start: { lat: 64.2008, lng: -149.4937, country: "Alaska, USA" },
    end: { lat: 34.0522, lng: -118.2437, country: "Los Angeles, USA" },
  },
  {
    start: { lat: 64.2008, lng: -149.4937, country: "Alaska, USA" },
    end: { lat: -15.7975, lng: -47.8919, country: "Brasilia, Brazil" },
  },
  {
    start: { lat: -15.7975, lng: -47.8919, country: "Brasilia, Brazil" },
    end: { lat: 38.7223, lng: -9.1393, country: "Lisbon, Portugal" },
  },
  {
    start: { lat: 51.5074, lng: -0.1278, country: "London, UK" },
    end: { lat: 28.6139, lng: 77.209, country: "Delhi, India" },
  },
  {
    start: { lat: 28.6139, lng: 77.209, country: "Delhi, India" },
    end: { lat: 43.1332, lng: 131.9113, country: "Vladivostok, Russia" },
  },
  {
    start: { lat: 28.6139, lng: 77.209, country: "Delhi, India" },
    end: { lat: -1.2921, lng: 36.8219, country: "Nairobi, Kenya" },
  },
]

const WorldMap = dynamic(() => import("@/components/ui/WorldMap"), {
  ssr: false,
  loading: () => <LoadingComponent />,
})

const MapHeading = memo(() => (
  <div className="pt-12 relative">
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold tracking-tight text-blue-michigan sm:text-4xl md:text-5xl mb-16">
        Where We Come <span className="text-yellow-maize">From</span>
      </h2>
    </div>
  </div>
))
MapHeading.displayName = 'MapHeading'

const Map = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    const [entry] = entries
    if (entry.isIntersecting) {
      setIsVisible(true)
    }
  }, [])

  useEffect(() => {
    if (!mapRef.current) return

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "50px",
      threshold: 0.1,
    })

    observer.observe(mapRef.current)

    return () => observer.disconnect()
  }, [handleIntersection])

  return (
    <div className="w-full -mt-16 mb-32">
      <div className="h-full w-full dark:bg-black-100 bg-white absolute left-0 right-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <MapHeading />

      <div ref={mapRef}>
        {isClient && isVisible && <WorldMap dots={mapData} />}
      </div>
    </div>
  )
}

export default memo(Map)