import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { FaPaperPlane, FaPhone, FaEnvelope, FaMapMarkerAlt, FaSpinner } from 'react-icons/fa';
import './Contact.css';

const initialForm = {
  fullName: '',
  email: '',
  phone: '',
  city: '',
  productInterest: '',
  quantity: '',
  message: '',
};

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!form.fullName.trim() || !form.email.trim() || !form.phone.trim()) {
      toast.error('Please fill in all required fields');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setLoading(true);
    try {
      await axios.post('https://fusion-energy-api.vercel.app/api/enquiry', form);
      toast.success('🎉 Enquiry submitted! We\'ll contact you within 24 hours.');
      setForm(initialForm);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      const msg = err.response?.data?.message || 'Something went wrong. Please try again.';
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <div className="section-badge">
            <FaPaperPlane /> Contact Us
          </div>
          <h2 className="section-title">Get a <span>Free Quote</span> Today</h2>
          <p className="section-subtitle">
            Have a requirement? Fill out the form and our battery specialists
            will reach out within 24 hours with a customized solution.
          </p>
        </div>

        <div className="contact-layout">
          {/* Info Panel */}
          <div className="contact-info" data-aos="fade-right">
            <h3 className="info-title">Let's Talk Energy</h3>
            <p className="info-desc">
              Whether you need EV batteries, solar storage, or custom industrial packs —
              our team of experts is ready to help you find the perfect solution.
            </p>

            <div className="info-items">
              <div className="info-item">
                <div className="info-icon"><FaPhone /></div>
                <div>
                  <div className="info-label">Call Us</div>
                  <a href="tel:+911334270456" className="info-value">+91 9917771801</a>
                  <a href="tel:+918800123456" className="info-value">+91 9917771802</a>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><FaEnvelope /></div>
                <div>
                  <div className="info-label">Email Us</div>
                  <a href="mailto:info@fusionenergy.com" className="info-value">rajat0909@gmail.com</a>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><FaMapMarkerAlt /></div>
                <div>
                  <div className="info-label">Factory Address</div>
                  <span className="info-value">Near by Bank of Baroda, Bisalpur Road Bilsanda</span>
                  <span className="info-value">Dist. Pilibhit - 262202</span>
                </div>
              </div>
            </div>

            <div className="info-note">
              <span className="note-dot"></span>
              <span>Response within <strong>24 hours</strong> guaranteed</span>
            </div>

            {/* Decorative battery */}
            <div className="contact-deco">
              <div className="deco-battery">
                <div className="deco-tip"></div>
                <div className="deco-body">
                  <div className="deco-fill"></div>
                </div>
              </div>
              <div className="deco-ring"></div>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-wrap" data-aos="fade-left">
            {submitted ? (
              <div className="success-state">
                <div className="success-icon">✓</div>
                <h3>Enquiry Received!</h3>
                <p>Thank you for reaching out. Our team will contact you within 24 hours with a customized quote.</p>
                <button className="btn btn-primary" onClick={() => setSubmitted(false)}>
                  Submit Another
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name <span className="req">*</span></label>
                    <input
                      id="fullName"
                      type="text"
                      name="fullName"
                      placeholder="Your full name"
                      value={form.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address <span className="req">*</span></label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number <span className="req">*</span></label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="city">City / State</label>
                    <input
                      id="city"
                      type="text"
                      name="city"
                      placeholder="e.g. Mumbai, Maharashtra"
                      value={form.city}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="productInterest">Product Interest</label>
                    <select
                      id="productInterest"
                      name="productInterest"
                      value={form.productInterest}
                      onChange={handleChange}
                    >
                      <option value="">Select product type...</option>
                      <option value="EV Battery">EV Battery</option>
                      <option value="Solar Battery">Solar Battery</option>
                      <option value="Industrial">Industrial Battery</option>
                      <option value="Consumer">Consumer Electronics</option>
                      <option value="Other">Other / Custom</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="quantity">Quantity Required</label>
                  <input
                    id="quantity"
                    type="text"
                    name="quantity"
                    placeholder="e.g. 100 units, 500 kWh, etc."
                    value={form.quantity}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message / Requirements</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Describe your requirements — voltage, capacity, application, timeline..."
                    value={form.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn" disabled={loading}>
                  {loading ? (
                    <>
                      <FaSpinner className="spin-icon" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Enquiry
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
