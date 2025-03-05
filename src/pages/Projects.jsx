"use client"

import { useState, useEffect } from "react"
import ProjectCard from "../components/ProjectCard"
import "../styles/Projects.css"
import splashImage from "../assets/images/splashImage.png"
import makuburaImage from "../assets/images/Makubura.jpg"
import GoAppoint from "../assets/images/GoAppoint.png"
import Hostel from "../assets/images/Hostel.png"
import GreenSuperMarket from "../assets/images/logo.png"
import CINEX from "../assets/images/CINEX.png"

const Projects = () => {
  const [filter, setFilter] = useState("all")
  const [projects, setProjects] = useState([])
  const [filteredProjects, setFilteredProjects] = useState([])

  useEffect(() => {
    // Projects data from your CV
    const projectsData = [
      {
        id: 1,
        title: "GoAppoint - Online Appointment System",
        description: "An online appointment scheduling system designed for efficient bookings and time management.",
        image: GoAppoint,
        technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
        category: "web",
        github: "https://github.com/yourusername/AppPoint",
        demo: "https://apppoint-demo.example.com",
        features: [
          "Developed using React.js, Node.js, Express.js, MongoDB.",
          "Implemented role-based authentication and real-time notifications.",
          "Integrated a user-friendly interface with a responsive design.",
        ],
      },
      {
        id: 2,
        title: "SriRide - Highway Bus Reservation Platform",
        description: "Online highway bus reservation platform designed for efficient bookings and time management.",
        image: makuburaImage,
        technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "React Native"],
        category: "web",
        github: "https://github.com/yourusername/SriRide",
        features: [
          "Developed using React.js, Node.js, Express.js, MongoDB and React Native.",
          "Implemented role-based authentication and real-time notifications.",
          "Integrated a user-friendly interface with a responsive design.",
        ],
      },
      {
        id: 3,
        title: "Green Super Market",
        description: "E-commerce platform for grocery shopping with secure transactions and user-friendly navigation.",
        image: GreenSuperMarket,
        technologies: ["React.js", "Bootstrap", "Node.js", "MongoDB"],
        category: "web",
        github: "https://github.com/yourusername/GreenSuperMarket",
        features: [
          "Built with React.js, Bootstrap, Node.js, and MongoDB.",
          "Developed a secure cart and checkout system with order tracking.",
          "Integrated search and filtering functionalities for an enhanced user experience.",
        ],
      },
      {
        id: 4,
        title: "Hostel Rental Project",
        description:
          "An online platform for hostel rentals with integrated location services and user-friendly navigation.",
        image: Hostel,
        technologies: ["PHP", "JavaScript", "MySQL", "HTML", "CSS", "Bootstrap", "Google Map API"],
        category: "web",
        github: "https://github.com/yourusername/HostelRental",
        features: [
          "Built with PHP, JavaScript, MySQL, HTML, CSS, Bootstrap, and Google Map API.",
          "Developed a comprehensive system that allows users to browse hostels, view locations via Google Maps, and make bookings seamlessly.",
          "Collaborated within a group to implement robust backend features and a responsive front-end interface.",
        ],
      },
      {
        id: 5,
        title: "Cimex - Cinema Booking System",
        description: "A complete front-end for a cinema booking system with PayPal payment integration.",
        image: CINEX,
        technologies: ["React.js", "HTML", "CSS", "Bootstrap"],
        category: "web",
        github: "https://github.com/yourusername/Cimex",
        features: [
          "Built with React.js, HTML, CSS, Bootstrap.",
          "Implemented a user-friendly booking interface and integrated real-time ticket availability.",
          "Enabled PayPal payment processing for secure transactions.",
        ],
      },
      {
        id: 6,
        title: "Fitness Nexus Mobile App",
        description:
          "A fitness app for gym enthusiasts where the users can see their fitness goals based on their age and gender groups.",
        image: splashImage,
        technologies: ["React Native", "Flutter"],
        category: "mobile",
        github: "https://github.com/ravishka1323/Fitness-Nexus-Project-dev",
        features: [
          "Utilized Flutter framework for the development of the mobile application.",
          "Implemented animations and backend handles using JavaScript.",
        ],
      },
    ]

    setProjects(projectsData)
    setFilteredProjects(projectsData)
  }, [])

  useEffect(() => {
    if (filter === "all") {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter((project) => project.category === filter))
    }
  }, [filter, projects])

  return (
    <div className="projects-page">
      <div className="projects-header">
        <h1>My Projects</h1>
        <div className="underline"></div>
      </div>

      <div className="filter-buttons">
        <button className={`filter-button ${filter === "all" ? "active" : ""}`} onClick={() => setFilter("all")}>
          All
        </button>
        <button className={`filter-button ${filter === "web" ? "active" : ""}`} onClick={() => setFilter("web")}>
          Web
        </button>
        <button className={`filter-button ${filter === "mobile" ? "active" : ""}`} onClick={() => setFilter("mobile")}>
          Mobile
        </button>
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

export default Projects

