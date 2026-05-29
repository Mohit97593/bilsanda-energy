import React from 'react';
import { FaBolt, FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            {/* Brand */}
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="footer-logo-icon"><FaBolt /></div>
                <div className="footer-logo-text">
                  <span className="fl-main">FUSION ENERGY</span>
                  <span className="fl-sub">ENERGY</span>
                </div>
              </div>
              <p className="footer-tagline">
                Powering the Future with Advanced Lithium Technology.
                India's premier lithium battery manufacturer — trusted by 500+ clients across 25+ states.
              </p>
              <div className="footer-socials">
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter"><FaTwitter /></a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube"><FaYoutube /></a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-col">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links">
                {[
                  { label: 'Home', id: '#home' },
                  { label: 'About Batteries', id: '#about' },
                  { label: 'Products', id: '#products' },
                  { label: 'Manufacturing', id: '#manufacturing' },
                  { label: 'Why Choose Us', id: '#why-us' },
                  { label: 'Locations', id: '#location' },
                  { label: 'Contact', id: '#contact' },
                ].map((link) => (
                  <li key={link.id}>
                    <a href={link.id} onClick={(e) => { e.preventDefault(); scrollTo(link.id); }}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div className="footer-col">
              <h4 className="footer-heading">Products</h4>
              <ul className="footer-links">
                <li><a href="#products">EV Battery Pack 48V</a></li>
                <li><a href="#products">EV Battery Pack 72V</a></li>
                <li><a href="#products">EV Battery Pack 72V</a></li>
                <li><a href="#products">Solar Storage Batteries</a></li>
                <li><a href="#products">Industrial Batteries</a></li>
                <li><a href="#products">Consumer Electronics</a></li>
                <li><a href="#contact">Custom Battery Design</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-col">
              <h4 className="footer-heading">Contact Info</h4>
              <div className="footer-contact-items">
                <div className="fci">
                  <FaMapMarkerAlt />
                  <span>Near by Bank of Baroda, Bisalpur Road Bilsanda, Dist. Pilibhit - 262202</span>
                </div>
                <div className="fci">
                  <FaPhone />
                  <a href="tel:+911334270456">+91 9917771801</a>
                </div>
                <div className="fci">
                  <FaEnvelope />
                  <a href="mailto:info@fusionenergy.com">rajat0909@gmail.com</a>
                </div>
              </div>
              <div className="footer-cert-chips">
                <span className="fchip">ISO 9001</span>
                <span className="fchip">BIS Approved</span>
                <span className="fchip">UN38.3</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>© 2026 Fusion Energy Pvt. Ltd. All rights reserved.</p>
            {/* <div className="footer-bottom-links">
              <a href="#home">Privacy Policy</a>
              <a href="#home">Terms of Service</a>
              <a href="#home">Sitemap</a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
