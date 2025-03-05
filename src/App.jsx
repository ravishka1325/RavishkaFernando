"use client"

import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"
import Cursor from "./components/Cursor"
import "./App.css"

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Reduce loading time to ensure content appears quickly
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <Router basename="/ravishkafernando">
      {loading ? (
        <div className="loader">
          <div className="loader-content">
            <div className="loader-circle"></div>
            <h2>Loading...</h2>
          </div>
        </div>
      ) : (
        <>
          <Cursor />
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </>
      )}
    </Router>
  )
}

export default App