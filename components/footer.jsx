export default function Footer() {
  return (
    <footer className="bg-[#1a1f35]/80 backdrop-blur-sm text-white py-12 border-t border-[#131729] relative z-10">
      <div className="container mx-auto px-4">
        {/* Logos Row - Horizontal Layout */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-10 pb-8 border-b border-[#131729]">
          {/* CITNC Logo */}
          <div className="w-48 h-32">
            <img
              src="/images/CITNC_white-02.png"
              alt="Cambridge Institute of Technology North Campus Logo"
              className="w-full h-full object-contain"
            />
          </div>
          {/* IIC Logo */}
          <div className="w-48 h-32">
            <img
              src="/images/logo_IIC.jpg"
              alt="Institution's Innovation Council Logo"
              className="w-full h-full object-contain bg-white rounded-lg p-2"
            />
          </div>
          {/* Techfinity Logo */}
          <div className="w-48 h-32">
            <img
              src="/images/techfinity-full-logo.png"
              alt="Techfinity Logo"
              className="w-full h-full object-contain"
            />
          </div>
           
        </div>

        {/* Information Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-[#3CDFFF] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-[#3CDFFF] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#theme" className="text-gray-300 hover:text-[#3CDFFF] transition-colors">
                  Themes
                </a>
              </li>
              <li>
                <a href="#registration" className="text-gray-300 hover:text-[#3CDFFF] transition-colors">
                  Registration
                </a>
              </li>
              <li>
                <a href="#judging" className="text-gray-300 hover:text-[#3CDFFF] transition-colors">
                  Judging
                </a>
              </li>
              <li>
                <a href="#awards" className="text-gray-300 hover:text-[#3CDFFF] transition-colors">
                  Awards
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-300 hover:text-[#3CDFFF] transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-[#3CDFFF] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-[#3CDFFF] transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#3CDFFF] transition-colors">
                  Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#3CDFFF] transition-colors">
                  Past Events
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#3CDFFF] transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#3CDFFF] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#3CDFFF] transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Connect With Us</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://chat.whatsapp.com/IkJl88t1dpP49tqbePdl1h"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#3CDFFF] transition-colors flex items-center"
                >
                  <span className="bg-green-600 w-4 h-4 rounded-full inline-block mr-2"></span>
                  WhatsApp Community
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/techfinity_citnc/profilecard/?igsh=MTBieHo3enYxYTM4Ng=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#3CDFFF] transition-colors flex items-center"
                >
                  <span className="bg-gradient-to-r from-pink-500 to-purple-500 w-4 h-4 rounded-full inline-block mr-2"></span>
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="mailto:kirangv757@gmail.com"
                  className="text-gray-300 hover:text-[#3CDFFF] transition-colors flex items-center"
                >
                  <span className="bg-blue-600 w-4 h-4 rounded-full inline-block mr-2"></span>
                  Email Us
                </a>
              </li>
              <li>
                <a
                  href="tel:+919353713349"
                  className="text-gray-300 hover:text-[#3CDFFF] transition-colors flex items-center"
                >
                  <span className="bg-cyan-600 w-4 h-4 rounded-full inline-block mr-2"></span>
                  Call Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#131729] flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Ideathon. All rights reserved.</p>

          <div className="mt-4 md:mt-0">
            <a
              href="https://www.youtube.com/@Kiran_Tech_121"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center group"
            >
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
                className="text-red-500 mr-2 group-hover:animate-pulse"
              >
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                <path d="m10 15 5-3-5-3z" />
              </svg>
              <span className="text-red-400 group-hover:text-red-300 transition-colors font-medium">
                Subscribe to our <span className="font-bold">Youngstar</span> YouTube channel for more tech content!
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
