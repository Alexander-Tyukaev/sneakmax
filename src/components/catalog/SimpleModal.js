import React from 'react';
import './SimpleModal.css'; 
const SimpleModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close-button" onClick={onClose}>
          &times;
        </button>
        <div className="modal-scrollable-content">
            {children}
        </div>
      </div>
    </div>
  );
};

export default SimpleModal;