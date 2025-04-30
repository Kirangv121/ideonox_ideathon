"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import ScrollReveal from "./scroll-reveal"

const faqs = [
  {
    question: "What is an Ideathon?",
    answer:
      "An Ideathon is a collaborative event where participants brainstorm, develop, and pitch innovative ideas to solve real-world challenges within a limited timeframe. Unlike hackathons that focus on coding and building prototypes, ideathons focus on conceptualizing and presenting ideas.",
  },
  {
    question: "Who can participate in Ideathon 2025?",
    answer:
      "Ideathon 2025 is open to all current students of Cambridge Institute of Technology North Campus across all departments. Participants must form teams of 2-3 members.",
  },
  {
    question: "How do I register for the event?",
    answer:
      "You can register by scanning the QR code on our website or by clicking the 'Register Now' button. This will direct you to a Google Form where you'll need to provide your team details. Make sure to complete registration before the deadline of May 10, 2025.",
  },
  {
    question: "Is there a registration fee?",
    answer: "No, participation in Ideathon 2025 is completely free of charge for all eligible students.",
  },
  {
    question: "What are the domains for idea submission?",
    answer:
      "The three main domains for Ideathon 2025 are: Internet of Things (IoT), Artificial Intelligence (AI), and Cybersecurity. Each team must select one domain for their idea presentation.",
  },
  {
    question: "How will the ideas be judged?",
    answer:
      "Ideas will be judged based on four main criteria: Innovation & Creativity (30%), Technical Feasibility (25%), Impact & Scalability (25%), and Presentation & Communication (20%). The judging panel will consist of industry experts and faculty members.",
  },
  {
    question: "What is the format of the final presentation?",
    answer:
      "Each team will have 7 minutes to present their idea, followed by a 3-minute Q&A session with the judges. Teams should prepare a concise and engaging presentation that covers the problem statement, proposed solution, technical feasibility, and potential impact.",
  },
  {
    question: "What prizes can we win?",
    answer:
      "Prizes include ₹2,000 for the winner and ₹1,000 for the runner-up in each domain, plus an additional ₹1,000 for the best overall idea. All participants will receive digital certificates, and winners will receive hard copy certificates.",
  },
  {
    question: "Do we need to build a working prototype?",
    answer:
      "No, Ideathon 2025 focuses on innovative ideas rather than working prototypes. You need to present a well-thought-out concept with supporting visuals, diagrams, or mockups to illustrate your idea effectively.",
  },
  {
    question: "Who should I contact if I have more questions?",
    answer:
      "For any additional questions or clarifications, please contact the event coordinators at kirangv757@gmail.com or call +91 9353713349. You can also join our WhatsApp community for real-time updates and discussions.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-white">
            Frequently <span className="text-[#3CDFFF]">Asked Questions</span>
          </h2>
          <p className="text-gray-200 text-center max-w-2xl mx-auto mb-12">
            Find answers to common questions about Ideathon 2025
          </p>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="mb-4">
                <motion.div
                  className={`bg-[#1a1f35]/80 backdrop-blur-sm rounded-lg overflow-hidden border ${
                    openIndex === index ? "border-[#3CDFFF]" : "border-[#131729]"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <button
                    className="w-full p-5 text-left flex items-center justify-between focus:outline-none"
                    onClick={() => toggleFAQ(index)}
                  >
                    <div className="flex items-center">
                      <HelpCircle
                        className={`w-5 h-5 mr-3 ${openIndex === index ? "text-[#3CDFFF]" : "text-gray-400"}`}
                      />
                      <h3 className={`font-bold text-lg ${openIndex === index ? "text-[#3CDFFF]" : "text-white"}`}>
                        {faq.question}
                      </h3>
                    </div>
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-[#3CDFFF]" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-5 pt-0 border-t border-[#131729]">
                          <p className="text-gray-300">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5}>
          <div className="mt-12 text-center">
            <p className="text-gray-300">
              Still have questions? Feel free to{" "}
              <a href="#contact" className="text-[#3CDFFF] hover:underline">
                contact us
              </a>{" "}
              for more information.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
