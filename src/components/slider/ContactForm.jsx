import React from 'react';
import "./ContactForm.css"

const ContactForm = ({ name, email, onChangeName, onChangeEmail, onSubmit }) => {
  return (
    <div>
       <h3 className="ContactForm-title">Ваша подборка готова!</h3>
      <div className="ContactForm-text">Оставьте свои контактные данные, чтобы бы мы могли отправить  подготовленный для вас каталог  </div>
      <div className="ContactForm-polosa"></div>
      
      <div className="ContactForm-block">
      <h3 className="ContactForm-title2">Получить предложение</h3>
      <div className="ContactForm-title3">Получите подборку подходящих для вас моделей на почту</div>
        <label>
     
          <input type="text" value={name} onChange={(e) => onChangeName(e.target.value)}  className="ContactForm-input" placeholder="Введите ваше имя"/>
        </label>
        <label>
      
          <input type="email" value={email} onChange={(e) => onChangeEmail(e.target.value)} className="ContactForm-input"  placeholder="Введите вашу почту"/>
        </label>
        <button onClick={onSubmit} className="ContactForm-button">Получить</button>
      </div>
    </div>
  );
};

export default ContactForm;