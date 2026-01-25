'use client'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Products from '@/components/Products'
import Environmental from '@/components/Environmental'
import Values from '@/components/Values'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ProcurementForm from '@/components/ProcurementForm'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Products />
      <ProcurementForm />
      <Environmental />
      <Values />
      <Contact />
      <Footer />
    </main>
  )
}