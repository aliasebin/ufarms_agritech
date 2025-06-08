"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

const galleryImages = [
  { id: 1, src: "/img1.jpeg", alt: "Smart irrigation system", title: "Smart Lawn Irrigation" },
  { id: 2, src: "/img2.jpeg", alt: "Drip irrigation system", title: "Precision Drip Irrigation" },
  { id: 3, src: "/img3.jpeg", alt: "Hydroponic lettuce", title: "Automated Hydroponics" },
  { id: 4, src: "/img11.jpeg", alt: "Control panel for irrigation", title: "Smart Control Panel" },
  { id: 5, src: "/img5.jpeg", alt: "Garden irrigation", title: "Garden Irrigation" },
  { id: 6, src: "/img6.jpeg", alt: "Commercial farm", title: "Commercial Farm Irrigation" },
  { id: 7, src: "/img7.jpeg", alt: "Smart controller", title: "Control Panel" },
  { id: 8, src: "/img8.jpeg", alt: "Garden irrigation 2", title: "Garden Irrigation" },
  { id: 9, src: "/img9.jpeg", alt: "Farm with irrigation", title: "Commercial Farm" },
  { id: 10, src: "/img10.jpeg", alt: "Smart system", title: "Smart Panel" },
  { id: 11, src: "/LawnWide.jpg", alt: "Wide lawn irrigation", title: "Wide Lawn" },
  { id: 12, src: "/img12.jpeg", alt: "Farming setup", title: "Modern Farm" },
]

export default function Gallery() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)
  const [lightboxAlt, setLightboxAlt] = useState<string | null>(null)

  const openLightbox = (image: typeof galleryImages[0]) => {
    setLightboxImage(image.src)
    setLightboxAlt(image.alt)
  }

  return (
    <div className="p-4">
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {galleryImages.map((image) => (
          <div
            key={image.id}
            className="relative overflow-hidden rounded-lg shadow-md cursor-pointer h-64"
            onClick={() => openLightbox(image)}
          >
            <Image
              src={image.src}
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
              src={lightboxImage}
              alt={lightboxAlt || "Expanded image"}
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
