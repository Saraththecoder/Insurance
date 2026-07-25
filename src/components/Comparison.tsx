import React from 'react';
import './Comparison.css';

const Comparison: React.FC = () => {
  return (
    <section className="comparison-section">
      <div className="container">
        <h2 className="section-title text-center">How is Beshak different?</h2>
        
        <div className="comparison-table">
          <div className="comparison-column beshak-col">
            <div className="col-header">
              <span className="logo-text">beshak</span>
            </div>
            <ul className="comparison-list">
              <li>
                <strong>100% Neutral & Unbiased</strong>
                <p>We don't take commissions for recommending specific plans.</p>
              </li>
              <li>
                <strong>No Spam, No Pushy Sales</strong>
                <p>Your data is safe with us. We will never call you uninvited.</p>
              </li>
              <li>
                <strong>Community Powered</strong>
                <p>Learn from real experiences of people just like you.</p>
              </li>
              <li>
                <strong>1-to-1 Expert Advice</strong>
                <p>Consult with vetted experts who actually care about your needs.</p>
              </li>
            </ul>
          </div>
          
          <div className="comparison-column others-col">
            <div className="col-header">
              <h3>Other Platforms</h3>
            </div>
            <ul className="comparison-list">
              <li>
                <strong>Commission Driven</strong>
                <p>Push plans that pay them the highest margins.</p>
              </li>
              <li>
                <strong>Constant Spam Calls</strong>
                <p>Sell your data to 10 different agents who won't stop calling.</p>
              </li>
              <li>
                <strong>Hidden Terms</strong>
                <p>Focus only on the premium amount, hide the exclusions.</p>
              </li>
              <li>
                <strong>Sales Pitches</strong>
                <p>Agents trained to close sales, not to give sound financial advice.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
