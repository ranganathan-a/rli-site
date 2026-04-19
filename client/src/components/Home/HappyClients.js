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
    <section className="happy-clients-section" ref={sectionRef}>
      {/* Background Pattern */}
      <div className="section-background-pattern"></div>
      
      <div className="happy-clients-container">
        {/* Section Header */}
        <div className={`section-header ${isVisible ? 'fade-in' : ''}`}>
          <span className="section-subtitle">TRUSTED BY INDUSTRY LEADERS</span>
          <h2 className="section-title">
            Our <span className="highlight">Happy Clients</span>
          </h2>
          <p className="section-description">
            Join hundreds of satisfied clients who have transformed their spaces with our premium interior solutions
          </p>
        </div>

        {/* Stats Section */}
        <div className={`stats-grid ${isVisible ? 'slide-up' : ''}`}>
          {stats.map((stat, index) => (
            <div key={index} className="stat-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Client Logo Strip - Clean Style */}
        <div className={`clients-showcase ${isVisible ? 'fade-in' : ''}`}>
          <h3 className="showcase-title">HAPPY CLIENTS</h3>
          <div className="clients-logo-strip">
            {clients.map((client, index) => (
              <div 
                key={client.id} 
                className="logo-item"
                style={{ animationDelay: `${index * 0.03}s` }}
              >
                <img 
                  src={client.logo} 
                  alt={client.alt}
                  className="logo-image"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className={`cta-banner ${isVisible ? 'scale-in' : ''}`}>
          <div className="cta-content">
            <div className="cta-text">
              <h3 className="cta-title">Ready to Join Our Happy Clients?</h3>
              <p className="cta-subtitle">Experience the luxury of bespoke interior design</p>
            </div>
            <div className="cta-buttons">
              <a href="/consultation" className="cta-btn-primary">
                SCHEDULE CONSULTATION
                <span className="btn-arrow">→</span>
              </a>
              <a href="/portfolio" className="cta-btn-secondary">
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