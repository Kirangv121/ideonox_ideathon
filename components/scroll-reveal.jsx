"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

export default function ScrollReveal({
  children,
  className,
  threshold = 0.1,
  delay = 0,
  duration = 0.8,
  direction = "up", // "up", "down", "left", "right"
}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Once visible, stop observing
          if (ref.current) observer.unobserve(ref.current)
        }
      },
      { threshold, rootMargin: "0px 0px -50px 0px" },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold])

  // Determine the initial transform based on direction
  let initialTransform = "translateY(50px)"
  if (direction === "down") initialTransform = "translateY(-50px)"
  if (direction === "left") initialTransform = "translateX(50px)"
  if (direction === "right") initialTransform = "translateX(-50px)"

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate(0, 0)" : initialTransform,
        transition: `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  )
}
