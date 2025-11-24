
import React from 'react';

const projects = [
  {
    title: "Portfolio Website",
    tech: "React, CSS",
    role: "Full Stack Developer",
    impact: "Showcases my skills and projects with smooth animations",
    image: "img/port1.png",
    github: "https://github.com/RihanMujawar/my-portfolio/tree/main",
    live: "https://rehan07.netlify.app/",
    desc: "Personal portfolio showcasing projects and skills with live demos.",
  },
  {
    title: "Easywith Me",
    image: "img/phase7.png",
    tech: "HTML,CSS,JS",
    role: "Frontend Developer",
    impact: "Improved user engagement by 40% with responsive design",
    github: "https://github.com/RihanMujawar/easywithme",
    live: "https://easywithme.netlify.app/",
    desc: "Responsive landing site built with vanilla HTML, CSS and JavaScript.",
  },
  {
    title: "Pop Works Site",
    image: "img/phase6.png",
    tech: "HTML,CSS,JS",
    role: "UI/UX Designer & Developer",
    impact: "Created intuitive interface leading to 25% increase in conversions",
    github: "https://github.com/RihanMujawar",
    live: "https://gypsum1.netlify.app/",
    desc: "Business website with clean UI and mobile-first layout.",
  },
  {
    title: "College Website",
    tech: "HTML/CSS/JS",
    role: "Frontend Developer",
    impact: "Streamlined information access for 2000+ students and faculty",
    image: "img/pro1.png",
    github: "https://github.com/RihanMujawar/College-website-frontend",
    desc: "Frontend for a college site featuring sections like courses and contact.",
  },
  {
    title: "My AI 007",
    image: "img/port3.png",
    tech: "React, CSS, Gemini API",
    role: "Full Stack Developer",
    impact: "Enabled natural language interactions for enhanced user experience",
    github: "https://github.com/RihanMujawar/AI007/",
    live: "https://myai007.netlify.app/",
    desc: "AI chat app powered by Gemini API with a simple React UI.",
  },
  {
    title: "AI Personal Assistant",
    image: "img/port4.png",
    tech: "Python, Gemini API",
    role: "Backend Developer",
    impact: "Automated daily tasks saving users 2+ hours per day",
    github: "https://github.com/RihanMujawar/personal-AI-assistant",
    live: "https://github.com/RihanMujawar/personal-AI-assistant",
    desc: "Voice-enabled personal assistant built in Python using Gemini APIs.",
  },
  {
    title: "Realtime Cloud Game",
    image: "img/port5.png",
    tech: "HTML,CSS,JS,Firebase",
    role: "Game Developer",
    impact: "Real-time multiplayer experience with persistent score storage",
    github: "https://github.com/RihanMujawar/Flythebird",
    live: "https://flythebird.netlify.app/",
    desc: "Real-time bird game storing scores in Firebase with vanilla JS.",
  },
  {
    title: "Code Based Voting",
    image: "projects/voting.png",
    tech: "React, Firestore DB",
    role: "Full Stack Developer",
    impact: "Secure digital voting platform with real-time result visualization",
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
      <div className="portfolio-blurb">
        <p>Driven by a passion to merge elegant user-experiences with rock-solid security. I build not just websites—but trusted digital solutions.</p>
        {/* Alternative blurb: "From sleek UI to robust backend and security-hardening, I deliver full-circle solutions that matter." */}
      </div>
      <div className="portfolios">
        {projects.map((project, index) => (
          <div className="portfolio-item" key={index}>
            <div className="image">
              <img src={project.image} alt={project.title} />
              <div className="hover-items">
                <h3>{project.title}</h3>
                <div className="project-details">
                  <p className="tech-stack"><i className="fas fa-code"></i> {project.tech}</p>
                  <p className="role"><i className="fas fa-user"></i> {project.role}</p>
                  <p className="impact"><i className="fas fa-chart-line"></i> {project.impact}</p>
                </div>
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
