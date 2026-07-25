import React from 'react';
import './Footer.css';

interface FooterProps {
  onBookCall?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onBookCall }) => {
  return (
    <footer className="footer">
      <div className="footer-cta-bar">
        <div className="container cta-bar-container">
          <div className="cta-bar-left">
            <img src="https://i.pravatar.cc/150?img=11" alt="Advisor" className="cta-advisor-img" />
            <div className="cta-text-wrap">
              <strong>Need help finding the right plan?</strong>
              <p>Book a free 1-to-1 call with a certified expert.</p>
            </div>
          </div>
          <div className="cta-bar-right">
            <button className="btn btn-outline" style={{ backgroundColor: 'white' }} onClick={onBookCall}>Book a Call</button>
            <button className="btn btn-primary" style={{ backgroundColor: 'var(--success-color)' }} onClick={() => alert("Opening WhatsApp...")}>WhatsApp Us</button>
          </div>
        </div>
      </div>

      <div className="container footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo-text">siva</div>
            <p className="footer-desc">
              India's first and only neutral insurance platform. We simplify insurance for you, so you can buy with confidence.
            </p>
            <div className="social-links">
              <a href="#fb" aria-label="Facebook">FB</a>
              <a href="#tw" aria-label="Twitter">TW</a>
              <a href="#ig" aria-label="Instagram">IG</a>
              <a href="#yt" aria-label="YouTube">YT</a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4>Siva Insurance</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#media">Media</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4>Insurance</h4>
            <ul>
              <li><a href="#health">Health Insurance</a></li>
              <li><a href="#term">Term Life Insurance</a></li>
              <li><a href="#motor">Motor Insurance</a></li>
              <li><a href="#travel">Travel Insurance</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Resources</h4>
            <ul>
              <li><a href="#guides">Guides</a></li>
              <li><a href="#articles">Articles</a></li>
              <li><a href="#glossary">Glossary</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Siva Insurance. All rights reserved.</p>
          <div className="legal-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
