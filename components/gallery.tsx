"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

const galleryImages = [
  {
    id: 1,
    src: "/img1.jpeg?height=400&width=600&text=Landscape+Irrigation",
    alt: "Smart irrigation system in action",
    category: "landscape",
    title: "Smart Lawn Irrigation",
  },
  {
    id: 2,
    src: "/img2.jpeg?height=400&width=600&text=Drip+Irrigation",
    alt: "Drip irrigation system",
    category: "drip",
    title: "Precision Drip Irrigation",
  },
  {
    id: 3,
    src: "/img3.jpeg?height=400&width=600&text=Hydroponic+System",
    alt: "Hydroponic lettuce",
    category: "hydroponic",
    title: "Automated Hydroponics",
  },
  {
    id: 4,
    src: "/img11.jpeg?height=400&width=600&text=Control+Panel",
    alt: "Control panel for irrigation",
    category: "automation",
    title: "Smart Control Panel",
  },
  {
    id: 5,
    src: "/img5.jpeg?height=400&width=600&text=Garden+Irrigation",
    alt: "Garden irrigation system",
    category: "landscape",
    title: "Garden Irrigation",
  },
  {
    id: 6,
    src: "img6.jpeg?height=400&width=600&text=Commercial+Farm",
    alt: "Commercial farm with drip",
    category: "drip",
    title: "Commercial Farm Irrigation",
  },

  {
    id: 4,
    src: "/img7.jpeg?height=400&width=600&text=Control+Panel",
    alt: "Control panel for irrigation",
    category: "automation",
    title: "Smart Control Panel",
  },
  {
    id: 5,
    src: "/img8.jpeg?height=400&width=600&text=Garden+Irrigation",
    alt: "Garden irrigation system",
    category: "landscape",
    title: "Garden Irrigation",
  },
  {
    id: 6,
    src: "img9.jpeg?height=400&width=600&text=Commercial+Farm",
    alt: "Commercial farm with drip",
    category: "drip",
    title: "Commercial Farm Irrigation",
  },
  
   {
    id: 4,
    src: "/img10.jpeg?height=400&width=600&text=Control+Panel",
    alt: "Control panel for irrigation",
    category: "automation",
    title: "Smart Control Panel",
  },
  {
    id: 5,
    src: "/LawnWide.jpg?height=400&width=600&text=Garden+Irrigation",
    alt: "Garden irrigation system",
    category: "landscape",
    title: "Garden Irrigation",
  },
  {
    id: 6,
    src: "img12.jpeg?height=400&width=600&text=Commercial+Farm",
    alt: "Commercial farm with drip",
    category: "drip",
    title: "Commercial Farm Irrigation",
  },
]

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)
  const [lightboxAlt, setLightboxAlt] = useState<string | null>(null)

  const filteredImages =
    activeFilter === "all" ? galleryImages : galleryImages.filter((img) => img.category === activeFilter)

  const filters = [
    { id: "all", label: "All" },
    { id: "landscape", label: "Landscape" },
    { id: "drip", label: "Drip Irrigation" },
    { id: "automation", label: "Automation" },
  ]

  const openLightbox = (image: (typeof galleryImages)[0]) => {
    setLightboxImage(image.src)
    setLightboxAlt(image.alt)
  }

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-8" role="tablist" aria-label="Gallery filters">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
              activeFilter === filter.id ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            role="tab"
            aria-selected={activeFilter === filter.id}
            aria-controls={`gallery-${filter.id}`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4"
        role="tabpanel"
        id={`gallery-${activeFilter}`}
      >
        {filteredImages.map((image) => (
          <div
            key={image.id}
            className="relative overflow-hidden rounded-lg shadow-md cursor-pointer h-64"
            onClick={() => openLightbox(image)}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-500 hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => {
            setLightboxImage(null)
            setLightboxAlt(null)
          }}
          role="dialog"
          aria-modal="true"
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => {
              setLightboxImage(null)
              setLightboxAlt(null)
            }}
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8" />
          </button>
          <div className="relative w-full max-w-4xl h-[80vh]">
            <Image
              src={lightboxImage || "/placeholder.svg"}
              alt={lightboxAlt || "Enlarged image"}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </div>
  )
}
