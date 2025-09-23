// src/components/Contact.jsx
import React from "react";

const Contact = () => {
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
              Got a project in mind or just want to say hi? Let’s turn your
              vision into code.
            </p>

            <div className="contact-info">
              {[
                {
                  icon: "fa-map-marker-alt",
                  label: "Location",
                  value: "India, Karnataka:587315",
                },
                {
                  icon: "fa-envelope",
                  label: "Email",
                  value: "rehan.learnig@gmail.com",
                },
                {
                  icon: "fa-user-graduate",
                  label: "Education",
                  value: "Polytechnic College Mudhol",
                },
                {
                  icon: "fa-phone",
                  label: "Mobile",
                  value: "+91 6362197300",
                },
                {
                  icon: "fa-globe-africa",
                  label: "Languages",
                  value: "English, Kannada, Hindi",
                },
              ].map((item, index) => (
                <div className="contact-item" key={index}>
                  <div className="icon">
                    <i className={`fas ${item.icon}`}></i>
                    <span>{item.label}</span>
                  </div>
                  <p>: {item.value}</p>
                </div>
              ))}
            </div>

            <div className="contact-icons">
              <div className="contact-icon">
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://github.com/RihanMujawar"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://www.instagram.com/sudo_rehan/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="right-contact">
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              action="/thanks"  // optional thank you page
              className="contact-form"
            >
              {/* ✅ Netlify hidden input */}
              <input type="hidden" name="form-name" value="contact" />

              <div className="input-control i-c-2">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email"
                />
              </div>
              <div className="input-control">
                <textarea
                  name="message"
                  rows="8"
                  placeholder="Message Here..."
                  required
                ></textarea>
              </div>
              <div className="submit-btn">
                <button type="submit" className="main-btn">
                  <span className="btn-text">Submit</span>
                  <span className="btn-icon">
                    <i className="fas fa-paper-plane"></i>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
