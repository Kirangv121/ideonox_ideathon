"use client"

import { useEffect, useState } from "react"
import { Trophy, Award, Sparkles, Coffee, FileCheck, Zap } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

export default function AwardsSection() {
  const [count, setCount] = useState(0)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    // Start the count animation
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount < 10000) {
            return prevCount + 500
          }
          clearInterval(interval)
          return 10000
        })
      }, 50)

      return () => clearInterval(interval)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="awards" className="py-20 relative z-10 overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-white">
              <span className="text-purple-600">Awards</span> & Prizes
            </h2>

            <p className="text-gray-200 text-center max-w-2xl mx-auto mb-12">
              Exciting rewards await the most innovative and impactful ideas.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="relative bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 rounded-2xl p-1 shadow-xl mb-16 max-w-3xl mx-auto transform hover:scale-[1.02] transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-pink-300/20 to-purple-400/20 rounded-2xl animate-shimmer"></div>
            <div className="bg-[#1a1f35]/80 backdrop-blur-sm rounded-xl p-8 text-center relative z-10">
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 w-20 h-20 rounded-full flex items-center justify-center shadow-lg">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold mt-6 mb-2 text-white">Total Prize Pool</h3>
              <div className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 my-4">
                ₹{isClient ? count.toLocaleString() : "10,000"}
              </div>
              <p className="text-gray-300">Celebrating innovation and excellence</p>

              <div className="mt-4 flex justify-center space-x-2">
                {[0, 1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full bg-purple-600 animate-bounce"
                    style={{ animationDelay: `${i * 0.1}s`, animationDuration: "1s" }}
                  />
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Winner",
              description: "For the best idea in each domain",
              prize: "₹2,000",
              icon: Trophy,
              color: "from-yellow-400 to-amber-600",
              highlight: "For each domain",
              highlightColor: "bg-[#131729] text-yellow-400",
            },
            {
              title: "Runner-Up",
              description: "For the second-best idea in each domain",
              prize: "₹1,000",
              icon: Award,
              color: "from-gray-400 to-gray-600",
              highlight: "For each domain",
              highlightColor: "bg-[#131729] text-gray-300",
            },
            {
              title: "Best Idea",
              description: "For the most innovative and impactful idea overall",
              prize: "₹1,000",
              icon: Sparkles,
              color: "from-purple-400 to-pink-600",
              highlight: "",
              highlightColor: "",
            },
          ].map((award, index) => (
            <ScrollReveal key={index} delay={0.3 + index * 0.1}>
              <div className="award-card bg-[#1a1f35]/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className={`h-2 bg-gradient-to-r ${award.color}`}></div>
                <div className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-to-r ${award.color} flex items-center justify-center hover:rotate-12 transition-transform duration-300`}
                    >
                      <award.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{award.title}</h3>
                  <p className="text-gray-300 mb-4">{award.description}</p>
                  <div className="text-2xl font-bold text-purple-400">{award.prize}</div>
                  {award.highlight && (
                    <div className={`mt-2 inline-block ${award.highlightColor} text-xs px-2 py-1 rounded-full`}>
                      {award.highlight}
                    </div>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.6}>
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6 text-center text-white">Additional Perks</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="bg-[#1a1f35]/70 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center text-center hover:bg-[#1a1f35]/90 transition-colors duration-300 transform hover:scale-[1.03] transition-transform">
                <FileCheck className="w-10 h-10 text-purple-400 mb-3" />
                <h4 className="font-bold text-lg mb-2 text-white">Certificates</h4>
                <p className="text-gray-300">
                  Winners and runners-up receive hard copy certificates. All participants receive digital certificates.
                </p>
              </div>
              <div className="bg-[#1a1f35]/70 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center text-center hover:bg-[#1a1f35]/90 transition-colors duration-300 transform hover:scale-[1.03] transition-transform">
                <Coffee className="w-10 h-10 text-purple-400 mb-3" />
                <h4 className="font-bold text-lg mb-2 text-white">Complimentary Snacks</h4>
                <p className="text-gray-300">Free refreshments for all participants throughout the event.</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        .animate-shimmer {
          background-size: 200% 100%;
          animation: shimmer 3s infinite linear;
        }
      `}</style>
    </section>
  )
}
