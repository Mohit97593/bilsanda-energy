import React from 'react';
import { FaStar, FaShieldAlt, FaCertificate, FaHeadset, FaChartLine, FaBolt, FaTrophy } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';
import './WhyChooseUs.css';

const stats = [
  { num: '10+', label: 'Years Experience', icon: <FaTrophy />, color: '#FFB800' },
  { num: '50K+', label: 'Batteries Sold', icon: <FaBolt />, color: '#00D4FF' },
  { num: '99.9%', label: 'Quality Rate', icon: <FaStar />, color: '#00FF88' },
  { num: '24/7', label: 'Customer Support', icon: <FaHeadset />, color: '#FF6B6B' },
];

const features = [
  {
    icon: <FaCertificate />,
    title: 'ISO 9001:2015 Certified',
    desc: 'Our manufacturing facility is ISO certified, ensuring consistent quality management systems across all production stages.',
    color: '#FFB800',
  },
  {
    icon: <MdVerified />,
    title: 'BIS Approved Products',
    desc: 'All products carry Bureau of Indian Standards (BIS) certification, guaranteeing compliance with Indian safety standards.',
    color: '#00D4FF',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Export Quality Standards',
    desc: 'Our batteries meet international export standards including UN38.3, CE, RoHS, and IEC 62133 certifications.',
    color: '#00FF88',
  },
  {
    icon: <FaChartLine />,
    title: 'R&D Driven Innovation',
    desc: 'Dedicated R&D center in Bangalore with 50+ engineers working on next-generation battery chemistry and BMS technology.',
    color: '#AA88FF',
  },
  {
    icon: <FaHeadset />,
    title: '24/7 Technical Support',
    desc: 'Round-the-clock technical assistance from our expert engineers for installation, maintenance, and troubleshooting.',
    color: '#FF6B6B',
  },
  {
    icon: <FaBolt />,
    title: 'Custom Battery Design',
    desc: 'Bespoke battery pack design services — from prototype to mass production with your exact voltage, capacity, and form factor.',
    color: '#00AAFF',
  },
];

const certifications = [
  'ISO 9001:2015', 'BIS Certified', 'UN38.3', 'CE Mark',
  'RoHS Compliant', 'IEC 62133', 'MSME Registered', 'Make in India',
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="section why-section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <div className="section-badge">
            <FaStar /> Why Choose Us
          </div>
          <h2 className="section-title">India's Most Trusted <span>Lithium Battery</span> Brand</h2>
          <p className="section-subtitle">
            Backed by decades of expertise, world-class manufacturing, and an unwavering
            commitment to quality — Fusion Energy is your reliable energy partner.
          </p>
        </div>

        {/* Stats */}
        <div className="stats-grid" data-aos="fade-up">
          {stats.map((stat, i) => (
            <div key={i} className="stat-card" data-aos="zoom-in" data-aos-delay={i * 100}>
              <div className="stat-icon" style={{ color: stat.color, background: `${stat.color}18` }}>
                {stat.icon}
              </div>
              <div className="stat-number" style={{ color: stat.color }}>{stat.num}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-glow" style={{ background: stat.color }}></div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="features-grid grid-3" style={{ marginTop: '64px' }}>
          {features.map((feat, i) => (
            <div key={i} className="feature-card card" data-aos="fade-up" data-aos-delay={i * 80}>
              <div className="feat-icon-wrap" style={{ color: feat.color, background: `${feat.color}18`, borderColor: `${feat.color}30` }}>
                {feat.icon}
              </div>
              <h3 className="feat-title">{feat.title}</h3>
              <p className="feat-desc">{feat.desc}</p>
              <div className="feat-bar" style={{ background: feat.color }}></div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="certs-section" data-aos="fade-up">
          <h3 className="certs-title">Our Certifications & Accreditations</h3>
          <div className="certs-grid">
            {certifications.map((cert, i) => (
              <div key={i} className="cert-chip" data-aos="zoom-in" data-aos-delay={i * 60}>
                <MdVerified className="cert-check" />
                {cert}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
