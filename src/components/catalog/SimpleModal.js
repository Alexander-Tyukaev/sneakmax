import React from 'react';
import './SimpleModal.css'; // Make sure you have this CSS file
const SimpleModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close-button" onClick={onClose}>
          &times;
        </button>
        <div className="modal-scrollable-content"> {/* Added scrollable content div */}
            {children}
        </div>
      </div>
    </div>
  );
};

export default SimpleModal;