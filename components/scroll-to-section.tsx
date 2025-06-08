"use client"

import type React from "react"

import type { ReactNode } from "react"

interface ScrollToSectionProps {
  targetId: string
  children: ReactNode
  className?: string
}

export default function ScrollToSection({ targetId, children, className = "" }: ScrollToSectionProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <a href={`#${targetId}`} onClick={handleClick} className={className}>
      {children}
    </a>
  )
}
