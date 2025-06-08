"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

// Updated carousel images with garden and landscape focus
const carouselImages = [
  {
    id: 1,
    src: "/LawnWide.jpg?height=800&width=1600&text=Landscape+Design",
    alt: "Beautiful garden landscape design with integrated irrigation system",
    caption: "Transform your outdoor space into a beautiful garden oasis",
    description: "Professional Landscape Design & Irrigation",
  },
  {
    id: 2,
    src: "/MaintinanceWide.jpg?height=800&width=1600&text=Garden+Maintenance",
    alt: "Professional garden maintenance and lawn care services",
    caption: "Keep your garden beautiful all year round",
    description: "Expert Garden Maintenance & Lawn Care",
  },
  {
    id: 3,
    src: "/rooftop.jpg?height=800&width=1600&text=Rooftop+Gardens",
    alt: "Modern rooftop garden design with seating areas and container plantings",
    caption: "Maximize your urban space with rooftop gardens",
    description: "Specialized Rooftop Garden Design & Installation",
  },
]

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-rotate images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  // Manual navigation
  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden" role="region" aria-label="Image Carousel">
      {/* Images */}
      {carouselImages.map((image, index) => (
        <div
          key={image.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            fill
            priority={index === 0}
            className="object-cover"
            sizes="100vw"
            loading={index === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
            <h1 className="text-3xl md:text-5xl font-bold text-center mb-4">{image.caption}</h1>
            <p className="text-xl md:text-2xl max-w-3xl text-center">{image.description}</p>
          </div>
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2" role="tablist">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white w-8" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-selected={index === currentIndex}
            role="tab"
          />
        ))}
      </div>
    </div>
  )
}
