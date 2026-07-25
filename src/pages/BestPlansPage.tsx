import React, { useState } from 'react';
import { bestPlansData } from '../data/pageContent';
import NeedHelpBanner from '../components/article/NeedHelpBanner';
import './Pages.css';

interface BestPlansPageProps {
  onBookCall?: () => void;
  onGetQuote?: () => void;
}

const BestPlansPage: React.FC<BestPlansPageProps> = ({ onBookCall, onGetQuote }) => {
  const [activeTab, setActiveTab] = useState<'term' | 'health' | 'savings'>('term');

  return (
    <div className="article-page best-plans-page">
      <div className="container">
        {/* Header Hero */}
        <div className="article-hero" style={{ marginBottom: '2rem' }}>
          <div className="breadcrumbs">
            <span>Home</span> &gt; <span>Plans</span> &gt; <span className="current">Best Plans 2024</span>
          </div>
          
          <div className="article-tag">Curated Lists</div>
          
          <h1 className="article-main-title">{bestPlansData.title}</h1>
          <p className="article-subtitle-text">{bestPlansData.subtitle}</p>
        </div>

        {/* Tab Selection */}
        <div 
          style={{ 
            display: 'flex', 
            gap: '1rem', 
            borderBottom: '2px solid var(--border-color)',
            marginBottom: '2rem'
          }}
        >
          {bestPlansData.categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id as any)}
              style={{
                padding: '1rem 1.5rem',
                fontSize: '1rem',
                fontWeight: '700',
                color: activeTab === cat.id ? 'var(--primary-color)' : 'var(--text-gray)',
                borderBottom: activeTab === cat.id ? '3px solid var(--primary-color)' : 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <span>{cat.icon}</span> {cat.label}
            </button>
          ))}
        </div>

        {/* Plan Listings Table */}
        <div className="plans-table-container">
          <table className="plans-table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Product Name</th>
                <th>Avg. Premium / Value</th>
                <th>Claim Metric / IRR</th>
                <th>Key Highlight</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {bestPlansData.categories
                .find((cat) => cat.id === activeTab)
                ?.plans.map((plan) => (
                  <tr key={plan.rank}>
                    <td className="plan-rank"># {plan.rank}</td>
                    <td className="plan-name-cell">
                      {plan.name}
                      <span 
                        className="plan-badge" 
                        style={{ 
                          backgroundColor: plan.rank === 1 ? '#e6f6ed' : '#f3effe', 
                          color: plan.rank === 1 ? '#047857' : '#6b21a8' 
                        }}
                      >
                        {plan.badge}
                      </span>
                    </td>
                    <td>{plan.premium}</td>
                    <td style={{ fontWeight: '700' }}>{plan.claimRatio}</td>
                    <td style={{ color: 'var(--text-gray)' }}>{plan.highlight}</td>
                    <td>
                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <button className="btn btn-primary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem' }} onClick={onGetQuote}>
                          Get Quote
                        </button>
                        <button className="btn btn-outline" style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem' }} onClick={onBookCall}>
                          Details
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        <div style={{ marginTop: '4rem' }}>
          <NeedHelpBanner onBookCall={onBookCall} />
        </div>
      </div>
    </div>
  );
};

export default BestPlansPage;
