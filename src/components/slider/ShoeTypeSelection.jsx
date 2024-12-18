import React from 'react';

const ShoeTypeSelection = ({ shoeType, onChange }) => {
  const shoeTypeImages = {
    кроссовки: require('../image/5.png'),
    туфли:  require('../image/4.png'),
    сапоги: require('../image/9.png'),
    сандалии: require('../image/7.png'),
    кеды:require('../image/6.png'),
    тапки:require('../image/8.png'),
  };

  return (
    <div>
        <div className="quiz-title">Мы подберем идеальную пару для вас</div>
        <div className="quiz-text">Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для вас моделями </div>
        <div className="quiz-polosa"></div>
      <h3>Какой тип обуви вы предпочитаете?</h3>
      <div className="slider-container">
        {Object.entries(shoeTypeImages).map(([type, img]) => (
          <label key={type} className="img-label">
            <img src={img} alt={type} className="slaider-img" />
            
            <input
              type="radio"
              value={type}
              checked={shoeType === type}
              onChange={(e) => onChange(e.target.value)}
            />
            {type}
          </label>
        ))}
          <div className="quiz-polosa2"></div>
          <div className="quiz-nomeracia">1 из 3</div>
      </div>
    
    </div>
  );
};

export default ShoeTypeSelection;