// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="container header active" id="home">
      <div className="header-content">
        <div className="left-header">
          <div className="h-shape"></div>
          <div className="image">
            <img src="cert/hero.png" alt="hero" />
          </div>
        </div>
        <div className="right-header">
          <h1 className="name">
            Hi, I'm <span>Rehan mujawar.</span> Full Stack Developer & Cybersecurity Enthusiast.
          </h1>
          <p>
            I develop modern, secure, 
            and scalable web applications with a strong focus on performance and user experience, 
            combining clean UI work with solid security practices. My technical stack includes HTML, CSS, 
            JavaScript, React, Node.js, and MongoDB, along with experience using security tools such as Nmap,
            Burp Suite, Wireshark, and OSINT methods. I also explore networking,
            penetration-testing fundamentals, and basic reverse-engineering concepts, 
            which helps me create systems that are efficient, polished, and resilient against real-world security challenges.
            and resilient against real-world security challenges.
          </p>
          <div className="btn-con">
          <a href="/rehan-CV.pdf" download className="main-btn">
            <span className="btn-text">Download CV</span>
            <span className="btn-icon"><i className="fas fa-download"></i></span>
          </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
