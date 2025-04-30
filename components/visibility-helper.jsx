"use client"

import { useEffect } from "react"

export default function VisibilityHelper() {
  useEffect(() => {
    // Function to ensure all elements are visible
    const makeAllVisible = () => {
      // Target all elements that might be hidden
      const allElements = document.querySelectorAll("*")

      allElements.forEach((el) => {
        if (el instanceof HTMLElement) {
          // Force visibility
          el.style.opacity = "1"
          el.style.visibility = "visible"
          el.style.display = el.style.display === "none" ? "block" : el.style.display

          // Remove any transform that might be hiding the element
          if (
            el.style.transform &&
            (el.style.transform.includes("scale(0)") ||
              el.style.transform.includes("translateY(") ||
              el.style.transform.includes("translateX("))
          ) {
            el.style.transform = "none"
          }

          // Add show class to any element that might need it
          el.classList.add("show")
        }
      })

      // Specifically target sections
      document.querySelectorAll("section").forEach((section) => {
        if (section instanceof HTMLElement) {
          section.style.opacity = "1"
          section.style.visibility = "visible"
          section.classList.add("show")
        }
      })
    }

    // Run immediately
    makeAllVisible()

    // Run after a delay to catch any elements that might be animated in
    setTimeout(makeAllVisible, 500)
    setTimeout(makeAllVisible, 1000)
    setTimeout(makeAllVisible, 2000)

    // Run periodically to ensure visibility
    const interval = setInterval(makeAllVisible, 3000)

    // Also run on scroll events
    window.addEventListener("scroll", makeAllVisible)

    return () => {
      clearInterval(interval)
      window.removeEventListener("scroll", makeAllVisible)
    }
  }, [])

  return null // This component doesn't render anything
}
