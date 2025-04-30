"use client"

import { useState } from "react"
import { ArrowDown, Calendar, MapPin, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(true)

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  }

  const letterVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  }

  const scrollButtonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.5,
        duration: 0.8,
        ease: "easeOut",
      },
    },
    hover: {
      y: [0, -5, 0],
      transition: {
        duration: 0.5,
        repeat: Number.POSITIVE_INFINITY,
      },
    },
  }

  // Animation for the tagline
  const taglineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 1.2,
      },
    },
  }

  const taglineWordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        className="container mx-auto px-4 z-20 text-center"
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        {/* Main title with enhanced styling and letter animation */}
        <motion.div variants={titleVariants} className="mb-6">
          <h1 className="text-5xl md:text-8xl font-extrabold text-[#3CDFFF] mb-2 relative">
            <div className="flex justify-center items-center">
              {["I", "D", "E", "O", "N", "O", "X"].map((letter, i) => (
                <motion.span key={i} custom={i} variants={letterVariants} className="inline-block relative">
                  {letter}
                </motion.span>
              ))}
            </div>
            <motion.span
              className="block text-3xl md:text-5xl mt-4 text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
            >
              2025
            </motion.span>
            <motion.div
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 h-1 bg-[#3CDFFF] w-3/4 md:w-1/2"
              initial={{ width: 0 }}
              animate={{ width: "50%" }}
              transition={{ delay: 1.4, duration: 1 }}
            ></motion.div>
          </h1>
        </motion.div>

        {/* Animated tagline */}
        <motion.div variants={taglineVariants} className="mb-6 relative">
          <div className="flex justify-center items-center space-x-4">
            {["Innovate.", "Ideate.", "Inspire."].map((word, i) => (
              <motion.span
                key={i}
                variants={taglineWordVariants}
                custom={i}
                className="text-xl md:text-4xl text-white font-extrabold"
                whileHover={{
                  scale: 1.1,
                  color: ["#ffffff", "#3CDFFF", "#ffffff"],
                  transition: { duration: 0.8, repeat: Number.POSITIVE_INFINITY },
                }}
                animate={{
                  y: [0, -5, 0],
                  transition: {
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.3,
                    ease: "easeInOut",
                  },
                }}
              >
                {word}
              </motion.span>
            ))}
          </div>
          <motion.div
            className="h-1 bg-gradient-to-r from-transparent via-[#3CDFFF] to-transparent w-full mt-2"
            animate={{
              opacity: [0.3, 1, 0.3],
              transition: { duration: 2, repeat: Number.POSITIVE_INFINITY },
            }}
          />
        </motion.div>

        <motion.div variants={itemVariants} className="mb-8">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">
            Cambridge Institute of Technology North Campus
          </h2>
          <p className="text-md md:text-lg text-gray-300 max-w-2xl mx-auto">Organized by Innovation Club</p>
        </motion.div>

        {/* Event details with icons and hover effects */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-6 mb-10">
          <motion.div
            className="flex items-center text-white bg-[#1a1f35]/60 backdrop-blur-sm px-4 py-2 rounded-full"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(26,31,53,0.8)" }}
          >
            <Calendar className="w-5 h-5 mr-2" />
            <span>16-05-2025</span>
          </motion.div>
          <motion.div
            className="flex items-center text-white bg-[#1a1f35]/60 backdrop-blur-sm px-4 py-2 rounded-full"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(26,31,53,0.8)" }}
          >
            <MapPin className="w-5 h-5 mr-2" />
            <span>CITNC Campus</span>
          </motion.div>
          <motion.div
            className="flex items-center text-white bg-[#1a1f35]/60 backdrop-blur-sm px-4 py-2 rounded-full"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(26,31,53,0.8)" }}
          >
            <Users className="w-5 h-5 mr-2" />
            <span>Teams of 2-3</span>
          </motion.div>
        </motion.div>

        {/* Registration notification with space theme */}
        <motion.div
          className="mt-8 bg-[#1a1f35]/60 backdrop-blur-sm rounded-full px-8 py-3 border border-[#3CDFFF]/30 max-w-md mx-auto pulse-slow mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          whileHover={{ scale: 1.05, backgroundColor: "rgba(26,31,53,0.8)" }}
        >
          <div className="flex items-center justify-center space-x-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-white font-bold text-xl">REGISTRATIONS ARE OPEN</span>
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          </div>
        </motion.div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
          <Button
            className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white text-lg px-8 py-6 w-full sm:w-auto h-[60px] sm:min-w-[180px] flex items-center justify-center"
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSfDG7j-nuZkMWgD3d8AONa0JdDoBtnI5J9lRB4a9-eKiTvXfA/viewform?usp=dialog",
                "_blank",
              )
            }
          >
            Register Now
          </Button>

          <Button
            variant="outline"
            className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 w-full sm:w-auto h-[60px] sm:min-w-[180px] flex items-center justify-center"
            onClick={scrollToAbout}
          >
            Learn More
          </Button>
        </div>
      </motion.div>

      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 text-white"
        aria-label="Scroll down"
        variants={scrollButtonVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        whileHover="hover"
      >
        <ArrowDown size={32} />
      </motion.button>

      <style jsx>{`
        .pulse-slow {
          animation: pulse-slow 3s infinite;
        }

        @keyframes pulse-slow {
          0% { box-shadow: 0 0 0 0 rgba(60, 223, 255, 0.5); }
          70% { box-shadow: 0 0 0 15px rgba(60, 223, 255, 0); }
          100% { box-shadow: 0 0 0 0 rgba(60, 223, 255, 0); }
        }
      `}</style>
    </section>
  )
}
