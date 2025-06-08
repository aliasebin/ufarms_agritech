import Image from "next/image"
import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"
import ServiceCarousel from "./service-carousel"

interface FeatureCardProps {
  title: string
  description: string
  imageSrc?: string
  imageAlt?: string
  images?: {
    src: string
    alt: string
  }[]
  reverse?: boolean
  icon?: LucideIcon
}

export default function FeatureCard({
  title,
  description,
  imageSrc,
  imageAlt = "",
  images = [],
  reverse = false,
  icon: Icon,
}: FeatureCardProps) {
  return (
    <div className={cn("flex flex-col md:flex-row items-center gap-8 py-12", reverse && "md:flex-row-reverse")}>
      <div className="w-full md:w-1/2">
        {images && images.length > 0 ? (
          <ServiceCarousel images={images} />
        ) : (
          <div className="relative h-64 md:h-96 w-full rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={imageAlt}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        )}
      </div>
      <div className="w-full md:w-1/2">
        <div className="flex items-center mb-4">
          {Icon && (
            <div className="bg-gradient-tri-color rounded-full p-3 mr-3 transition-all duration-300 hover:scale-110 shadow-md">
              <Icon className="h-6 w-6 text-white transition-colors duration-300" />
            </div>
          )}
          <h3 className="text-2xl font-semibold text-gradient-tri">{title}</h3>
        </div>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  )
}
