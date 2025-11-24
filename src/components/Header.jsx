// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="container header active" id="home">
      <div className="header-content">
        <div className="left-header">
          <div className="h-shape"></div>
          <div className="security-icons">
            <i className="fas fa-shield-alt"></i>
            <i className="fas fa-lock"></i>
            <i className="fas fa-code"></i>
          </div>
          <div className="image">
            <img src="cert/hero.png" alt="hero" />
          </div>
        </div>
        <div className="right-header">
          <h1 className="name">
            Hi, I'm <span>Rehan Mujawar.</span>
          </h1>
          <div className="animated-text">
            <span className="role">Full Stack Developer</span>
            <span className="role">Cybersecurity Enthusiast</span>
            <span className="role">UI/UX Designer</span>
          </div>
          <p>
            I build elegant digital solutions that combine stunning user experiences with rock-solid security.
            From sleek frontends to secure backends, I deliver full-circle solutions that matter.
          </p>
          <div className="btn-con">
            <a href="/rehan-CV.pdf" download className="main-btn">
              <span className="btn-text">Download CV</span>
              <span className="btn-icon"><i className="fas fa-download"></i></span>
            </a>
            <a href="#contact" className="main-btn hire-me">
              <span className="btn-text">Hire Me</span>
              <span className="btn-icon"><i className="fas fa-paper-plane"></i></span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
