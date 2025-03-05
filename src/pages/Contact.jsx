"use client"

import { useState, useRef } from "react"
import { FaGithub, FaLinkedin, FaTwitter, FaMapMarkerAlt, FaEnvelope, FaPhone, FaCheckCircle } from "react-icons/fa"
import "../styles/Contact.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [formErrors, setFormErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const formRef = useRef(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const validate = () => {
    const errors = {}

    if (!formData.name.trim()) {
      errors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid"
    }

    if (!formData.subject.trim()) {
      errors.subject = "Subject is required"
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required"
    }

    return errors
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const errors = validate()
    setFormErrors(errors)

    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true)

      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false)
        setSubmitSuccess(true)
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })

        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false)
        }, 5000)
      }, 2000)
    }
  }

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Get In Touch</h1>
        <div className="underline"></div>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>Feel free to reach out to me for any inquiries or collaboration opportunities.</p>

          <div className="info-item">
            <FaMapMarkerAlt size={22} />
            <div>
              <h3>Location</h3>
              <p>Sri Lanka</p>
            </div>
          </div>

          <div className="info-item">
            <FaEnvelope size={22} />
            <div>
              <h3>Email</h3>
              <p>ravishka.1325@gmail.com</p>
            </div>
          </div>

          <div className="info-item">
            <FaPhone size={22} />
            <div>
              <h3>Phone</h3>
              <p>+94 74 323 4857</p>
            </div>
          </div>

          <div className="social-links">
            <a href="https://github.com./ravishka1325" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaGithub size={22} />
            </a>
            <a href="https://www.linkedin.com/in/ravishka13" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaLinkedin size={22} />
            </a>
            <a href="https://x.com/ravishka_13?s=21" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaTwitter size={22} />
            </a>
          </div>
        </div>

        <div className="contact-form-container">
          {submitSuccess ? (
            <div className="success-message">
              <FaCheckCircle size={60} className="success-icon" />
              <h3>Message Sent Successfully!</h3>
              <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
            </div>
          ) : (
            <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={formErrors.name ? "error" : ""}
                />
                {formErrors.name && <span className="error-message">{formErrors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={formErrors.email ? "error" : ""}
                />
                {formErrors.email && <span className="error-message">{formErrors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={formErrors.subject ? "error" : ""}
                />
                {formErrors.subject && <span className="error-message">{formErrors.subject}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={formErrors.message ? "error" : ""}
                ></textarea>
                {formErrors.message && <span className="error-message">{formErrors.message}</span>}
              </div>

              <button type="submit" className="submit-button" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default Contact

