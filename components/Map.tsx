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
    start: { lat: 37.8044, lng: -122.2711, country: "Oakland, CA, USA" },
    end: { lat: 49.2827, lng: -123.1207, country: "Vancouver, Canada" },
  },
  {
    start: { lat: 40.2959, lng: -74.8702, country: "Washington Crossing, PA, USA" },
    end: { lat: 37.5407, lng: -77.4360, country: "Richmond, VA, USA" },
  },
  {
    start: { lat: 37.5407, lng: -77.4360, country: "Richmond, VA, USA" },
    end: { lat: 43.1566, lng: -77.6088, country: "Rochester, NY, USA" },
  },
  {
    start: { lat: 42.3214, lng: -83.3330, country: "Garden City, MI, USA" },
    end: { lat: 42.3314, lng: -83.0458, country: "Detroit, MI, USA" }, // Using Detroit for "Michigan, USA"
  },
  {
    start: { lat: 42.5767, lng: -83.3813, country: "West Bloomfield, MI, USA" },
    end: { lat: 42.2808, lng: -83.7430, country: "Ann Arbor, MI, USA" },
  },
  {
    start: { lat: 42.3314, lng: -83.0458, country: "Detroit, MI, USA" },
    end: { lat: 42.2808, lng: -83.7430, country: "Ann Arbor, MI, USA" },
  },
  {
    start: { lat: 42.1103, lng: -88.0342, country: "Palatine, IL, USA" },
    end: { lat: 41.4817, lng: -81.8001, country: "Lakewood, OH, USA" },
  },
  {
    start: { lat: 36.1627, lng: -86.7816, country: "Nashville, TN, USA" },
    end: { lat: 33.5207, lng: -86.8025, country: "Birmingham, AL, USA" },
  },
  {
    start: { lat: 41.4817, lng: -81.8001, country: "Lakewood, OH, USA" },
    end: { lat: 36.1627, lng: -86.7816, country: "Nashville, TN, USA" },
  },
  {
    start: { lat: 37.8044, lng: -122.2711, country: "Oakland, CA, USA" },
    end: { lat: 43.1566, lng: -77.6088, country: "Rochester, NY, USA" },
  },
  {
    start: { lat: 49.2827, lng: -123.1207, country: "Vancouver, Canada" },
    end: { lat: 37.5407, lng: -77.4360, country: "Richmond, VA, USA" },
  },
   {
    start: { lat: 42.1103, lng: -88.0342, country: "Palatine, IL, USA" },
    end: { lat: 40.2959, lng: -74.8702, country: "Washington Crossing, PA, USA" },
  },
   {
    start: { lat: 42.1103, lng: -88.0342, country: "Palatine, IL, USA" },
    end: { lat: 37.8044, lng: -122.2711, country: "Oakland, CA, USA" },
  },
  {
    start: { lat: 41.4817, lng: -81.8001, country: "Lakewood, OH, USA" },
     end: { lat: 43.1566, lng: -77.6088, country: "Rochester, NY, USA" },
  },
  {
    start: { lat: 36.3504, lng: 127.3845, country: "Daejeon, South Korea" },
    end: { lat: 32.0617, lng: 118.7778, country: "Jiangsu, China" },
  },
  {
    start: { lat: 32.0617, lng: 118.7778, country: "Jiangsu, China" },
    end: { lat: 25.0440, lng: 102.7053, country: "Kunming, China" },
  },
  {
    start: { lat: 25.0440, lng: 102.7053, country: "Kunming, China" },
    end: { lat: 3.1390, lng: 101.6869, country: "Kuala Lumpur, Malaysia" },
  },
   {
    start: { lat: 3.1390, lng: 101.6869, country: "Kuala Lumpur, Malaysia" },
    end: { lat: 14.5864, lng: 121.1747, country: "Antipolo, Philippines" },
  },
  {
    start: { lat: 3.1390, lng: 101.6869, country: "Kuala Lumpur, Malaysia" },
    end: { lat: 23.8103, lng: 90.4125, country: "Dhaka, Bangladesh" },
  },
   {
    start: { lat: 23.8103, lng: 90.4125, country: "Dhaka, Bangladesh" },
    end: { lat: 26.9124, lng: 75.7873, country: "Jaipur, India" },
  },
   {
    start: { lat: 26.9124, lng: 75.7873, country: "Jaipur, India" },
    end: { lat: 30.3165, lng: 78.0322, country: "Dehradun, India" },
  },
  {
    start: { lat: 30.3165, lng: 78.0322, country: "Dehradun, India" },
    end: { lat: 26.3260, lng: 43.9750, country: "Qassim, Saudi Arabia" },
  },
   {
    start: { lat: 26.3260, lng: 43.9750, country: "Qassim, Saudi Arabia" },
    end: { lat: 32.5568, lng: 35.8470, country: "Irbid, Jordan" },
  },
  {
    start: { lat: 32.5568, lng: 35.8470, country: "Irbid, Jordan" },
    end: { lat: 41.0082, lng: 28.9784, country: "Istanbul, Turkey" },
  },
   {
    start: { lat: 41.0082, lng: 28.9784, country: "Istanbul, Turkey" },
    end: { lat: 50.4501, lng: 30.5234, country: "Kyiv, Ukraine" },
  },
  {
    start: { lat: 50.4501, lng: 30.5234, country: "Kyiv, Ukraine" },
    end: { lat: 43.1566, lng: -77.6088, country: "Rochester, NY, USA" },
  },
  {
    start: { lat: 41.0082, lng: 28.9784, country: "Istanbul, Turkey" },
     end: { lat: 8.5000, lng: 4.5500, country: "Ilorin, Nigeria" },
  },
  {
    start: { lat: 8.5000, lng: 4.5500, country: "Ilorin, Nigeria" },
     end: { lat: 14.7167, lng: -15.4677, country: "Dakar, Senegal" },
  },
  {
    start: { lat: 14.7167, lng: -15.4677, country: "Dakar, Senegal" },
    end: { lat: 33.5207, lng: -86.8025, country: "Birmingham, AL, USA" },
  },
];

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