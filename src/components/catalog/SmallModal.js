import React from 'react';
import './SmallModal.css';

const SmallModal = ({ isOpen, onClose, children }) => {
if (!isOpen) return null;
return (
    <div className="small-modal-overlay">
    <div className="small-modal-content">
        <button className="small-modal-close-button" onClick={onClose}>
        &times;
        </button>
        {children}
    </div>
    </div>
);
};
export default SmallModal; 