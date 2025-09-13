// src/components/Contact.jsx
import React, { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

const response = await fetch("https://formspree.io/f/xgvkobgy", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: form.name.value,
    email: form.email.value,
    message: form.message.value,
  }),
});


    if (response.ok) {
      setStatus('SUCCESS');
      form.reset();
    } else {
      setStatus('ERROR');
    }
  };

  return (
    <section className="container contact" id="contact">
      <div className="contact-container">
        <div className="main-title">
          <h2>Contact <span>Me</span><span className="bg-text">Contact</span></h2>
        </div>
        <div className="contact-content-con">
          {/* Left Side */}
          <div className="left-contact">
            <h4>Contact me here</h4>
            <p>
            “Got a project in mind or just want to say hi? Let’s turn your vision into code.”
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <div className="icon"><i className="fas fa-map-marker-alt"></i><span>Location</span></div>
                <p>: India ,Karnataka ,Terdal:587315</p>
              </div>
              <div className="contact-item">
                <div className="icon"><i className="fas fa-envelope"></i><span>Email</span></div>
                <p>: rehan.learnig@gmail.com</p>
              </div>
              <div className="contact-item">
                <div className="icon"><i className="fas fa-user-graduate"></i><span>Education</span></div>
                <p>: polytecnic college Mudhol</p>
              </div>
              <div className="contact-item">
                <div className="icon"><i className="fas fa-phone"></i><span>Mobile</span></div>
                <p>: +91 6362197300</p>
              </div>
              <div className="contact-item">
                <div className="icon"><i className="fas fa-globe-africa"></i><span>Languages</span></div>
                <p>: English ,Kannada ,Hindi</p>
              </div>
            </div>
            <div className="contact-icons">
              <div className="contact-icon">
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://github.com/RihanMujawar" target="_blank" rel="noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://www.instagram.com/r_k_thunder_007/" target="_blank" rel="noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="right-contact">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="input-control i-c-2">
                <input type="text" name="name" required placeholder="YOUR NAME" />
                <input type="email" name="email" required placeholder="YOUR EMAIL" />
              </div>
              <div className="input-control">
                <textarea name="message" rows="8" placeholder="Message Here..." required></textarea>
              </div>
              <div className="submit-btn">
                <button type="submit" className="main-btn">
                  <span className="btn-text">Submit</span>
                  <span className="btn-icon"><i className="fas fa-paper-plane"></i></span>
                </button>
              </div>
              {/* ✅ Status message */}
              {status === 'SUCCESS' && (
                <p style={{ color: 'limegreen', marginTop: '1rem' }}>
                  Message Submited successfully!
                </p>
              )}
              {status === 'ERROR' && (
                <p style={{ color: 'red', marginTop: '1rem' }}>
                  Oops! Something went wrong.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
