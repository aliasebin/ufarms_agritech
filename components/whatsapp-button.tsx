"use client"

import { MessageCircle } from "lucide-react"
import { useState } from "react"

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false)

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/1234567890", "_blank")
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <button
          onClick={handleWhatsAppClick}
          className="bg-gradient-tri-color text-white p-4 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center transform hover:scale-110 hover:shadow-xl"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
        </button>

        {isHovered && (
          <div className="absolute bottom-full right-0 mb-2 bg-white text-gray-800 py-2 px-4 rounded-full shadow-md whitespace-nowrap border border-cyan-100">
            Chat with us on WhatsApp
          </div>
        )}
      </div>
    </div>
  )
}
