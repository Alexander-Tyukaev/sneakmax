import React from 'react';


const ShoeSizeSelection = ({ shoeSize, onChange }) => {
  const sizeOptions = [
    { value: '<35', label: 'Ниже 35' },
    { value: '36-38', label: '36-38' },
    { value: '39-41', label: '39-41' },
    { value: '42-44', label: '42-44' },
    { value: '45+', label: '45 и больше' },
  ];

  return (
    <div>
      <h3>Ваш размер обуви?</h3>
      <div>
        {sizeOptions.map((option) => (
          <label key={option.value}>
            <input
              type="radio"
              value={option.value}
              checked={shoeSize === option.value}
              onChange={(e) => onChange(e.target.value)}
            />
            {option.label}
          </label>
        ))}
      </div>
     
    </div>
  );
};


export default ShoeSizeSelection;