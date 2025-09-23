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
            Hi, I'm <span>Rehan mujawar.</span> A Full Stack Developer.
          </h1>
          <p>
            I am a Full Stack Developer with a strong interest in building websites and web applications. 
            I have learned technologies like HTML, CSS, JavaScript, React, Node.js, MongoDB and etc . 
            I love to create beautiful, functional and user-friendly websites. 
          </p>
          <div className="btn-con">
          <a href="/MY_CV.png" download className="main-btn">
            <span className="btn-text">Download Resume</span>
            <span className="btn-icon"><i className="fas fa-download"></i></span>
          </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
