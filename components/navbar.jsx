"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Theme", href: "#theme" },
  { name: "Registration", href: "#registration" },
  { name: "Judging", href: "#judging" },
  { name: "Awards", href: "#awards" },
  { name: "Gallery", href: "#gallery" },
  { name: "Organizers", href: "#organizers" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Set navbar background when scrolled
      setIsScrolled(window.scrollY > 10)

      // Determine active section
      const sections = navLinks.map((link) => link.href.substring(1))

      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    // Smooth scroll for anchor links
    const handleLinkClick = (e) => {
      const href = e.target.getAttribute("href")
      if (href && href.startsWith("#")) {
        e.preventDefault()
        const targetId = href.substring(1)
        const targetElement = document.getElementById(targetId)

        if (targetElement) {
          // Improved smooth scrolling with better easing
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth",
          })

          // Update URL without page reload
          window.history.pushState({}, "", href)

          // Close mobile menu if open
          setMobileMenuOpen(false)

          // Update active section immediately for better UX
          setActiveSection(targetId)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)

    // Add click event listeners to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", handleLinkClick)
    })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", handleLinkClick)
      })
    }
  }, [])

  useEffect(() => {
    // Apply smooth scrolling behavior to the entire document
    document.documentElement.style.scrollBehavior = "smooth"

    return () => {
      document.documentElement.style.scrollBehavior = ""
    }
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-navy-900/90 backdrop-blur-md shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="#home" className="flex items-center space-x-3">
          <div className="w-20 h-30  flex items-center justify-center overflow-hidden">
            <div className="w-20 h-20 flex items-center justify-center">
              <img src="/images/CITNC_white-02.png" alt="Cambidge Logo" className="w-full h-full object-contain" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl text-white">CAMBRIDGE</span>
            <span className="text-xs text-gray-300">North Campus</span>
          </div>
           
          <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden">
            <div className="w-20 h-20 flex items-center justify-center">
              <img src="/images/techfinity-logo.png" alt="Techfinity Logo" className="w-full h-full object-contain" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl text-white">TECHFINITY</span>
            <span className="text-xs text-gray-300">Tech Innovation Club</span>
          </div>
           
          
      
        </Link>

        
        



        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:text-blue-400",
                activeSection === link.href.substring(1) ? "text-blue-400" : "text-gray-200",
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button
            className="ml-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSfDG7j-nuZkMWgD3d8AONa0JdDoBtnI5J9lRB4a9-eKiTvXfA/viewform?usp=dialog",
                "_blank",
              )
            }
          >
            Register Now
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-navy-900 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium",
                  activeSection === link.href.substring(1)
                    ? "bg-navy-800 text-blue-300"
                    : "text-gray-300 hover:bg-navy-800",
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button
              className="w-full mt-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
              onClick={() =>
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLSfDG7j-nuZkMWgD3d8AONa0JdDoBtnI5J9lRB4a9-eKiTvXfA/viewform?usp=dialog",
                  "_blank",
                )
              }
            >
              Register Now
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
