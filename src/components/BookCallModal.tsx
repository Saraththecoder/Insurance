import React from 'react';
import './Modal.css';

interface BookCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookCallModal: React.FC<BookCallModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="global-modal-overlay" onClick={onClose}>
      <div className="global-modal" onClick={e => e.stopPropagation()}>
        <button className="global-modal-close" onClick={onClose}>✕</button>
        
        <div className="modal-header">
          <h2>Talk to an Expert</h2>
          <p>Schedule a free 15-minute consultation with our unbiased advisors.</p>
        </div>
        
        <form className="modal-form" onSubmit={(e) => { e.preventDefault(); alert("Thanks! We will contact you soon."); onClose(); }}>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="John Doe" required />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" placeholder="+91 98765 43210" required />
          </div>
          <div className="form-group">
            <label>Preferred Time</label>
            <select required>
              <option value="">Select a time</option>
              <option value="morning">Morning (9AM - 12PM)</option>
              <option value="afternoon">Afternoon (12PM - 4PM)</option>
              <option value="evening">Evening (4PM - 7PM)</option>
            </select>
          </div>
          <button type="submit" className="btn btn-purple modal-submit-btn">Book Free Call</button>
        </form>
      </div>
    </div>
  );
};

export default BookCallModal;
