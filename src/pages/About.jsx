"use client"

import { useEffect, useRef } from "react"
import SkillBar from "../components/SkillBar"
import "../styles/About.css"
import icon from '../assets/images/icon.jpg'

const About = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    const sections = document.querySelectorAll(".about-section")
    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [])

  const skills = [
    { name: "HTML", percentage: 95 },
    { name: "CSS", percentage: 90 },
    { name: "JavaScript", percentage: 90 },
    { name: "React.js", percentage: 85 },
    { name: "React Native", percentage: 80 },
    { name: "TypeScript", percentage: 75 },
    { name: "Node.js", percentage: 85 },
    { name: "Express.js", percentage: 85 },
    { name: "MongoDB", percentage: 80 },
    { name: "PHP", percentage: 70 },
    { name: "Bootstrap", percentage: 85 },
    { name: "GitHub", percentage: 80 },
    { name: "Figma", percentage: 75 },
  ]

  return (
    <div className="about-page">
      <div className="about-header">
        <h1>About Me</h1>
        <div className="underline"></div>
      </div>

      <div className="about-container">
        <div className="about-section" ref={sectionRef}>
          <div className="about-image">
            <img src={icon} alt="Profile" />
          </div>
          <div className="about-content">
            <h2>Who I Am</h2>
            <p>
              I'm a Full-stack developer with hands-on experience in developing web applications using React.js,
              Node.js, Express.js, and MongoDB. Skilled in building scalable web applications with role-based
              authentication and real-time features. Proficient in front-end and back-end technologies, including
              JavaScript, PHP, and Flutter.
            </p>
            <p>
              Passionate about solving complex problems through innovative, user-centric approaches. Currently pursuing
              a Bachelor of Science in Software Engineering at Plymouth University, where I've completed the first two
              years and am currently enrolled in the second semester of the final year.
            </p>
            <div className="about-details">
              <div className="detail-item">
                <span className="detail-label">Name:</span>
                <span className="detail-value">Full Stack Developer</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Email:</span>
                <span className="detail-value">ravishka.1325@gmail.com</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Education:</span>
                <span className="detail-value">BSc in Software Engineering</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Location:</span>
                <span className="detail-value">Sri Lanka</span>
              </div>
            </div>
            <a href="/assets/Pdf/RavishkaFernando.pdf" download className="download-cv">
              Download CV
            </a>
          </div>
        </div>

        <div className="about-section skills-section">
          <h2>My Skills</h2>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <SkillBar key={index} skill={skill.name} percentage={skill.percentage} />
            ))}
          </div>
        </div>

        <div className="about-section education-section">
          <h2>Education</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Bachelor of Science (Hon) in Software Engineering</h3>
                <p className="timeline-institution">Plymouth University - United Kingdom</p>
                <p className="timeline-period">April 2022 - continuing</p>
                <p>Completed the first two years and currently enrolled in the second semester of the final year.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>General Certificate of Education</h3>
                <p className="timeline-institution">St. Sebastian's College - Moratuwa</p>
                <p className="timeline-period">2018 & 2021/2022</p>
                <p>Completed both Ordinary level and Advanced level with Passes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

