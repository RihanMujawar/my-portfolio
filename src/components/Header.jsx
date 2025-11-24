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
            I build modern, secure and scalable web applications.
            My work blends clean UI development with strong security practices to ensure safe, high-performance digital experiences.

            I work with technologies like HTML, CSS, JavaScript, React, Node.js and MongoDB — along with security tools like Nmap, Burp Suite, Wireshark and OSINT techniques.
            I enjoy creating systems that not only look good and run smoothly, but also stay protected in real-world conditions.
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
