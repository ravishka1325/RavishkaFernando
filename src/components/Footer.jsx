import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa"
import "../styles/Footer.css"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Let's Connect</h3>
            <div className="social-links">
              <a href="https://github.com./ravishka1325" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/ravishka13" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedin size={20} />
              </a>
              <a href="https://x.com/ravishka_13?s=21" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaTwitter size={20} />
              </a>
              <a href="mailto:ravishka.1325@gmail.com" className="social-link">
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h3>Navigation</h3>
            <ul className="footer-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/projects">Projects</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Portfolio. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

