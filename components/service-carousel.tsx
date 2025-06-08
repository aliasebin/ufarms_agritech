"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface ServiceCarouselProps {
  images: {
    src: string
    alt: string
  }[]
  className?: string
}

export default function ServiceCarousel({ images, className = "" }: ServiceCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-rotate images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
    }, 3000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div
      className={`relative h-64 md:h-96 w-full rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 ${className}`}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white w-6" : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
