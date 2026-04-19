// src/components/HappyClients.js
import React, { useState, useEffect, useRef } from 'react';
import '../../styles/HappyClients.css';

const HappyClients = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const clients = [
    {
      id: 1,
      logo: '/images/clients/c1.png',
      alt: 'K Cee'
    },
    {
      id: 2,
      logo: '/images/clients/c2.png',
      alt: 'Studio 42'
    },
    {
      id: 3,
      logo: '/images/clients/c3.png',
      alt: 'Mizzle'
    },
    {
      id: 4,
      logo: '/images/clients/c4.png',
      alt: 'Prakash Silks & Sarees'
    }
  ];

  const stats = [
    { value: '1500+', label: 'Projects Completed', icon: '🏆' },
    { value: '25+', label: 'Years Experience', icon: '⏰' },
    { value: '100%', label: 'Client Satisfaction', icon: '❤️' },
    { value: '50+', label: 'Design Awards', icon: '🏅' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="hc-section" ref={sectionRef}>
      {/* Background Pattern */}
      <div className="hc-bg-pattern"></div>
      
      <div className="hc-container">
        {/* Section Header */}
        <div className={`hc-header ${isVisible ? 'hc-fade-in' : ''}`}>
          <h2 className="hc-header-title">
            Our <span className="hc-header-highlight">Happy Clients</span>
          </h2>
          <p className="hc-header-desc">
            Join hundreds of satisfied clients who have transformed their spaces with our premium interior solutions
          </p>
        </div>

        {/* Stats Section */}
        <div className={`hc-stats-grid ${isVisible ? 'hc-slide-up' : ''}`}>
          {stats.map((stat, index) => (
            <div key={index} className="hc-stat-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="hc-stat-icon">{stat.icon}</div>
              <div className="hc-stat-value">{stat.value}</div>
              <div className="hc-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Client Logo Strip */}
        <div className={`hc-clients-showcase ${isVisible ? 'hc-fade-in' : ''}`}>
          <h3 className="hc-showcase-title">HAPPY CLIENTS</h3>
          <div className="hc-logo-strip">
            {clients.map((client, index) => (
              <div 
                key={client.id} 
                className="hc-logo-item"
                style={{ animationDelay: `${index * 0.03}s` }}
              >
                <img 
                  src={client.logo} 
                  alt={client.alt}
                  className="hc-logo-image"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className={`hc-cta-banner ${isVisible ? 'hc-scale-in' : ''}`}>
          <div className="hc-cta-content">
            <div className="hc-cta-text">
              <h3 className="hc-cta-title">Ready to Join Our Happy Clients?</h3>
              <p className="hc-cta-subtitle">Experience the luxury of bespoke interior design</p>
            </div>
            <div className="hc-cta-buttons">
              <a href="/consultation" className="hc-cta-btn-primary">
                SCHEDULE CONSULTATION
                <span className="hc-btn-arrow">→</span>
              </a>
              <a href="/portfolio" className="hc-cta-btn-secondary">
                VIEW PORTFOLIO
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HappyClients;