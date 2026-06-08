import React, { useState } from 'react';
import { FaImages, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Gallery.css';

const galleryItems = [
  {
    id: 1,
    src: '/battery-inverter-48v-200ah.jpg',
    title: 'Inverter Battery — 48V 200Ah',
    desc: 'LiFePO4 Technology · 10,240Wh · 6000+ Cycles',
    tag: 'Inverter Battery',
    tagColor: '#FFB800',
  },
  {
    id: 2,
    src: '/battery-inverter-60v-100ah.jpg',
    title: 'Inverter Battery — 60V 100Ah',
    desc: 'LiFePO4 Technology · 6000Wh · 6000+ Cycles',
    tag: 'Inverter Battery',
    tagColor: '#FFB800',
  },
  {
    id: 3,
    src: '/battery-ev-scooty-60v-30ah.jpg',
    title: 'EV Battery — 60V 30Ah',
    desc: 'For Electric Scooty · Built-in BMS · Fast Charging',
    tag: 'EV Scooty',
    tagColor: '#00D4FF',
  },
  {
    id: 4,
    src: '/battery-erickshaw-48v-105ah.jpg',
    title: 'E-Rickshaw Battery — 48V 105Ah',
    desc: 'SB50 Connector · 3000+ Cycles · BMS Protection',
    tag: 'E-Rickshaw',
    tagColor: '#00AAFF',
  },
  {
    id: 5,
    src: '/battery-erickshaw-60v-72v.jpg',
    title: 'E-Rickshaw Battery — 60V & 72V 105Ah',
    desc: 'High Performance · Balance Cell Protection',
    tag: 'E-Rickshaw',
    tagColor: '#00AAFF',
  },
  {
    id: 6,
    src: '/battery-inverter-12v-100ah.jpg',
    title: 'Inverter Battery — 12V 100Ah',
    desc: 'LiFePO4 · 1200Wh · 6000+ Cycles · Smart BMS',
    tag: 'Inverter Battery',
    tagColor: '#FFB800',
  },
  {
    id: 7,
    src: '/battery-scooty-cabinet.jpg',
    title: 'Scooty Battery Cabinet Series',
    desc: '60V 25Ah / 35Ah / 40Ah · Multiple Sizes',
    tag: 'EV Scooty',
    tagColor: '#00D4FF',
  },
  {
    id: 8,
    src: '/battery-scooty-60v-30ah-frontback.jpg',
    title: 'EV Scooter Battery — 60V 30Ah',
    desc: 'Front & Back View · Made in India · LiFePO4',
    tag: 'EV Scooty',
    tagColor: '#00D4FF',
  },
  {
    id: 9,
    src: '/battery-scooty-box-60v-30ah.jpg',
    title: 'EV Scooty Battery Box — 60V 30Ah',
    desc: 'Packaging · 3000+ Cycles · Built-in BMS',
    tag: 'EV Scooty',
    tagColor: '#00D4FF',
  },
  {
    id: 10,
    src: '/fusion-energy-banner.jpg',
    title: 'Fusion Energy — Brand Banner',
    desc: '72V 105Ah E-Rickshaw Battery · Beyond The View',
    tag: 'Brand',
    tagColor: '#00FF88',
    wide: true,
  },
];

const Gallery = () => {
  const [lightbox, setLightbox] = useState(null); // index

  const open = (i) => setLightbox(i);
  const close = () => setLightbox(null);
  const prev = () => setLightbox((lightbox - 1 + galleryItems.length) % galleryItems.length);
  const next = () => setLightbox((lightbox + 1) % galleryItems.length);

  return (
    <section id="gallery" className="section gallery-section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <div className="section-badge">
            <FaImages /> Product Gallery
          </div>
          <h2 className="section-title">Our <span>Product Showcase</span></h2>
          <p className="section-subtitle">
            Real images of our Fusion Energy lithium batteries — built for EVs, inverters,
            e-rickshaws, and more. Click any image to view full screen.
          </p>
        </div>

        <div className="gallery-grid" data-aos="fade-up">
          {galleryItems.map((item, i) => (
            <div
              key={item.id}
              className={`gallery-item ${item.wide ? 'gallery-item--wide' : ''}`}
              data-aos="zoom-in"
              data-aos-delay={i * 60}
              onClick={() => open(i)}
            >
              <img src={item.src} alt={item.title} loading="lazy" />
              <div className="gallery-overlay">
                <span className="gallery-tag" style={{ background: item.tagColor, color: '#0A1628' }}>
                  {item.tag}
                </span>
                <h4 className="gallery-item-title">{item.title}</h4>
                <p className="gallery-item-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="lightbox" onClick={close}>
          <button className="lb-close" onClick={close}><FaTimes /></button>
          <button className="lb-prev" onClick={(e) => { e.stopPropagation(); prev(); }}><FaChevronLeft /></button>
          <div className="lb-content" onClick={(e) => e.stopPropagation()}>
            <img src={galleryItems[lightbox].src} alt={galleryItems[lightbox].title} />
            <div className="lb-info">
              <span
                className="gallery-tag"
                style={{ background: galleryItems[lightbox].tagColor, color: '#0A1628' }}
              >
                {galleryItems[lightbox].tag}
              </span>
              <h3>{galleryItems[lightbox].title}</h3>
              <p>{galleryItems[lightbox].desc}</p>
            </div>
          </div>
          <button className="lb-next" onClick={(e) => { e.stopPropagation(); next(); }}><FaChevronRight /></button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
