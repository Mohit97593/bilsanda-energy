import React, { useState } from 'react';
import { FaCogs, FaFlask, FaBolt, FaBoxOpen, FaTruck, FaMicroscope, FaLayerGroup, FaIndustry } from 'react-icons/fa';
import './Manufacturing.css';

const steps = [
  {
    num: '01',
    icon: <FaBoxOpen />,
    title: 'Raw Material Procurement',
    desc: 'Sourcing premium lithium carbonate, graphite, manganese, and electrolyte solutions from certified global suppliers with rigorous quality audits.',
    color: '#00D4FF',
    detail: 'Materials tested for purity > 99.9%',
  },
  {
    num: '02',
    icon: <FaLayerGroup />,
    title: 'Electrode Manufacturing',
    desc: 'Precision coating of cathode and anode materials on copper/aluminum foils using automated slurry mixing and calendering processes.',
    color: '#00BBFF',
    detail: 'Coating accuracy ±2 microns',
  },
  {
    num: '03',
    icon: <FaCogs />,
    title: 'Cell Assembly',
    desc: 'Winding or stacking of electrode layers with separators in our humidity-controlled dry rooms (< 1% RH) to prevent moisture contamination.',
    color: '#0099FF',
    detail: 'Cleanroom Class 1000',
  },
  {
    num: '04',
    icon: <FaFlask />,
    title: 'Electrolyte Filling',
    desc: 'Precision injection of electrolyte solution in sealed vacuum chambers ensuring exact volume and zero air exposure for optimal conductivity.',
    color: '#0077DD',
    detail: 'Vacuum filling at -0.1 MPa',
  },
  {
    num: '05',
    icon: <FaBolt />,
    title: 'Formation & Testing',
    desc: 'Initial charge-discharge cycles to form the SEI layer, activating the electrochemistry and establishing baseline performance parameters.',
    color: '#0055BB',
    detail: 'C/10 formation rate',
  },
  {
    num: '06',
    icon: <FaMicroscope />,
    title: 'Quality Control',
    desc: 'Comprehensive testing: capacity measurement, impedance spectroscopy, X-ray inspection, and safety tests including nail penetration and overcharge.',
    color: '#00AA88',
    detail: '100% cell inspection',
  },
  {
    num: '07',
    icon: <FaIndustry />,
    title: 'Pack Assembly',
    desc: 'Automated welding and integration of cells with BMS, cooling systems, connectors, and protective enclosures for final pack configuration.',
    color: '#00CC66',
    detail: 'Laser welding precision',
  },
  {
    num: '08',
    icon: <FaTruck />,
    title: 'Final Testing & Dispatch',
    desc: 'End-of-line functional testing, capacity validation, BMS programming verification, and packaging for safe transportation with test reports.',
    color: '#00FF88',
    detail: 'UN38.3 transport certified',
  },
];

const Manufacturing = () => {
  const [activeStep, setActiveStep] = useState(null);

  return (
    <section id="manufacturing" className="section manufacturing-section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <div className="section-badge">
            <FaCogs /> Manufacturing
          </div>
          <h2 className="section-title">Our <span>Manufacturing Process</span></h2>
          <p className="section-subtitle">
            From raw materials to finished battery packs — a precision-engineered
            8-step manufacturing process backed by ISO 9001:2015 quality systems.
          </p>
        </div>

        {/* Timeline */}
        <div className="mfg-timeline">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`mfg-step ${activeStep === i ? 'active' : ''}`}
              data-aos="fade-up"
              data-aos-delay={i * 60}
              onClick={() => setActiveStep(activeStep === i ? null : i)}
            >
              <div className="step-connector">
                <div className="step-line" style={{ background: `linear-gradient(180deg, ${step.color}, ${steps[Math.min(i + 1, steps.length - 1)].color})` }}></div>
                <div className="step-dot" style={{ borderColor: step.color, boxShadow: `0 0 16px ${step.color}50` }}>
                  <div className="step-dot-inner" style={{ background: step.color }}></div>
                </div>
              </div>
              <div className="step-card card">
                <div className="step-header">
                  <div className="step-icon" style={{ color: step.color, background: `${step.color}18` }}>
                    {step.icon}
                  </div>
                  <div className="step-info">
                    <span className="step-num" style={{ color: step.color }}>{step.num}</span>
                    <h3 className="step-title">{step.title}</h3>
                  </div>
                  <span className="step-expand">{activeStep === i ? '−' : '+'}</span>
                </div>
                <p className="step-desc">{step.desc}</p>
                {activeStep === i && (
                  <div className="step-detail" style={{ borderColor: step.color, color: step.color }}>
                    ✓ {step.detail}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Banner */}
        <div className="mfg-banner" data-aos="fade-up">
          {[
            { num: '3', unit: 'Lakh+', label: 'Cells Produced Monthly' },
            { num: '0.1', unit: '%', label: 'Defect Rate' },
            { num: '100', unit: '%', label: 'Cells Inspected' },
            { num: '24', unit: 'hrs', label: 'Monitoring Cycle' },
          ].map((stat, i) => (
            <div key={i} className="banner-stat">
              <div className="banner-num">
                <span>{stat.num}</span>
                <span className="banner-unit">{stat.unit}</span>
              </div>
              <div className="banner-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Manufacturing;
