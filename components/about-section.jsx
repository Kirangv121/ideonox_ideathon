"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, Target, Users, GraduationCap } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

const aboutCards = [
  {
    title: "What is an Ideathon?",
    description:
      "An Ideathon is a collaborative event where participants brainstorm, develop, and pitch innovative ideas to solve real-world challenges within a limited timeframe.",
    icon: Lightbulb,
  },
  {
    title: "Our Vision",
    description:
      "To create a platform that fosters creativity, innovation, and collaboration among bright minds to address pressing global challenges.",
    icon: Target,
  },
  {
    title: "Our Mission",
    description:
      "Empowering the next generation of innovators to transform their ideas into impactful solutions through mentorship, resources, and networking opportunities.",
    icon: Users,
  },
  {
    title: "Eligibility",
    description:
      "Open to students, professionals, and enthusiasts of all backgrounds. Teams of 2-3 members are encouraged to participate and bring diverse perspectives.",
    icon: GraduationCap,
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
            About <span className="text-purple-600">Ideathon</span>
          </h2>

          <p className="text-gray-200 text-center max-w-2xl mx-auto mb-12">
            Join us in this exciting journey of innovation and problem-solving, where ideas transform into impactful
            solutions.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutCards.map((card, index) => (
            <ScrollReveal key={index} delay={index * 0.1} direction={index % 2 === 0 ? "left" : "right"}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-[#1a1f35]/80 backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-purple-900 flex items-center justify-center mb-4">
                    <card.icon className="w-6 h-6 text-purple-300" />
                  </div>
                  <CardTitle className="text-xl text-white">{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{card.description}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
