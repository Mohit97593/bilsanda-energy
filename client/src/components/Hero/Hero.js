import React, { useEffect, useRef } from 'react';
import { FaChevronDown, FaBolt, FaShieldAlt, FaLeaf } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const particlesRef = useRef(null);

  useEffect(() => {
    // Create floating particles
    const container = particlesRef.current;
    if (!container) return;
    for (let i = 0; i < 40; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.cssText = `
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        width: ${Math.random() * 4 + 2}px;
        height: ${Math.random() * 4 + 2}px;
        animation-delay: ${Math.random() * 6}s;
        animation-duration: ${Math.random() * 4 + 4}s;
        opacity: ${Math.random() * 0.7 + 0.1};
      `;
      container.appendChild(particle);
    }
    return () => {
      while (container.firstChild) container.removeChild(container.firstChild);
    };
  }, []);

  const handleScroll = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      {/* Animated Background */}
      <div className="hero-bg">
        <div className="hero-grid"></div>
        <div className="hero-glow hero-glow-1"></div>
        <div className="hero-glow hero-glow-2"></div>
        <div className="particles" ref={particlesRef}></div>
      </div>

      {/* Battery Animation */}
      <div className="battery-visual">
        <div className="battery-outer">
          <div className="battery-tip"></div>
          <div className="battery-body">
            <div className="battery-fill">
              <div className="battery-level"></div>
              <div className="battery-bolt"><FaBolt /></div>
            </div>
            {[...Array(4)].map((_, i) => (
              <div key={i} className="battery-cell" style={{ animationDelay: `${i * 0.3}s` }}></div>
            ))}
          </div>
        </div>
        {/* Orbiting ring */}
        <div className="orbit-ring"></div>
        <div className="orbit-ring orbit-ring-2"></div>
      </div>

      {/* Content */}
      <div className="hero-content">
        <div className="hero-badge" data-aos="fade-down">
          <span className="badge-dot"></span>
          ISO Certified · BIS Approved · Export Quality
        </div>

        <h1 className="hero-title" data-aos="fade-up" data-aos-delay="100">
          Powering the Future<br />
          with <span className="hero-highlight">Advanced Lithium</span><br />
          Technology
        </h1>

        <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="200">
          India's leading lithium battery manufacturer delivering cutting-edge energy solutions for
          EVs, solar storage, industrial, and consumer applications. Built for performance. Engineered for longevity.
        </p>

        <div className="hero-stats" data-aos="fade-up" data-aos-delay="300">
          <div className="hero-stat">
            <span className="stat-num">10+</span>
            <span className="stat-label">Years Exp.</span>
          </div>
          <div className="hero-stat-divider"></div>
          <div className="hero-stat">
            <span className="stat-num">50K+</span>
            <span className="stat-label">Batteries</span>
          </div>
          <div className="hero-stat-divider"></div>
          <div className="hero-stat">
            <span className="stat-num">99.9%</span>
            <span className="stat-label">Quality Rate</span>
          </div>
        </div>

        <div className="hero-buttons" data-aos="fade-up" data-aos-delay="400">
          <button className="btn btn-primary" onClick={() => handleScroll('#products')}>
            <FaBolt /> Explore Products
          </button>
          <button className="btn btn-outline" onClick={() => handleScroll('#contact')}>
            Contact Us
          </button>
        </div>

        <div className="hero-features" data-aos="fade-up" data-aos-delay="500">
          <div className="hero-feature">
            <FaBolt className="feature-icon" /> Fast Charging
          </div>
          <div className="hero-feature">
            <FaShieldAlt className="feature-icon" /> Long Cycle Life
          </div>
          <div className="hero-feature">
            <FaLeaf className="feature-icon" /> Eco-Friendly
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button className="scroll-indicator" onClick={() => handleScroll('#about')}>
        <FaChevronDown />
      </button>
    </section>
  );
};

export default Hero;
