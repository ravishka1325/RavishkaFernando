"use client"

import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import "../styles/Home.css"
import icon from '../assets/images/icon.jpg'

const Home = () => {
  const headingRef = useRef(null)
  const subHeadingRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    // Apply animation classes immediately
    const heading = headingRef.current
    const subHeading = subHeadingRef.current
    const cta = ctaRef.current

    if (heading) heading.classList.add("animate")
    if (subHeading) subHeading.classList.add("animate")
    if (cta) cta.classList.add("animate")
  }, [])

  return (
    <section className="home">
      <div className="home-content animate">
        <h1 ref={headingRef} className="animate">
          <span className="greeting">Hello, I'm a</span>
          <span className="name">Full Stack Developer</span>
        </h1>
        <p ref={subHeadingRef} className="tagline animate">
          Building scalable web applications with React.js, Node.js, Express.js, and MongoDB
        </p>
        <div ref={ctaRef} className="cta-buttons animate">
          <Link to="/projects" className="cta-button primary">
            View My Work
          </Link>
          <Link to="/contact" className="cta-button secondary">
            Contact Me
          </Link>
        </div>
      </div>
      <div className="home-image">
        <div className="image-container">
          <img src={icon} alt="Developer" />
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  )
}

export default Home

