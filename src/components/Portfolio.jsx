// src/components/Portfolio.jsx
import React from 'react';

const projects = [
  {
    title: "Portfolio Website",
    tech: "React, CSS",
    image: "img/port1.png",
    github: "https://github.com/demo-user/portfolio",
    live: "https://portfolio-demo.vercel.app",
  },
  {
    title: "College website",
    image: "img/port2.jpg",
    github: "https://github.com/demo-user/weather-app",
    live: "https://weather-demo.netlify.app",
  },
  {
    title: "To-Do List",
    image: "img/port3.jpg",
    github: "https://github.com/demo-user/todo-app",
    live: "https://todo-demo.vercel.app",
  },
  {
    title: "Blog CMS",
    image: "img/port4.jpg",
    github: "https://github.com/demo-user/blog-cms",
    live: "https://blog-demo.netlify.app",
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
