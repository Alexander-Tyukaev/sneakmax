import React from 'react';
import './ShoeSizeSelection.css';
import './ShoeSizeSelection480.css';
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
      <div className="quiz-title">Мы подберем идеальную пару для вас</div>
      <div className="quiz-text">Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для вас моделями </div>
      <div className="quiz-polosa"></div>
      <h3 className="quiz-h3">Какой размер вам подойдет?</h3>
      <div className="size2-container">
        {sizeOptions.map((option) => (
          <label key={option.value} className="label-size">
            <div
              className={`custom-radio ${shoeSize === option.value ? 'checked' : ''}`}
              onClick={() => onChange(option.value)}
            />
            {option.label}
          </label>
        ))}
      </div>
      <img src={require('../image/Rectangle 45.png')} alt="" className="img-size" />
      <div className="quiz-polosa3"></div>
      <div className="size-stranicza">2 из 3</div>
    </div>
  );
};

export default ShoeSizeSelection;