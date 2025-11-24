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
            I'm Rehan Mujawar, a Full Stack Developer and Cybersecurity Enthusiast. 
            I work with JavaScript, React, Node.js, and MongoDB to build clean, responsive applications,
            while applying security best practices to keep them reliable and safe. 
            I enjoy creating smooth user experiences and exploring security tools and techniques 
            that help me build stronger, more resilient digital solutions.
           </p>
        </div>
        <div className="right-about">
          {[
            { number: '100+', label: 'mini Projects' },
            { number: '2+', label: 'Years of Experience' },
            { number: '7', label: 'Real world Projects' },
            { number: '5+', label: 'live hosted Projects' }
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
            { skill: 'Bootstrap', percent: '85%', className: 'bootstrap' },
            { skill: 'JavaScript', percent: '61%', className: 'js' },
            { skill: 'ReactJS', percent: '69%', className: 'react' },
            { skill: 'Python', percent: '77%', className: 'python' },
            { skill: 'Java', percent: '55%', className: 'java' },
            { skill: 'MySQL', percent: '66%', className: 'mysql' },
            { skill: 'AWS Services', percent: '87%', className: 'aws' },
            { skill: 'NodeJS', percent: '72%', className: 'node' },
            { skill: 'MongoDB', percent: '84%', className: 'mongodb' },
            // Cybersecurity Skills
            { skill: 'Linux Security Tools', percent: '82%', className: 'linuxsec' },
            { skill: 'Nmap', percent: '78%', className: 'nmap' },
            { skill: 'Burp Suite', percent: '74%', className: 'burp' },
            { skill: 'Wireshark', percent: '71%', className: 'wireshark' },
            { skill: 'OSINT Tools', percent: '80%', className: 'osint' },
            // Networking & Security Engineering
            { skill: 'Computer Networking', percent: '76%', className: 'networking' },
            { skill: 'Penetration Testing Fundamentals', percent: '73%', className: 'pentest' },
            { skill: 'Network Analysis', percent: '70%', className: 'netanalysis' },
            { skill: 'Reverse Engineering Basics', percent: '62%', className: 'reverse' },
            { skill: 'Vulnerability Assessment', percent: '75%', className: 'vuln' }
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
      title: 'Cybersecurity analysis',
      provider: 'TATA',
      year: '2025',
      img: '/cert/cyber.jpeg'
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
