import React, { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Products from './components/Products/Products';
import Manufacturing from './components/Manufacturing/Manufacturing';
import Location from './components/Location/Location';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <div className="App">
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#0D1F3C',
            color: '#fff',
            border: '1px solid rgba(0, 212, 255, 0.3)',
            borderRadius: '12px',
            fontSize: '14px',
          },
          success: {
            iconTheme: { primary: '#00D4FF', secondary: '#0A1628' },
          },
          error: {
            iconTheme: { primary: '#FF4444', secondary: '#0A1628' },
          },
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Manufacturing />
        <WhyChooseUs />
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
