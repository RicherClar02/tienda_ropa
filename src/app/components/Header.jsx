'use client'
import Link from 'next/link'
import { useState } from 'react'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <Link href="/">PGMONK</Link>
        </div>
        
        {/* Menú de navegación */}
        <nav className={`navigation ${isMenuOpen ? 'nav-open' : ''}`}>
          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          <ul className="nav-menu">
            <li><Link href="/hombre" className="nav-link">Hombre</Link></li>
            <li><Link href="/mujer" className="nav-link">Mujer</Link></li>
            <li><Link href="/objects" className="nav-link">Objects</Link></li>
            <li><Link href="/journal" className="nav-link">Journal</Link></li>
          </ul>
        </nav>
        
        {/* Iconos de usuario */}
        <div className="user-actions">
          <Link href="/login" className="login-link">
            Login
          </Link>
          <Link href="/help" className="help-link">
            Help
          </Link>
          <Link href="/contact" className="contact-link">
            Contact us
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header