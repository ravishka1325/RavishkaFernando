"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import "../styles/Navbar.css"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <Link to="/" className="logo">
          <span className="logo-text">Ravishka Fernando</span>
        </Link>

        <div className={`menu-toggle ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <ul>
            <li className={location.pathname === "/" ? "active" : ""}>
              <Link to="/">Home</Link>
            </li>
            <li className={location.pathname === "/about" ? "active" : ""}>
              <Link to="/about">About</Link>
            </li>
            <li className={location.pathname === "/projects" ? "active" : ""}>
              <Link to="/projects">Projects</Link>
            </li>
            <li className={location.pathname === "/contact" ? "active" : ""}>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar

