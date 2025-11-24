// src/components/Contact.jsx
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');
    setLoading(true);

    const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_jqs2fdg';
    const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_86oy7yi';
    const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'yE7ZA2HRy_JFZ7ZKU';

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setStatus('SUCCESS');
      formRef.current.reset();
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('ERROR');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="container contact" id="contact">
      <div className="contact-container">
        <div className="main-title">
          <h2>
            Contact <span>Me</span>
            <span className="bg-text">Contact</span>
          </h2>
        </div>
        <div className="contact-content-con">
          {/* Left Side */}
          <div className="left-contact">
            <h4>Contact me here</h4>
            <p>
              Got a project in mind or just want to say hi? Let’s turn your vision into code.
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <div className="icon"><i className="fas fa-map-marker-alt"></i><span>Location</span></div>
                <p>: India , Karnataka , Terdal:587315</p>
              </div>
              <div className="contact-item">
                <div className="icon"><i className="fas fa-envelope"></i><span>Email</span></div>
                <p>: rehan.learning@hotmail.com</p>
              </div>
              <div className="contact-item">
                <div className="icon"><i className="fas fa-user-graduate"></i><span>Education</span></div>
                <p>: Polytechnic College Mudhol</p>
              </div>
              <div className="contact-item">
                <div className="icon"><i className="fas fa-phone"></i><span>Mobile</span></div>
                <p>: +91 6362197300</p>
              </div>
              <div className="contact-item">
                <div className="icon"><i className="fas fa-globe-africa"></i><span>Languages</span></div>
                <p>: English , Kannada , Hindi</p>
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
                <a href="https://www.instagram.com/sudo_rehan/" target="_blank" rel="noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/rehan-i-mujawar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="right-contact">
            <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
              <div className="input-control i-c-2">
                <input type="text" name="name" required placeholder="Your Name" />
                <input type="email" name="email" required placeholder="Your Email" />
              </div>
              <div className="input-control">
                <textarea name="message" rows="8" placeholder="Message Here..." required></textarea>
              </div>
              <div className="submit-btn">
                <button type="submit" className="main-btn" disabled={loading}>
                  <span className="btn-text">{loading ? "Sending..." : "Submit"}</span>
                  <span className="btn-icon"><i className="fas fa-paper-plane"></i></span>
                </button>
              </div>
              {/* ✅ Status message */}
              {status === 'SUCCESS' && (
                <p style={{ color: 'limegreen', marginTop: '1rem' }}>
                  Message sent successfully!
                </p>
              )}
              {status === 'ERROR' && (
                <p style={{ color: 'red', marginTop: '1rem' }}>
                  ❌ Oops! Something went wrong, try again later.
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
