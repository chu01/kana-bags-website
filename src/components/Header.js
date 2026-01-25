'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link' 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Helper to close menu on mobile clicks
  const handleNavClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <header>
      <div className="container header-container">
        {/* Changed to Link and pointed to root "/" */}
        <Link href="/" className="logo" style={{ display: 'flex', alignItems: 'center' }}>
          <Image 
            src="/kanabags-logo.png"
            alt="Kanabags LLC Logo" 
            width={180}
            height={100}
            priority
            style={{ objectFit: 'contain' }}
          />
        </Link>

        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className="fas fa-bars"></i>
        </button>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          {/* Using /#ID format ensures these work from internal product pages */}
          <li><Link href="/#home" onClick={handleNavClick}>Home</Link></li>
          <li><Link href="/#about" onClick={handleNavClick}>About</Link></li>
          <li><Link href="/#products" onClick={handleNavClick}>Products</Link></li>
          <li><Link href="/#environment" onClick={handleNavClick}>Environment</Link></li>
          <li><Link href="/#contact" onClick={handleNavClick}>Contact</Link></li>
          {/* Added a highlighted CTA for Procurement - helps catch Starbucks' attention */}
          <li><Link href="/#procurement-form" onClick={handleNavClick} className="btn-nav">Get Quote</Link></li>
        </ul>
      </div>
    </header>
  )
}

export default Header