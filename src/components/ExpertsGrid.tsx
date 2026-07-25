import React from 'react';
import './ExpertsGrid.css';

const experts = [
  { name: 'Ravi Kumar', role: 'Health Insurance Expert', img: 'https://i.pravatar.cc/150?img=12' },
  { name: 'Sunita Sharma', role: 'Term Life Specialist', img: 'https://i.pravatar.cc/150?img=9' },
  { name: 'Amit Patel', role: 'Financial Advisor', img: 'https://i.pravatar.cc/150?img=11' },
  { name: 'Neha Gupta', role: 'Claims Specialist', img: 'https://i.pravatar.cc/150?img=5' }
];

const ExpertsGrid: React.FC = () => {
  return (
    <section className="experts-section">
      <div className="container">
        <div className="experts-header text-center">
          <h2 className="section-title">Meet Our Experts, Consult With an Expert For Free</h2>
          <p className="experts-subtitle">100% Unbiased. No Sales Pitch. No Spam.</p>
        </div>
        
        <div className="experts-grid">
          {experts.map((expert, index) => (
            <div className="expert-card" key={index}>
              <img src={expert.img} alt={expert.name} className="expert-img" />
              <div className="expert-info">
                <h3>{expert.name}</h3>
                <p>{expert.role}</p>
                <button className="btn btn-outline expert-btn">Book Free Call</button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center" style={{ marginTop: '3rem' }}>
          <button className="btn btn-purple btn-lg">View All Experts</button>
        </div>
      </div>
    </section>
  );
};

export default ExpertsGrid;
