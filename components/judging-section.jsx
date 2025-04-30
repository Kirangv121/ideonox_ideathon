"use client"

import { useEffect, useState } from "react"
import { Lightbulb, Briefcase, PresentationIcon, HeartHandshake, Clock, AlertCircle } from "lucide-react"
import { CustomProgress } from "@/components/ui/custom-progress"
import ScrollReveal from "@/components/scroll-reveal"

const criteria = [
  {
    name: "Innovation & Creativity",
    description: "Originality and creativity of the idea. How unique and novel is the solution?",
    weight: 30,
    icon: Lightbulb,
    color: "yellow",
    borderColor: "border-yellow-400",
  },
  {
    name: "Technical Feasibility",
    description: "Practicality and viability of implementation. Is the solution technically and economically feasible?",
    weight: 25,
    icon: Briefcase,
    color: "blue",
    borderColor: "border-blue-400",
  },
  {
    name: "Impact & Scalability",
    description: "Potential social, economic, or environmental impact. How significant is the problem being solved?",
    weight: 25,
    icon: HeartHandshake,
    color: "green",
    borderColor: "border-green-400",
  },
  {
    name: "Presentation & Communication",
    description: "Quality of pitch and demonstration. How well is the idea communicated and presented?",
    weight: 20,
    icon: PresentationIcon,
    color: "purple",
    borderColor: "border-blue-400",
  },
]

export default function JudgingSection() {
  const [progressValues, setProgressValues] = useState(criteria.map(() => 0))
  const [isClient, setIsClient] = useState(false)

  // Use this to ensure we're on the client side
  useEffect(() => {
    setIsClient(true)

    // Start the progress animation after a delay
    const timer = setTimeout(() => {
      criteria.forEach((criterion, index) => {
        setTimeout(() => {
          setProgressValues((prev) => {
            const newValues = [...prev]
            newValues[index] = criterion.weight
            return newValues
          })
        }, index * 300)
      })
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="judging" className="py-20 relative z-10 overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-white">
              Judging <span className="text-[#3CDFFF]">Criteria</span>
            </h2>

            <p className="text-gray-200 text-center max-w-2xl mx-auto">
              Your ideas will be evaluated based on the following criteria by our panel of expert judges.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {criteria.map((criterion, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div
                className={`bg-[#1a1f35]/80 backdrop-blur-sm rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 border-t-4 ${criterion.borderColor} transform hover:-translate-y-1 hover:scale-[1.02]`}
              >
                <div className="flex items-start mb-4">
                  <div
                    className={`w-12 h-12 rounded-full bg-${criterion.color}-600 flex items-center justify-center mr-4 flex-shrink-0`}
                  >
                    <criterion.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{criterion.name}</h3>
                    <p className="text-gray-300 mt-1">{criterion.description}</p>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-300">Weight</span>
                    <span className="text-sm font-medium text-gray-300">{criterion.weight}%</span>
                  </div>
                  {isClient && (
                    <CustomProgress
                      value={progressValues[index]}
                      max={100}
                      color={criterion.color}
                      className="h-3 rounded-full overflow-hidden"
                    />
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4} direction="up">
          <div className="mt-16 bg-[#1a1f35]/80 backdrop-blur-sm rounded-xl shadow-lg p-8 max-w-3xl mx-auto border-l-4 border-[#3CDFFF] transform hover:-translate-y-1 transition-transform duration-300">
            <h3 className="text-2xl font-bold mb-6 flex items-center text-white">
              <span className="bg-blue-900 text-[#3CDFFF] w-8 h-8 rounded-full flex items-center justify-center mr-3">
                <PresentationIcon className="w-4 h-4" />
              </span>
              Judging Process
            </h3>

            <div className="mb-6 bg-blue-900/30 p-4 rounded-lg flex items-start">
              <Clock className="w-5 h-5 text-[#3CDFFF] mt-1 mr-3 flex-shrink-0" />
              <div>
                <p className="font-medium text-blue-300">Presentation Time Limit</p>
                <p className="text-gray-300">
                  Each team will have 7 minutes for their final presentation, followed by 3 minutes Q&A by the panel.
                </p>
              </div>
            </div>

            <div className="mb-6 bg-amber-900/30 p-4 rounded-lg flex items-start">
              <AlertCircle className="w-5 h-5 text-amber-400 mt-1 mr-3 flex-shrink-0" />
              <div>
                <p className="font-medium text-amber-300">Important Note</p>
                <p className="text-gray-300">
                  The decision of the judging panel will be final and binding. Any form of plagiarism will result in
                  immediate disqualification.
                </p>
              </div>
            </div>

            <ol className="space-y-4 list-none">
              {[
                "Each team will have 7 minutes to pitch their idea followed by a 3-minute Q&A session.",
                "Judges will score each project based on the criteria mentioned above.",
                "The scores will be normalized and weighted according to the percentages.",
                "The team with the highest total score will be declared the winner.",
                "In case of a tie, judges will deliberate to determine the final ranking.",
              ].map((step, index) => (
                <li
                  key={index}
                  className="flex items-start group hover:translate-x-1 transition-transform duration-300"
                >
                  <div className="bg-[#3CDFFF] text-[#0a0d1a] w-7 h-7 rounded-full flex items-center justify-center mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {index + 1}
                  </div>
                  <p className="text-gray-300 group-hover:text-[#3CDFFF] transition-colors duration-300">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
