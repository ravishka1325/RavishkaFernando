"use client"

import { useEffect, useRef } from "react"
import "../styles/SkillBar.css"

const SkillBar = ({ skill, percentage }) => {
  const progressRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (progressRef.current) {
              progressRef.current.style.width = `${percentage}%`
              progressRef.current.classList.add("animate")
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    if (progressRef.current) {
      observer.observe(progressRef.current.parentElement)
    }

    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current.parentElement)
      }
    }
  }, [percentage])

  return (
    <div className="skill-bar">
      <div className="skill-info">
        <span className="skill-name">{skill}</span>
        <span className="skill-percentage">{percentage}%</span>
      </div>
      <div className="skill-progress">
        <div className="skill-progress-bar" ref={progressRef}></div>
      </div>
    </div>
  )
}

export default SkillBar

