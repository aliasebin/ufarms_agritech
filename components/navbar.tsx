"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import {
  Home,
  Info,
  Lightbulb,
  ImageIcon,
  Phone,
  Menu,
  X,
  ChevronDown
} from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export default function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [showSolutionsDropdown, setShowSolutionsDropdown] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    if (!isMobile) {
      setShowMobileMenu(false)
    }
  }, [isMobile])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setShowMobileMenu(false)
    setShowSolutionsDropdown(false)
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4" aria-label="Main Navigation">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("home")
              }}
              className="flex items-center"
              aria-label="Ufarms.io - Home"
            >
              <Image
                src="/logo2.png"
                alt="Ufarms.io Logo"
                width={240}
                height={80}
                className="w-auto h-20"
                priority
              />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-full text-gray-900 hover:bg-gray-100 transition-colors"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            aria-label={showMobileMenu ? "Close menu" : "Open menu"}
            aria-expanded={showMobileMenu}
            aria-controls="mobile-menu"
          >
            {showMobileMenu ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { label: "Home", id: "home" },
              { label: "About", id: "about" },
              { label: "Gallery", id: "gallery" },
              { label: "Contact", id: "contact" }
            ].map(({ label, id }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(id)
                }}
                className="text-gray-900 hover:text-primary transition-colors duration-300 font-medium"
              >
                {label}
              </a>
            ))}

            <div className="relative">
              <button
                className="flex items-center text-gray-900 hover:text-primary transition-colors duration-300 font-medium"
                onClick={() => setShowSolutionsDropdown(!showSolutionsDropdown)}
                onMouseEnter={() => setShowSolutionsDropdown(true)}
                onMouseLeave={() => setShowSolutionsDropdown(false)}
                aria-expanded={showSolutionsDropdown}
                aria-haspopup="true"
                aria-controls="solutions-dropdown"
              >
                Services
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>

              {showSolutionsDropdown && (
                <div
                  id="solutions-dropdown"
                  className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-md rounded-xl shadow-lg py-1 z-50 border border-green-100"
                  onMouseEnter={() => setShowSolutionsDropdown(true)}
                  onMouseLeave={() => setShowSolutionsDropdown(false)}
                  role="menu"
                >
                  {[
                    { label: "Landscape Design & Irrigation", id: "landscape-design" },
                    { label: "Drip Irrigation & Automation", id: "drip-irrigation" },
                    { label: "Lawn Laying & Maintenance", id: "lawn-maintenance" },
                    { label: "Stone Laying", id: "stone-laying" },
                    { label: "Rooftop Garden Design", id: "rooftop-garden" }
                  ].map(({ label, id }) => (
                    <a
                      key={id}
                      href={`#${id}`}
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToSection(id)
                      }}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-soft hover:text-primary rounded-lg mx-1 transition-colors duration-300"
                      role="menuitem"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {showMobileMenu && (
          <div
            id="mobile-menu"
            className="md:hidden py-4 border-t border-gray-200 bg-white/95 backdrop-blur-md"
          >
            <div className="flex flex-col space-y-3">
              {[
                { label: "Home", id: "home", icon: Home },
                { label: "About", id: "about", icon: Info },
                { label: "Gallery", id: "gallery", icon: ImageIcon },
                { label: "Contact", id: "contact", icon: Phone }
              ].map(({ label, id, icon: Icon }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(id)
                  }}
                  className="px-3 py-2 rounded-full flex items-center text-gray-900 hover:bg-gray-100 transition-colors"
                >
                  <Icon className="h-5 w-5 mr-2" />
                  {label}
                </a>
              ))}

              {/* Mobile Services Dropdown */}
              <div>
                <button
                  className="w-full px-3 py-2 rounded-full flex items-center justify-between text-gray-900 hover:bg-gray-100 transition-colors"
                  onClick={() => setShowSolutionsDropdown(!showSolutionsDropdown)}
                  aria-expanded={showSolutionsDropdown}
                  aria-controls="mobile-solutions-dropdown"
                >
                  <div className="flex items-center">
                    <Lightbulb className="h-5 w-5 mr-2" />
                    Services
                  </div>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      showSolutionsDropdown ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {showSolutionsDropdown && (
                  <div id="mobile-solutions-dropdown" className="pl-10 mt-1 space-y-1">
                    {[
                      { label: "Landscape Design & Irrigation", id: "landscape-design" },
                      { label: "Drip Irrigation & Automation", id: "drip-irrigation" },
                      { label: "Lawn Laying & Maintenance", id: "lawn-maintenance" },
                      { label: "Stone Laying", id: "stone-laying" },
                      { label: "Rooftop Garden Design", id: "rooftop-garden" }
                    ].map(({ label, id }) => (
                      <a
                        key={id}
                        href={`#${id}`}
                        onClick={(e) => {
                          e.preventDefault()
                          scrollToSection(id)
                        }}
                        className="block px-3 py-2 rounded-full text-gray-900 hover:bg-gray-100 transition-colors"
                      >
                        {label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
