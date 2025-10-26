
import React from 'react';

const projects = [
  {
    title: "Portfolio Website",
    tech: "React, CSS",
    image: "img/port1.png",
    github: "https://github.com/RihanMujawar/my-portfolio/tree/main",
    live: "https://rehan07.netlify.app/",
    desc: "Personal portfolio showcasing projects and skills with live demos.",
  },
  {
    title: "Easywith Me",
    image: "img/phase7.png",
    tech: "HTML,CSS,JS",
    github: "https://github.com/RihanMujawar/easywithme",
    live: "https://easywithme.netlify.app/",
    desc: "Responsive landing site built with vanilla HTML, CSS and JavaScript.",
  },
  {
    title: "pop works site",
    image: "img/phase6.png",
    tech: "HTML,CSS,JS",
    github: "https://github.com/RihanMujawar",
    live: "https://gypsum1.netlify.app/",
    desc: "Business website with clean UI and mobile-first layout.",
  },
  {
    title: "College website",
    tech: "HTML/CSS/JS",
    image: "img/pro1.png",
    github: "https://github.com/RihanMujawar/College-website-frontend",
    desc: "Frontend for a college site featuring sections like courses and contact.",
  },
  {
    title: "My AI 007",
    image: "img/port3.png",
    tech: "React, CSS,gemini API",
    github: "https://github.com/RihanMujawar/AI007/",
    live: "https://myai007.netlify.app/",
    desc: "AI chat app powered by Gemini API with a simple React UI.",
  },
  {
    title: "AI Persnol Assistant",
    image: "img/port4.png",
    tech: "python,gemini API",
    github: "https://github.com/RihanMujawar/personal-AI-assistant",
    live: "https://github.com/RihanMujawar/personal-AI-assistant",
    desc: "Voice-enabled personal assistant built in Python using Gemini APIs.",
  },
    {
    title: "Realtime cloud game",
    image: "img/port5.png",
    tech: "HTML,CSS,JS,Firebase",
    github: "https://github.com/RihanMujawar/Flythebird",
    live: "https://flythebird.netlify.app/",
    desc: "Real-time bird game storing scores in Firebase with vanilla JS.",
  },
  {
    title: "Coude based voting",
    image: "projects/voting.png",
    tech: "React,firestore DB",
    github: "https://github.com/RihanMujawar/cloude-projrct",
    live: "https://onlainvoting.netlify.app/",
    desc: "Code-based online voting built with React and Firestore database.",
  },

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
            {project.desc && (
              <p className="project-desc">{project.desc}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
