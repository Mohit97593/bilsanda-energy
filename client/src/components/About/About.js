import React from 'react';
import { FaAtom, FaBolt, FaThermometerHalf, FaRecycle, FaLeaf } from 'react-icons/fa';
import { MdBattery90, MdSpeed } from 'react-icons/md';
import './About.css';

const batteryTypes = [
  {
    icon: '⚡',
    name: 'Lithium-Ion (Li-ion)',
    desc: 'Most common type, used in smartphones, laptops, and EVs. High energy density with proven reliability.',
    voltage: '12 – 72 V',
    energy: '0.6–2.7 Wh/kg',
    cycles: '1000–2000',
    color: '#00D4FF',
  },
  {
    icon: '🔋',
    name: 'Lithium Polymer (LiPo)',
    desc: 'Flexible, lightweight design ideal for drones, wearables, and compact electronics. Ultra-thin profile.',
    voltage: '12-72 V',
    energy: '0.72–6.3 Wh/kg',
    cycles: '3000–5000',
    color: '#00AAFF',
  },
  {
    icon: '🛡️',
    name: 'Lithium Iron Phosphate (LiFePO4)',
    desc: 'Safest chemistry with superior thermal stability. Perfect for solar storage and industrial applications.',
    voltage: '3.2V',
    energy: '90–120 Wh/kg',
    cycles: '2000–5000',
    color: '#00FF88',
  },
  {
    icon: '⚙️',
    name: 'Lithium Manganese Oxide (LMO)',
    desc: 'High discharge rates with excellent thermal safety. Used in power tools and medical equipment.',
    voltage: '12V',
    energy: '6.3 Wh/kg',
    cycles: '300–700',
    color: '#FFB800',
  },
];

const advantages = [
  { icon: <FaBolt />, title: 'Fast Charging', desc: 'Charge up to 80% in under 1 hour with advanced BMS technology' },
  { icon: <MdBattery90 />, title: 'Long Cycle Life', desc: 'Up to 5000+ charge cycles — outlasting conventional batteries by 5x' },
  { icon: <FaLeaf />, title: 'Eco-Friendly', desc: 'Lower carbon footprint with recyclable materials and no toxic metals' },
  { icon: <MdSpeed />, title: 'High Energy Density', desc: 'More power in less weight and space — ideal for mobile applications' },
  { icon: <FaThermometerHalf />, title: 'Thermal Stability', desc: 'Advanced thermal management prevents overheating and extends lifespan' },
  { icon: <FaRecycle />, title: 'Recyclable', desc: '95% recyclable components with our take-back recycling program' },
];

const specs = [
  { label: 'Battery Voltage Range', value: '12V – 72V', icon: <FaBolt /> },
  { label: 'Capacity Range', value: '5Ah – 105Ah', icon: <MdBattery90 /> },
  { label: 'Energy Density', value: '0.6 Wh/kg - 6.3 Wh/kg', icon: <FaAtom /> },
  { label: 'Cycle Life', value: '2000 - 5000', icon: <FaRecycle /> },
];

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        {/* Header */}
        <div className="section-header" data-aos="fade-up">
          <div className="section-badge">
            <FaAtom /> About Lithium Batteries
          </div>
          <h2 className="section-title">What is a <span>Lithium Battery</span>?</h2>
          <p className="section-subtitle">
            A lithium battery is a rechargeable electrochemical energy storage device that uses lithium ions
            as the primary carrier of electric charge — delivering unmatched power density and longevity.
          </p>
        </div>

        {/* How It Works */}
        <div className="how-it-works" data-aos="fade-up">
          <div className="hiw-content">
            <h3 className="hiw-title">How Does It Work?</h3>
            <p className="hiw-text">
              During discharge, lithium ions flow from the anode (typically graphite) through the electrolyte to the cathode,
              generating electrical current. During charging, the process reverses — ions migrate back to the anode.
            </p>
            <div className="hiw-steps">
              {['Anode (Graphite)', 'Electrolyte', 'Separator', 'Cathode (LiCoO₂)', 'Current Collector'].map((step, i) => (
                <div key={i} className="hiw-step">
                  <div className="hiw-step-num">{i + 1}</div>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="battery-diagram">
            <div className="diagram-battery">
              <div className="diagram-part anode">
                <span>Anode</span>
                <div className="diagram-ions">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="ion" style={{ animationDelay: `${i * 0.3}s` }}>Li⁺</div>
                  ))}
                </div>
              </div>
              <div className="diagram-separator">
                <div className="sep-label">Separator</div>
                <div className="sep-line"></div>
              </div>
              <div className="diagram-part cathode">
                <span>Cathode</span>
              </div>
            </div>
            <div className="diagram-arrow">
              <span>e⁻ flow</span>
              <div className="arrow-line"></div>
            </div>
          </div>
        </div>

        {/* Key Specs */}
        <div className="specs-row" data-aos="fade-up">
          {specs.map((spec, i) => (
            <div key={i} className="spec-card" data-aos="zoom-in" data-aos-delay={i * 100}>
              <div className="spec-icon">{spec.icon}</div>
              <div className="spec-value">{spec.value}</div>
              <div className="spec-label">{spec.label}</div>
            </div>
          ))}
        </div>

        {/* Battery Types */}
        <div className="section-header" style={{ marginTop: '80px' }} data-aos="fade-up">
          <h2 className="section-title">Types of <span>Lithium Batteries</span></h2>
          <p className="section-subtitle">We manufacture all major lithium battery chemistries to meet diverse application needs</p>
        </div>

        <div className="battery-types grid-2" data-aos="fade-up">
          {batteryTypes.map((type, i) => (
            <div key={i} className="battery-type-card card" data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="type-icon" style={{ color: type.color }}>{type.icon}</div>
              <h3 className="type-name" style={{ color: type.color }}>{type.name}</h3>
              <p className="type-desc">{type.desc}</p>
              <div className="type-specs">
                <div className="type-spec">
                  <span className="ts-label">Voltage</span>
                  <span className="ts-value">{type.voltage}</span>
                </div>
                <div className="type-spec">
                  <span className="ts-label">Energy</span>
                  <span className="ts-value">{type.energy}</span>
                </div>
                <div className="type-spec">
                  <span className="ts-label">Cycles</span>
                  <span className="ts-value">{type.cycles}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Advantages */}
        <div className="section-header" style={{ marginTop: '80px' }} data-aos="fade-up">
          <h2 className="section-title">Key <span>Advantages</span></h2>
        </div>

        <div className="advantages-grid grid-3" data-aos="fade-up">
          {advantages.map((adv, i) => (
            <div key={i} className="advantage-card card" data-aos="fade-up" data-aos-delay={i * 80}>
              <div className="adv-icon">{adv.icon}</div>
              <h4 className="adv-title">{adv.title}</h4>
              <p className="adv-desc">{adv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
