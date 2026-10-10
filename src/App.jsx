import { useState } from 'react'
import BookingForm from './components/BookingForm'
import Corporate from './components/Corporate'
import Destinations from './components/Destinations'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import Footer from './components/Footer'
import Founders from './components/Founders'
import Header from './components/Header'
import Hero from './components/Hero'
import Included from './components/Included'
import Intro from './components/Intro'
import SafariSpotlight from './components/SafariSpotlight'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Tours from './components/Tours'

export default function App() {
  const [selectedTour, setSelectedTour] = useState(null)

  const handleTourRequest = (tour) => {
    setSelectedTour(tour)
    const el = document.getElementById('contacto')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-cream font-sans text-ink antialiased">
      <Header />
      <main id="main-content">
        <Hero />
        <Intro />
        <Destinations />
        <Tours onRequest={handleTourRequest} />
        <SafariSpotlight />
        <Services />
        <Included />
        <Corporate />
        <Founders />
        <BookingForm
          selectedTour={selectedTour}
          onClearTour={() => setSelectedTour(null)}
        />
        <Testimonials />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
