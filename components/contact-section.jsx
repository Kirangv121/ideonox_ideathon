"use client"

import { useState } from "react"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import ScrollReveal from "./scroll-reveal"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Send data to Google Sheet using fetch
      try {
        // This is the Google Apps Script Web App URL
        const googleSheetUrl =
          "https://script.google.com/macros/s/AKfycbxox_AK5muLYoG-I3mmijZt8_KSZxPhGqFp7WAQIx7gyKrqZTgdN265Dy_cRoPQ1gD7hg/exec"

        // Create a simple form data string
        const formDataString =
          `timestamp=${encodeURIComponent(new Date().toISOString())}&` +
          `name=${encodeURIComponent(formData.name)}&` +
          `email=${encodeURIComponent(formData.email)}&` +
          `subject=${encodeURIComponent(formData.subject)}&` +
          `message=${encodeURIComponent(formData.message)}`

        console.log("Sending data to Google Sheet:", formDataString)

        // Send data to Google Sheet
        const response = await fetch(googleSheetUrl, {
          method: "POST",
          body: formDataString,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          mode: "no-cors", // Required for Google Apps Script
        })

        console.log("Form data sent to Google Sheet")

        // Alternative approach using XMLHttpRequest
        const xhr = new XMLHttpRequest()
        xhr.open("POST", googleSheetUrl, true)
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
        xhr.send(formDataString)

        console.log("Form data also sent via XMLHttpRequest")
      } catch (error) {
        console.error("Error sending data to Google Sheet:", error)
        throw error
      }

      // Clear form after successful submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      setSubmitStatus("success")
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
            <span className="text-[#3CDFFF]">Contact</span> Us
          </h2>

          <p className="text-gray-200 text-center max-w-2xl mx-auto mb-12">
            Have questions? Reach out to us and we'll get back to you as soon as possible.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ScrollReveal direction="left" delay={0.2}>
            <div className="bg-[#1a1f35]/80 backdrop-blur-sm rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold mb-6 text-white">Send us a message</h3>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-200">
                      Your Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Full name"
                      className="bg-[#131729]/80 border-[#131729] text-white"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-200">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email address"
                      className="bg-[#131729]/80 border-[#131729] text-white"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-gray-200">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="How can we help you?"
                    className="bg-[#131729]/80 border-[#131729] text-white"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-200">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    rows={5}
                    className="bg-[#131729]/80 border-[#131729] text-white"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-[#3CDFFF] hover:from-blue-600 hover:to-[#3CDFFF] text-white h-[50px] flex items-center justify-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <span className="mr-2">Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </Button>

                {submitStatus === "success" && (
                  <p className="text-green-400 text-center mt-2">Your message has been sent successfully!</p>
                )}

                {submitStatus === "error" && (
                  <p className="text-red-400 text-center mt-2">
                    There was an error sending your message. Please try again.
                  </p>
                )}
              </form>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.3}>
            <div className="space-y-8">
              <div className="bg-[#1a1f35]/80 backdrop-blur-sm rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold mb-6 text-white">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4 text-gray-200">
                    <MapPin className="w-5 h-5 text-[#3CDFFF] mt-1 flex-shrink-0" />
                    <span>Cambridge Institute of Technology- North Campus Bengaluru 562110</span>
                  </div>

                  <div className="flex items-start space-x-4 text-gray-200">
                    <Mail className="w-5 h-5 text-[#3CDFFF] mt-1 flex-shrink-0" />
                    <a href="mailto:kirangv757@gmail.com" className="hover:text-[#3CDFFF]">
                      kirangv757@gmail.com
                    </a>
                  </div>

                  <div className="flex items-start space-x-4 text-gray-200">
                    <Phone className="w-5 h-5 text-[#3CDFFF] mt-1 flex-shrink-0" />
                    <a href="tel:+919353713349" className="hover:text-[#3CDFFF]">
                      +91 9353713349
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.5}>
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-[#0a0d1a] rounded-xl shadow-lg p-8 border border-[#1a1f35]">
              <h3 className="text-2xl font-bold mb-4 text-white">Join Our Community</h3>
              <p className="text-gray-300 mb-8">
                Connect with us on social media and join our community for updates and discussions.
              </p>

              <div className="space-y-4">
                <a
                  href="https://chat.whatsapp.com/IkJl88t1dpP49tqbePdl1h"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-[#128C7E]/20 rounded-lg hover:bg-[#128C7E]/30 transition-colors"
                >
                  <div className="w-12 h-12 bg-[#128C7E] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                      <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                      <path d="M9 14a5 5 0 0 0 6 0" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">WhatsApp Community</h4>
                    <p className="text-gray-300">Join our Techfinity Student hub and drop your queries there!</p>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/techfinity_citnc/profilecard/?igsh=MTBieHo3enYxYTM4Ng=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-[#E1306C]/20 rounded-lg hover:bg-[#E1306C]/30 transition-colors"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-[#405DE6] via-[#E1306C] to-[#FFDC80] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Instagram</h4>
                    <p className="text-gray-300">Follow us on Instagram for updates and highlights</p>
                  </div>
                </a>

                <a
                  href="https://www.youtube.com/@Kiran_Tech_121"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-[#FF0000]/20 rounded-lg hover:bg-[#FF0000]/30 transition-colors"
                >
                  <div className="w-12 h-12 bg-[#FF0000] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                      <path d="m10 15 5-3-5-3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">YouTube</h4>
                    <p className="text-gray-300">Subscribe to our channel for tech tutorials and updates</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
