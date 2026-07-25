import React from 'react';
import './Modal.css';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="global-modal-overlay" onClick={onClose}>
      <div className="global-modal quote-modal" onClick={e => e.stopPropagation()}>
        <button className="global-modal-close" onClick={onClose}>✕</button>
        
        <div className="modal-header">
          <h2>Check Your Premium</h2>
          <p>Find the best plan tailored to your needs in seconds.</p>
        </div>
        
        <form className="modal-form" onSubmit={(e) => { e.preventDefault(); alert("Calculating best premium for you..."); onClose(); }}>
          <div className="form-row">
            <div className="form-group half">
              <label>Your Age</label>
              <select required>
                <option value="25">25 Years</option>
                <option value="30">30 Years</option>
                <option value="35">35 Years</option>
                <option value="40">40 Years</option>
              </select>
            </div>
            <div className="form-group half">
              <label>Cover Amount</label>
              <select required>
                <option value="50L">50 Lakhs</option>
                <option value="1Cr">1 Crore</option>
                <option value="2Cr">2 Crore</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label>Gender</label>
            <div className="gender-toggle-modal">
              <label className="radio-label">
                <input type="radio" name="gender" value="male" defaultChecked /> Male
              </label>
              <label className="radio-label">
                <input type="radio" name="gender" value="female" /> Female
              </label>
            </div>
          </div>
          <div className="form-group">
            <label>Mobile Number</label>
            <input type="tel" placeholder="+91 98765 43210" required />
            <span className="helper-text">We won't spam you. Promise.</span>
          </div>
          <button type="submit" className="btn btn-primary modal-submit-btn">View Quotes</button>
        </form>
      </div>
    </div>
  );
};

export default QuoteModal;
