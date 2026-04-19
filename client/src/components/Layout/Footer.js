import React from 'react';
import { Link } from 'react-router-dom';
import '../../../src/styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="livepace-footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Brand Section */}
          <div className="footer-brand-section">
            <div className="footer-brand">
              <Link to="/" className="footer-logo-link">
                Rajalakshmi<br />Hi-Tech Interiors
              </Link>
              <p className="footer-tagline">
                Trends with unique designs.
              </p>
            </div>
            
            <div className="footer-contact">
              <div className="contact-item">
                <i className="fas fa-phone-alt"></i>
                <span>+91 9941874830</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>rlhitechinteriors@gmail.com</span>
              </div>
              {/* Showroom Address */}
              <div className="contact-item address-item">
                <i className="fas fa-map-marker-alt"></i>
                <div className="address-content">
                  <span className="address-label">Showroom</span>
                  <span className="address-text">No 324, 1/3, 18th street, 5th avenue Ashok Nagar, Chennai - 83</span>
                </div>
              </div>
              {/* Factory Address */}
              <div className="contact-item address-item">
                <i className="fas fa-industry"></i>
                <div className="address-content">
                  <span className="address-label">Factory</span>
                  <span className="address-text">No 9 & 10, 2nd floor, Musthapha Salai, Vanagaram, Chennai - 95</span>
                </div>
              </div>
            </div>

            {/*<div className="footer-social">
              <a href="#" className="social-link" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="social-link" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
               <a href="#" className="social-link" aria-label="Pinterest">
                <i className="fab fa-pinterest"></i>
              </a>
              <a href="#" className="social-link" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a> 
            </div> */}
          </div>

          {/* Services Section */}
          <div className="footer-section">
            <h4 className="footer-heading">SERVICES</h4>
            <ul className="footer-links">
              <li><span className="footer-link-text">Full Home</span></li>
              <li><span className="footer-link-text">Kitchen</span></li>
              <li><span className="footer-link-text">Bedroom</span></li>
              <li><span className="footer-link-text">Living Room</span></li>
              <li><span className="footer-link-text">Wardrobe</span></li>
              <li><span className="footer-link-text">Commercial</span></li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="footer-section">
            <h4 className="footer-heading">COMPANY</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/design-ideas">Design Ideas</Link></li>
              <li><Link to="/consultation">Book Consultation</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Optional: Newsletter Section - Commented out if not needed */}
          {/* <div className="footer-section footer-newsletter">
            <h4 className="footer-heading">NEWSLETTER</h4>
            <p className="newsletter-text">Subscribe for design inspiration</p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Your email" 
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-btn">Subscribe</button>
            </form>
          </div> */}
         
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              &copy; {currentYear} Rajalakshmi Hi-Tech Interiors. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;