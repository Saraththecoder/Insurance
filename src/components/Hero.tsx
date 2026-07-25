import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './Hero.css';

interface HeroProps {
  onBookCall?: () => void;
  onGetQuote?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookCall, onGetQuote }) => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from('.hero-animate', {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out'
    });
    
    gsap.from('.hero-image-wrapper', {
      scale: 0.9,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      ease: 'power2.out'
    });
  }, { scope: containerRef });

  return (
    <section className="hero" ref={containerRef}>
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title hero-animate">The Most Satisfying Way To Buy Insurance</h1>
          <p className="hero-subtitle hero-animate">
            Unbiased advice. Transparent comparison. Smooth claims.
          </p>
          
          <div className="hero-rating hero-animate">
            <span className="stars">★★★★★</span>
            <span className="rating-text">4.9/5 on Google</span>
          </div>

          <div className="hero-actions hero-animate">
            <button className="btn btn-primary btn-lg" onClick={onGetQuote}>Check your premium</button>
            <button className="btn btn-outline btn-lg" onClick={onBookCall}>Talk to an expert</button>
          </div>
          
          <div className="hero-features hero-animate">
            <a href="#term" className="hero-feature-link">
              <span className="feature-icon">🛡️</span> Term Insurance
            </a>
            <a href="#health" className="hero-feature-link">
              <span className="feature-icon">❤️</span> Health Insurance
            </a>
            <a href="#group" className="hero-feature-link">
              <span className="feature-icon">👥</span> Group Insurance
            </a>
            <a href="#all" className="hero-feature-link">
              <span className="feature-icon">grid</span> All products
            </a>
          </div>
        </div>
        
        <div className="hero-image-wrapper">
          <div className="hero-floating-elements">
            {/* We can use CSS to create the nodes from the mockup */}
            <div className="node node-1"></div>
            <div className="node node-2"></div>
            <div className="node node-3"></div>
            <div className="node node-4"></div>
          </div>
          <div className="hero-person-placeholder">
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Insurance Expert" className="hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
