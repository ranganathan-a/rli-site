// src/components/WhyChooseService.js
import React from 'react';
import '../../styles/WhyChooseService.css';

const WhyChooseService = () => {
  const benefits = [
    {
      icon: 'fas fa-dollar-sign',
      title: 'No Hidden Costs',
      description: 'Transparent pricing with detailed breakdowns'
    },
    {
      icon: 'fas fa-users',
      title: 'Expert Consultation',
      description: 'Work with experienced design professionals'
    },
    {
      icon: 'fas fa-palette',
      title: 'Customized Solutions',
      description: 'Tailored designs that match your style'
    },
    {
      icon: 'fas fa-clock',
      title: 'Quick Response',
      description: 'Get estimates within 24 hours'
    },
    {
      icon: 'fas fa-award',
      title: 'Professional Service',
      description: 'Quality craftsmanship guaranteed'
    },
    {
      icon: 'fas fa-laptop-house',
      title: 'State-of-the-Art Technology',
      description: '3D visualization and smart planning'
    }
  ];

  return (
    <section className="why-choose-service-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-main-title">Why Choose Our Service</h2>
          <p className="section-subtitle">We combine expertise, technology, and personalized service to deliver exceptional interior design solutions.</p>
        </div>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div className="benefit-card" key={index}>
              <div className="benefit-icon">
                <i className={benefit.icon}></i>
              </div>
              <h3>{benefit.title}</h3>
              <p className="benefit-description">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseService;