// src/components/About.jsx
import React from 'react';

const About = () => {
  return (
    <section className="container about" id="about">
      <div className="main-title">
        <h2>About <span>me</span><span className="bg-text">my stats</span></h2>
      </div>
      <div className="about-container">
        <div className="left-about">
          <h4>Information About me</h4>
          <p>
          I'm Rehan Mujawar,
          a passionate Full Stack Developer 
          skilled in HTML, CSS, JavaScript, React, Node.js, MongoDB and etc, 
          creating functional, beautiful websites with a focus on user experience.
          </p>
        </div>
        <div className="right-about">
          {[
            { number: '100+', label: 'mini Projects' },
            { number: '2+', label: 'Years of Experience' },
            { number: '5', label: 'Real world Projects' },
            { number: '2', label: 'live hosted Projects' }
          ].map((item, index) => (
            <div className="about-item" key={index}>
              <div className="abt-text">
                <p className="large-text">{item.number}</p>
                <p className="small-text">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div className="about-stats">
        <h4 className="stat-title">My Skills</h4>
        <div className="progress-bars">
          {[
            { skill: 'HTML', percent: '75%', className: 'html' },
            { skill: 'CSS', percent: '80%', className: 'css' },
            { skill: 'Bootstrap', percent: '85%', className: 'bootstrap'},
            { skill: 'JavaScript', percent: '61%', className: 'js' },
            { skill: 'ReactJS', percent: '69%', className: 'react' },
            { skill: 'Python', percent: '77%', className: 'python' },
            { skill: 'Java', percent: '55%', className: 'java' },
            { skill: 'MySQL', percent: '66%', className: 'mysql' },
            { skill: 'AWS services ', percent: '87%', className: 'AWS' },
            { skill: 'NodeJS', percent: '72%', className: 'node' },
            { skill: 'MongoDB', percent: '84%', className: 'mongodb' },
          ].map((item, index) => (
            <div className="progress-bar" key={index}>
              <p className="prog-title">{item.skill}</p>
              <div className="progress-con">
                <p className="prog-text">{item.percent}</p>
                <div className="progress">
                  <span className={item.className}></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    

      {/* Certificates Section */}
<h4 className="stat-title">My Certificates</h4>
<div className="certificates-grid">
  {[
    {
      title: 'Generative AI Mastery Workshop',
      provider: 'OpenAI academy / NXT WAVE',
      year: '2025',
      img: '/cert/openai.png'
    },
    {
      title: 'Innovation Desain Thinking',
      provider: 'IBM',
      year: '2024',
      img: '/cert/ibm.png'
    },
    {
      title: 'React',
      provider: 'Infosys',
      year: '2025',
      img: '/cert/react.png'
    },
    {
      title: 'Java Scrpt',
      provider: 'Infosys',
      year: '2025',
      img: '/cert/js.png'
    },
    {
      title: 'CSS3',
      provider: 'Infosys',
      year: '2025',
      img: '/cert/css.png'
    },
    {
      title: 'HTML5',
      provider: 'Infosys',
      year: '2025',
      img: '/cert/html.png'
    }
  ].map((cert, index) => (
    <div className="certificate-card" key={index}>
      <img src={cert.img} alt={cert.title} />
      <div className="certificate-overlay">
        <h5>{cert.title}</h5>
        <p>{cert.provider}</p>
        <p>{cert.year}</p>
      </div>
    </div>
  ))}
</div>
{/* Education Section */}

      <h4 className="stat-title">My Education</h4>
<div className="timeline">
  {[
    {
      year: '2025 - present',
      degree: 'third year',
      school: 'coming soon'
    },
    {
      year: '2024 - 2025',
      degree: 'Second year',
      school: 'completed with 8.7 CGPA'
    },
    {
      year: '2023 - 2024',
      degree: 'First year',
      school: 'completed with 7.5 CGPA'
    },
    {
      year: '2022 - 2023',
      degree: 'High School',
      school: 'completed with 65%'
    }
  ].map((edu, index) => (
    <div className="timeline-item" key={index}>
      <div className="tl-icon">
        <i className="fas fa-user-graduate"></i>
      </div>
      <p className="tl-duration">{edu.year}</p>
      <p><strong>{edu.degree}</strong></p>
      <p>{edu.school}</p>
    </div>
  ))}
</div>


      {/* Timeline Section */}
      <h4 className="stat-title">My Timeline</h4>
      <div className="timeline">
        {[
          { date: '2022 - present', title: 'Web Developer', place: 'projects', about: 'When i started learning web development in a college i will created a lot of projecs' },
        ].map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="tl-icon">
              <i className="fas fa-briefcase"></i>
            </div>
            <p className="tl-duration">{item.date}</p>
            <h5>{item.title}<span> - {item.place}</span></h5>
            <p>{item.about}</p>
          </div>
        ))}
        {[
          { date: '2022 - present', title: 'Web Developer', place: 'projects', about: 'When i started learning web development in a college i will created a lot of projecs' },
        ].map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="tl-icon">
              <i className="fas fa-briefcase"></i>
            </div>
            <p className="tl-duration">{item.date}</p>
            <h5>{item.title}<span> - {item.place}</span></h5>
            <p>{item.about}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
