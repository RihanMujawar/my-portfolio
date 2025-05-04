// src/components/Portfolio.jsx
import React from 'react';

const projects = [
  {
    title: "Portfolio Website",
    tech: "React, CSS",
    image: "img/port1.png",
    github: "https://github.com/rehanmujawarofficial/my-portfolio/tree/main",
    live: "https://rehan07.netlify.app/",
  },
  {
    title: "College website",
    tech: "HTML/CSS/JS",
    image: "img/por1.png",
    github: "https://github.com/rehanmujawarofficial/College-website-frontend",
  },
  {
    title: "Atendance Management System",
    image: "img/port3.jpg",
    tech: "coming soon",
    github: "",
    live: "",
  },
  {
    title: "AI Persnol Assistant",
    image: "img/port4.jpg",
    tech: "coming soon",
    github: "",
    live: "",
  }
];

const Portfolio = () => {
  return (
    <section className="container" id="portfolio">
      <div className="main-title">
        <h2>
          My <span>Projects</span>
          <span className="bg-text">Portfolio</span>
        </h2>
      </div>
      <p className="port-text">
        Some of my work with GitHub & Live demo links.
      </p>
      <div className="portfolios">
        {projects.map((project, index) => (
          <div className="portfolio-item" key={index}>
            <div className="image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="hover-items">
              <h3>{project.title}</h3>
              <p>{project.tech}</p>
              <div className="icons">
                <a
                  href={project.github}
                  className="icon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href={project.live}
                  className="icon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
