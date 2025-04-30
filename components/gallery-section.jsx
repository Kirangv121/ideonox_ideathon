"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Calendar, Trophy, MapPin } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

// Updated gallery data with both achievements
const galleryItems = [
  {
    id: 1,
    title: "Dynamic Hackathon Winners",
    location: "PUNE",
    category: "Past Winners",
    image: "/images/dynamic-hackathon-winners.png",
    description: "Team Integrated Innovators BLR from CITNC Won the 1st prize in this National Level Hackathon.",
    date: "29 March 2025",
    prize: "1,00,000",
    details: {
      event: "Dynamic Hackathon 2025, Pune",
      organizer: "Dynamic Crane Engineers Pune",
      prize: "₹1,00,000 National Level Hackathon",
      team: "Kiran G V, Darshan K R, Manoj Yadav, Mahanthesh S Karadi and  Mahendra D M , Kishan  M",
    },
  },
  {
    id: 2,
    title: "HackToFuture 3.0 Winners",
    location: "Mangalore",
    category: "Past Winners",
    image: "/images/hacktofuture-winners.png",
    description: "Team Code Brigade secured the Winner position in this grueling 36-hour National Level Hackathon.",
    date: "7 to 9 April 2025",
    prize: "40,000",
    details: {
      event: "HackToFuture 3.0 at St. Joseph Engineering College",
      organizer: "St. Joseph Engineering College",
      prize: "₹40,000 National Level Hackathon",
      duration: "36-hour non-stop hackathon (April 7th 6PM to 9th 6AM)",
      achievement: "Winners in Construction and Workplace Management category",
    },
  },
  {
    id: 3,
    title: "HackToFuture 3.0 Runners Up",
    location: "Mangalore",
    category: "Past Winners",
    image: "/images/hacktofuture-runners-up.png",
    description:
      "Team Integrated Innovators BLR secured Runners Up position in this grueling 36-hour National Level Hackathon.",
    date: "7 to 9 April 2025",
    prize: "20,000",
    details: {
      event: "HackToFuture 3.0 at St. Joseph Engineering College",
      organizer: "St. Joseph Engineering College",
      prize: "₹20,000 National Level Hackathon",
      duration: "36-hour non-stop hackathon (April 7th 6PM to 9th 6AM)",
      achievement: "Runners Up in Construction and Workplace Management category",
    },
  },
   
]

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 3

  const filters = ["All", "Past Winners"]

  const filteredItems =
    activeFilter === "All" ? galleryItems : galleryItems.filter((item) => item.category === activeFilter)

  const pageCount = Math.ceil(filteredItems.length / itemsPerPage)
  const displayedItems = filteredItems.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % pageCount)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + pageCount) % pageCount)
  }

  return (
    <section id="gallery" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-white">
            Our <span className="text-[#3CDFFF]">Gallery</span>
          </h2>
          <p className="text-gray-200 text-center max-w-2xl mx-auto mb-12">
            Explore our achievements in National Level Hackathons
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => {
                  setActiveFilter(filter)
                  setCurrentPage(0)
                }}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-[#3CDFFF] text-navy-900 font-medium"
                    : "bg-[#1a1f35]/80 text-gray-300 hover:bg-[#1a1f35] hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {displayedItems.map((item, index) => (
              <ScrollReveal key={item.id} delay={0.1 * index}>
                <motion.div
                  className="bg-[#1a1f35]/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="bg-[#131729] text-[#3CDFFF] text-xs px-3 py-1 rounded-full">
                        {item.category}
                      </span>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Calendar className="w-3 h-3 mr-1" />
                        {item.date}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>

                    {item.location && (
                      <div className="flex items-center mb-3 text-[#3CDFFF]">
                        <MapPin className="w-3 h-3 mr-1" />
                        <span className="text-sm font-medium">{item.location}</span>
                      </div>
                    )}

                    <p className="text-gray-300 mb-4">{item.description}</p>

                    {item.prize && (
                      <div className="mt-2 bg-gradient-to-r from-yellow-900/30 to-amber-900/30 border border-yellow-500/30 rounded-md px-3 py-2 flex items-center justify-center">
                        <Trophy className="w-5 h-5 text-yellow-500 mr-2" />
                        <span className="text-yellow-400 font-bold">Awarded {item.prize}</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          {pageCount > 1 && (
            <div className="flex justify-center mt-12 space-x-4">
              <button
                onClick={prevPage}
                className="w-10 h-10 rounded-full bg-[#1a1f35]/80 flex items-center justify-center text-white hover:bg-[#3CDFFF] hover:text-navy-900 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center space-x-2">
                {Array.from({ length: pageCount }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentPage === i ? "bg-[#3CDFFF] scale-125" : "bg-gray-500 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to page ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextPage}
                className="w-10 h-10 rounded-full bg-[#1a1f35]/80 flex items-center justify-center text-white hover:bg-[#3CDFFF] hover:text-navy-900 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="mt-16 text-center">
            <p className="text-gray-300">
              Want to see your project featured here?
              <a href="#registration" className="text-[#3CDFFF] hover:underline ml-1">
                Register for Ideathon 2025
              </a>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
