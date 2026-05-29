import React, { useState } from 'react';
import { FaBolt, FaSolarPanel, FaIndustry, FaMobile, FaCheck, FaTh } from 'react-icons/fa';
import './Products.css';

const products = [
  {
    id: 1,
    category: 'EV Battery',
    icon: <FaBolt />,
    name: 'EV Battery Pack — 48V-60V',
    tagline: 'Perfect for E-Bikes & E-Scooters',
    voltage: '48V-60V',
    capacity: '25Ah / 30Ah / 35Ah /40Ah',
    energy: '1.44 kWh – 4.8 kWh',
    chemistry: 'LiFePO4',
    cycles: '2000+',
    weight: '8 – 22 kg',
    features: ['Smart BMS Protection', 'IP67 Waterproof', 'Bluetooth Monitoring', 'Fast Charge Ready'],
    color: '#00D4FF',
    badge: 'Best Seller',
  },
  {
    id: 2,
    category: 'EV Battery',
    icon: <FaBolt />,
    name: 'EV Battery Pack — 72V',
    tagline: 'Ideal for E-Rickshaws & Cargo EVs',
    voltage: '72V',
    capacity: '32Ah / 105Ah',
    energy: '2.88 kWh – 5.76 kWh',
    chemistry: 'LiFePO4',
    cycles: '2000+',
    weight: '18 – 35 kg',
    features: ['CAN Bus Communication', 'Thermal Management', 'Overload Protection', 'Modular Design'],
    color: '#00AAFF',
    badge: 'Popular',
  },
  {
    id: 3,
    category: 'EV Battery',
    icon: <FaBolt />,
    name: 'EV Battery Pack — 72V',
    tagline: 'High-Power for Electric Trucks',
    voltage: '72V',
    capacity: '100Ah / 200Ah',
    energy: '9.6 kWh – 19.2 kWh',
    chemistry: 'NMC',
    cycles: '1500+',
    weight: '40 – 80 kg',
    features: ['Active Balancing BMS', 'Liquid Cooling', 'SOC Display', 'Regenerative Braking'],
    color: '#0066CC',
    badge: 'Industrial',
  },
  {
    id: 4,
    category: 'Solar Battery',
    icon: <FaSolarPanel />,
    name: 'Solar Storage Battery',
    tagline: 'Energy Independence for Homes & Farms',
    voltage: '24V / 48V',
    capacity: '100Ah – 500Ah',
    energy: '2.4 kWh – 24 kWh',
    chemistry: 'LiFePO4',
    cycles: '5000+',
    weight: '20 – 90 kg',
    features: ['10-Year Warranty', 'MPPT Compatible', 'Deep Cycle Ready', 'Wall/Rack Mount'],
    color: '#00FF88',
    badge: 'Eco Choice',
  },
  {
    id: 5,
    category: 'Industrial',
    icon: <FaIndustry />,
    name: 'Industrial Battery Pack',
    tagline: 'For Forklifts, UPS & Telecom',
    voltage: '24V – 72V',
    capacity: '200Ah – 1000Ah',
    energy: '4.8 kWh – 192 kWh',
    chemistry: 'LiFePO4 / NMC',
    cycles: '3000+',
    weight: '50 – 500 kg',
    features: ['RS485/CAN Interface', 'SCADA Integration', 'Fire Suppression Ready', 'IP55 Rated'],
    color: '#FFB800',
    badge: 'Heavy Duty',
  },
  // {
  //   id: 6,
  //   category: 'Consumer',
  //   icon: <FaMobile />,
  //   name: 'Consumer Electronics Battery',
  //   tagline: 'Powering Smart Devices & Gadgets',
  //   voltage: '3.7V – 14.8V',
  //   capacity: '1000mAh – 20000mAh',
  //   energy: '3.7 Wh – 74 Wh',
  //   chemistry: 'Li-ion / LiPo',
  //   cycles: '800+',
  //   weight: '20g – 500g',
  //   features: ['UN38.3 Certified', 'CE/RoHS Compliant', 'Custom Form Factor', 'PCB Protection'],
  //   color: '#FF6B6B',
  //   badge: 'OEM Ready',
  // },
];

const categories = ['All', 'EV Battery', 'Solar Battery', 'E-Rickshaw Battery', 'Inverter Battery'];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="section products-section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <div className="section-badge">
            <FaTh /> Our Products
          </div>
          <h2 className="section-title">Lithium Battery <span>Product Range</span></h2>
          <p className="section-subtitle">
            Complete range of lithium battery solutions engineered for performance,
            reliability, and longevity across all sectors.
          </p>
        </div>

        {/* Filter */}
        <div className="product-filters" data-aos="fade-up">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="products-grid">
          {filtered.map((product, i) => (
            <div key={product.id} className="product-card" data-aos="fade-up" data-aos-delay={i * 80}>
              {product.badge && (
                <div className="product-badge" style={{ background: product.color, color: '#0A1628' }}>
                  {product.badge}
                </div>
              )}
              <div className="product-icon" style={{ color: product.color, background: `${product.color}18` }}>
                {product.icon}
              </div>
              <div className="product-category" style={{ color: product.color }}>{product.category}</div>
              <h3 className="product-name">{product.name}</h3>
              <p className="product-tagline">{product.tagline}</p>

              <div className="product-specs">
                <div className="pspec">
                  <span className="pspec-label">Voltage</span>
                  <span className="pspec-value">{product.voltage}</span>
                </div>
                <div className="pspec">
                  <span className="pspec-label">Capacity</span>
                  <span className="pspec-value">{product.capacity}</span>
                </div>
                <div className="pspec">
                  <span className="pspec-label">Chemistry</span>
                  <span className="pspec-value" style={{ color: product.color }}>{product.chemistry}</span>
                </div>
                <div className="pspec">
                  <span className="pspec-label">Cycles</span>
                  <span className="pspec-value">{product.cycles}</span>
                </div>
              </div>

              <div className="product-features">
                {product.features.map((f, j) => (
                  <div key={j} className="pfeat">
                    <FaCheck className="pfeat-icon" style={{ color: product.color }} />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="product-cta"
                style={{ borderColor: product.color, color: product.color }}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Request Quote
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
