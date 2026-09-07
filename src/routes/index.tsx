import { createFileRoute } from '@tanstack/react-router'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { ThreatStats } from '@/components/ThreatStats'
import { Features } from '@/components/Features'
import { HowItWorks } from '@/components/HowItWorks'
import { Trust } from '@/components/Trust'
import { Pricing } from '@/components/Pricing'
import { Faq } from '@/components/Faq'
import { ContactSection } from '@/components/ContactSection'
import { Footer } from '@/components/Footer'

export const Route = createFileRoute('/')({
  component: LandingPage,
})

function LandingPage() {
  return (
    <div className="bg-scanlines min-h-screen">
      <Header />
      <main>
        <Hero />
        <ThreatStats />
        <Features />
        <HowItWorks />
        <Trust />
        <Pricing />
        <Faq />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
