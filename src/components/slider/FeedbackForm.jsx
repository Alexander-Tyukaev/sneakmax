import React from 'react';
import "./FeedbackForm.css"

const FeedbackForm = ({ feedback, onChange }) => {
  return (
    <div>
      <div className="quiz-title">Мы подберем идеальную пару для вас</div>
      <div className="quiz-text">Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для вас моделями </div>
      <div className="quiz-polosa"></div>
      <h3 className="quiz-h3">Уточните какие-либо моменты</h3>
      <textarea value={feedback} onChange={(e) => onChange(e.target.value)}  className="feedbackForm-textarea"  placeholder="Введите сообщение"/>
      
      <div className="quiz-polosa4"></div>
      <div className="feedbackForm-stranicza">3 из 3</div>
    </div>
  );
};

export default FeedbackForm;