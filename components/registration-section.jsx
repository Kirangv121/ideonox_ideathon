"use client"

import {
  Calendar,
  Users,
  Clock,
  ExternalLink,
  MapPin,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  FileDown,
  FileIcon as FilePresentation,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ScrollReveal from "./scroll-reveal"

export default function RegistrationSection() {
  const handleRegisterClick = () => {
    // Updated Google Form URL
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSfDG7j-nuZkMWgD3d8AONa0JdDoBtnI5J9lRB4a9-eKiTvXfA/viewform?usp=dialog",
      "_blank",
    )
  }

  const handleDownloadPPT = () => {
    // Open the Google Drive folder in a new tab
    window.open("https://drive.google.com/drive/folders/1308fEbJyFqlH0rrU8g5_HijXhr-H0v4e?usp=sharing", "_blank")
  }

  const rules = [
    "Each team must consist of 2 to 3 participants.",
    "Participants must be current students of Cambridge Institute of Technology North Campus.",
    "Each team must nominate one team lead who will serve as the point of contact.",
    "A participant is allowed to be part of only one team.",
    "Teams must present original ideas. Any form of plagiarism or submission of previously developed projects will result in disqualification.",
    "Teams will be allotted 7 minutes for their final presentation, followed by 3 minutes Q&A by the panel.",
    "The decision of the judging panel will be final and binding.",
    "Each team must select only one domain for their idea presentation.",
  ]

  return (
    <section id="registration" className="py-20 relative z-10 overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
            <span className="text-[#3CDFFF]">Register</span> Now
          </h2>

          <p className="text-gray-200 text-center max-w-2xl mx-auto mb-12">
            Don't miss this opportunity to showcase your innovative ideas and win exciting prizes.
          </p>
        </ScrollReveal>

        {/* Registration Status Banner */}
        <ScrollReveal delay={0.2}>
          <div className="max-w-md mx-auto mb-10 bg-green-900/30 border border-green-500 rounded-lg p-3 flex items-center justify-center">
            <div className="flex items-center space-x-3">
              <span className="text-green-400 font-bold text-lg">Registration Open</span>
              <ArrowRight className="h-5 w-5 text-green-400 animate-bounce-x" />
            </div>
          </div>
        </ScrollReveal>

        {/* Rules and Guidelines Card */}
        <ScrollReveal delay={0.3}>
          <div className="mb-12 max-w-4xl mx-auto">
            <Card className="border-l-4 border-l-[#3CDFFF] shadow-lg bg-[#1a1f35]/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <AlertCircle className="w-6 h-6 text-[#3CDFFF] mr-2" />
                  <h3 className="text-xl font-bold text-white">Important Instructions</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Please read the following instructions carefully before registering for IDEONOX:
                </p>
                <ul className="space-y-3">
                  {rules.map((rule, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-[#3CDFFF] mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">{rule}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ScrollReveal direction="left" delay={0.4}>
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Calendar className="w-6 h-6 text-[#3CDFFF] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white">Event Details</h4>
                    <p className="text-gray-300">
                      <span className="font-medium">Name:</span> Ideonox
                    </p>
                    <p className="text-gray-300">
                      <span className="font-medium">Organized by:</span> Cambridge Institute of Technology North Campus,
                      Innovation Club
                    </p>
                    <p className="text-gray-300">
                      <span className="font-medium">Date:</span> 16-05-2025
                    </p>
                    <div className="bg-red-900/50 border border-red-500 rounded-md px-3 py-2 mt-4 mb-4 flex items-center animate-pulse">
                      <AlertCircle className="w-5 h-5 text-red-400 mr-2 flex-shrink-0" />
                      <p className="text-red-400 font-bold">Registration Deadline: 10-05-2025 11:59 PM</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="w-6 h-6 text-[#3CDFFF] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white">Venue</h4>
                    <p className="text-gray-300">Seminar Hall, Cambridge Institute of Technology North Campus</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-[#3CDFFF] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white">Team Size</h4>
                    <p className="text-gray-300">2-3 members per team</p>
                    <p className="text-gray-300">
                      <span className="font-medium">Target Participants:</span> All departments of CITNC
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-6 h-6 text-[#3CDFFF] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white">Event Duration</h4>
                    <p className="text-gray-300">The Ideathon will be a full-day event.</p>
                    <p className="text-gray-300">
                      <span className="font-medium">Presentation:</span> 7 minutes + 3 minutes Q&A
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#1a1f35]/80 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-white">How Registration Works</h3>
                <ol className="list-decimal list-inside space-y-2">
                  <li className="text-gray-200 font-bold">Scan the QR code or click the registration button</li>
                  <li className="text-gray-200 font-bold">Fill out the Google Form with your team details</li>
                  <li className="text-gray-200 font-bold">Your information will be automatically stored</li>
                </ol>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.5}>
            <div className="space-y-8">
              <Card className="shadow-lg border-none bg-[#1a1f35]/80 backdrop-blur-sm">
                <CardContent className="p-6 flex flex-col items-center">
                  <h3 className="text-xl font-bold mb-6 text-white">Scan to Register</h3>

                  <div className="bg-[#131729]/80 backdrop-blur-sm p-4 rounded-lg shadow-md mb-6">
                    {/* Updated QR Code Image */}
                    <img src="/registration-qr-code.png" alt="Registration QR Code" className="w-64 h-64" />
                  </div>

                  <p className="text-gray-300 text-center mb-6">
                    Scan this QR code with your phone camera to access the registration form, or click the button below.
                  </p>

                  <Button
                    onClick={handleRegisterClick}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white flex items-center justify-center gap-2"
                  >
                    Register Now <ExternalLink className="w-4 h-4" />
                  </Button>

                  <p className="text-sm text-gray-400 mt-4 text-center">
                    Your registration data will be securely stored in our Google Sheet database.
                  </p>
                </CardContent>
              </Card>

              {/* Download PPT Section */}
              <Card className="shadow-lg border-none bg-[#1a1f35]/80 backdrop-blur-sm">
                <CardContent className="p-6 flex flex-col items-center">
                  <h3 className="text-xl font-bold mb-4 text-white">Download Presentation Template</h3>

                  <div className="bg-[#131729]/80 backdrop-blur-sm p-6 rounded-lg shadow-md mb-6 w-full flex flex-col items-center justify-center">
                    <FilePresentation className="w-16 h-16 text-[#3CDFFF] mb-4" />
                    <div className="text-center">
                      <p className="text-white font-medium mb-2">Presentation Guidelines:</p>
                      <ul className="text-gray-300 text-sm space-y-1 list-disc list-inside">
                        <li>Use this template for your final presentation</li>
                        <li>
                          Maximum <span className="text-[#3CDFFF] font-bold">6 slides</span> allowed
                        </li>
                        <li>Keep content concise and focused</li>
                      </ul>
                    </div>
                  </div>

                  <p className="text-gray-300 text-center mb-6">
                    Download the official presentation template to prepare your idea pitch for the Ideathon.
                  </p>

                  <Button
                    onClick={handleDownloadPPT}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white flex items-center justify-center gap-2"
                  >
                    Download PPT Template <FileDown className="w-4 h-4" />
                  </Button>

                  <div className="mt-4 bg-blue-900/30 border border-blue-500/50 rounded-md p-3">
                    <p className="text-sm text-blue-300 text-center">
                      <span className="font-bold">Important:</span> Use this template for your presentation and limit to
                      a maximum of 6 slides.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-x {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(5px);
          }
        }
        
        .animate-bounce-x {
          animation: bounce-x 1.5s infinite;
        }
      `}</style>
    </section>
  )
}
