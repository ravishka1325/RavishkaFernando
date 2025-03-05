"use client"

import { useEffect, useState } from "react"
import "../styles/Cursor.css"

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hidden, setHidden] = useState(false)
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove)
      document.addEventListener("mouseenter", onMouseEnter)
      document.addEventListener("mouseleave", onMouseLeave)
      document.addEventListener("mousedown", onMouseDown)
      document.addEventListener("mouseup", onMouseUp)
    }

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mouseenter", onMouseEnter)
      document.removeEventListener("mouseleave", onMouseLeave)
      document.removeEventListener("mousedown", onMouseDown)
      document.removeEventListener("mouseup", onMouseUp)
    }

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const onMouseEnter = () => {
      setHidden(false)
    }

    const onMouseLeave = () => {
      setHidden(true)
    }

    const onMouseDown = () => {
      setClicked(true)
    }

    const onMouseUp = () => {
      setClicked(false)
    }

    const handleLinkHoverEvents = () => {
      document.querySelectorAll("a, button, .project-card").forEach((el) => {
        el.addEventListener("mouseenter", () => setLinkHovered(true))
        el.addEventListener("mouseleave", () => setLinkHovered(false))
      })
    }

    addEventListeners()
    handleLinkHoverEvents()
    return () => removeEventListeners()
  }, [])

  const cursorClasses = `cursor ${hidden ? "hidden" : ""} ${clicked ? "clicked" : ""} ${linkHovered ? "link-hovered" : ""}`

  return (
    <>
      <div className={cursorClasses} style={{ left: `${position.x}px`, top: `${position.y}px` }} />
      <div
        className={`cursor-follower ${hidden ? "hidden" : ""} ${clicked ? "clicked" : ""} ${linkHovered ? "link-hovered" : ""}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
    </>
  )
}

export default Cursor

