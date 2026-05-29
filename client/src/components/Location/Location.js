import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaBuilding } from 'react-icons/fa';
import './Location.css';

const branches = [
  {
    type: 'Main Factory',
    city: 'Bilsanda, Uttar Pradesh',
    icon: <FaBuilding />,
    address: 'Near by Bank of Baroda, Bisalpur Road Bilsanda, Dist. Pilibhit - 262202',
    phone: '+91 9917771801',
    email: 'rajat0909@gmail.com',
    timing: 'Mon–Sat: 9:00 AM – 6:00 PM',
    color: '#00FF88',
    mapQuery: 'Bilsanda+Pilibhit',
    isMain: true,
  }
];

const Location = () => {
  return (
    <section id="location" className="section location-section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <div className="section-badge">
            <FaMapMarkerAlt /> Our Locations
          </div>
          <h2 className="section-title">Factory & <span>Branch Locations</span></h2>
          {/* <p className="section-subtitle">
            Pan-India presence with our state-of-the-art manufacturing plant in Haridwar
            and offices across major cities.
          </p> */}
        </div>

        {/* Main Map */}
        <div className="map-container" data-aos="fade-up">
          <div className="map-label">
            <FaMapMarkerAlt className="map-label-icon" />
            <div>
              <strong>Main Factory — Bilsanda, Uttar Pradesh</strong>
              <span>Near by Bank of Baroda, Bisalpur Road, Pilibhit - 262202, India</span>
            </div>
          </div>
          <div className="map-frame">
            <iframe
              title="Fusion Energy Factory Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14059.513824895692!2d79.94016429691533!3d28.24136856760952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399f86450550fb1b%3A0x30f57e5be33dc539!2sFusion Energy%2C%20Uttar%20Pradesh%20262202!5e0!3m2!1sen!2sin!4v1777390825235!5m2!1sen!2sin"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Branch Cards */}
        <h3 className="branches-title" data-aos="fade-up">Office Location</h3>
        <div className="branches-grid" data-aos="fade-up">
          {branches.map((branch, i) => (
            <div
              key={i}
              className={`branch-card card ${branch.isMain ? 'main-branch' : ''}`}
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              {branch.isMain && <div className="main-badge">Main Plant</div>}
              <div className="branch-header">
                <div className="branch-icon" style={{ color: branch.color, background: `${branch.color}18` }}>
                  {branch.icon}
                </div>
                <div>
                  <div className="branch-type" style={{ color: branch.color }}>{branch.type}</div>
                  <h3 className="branch-city">{branch.city}</h3>
                </div>
              </div>
              <div className="branch-details">
                <div className="branch-detail">
                  <FaMapMarkerAlt className="detail-icon" style={{ color: branch.color }} />
                  <span>{branch.address}</span>
                </div>
                <div className="branch-detail">
                  <FaPhone className="detail-icon" style={{ color: branch.color }} />
                  <a href={`tel:${branch.phone}`}>{branch.phone}</a>
                </div>
                <div className="branch-detail">
                  <FaEnvelope className="detail-icon" style={{ color: branch.color }} />
                  <a href={`mailto:${branch.email}`}>{branch.email}</a>
                </div>
                <div className="branch-detail">
                  <FaClock className="detail-icon" style={{ color: branch.color }} />
                  <span>{branch.timing}</span>
                </div>
              </div>
              <a
                href={`https://maps.google.com?q=${branch.mapQuery}`}
                target="_blank"
                rel="noreferrer"
                className="branch-map-btn"
                style={{ borderColor: branch.color, color: branch.color }}
              >
                <FaMapMarkerAlt /> View on Map
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Location;
