import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ThemeSection from "@/components/theme-section"
import RegistrationSection from "@/components/registration-section"
import JudgingSection from "@/components/judging-section"
import AwardsSection from "@/components/awards-section"
import GallerySection from "@/components/gallery-section"
import OrganizersSection from "@/components/organizers-section"
import FAQSection from "@/components/faq-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import VisibilityHelper from "@/components/visibility-helper"
import NetworkBackground from "@/components/network-background"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0d1a]">
      <NetworkBackground />
      <VisibilityHelper />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ThemeSection />
      <RegistrationSection />
      <JudgingSection />
      <AwardsSection />
      <GallerySection />
      <OrganizersSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
