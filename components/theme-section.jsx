"use client"

import { Wifi, Brain, Shield } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

const themes = [
  {
    title: "Internet of Things (IoT)",
    description: "Develop innovative IoT solutions for real-world challenges.",
    icon: Wifi,
    color: "from-green-400 to-emerald-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-400",
    subdomains: [
      "Smart City and Agriculture",
      "M2M IoT",
      "Industry 4.0",
      "Smart Healthcare",
      "Green Energy Systems",
      "Smart Home Appliances",
      "Disaster Management",
    ],
  },
  {
    title: "Artificial Intelligence (AI)",
    description: "Explore applications of artificial intelligence to solve complex problems.",
    icon: Brain,
    color: "from-blue-400 to-indigo-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-400",
    subdomains: [
      "Robotics and Drones",
      "Finance and Stock market",
      "Generative AI",
      "AI in Law and Legal-tech",
      "AI in language translation",
      "AI in Real Estate",
      "AI in space and astronomy",
    ],
  },
  {
    title: "Cybersecurity",
    description: "Create solutions to enhance digital security and protect sensitive information.",
    icon: Shield,
    color: "from-orange-400 to-red-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-400",
    subdomains: [
      "Phishing Attacks",
      "Security in Digital Payments",
      "Deepfake Detection",
      "Blockchain for Cybersecurity",
      "Network Security and Monitoring",
      "Cloud Security",
      "Data Privacy and Protection",
    ],
  },
]

export default function ThemeSection() {
  return (
    <section id="theme" className="py-20 relative z-10 overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-white">
              Ideonox <span className="text-[#3CDFFF]">Domains</span>
            </h2>

            <p className="text-gray-200 text-center max-w-2xl mx-auto mb-4">
              Choose from these exciting domains to showcase your innovative ideas and solutions.
            </p>

            <p className="text-[#3CDFFF] font-medium text-center max-w-2xl mx-auto mb-12">
              Each team must select only one domain for their idea presentation
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {themes.map((theme, index) => (
            <ScrollReveal key={index} delay={index * 0.15}>
              <div
                className={`theme-card bg-[#1a1f35]/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:shadow-xl hover:-translate-y-2 border-b-4 ${theme.borderColor}`}
              >
                <div className={`h-2 bg-gradient-to-r ${theme.color}`}></div>
                <div className="p-6">
                  <div
                    className={`w-14 h-14 rounded-lg bg-gradient-to-r ${theme.color} flex items-center justify-center mb-4`}
                  >
                    <theme.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{theme.title}</h3>
                  <p className="text-gray-300 mb-4">{theme.description}</p>

                  <div className={`mt-4 bg-[#131729]/80 backdrop-blur-sm rounded-lg p-4`}>
                    <h4 className="font-semibold text-sm text-gray-400 mb-3">FOCUS AREAS:</h4>
                    <ul className="space-y-2">
                      {theme.subdomains.map((subdomain, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-[#3CDFFF] mr-2">•</span>
                          <span className="text-sm text-gray-300">{subdomain}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5}>
          <div className="mt-16 overflow-hidden">
            <div className="marquee-container">
              <div className="marquee">
                {Array(2)
                  .fill()
                  .map((_, i) => (
                    <div key={i} className="flex space-x-8">
                      {[
                        "Innovation",
                        "Creativity",
                        "Problem-Solving",
                        "Collaboration",
                        "Impact",
                        "Technology",
                        "Design Thinking",
                        "Sustainability",
                      ].map((word, index) => (
                        <span key={index} className="text-2xl font-bold text-gray-300 mx-4">
                          {word}
                        </span>
                      ))}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <style jsx>{`
        .marquee-container {
          width: 100%;
          overflow: hidden;
        }
        
        .marquee {
          display: flex;
          animation: marquee 30s linear infinite;
        }
        
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
