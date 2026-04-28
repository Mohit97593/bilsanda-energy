import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaBuilding } from 'react-icons/fa';
import './Location.css';

const branches = [
  {
    type: 'Head Office',
    city: 'New Delhi',
    icon: <FaBuilding />,
    address: '12th Floor, Tower B, DLF Cybercity, Sector 24, Gurugram, New Delhi - 122002',
    phone: '+91 11 4500 7890',
    email: 'delhi@bilsanda.com',
    timing: 'Mon–Sat: 9:00 AM – 6:30 PM',
    color: '#00D4FF',
    mapQuery: 'DLF+Cybercity+Gurugram',
  },
  {
    type: 'Manufacturing Plant',
    city: 'Haridwar, Uttarakhand',
    icon: <FaBuilding />,
    address: 'Plot No. 45, Industrial Area Phase-2, Haridwar, Uttarakhand - 249403',
    phone: '+91 1334 270 456',
    email: 'plant@bilsanda.com',
    timing: 'Mon–Sat: 8:00 AM – 5:00 PM',
    color: '#00FF88',
    mapQuery: 'Industrial+Area+Phase+2+Haridwar',
    isMain: true,
  },
  {
    type: 'R&D Center',
    city: 'Bangalore',
    icon: <FaBuilding />,
    address: 'No. 34, Electronic City Phase 1, Hosur Road, Bangalore - 560100',
    phone: '+91 80 6780 1234',
    email: 'rd@bilsanda.com',
    timing: 'Mon–Fri: 9:00 AM – 7:00 PM',
    color: '#AA88FF',
    mapQuery: 'Electronic+City+Bangalore',
  },
  {
    type: 'Distribution Hub',
    city: 'Mumbai',
    icon: <FaBuilding />,
    address: 'Unit 7, Bhiwandi Logistics Park, NH-3, Bhiwandi, Mumbai - 421302',
    phone: '+91 22 6123 4567',
    email: 'mumbai@bilsanda.com',
    timing: 'Mon–Sat: 8:30 AM – 5:30 PM',
    color: '#FFB800',
    mapQuery: 'Bhiwandi+Logistics+Park+Mumbai',
  },
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
          <p className="section-subtitle">
            Pan-India presence with our state-of-the-art manufacturing plant in Haridwar
            and offices across major cities.
          </p>
        </div>

        {/* Main Map */}
        <div className="map-container" data-aos="fade-up">
          <div className="map-label">
            <FaMapMarkerAlt className="map-label-icon" />
            <div>
              <strong>Main Factory — Bilsanda, Uttar Pradesh</strong>
              <span>Bilsanda, Uttar Pradesh - 262202, India</span>
            </div>
          </div>
          <div className="map-frame">
            <iframe
              title="Bilsanda Energy Factory Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14059.513824895692!2d79.94016429691533!3d28.24136856760952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399f86450550fb1b%3A0x30f57e5be33dc539!2sBilsanda%2C%20Uttar%20Pradesh%20262202!5e0!3m2!1sen!2sin!4v1777390825235!5m2!1sen!2sin"
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
        <h3 className="branches-title" data-aos="fade-up">All Office Locations</h3>
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
