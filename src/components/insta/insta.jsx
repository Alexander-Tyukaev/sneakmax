import React, { useState } from 'react';
import "./insta.css"

const Insta = () => {

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log({ name, phoneNumber });
    setName('');
    setPhoneNumber('');
  };

  return (
    <div className="insta-container">
      <div className="insta-form">
        <h2 className="insta-form-h2">Есть вопросы?</h2>
        <p className="insta-form-p">Заполните форму и наш менеджер свяжется с вами</p>
        <form onSubmit={handleSubmit} className="insta-form-block">
     
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ваше имя"
          className="form-input"
        />
         <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Номер телефона"
          className="form-input"
        />
        <button type="submit" className="form-button">Отправить</button>
    
     
     
    </form>
      </div>
      <div className="insta-block">
        <div className="insta-logo">
      <img src={require('../image/1024px-Instagram_logo 1.png')} alt="" />
       </div>
      <div className="insta-image-block">
        <div className="insta-image-block1">
        <img src={require('../image/Rectangle 37.jpg')} alt="" />
        <img src={require('../image/Rectangle 39.jpg')} alt="" />
        </div>
        <img src={require('../image/Rectangle 38.jpg')} alt="" />
        <div className="insta-image-block1">
        <img src={require('../image/Rectangle 40.jpg')} alt="" />
        <img src={require('../image/Rectangle 41.jpg')} alt="" />
        </div>
      </div>
      </div>
    </div>
  )
};

export default Insta;
