"use client"

import Image from "next/image"

// Sample news data
const newsItems = [
  {
    id: 1,
    title: "New Smart Irrigation Controller Released",
    excerpt: "Our latest controller uses AI to predict watering needs and save up to 60% more water.",
    date: "March 15, 2025",
    image: "/placeholder.svg?height=300&width=500&text=Smart+Controller",
    url: "#",
  },
  {
    id: 2,
    title: "Ufarms Partners with Agricultural University",
    excerpt: "New research partnership aims to develop next-generation hydroponic growing techniques.",
    date: "February 28, 2025",
    image: "/placeholder.svg?height=300&width=500&text=Research+Partnership",
    url: "#",
  },
  {
    id: 3,
    title: "Case Study: Water Conservation in Arid Regions",
    excerpt: "How our drip irrigation systems helped farmers reduce water usage by 70% while increasing yields.",
    date: "January 10, 2025",
    image: "/placeholder.svg?height=300&width=500&text=Case+Study",
    url: "#",
  },
]

export default function NewsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {newsItems.map((item) => (
        <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image
            src={item.image || "/placeholder.svg"}
            alt={item.title}
            width={500}
            height={300}
            className="object-cover h-48 w-full"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm mb-3">{item.date}</p>
            <p className="text-gray-700">{item.excerpt}</p>
            <a href={item.url} className="text-primary hover:underline block mt-4">
              Read More
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}
