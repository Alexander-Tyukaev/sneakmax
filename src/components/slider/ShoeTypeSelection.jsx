import React from 'react';

const ShoeTypeSelection = ({ shoeType, onChange }) => {
  const shoeTypeImages = {
    кроссовки: '/path/to/sneakers.jpg',
    туфли: '/path/to/dress_shoes.jpg',
    сапоги: '/path/to/boots.jpg',
    сандалии: '/path/to/sandals.jpg',
  };

  return (
    <div>
        <div className="quiz-title">Мы подберем идеальную пару для вас</div>
        <div className="quiz-text">Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для вас моделями </div>
        <div className="quiz-polosa"></div>
      <h3>Какой тип обуви вы предпочитаете?</h3>
      <div>
        {Object.entries(shoeTypeImages).map(([type, img]) => (
          <label key={type}>
            <img src={img} alt={type} style={{ width: '100px', height: 'auto', marginRight: '10px' }} />
            <input
              type="radio"
              value={type}
              checked={shoeType === type}
              onChange={(e) => onChange(e.target.value)}
            />
            {type}
          </label>
        ))}
      </div>
    </div>
  );
};

export default ShoeTypeSelection;