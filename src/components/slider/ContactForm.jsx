import React from 'react';

const ContactForm = ({ name, email, onChangeName, onChangeEmail, onSubmit }) => {
  return (
    <div>
      <h3>Ваши контактные данные</h3>
      <div>
        <label>
          Имя:
          <input type="text" value={name} onChange={(e) => onChangeName(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => onChangeEmail(e.target.value)} />
        </label>
        <button onClick={onSubmit}>Получить</button>
      </div>
    </div>
  );
};

export default ContactForm;