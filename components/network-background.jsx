"use client"

import { useEffect, useRef } from "react"

export default function NetworkBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    let animationFrameId
    let mousePosition = { x: undefined, y: undefined }

    // Track mouse position
    const handleMouseMove = (e) => {
      mousePosition = {
        x: e.clientX,
        y: e.clientY,
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Set canvas dimensions to cover the entire viewport
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight * 3 // Make it taller to cover scrolling content
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Create stars background
    const stars = []
    const numberOfStars = 300

    for (let i = 0; i < numberOfStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.8 + 0.2, // Slightly larger stars
        opacity: Math.random() * 0.8 + 0.2,
      })
    }

    // Particle settings - INCREASED number and size
    const particlesArray = []
    const numberOfParticles = 200 // Increased from 150

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 0.8 // Increased size
        this.baseSize = this.size
        this.speedX = Math.random() * 0.3 - 0.15
        this.speedY = Math.random() * 0.3 - 0.15
        // Increased opacity for better visibility
        this.color = `rgba(255, 255, 255, ${Math.random() * 0.6 + 0.4})`
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        // Wrap around edges
        if (this.x > canvas.width) this.x = 0
        if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        if (this.y < 0) this.y = canvas.height

        // Check if mouse is near this particle
        if (mousePosition.x && mousePosition.y) {
          const dx = mousePosition.x - this.x
          const dy = mousePosition.y - this.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            // Increased interaction radius
            // Repel particles from mouse
            this.x -= dx * 0.03
            this.y -= dy * 0.03
            this.size = this.baseSize * 2 // More dramatic size increase on hover
          } else {
            this.size = this.baseSize
          }
        }
      }

      draw() {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const init = () => {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle())
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw stars
      stars.forEach((star) => {
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fill()
      })

      // Draw and update particles
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update()
        particlesArray[i].draw()
      }

      // Connect particles with lines if they're close enough
      connectParticles()

      animationFrameId = requestAnimationFrame(animate)
    }

    const connectParticles = () => {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x
          const dy = particlesArray[a].y - particlesArray[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          // Increased connection distance and line opacity
          if (distance < 180) {
            // Increased from 150
            // White connection lines with distance-based opacity (increased brightness)
            const opacity = 0.25 - distance / 1800 // Increased from 0.15 and 1500
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`
            ctx.lineWidth = 0.8 // Increased from 0.5
            ctx.beginPath()
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y)
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y)
            ctx.stroke()
          }
        }
      }
    }

    init()
    animate()

    // Handle scroll to update visible area
    const handleScroll = () => {
      canvas.style.transform = `translateY(${window.scrollY * 0.3}px)`
    }
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ background: "#0a0d1a" }}
    />
  )
}
