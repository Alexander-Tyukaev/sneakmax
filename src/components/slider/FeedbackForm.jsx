import React from 'react';

const FeedbackForm = ({ feedback, onChange, onSubmit }) => {
  return (
    <div>
      <h3>Есть ли у вас предложения по улучшению нашего сервиса?</h3>
      <textarea value={feedback} onChange={(e) => onChange(e.target.value)} />
      <button onClick={onSubmit}>Отправить</button>
    </div>
  );
};

export default FeedbackForm;