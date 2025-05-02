// src/components/Navbar.jsx
import React, { useState } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", icon: "fas fa-home" },
    { id: "about", icon: "fas fa-user" },
    { id: "portfolio", icon: "fas fa-briefcase" },
    { id: "contact", icon: "fas fa-envelope-open" }
  ];

  const handleNavigation = (id) => {
    setActiveSection(id);
    const sections = document.querySelectorAll('.container');
    sections.forEach((section) => {
      section.classList.remove("active");
    });
    document.getElementById(id)?.classList.add("active");
  };

  return (
    <div className="controls">
      {navItems.map((item) => (
        <div
          key={item.id}
          className={`control ${activeSection === item.id ? 'active-btn' : ''}`}
          data-id={item.id}
          onClick={() => handleNavigation(item.id)}
        >
          <i className={item.icon}></i>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
