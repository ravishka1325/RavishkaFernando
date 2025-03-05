"use client"

import { useRef, useEffect } from "react"
import "../styles/ProjectCard.css"

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null)

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

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [])

  // Function to check if the image is a placeholder
  const isPlaceholder = (src) => {
    return typeof src === "string" && src.includes("placeholder")
  }

  return (
    <div className="project-card" ref={cardRef}>
      <div className="project-image">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          style={{
            // Apply different styles based on whether it's a placeholder or real image
            objectFit: isPlaceholder(project.image) ? "cover" : "contain",
            padding: isPlaceholder(project.image) ? "0" : "10px",
          }}
        />
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tech">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
        <div className="project-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link github">
              GitHub
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link demo">
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard

