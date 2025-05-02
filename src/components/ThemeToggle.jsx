// src/components/ThemeToggle.jsx
import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('light-mode', isLightMode);
  }, [isLightMode]);

  return (
    <div
      className="theme-btn"
      onClick={() => setIsLightMode(prev => !prev)}
      title="Toggle Theme"
    >
      <i className="fas fa-adjust"></i>
    </div>
  );
};

export default ThemeToggle;
