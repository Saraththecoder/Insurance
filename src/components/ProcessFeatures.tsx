import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './ProcessFeatures.css';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    id: '01',
    title: 'Automated Plan Match',
    description: 'We crunch through 100s of policies, features, and T&Cs to match you with exactly what you need.',
    color: 'var(--primary-light)',
    mockupImg: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: '02',
    title: 'Choose The Right Plan',
    description: 'Compare coverage, claim settlement ratio, and premiums side-by-side with our community.',
    color: '#fdfaee', // Light yellow
    mockupImg: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: '03',
    title: 'Clear Terms & Conditions',
    description: 'Know exactly what is covered and what is not. We simplify the fine print so there are no surprises.',
    color: '#fdeff2', // Light pink
    mockupImg: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: '04',
    title: 'Dedicated Support',
    description: 'Our certified advisors guide you from purchase to claims. We have got your back.',
    color: '#f3effe', // Light purple
    mockupImg: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  }
];

interface ProcessFeaturesProps {
  onNavigate?: () => void;
}

const ProcessFeatures: React.FC<ProcessFeaturesProps> = ({ onNavigate }) => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from('.section-title-animate', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out'
    });

    gsap.utils.toArray('.feature-card-animate').forEach((card: any) => {
      gsap.fromTo(card,
        { y: 50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out'
        }
      );
    });
  }, { scope: containerRef });

  return (
    <section className="process-features" ref={containerRef}>
      <div className="container">
        <h2 className="section-title text-center section-title-animate">
          The Most Satisfying Way To Buy Insurance
        </h2>
        
        <div className="features-list">
          {features.map((feature) => (
            <div className="feature-card feature-card-animate" key={feature.id} style={{ backgroundColor: feature.color }}>
              <div className="feature-content">
                <span className="feature-number">{feature.id}</span>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.description}</p>
                <button className="btn btn-primary" style={{ marginTop: '1.5rem', backgroundColor: '#10b981' }} onClick={onNavigate}>
                  Explore Feature <span style={{ marginLeft: '8px' }}>→</span>
                </button>
              </div>
              <div className="feature-mockup">
                <img src={feature.mockupImg} alt={feature.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessFeatures;
