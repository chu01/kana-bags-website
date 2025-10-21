'use client'
import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header>
      <div className="container header-container">
        <a href="#" className="logo">Kana<span>Bags</span> LLC</a>
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