'use client'
import { useState } from 'react'
import Image from 'next/image' // 1. Import the Next.js Image component

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header>
      <div className="container header-container">
        {/* 2. Wrap the logo image in your link */}
        <a href="#" className="logo" style={{ display: 'flex', alignItems: 'center' }}>
          <Image 
            src="/kanabags-logo.png"          // 3. Make sure your file is named logo.png in the /public folder
            alt="Kanabags LLC Logo" 
            width={180}              // 4. Adjust width to fit your design
            height={100}              // 5. Adjust height to maintain aspect ratio
            priority                 // 6. This tells Next.js to load the logo immediately
            style={{ objectFit: 'contain' }}
          />
          {/* Optional: If you still want the text logo next to the image, keep this line. 
              If the image HAS the text, delete the line below. */}
          {/* <span style={{ marginLeft: '10px' }}>Kana<span>Bags</span> LLC</span> */}
        </a>

        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className="fas fa-bars"></i>
        </button>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
          <li><a href="#products" onClick={() => setIsMenuOpen(false)}>Products</a></li>
          <li><a href="#environment" onClick={() => setIsMenuOpen(false)}>Environment</a></li>
          <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
        </ul>
      </div>
    </header>
  )
}

export default Header