import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import './App.css';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div className="main-content">
      <Navbar />
      <ThemeToggle />
      <Header />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}
export default App;
