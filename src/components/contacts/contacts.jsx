import React, { useState } from "react";
import "./contacts.css";
import "./contacts768.css";
import "./contacts480.css";
import "./contacts375.css";

const Contacts = () => {
  const images = [
    require('../image/_.png'),
    require('../image/Tooltip.png'),
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const imageClass = currentImageIndex === 1 ? "contacts-image1 tooltip-image" : "contacts-image1";

  return (
    <div className="contacts-container" id="contacts">
    <div className="contacts-block">
      <div className="contacts-block1">
        <div className="contacts-content1">Контакты</div>
        <div className="contacts-content2">
          Главный офис
          <div className="contacts-image1-container">
            <img
              src={images[currentImageIndex]}
              alt=""
              className={imageClass}
              onClick={handleClick}
            />
          </div>
        </div>
        <div className="contacts-content3">+7 800 789 89 89</div>
        <div className="contacts-content4">г. Санкт-Петербург, Комсомольская, 43 к1</div>
        <div className="contacts-content5">отдел продаж</div>
        <div className="contacts-content3">+7 800 789 89 89</div>
        <div className="contacts-content4">г. Санкт-Петербург, Комсомольская, 43 к1</div>
        <div className="contacts-content8">
          <a href="https://vk.com">
            <img src={require('../image/VK.png')} alt="" />
          </a>
          <a href="https://instagram.com">
            <img src={require('../image/Instagram.png')} alt="" />
          </a>
        </div>
      </div>
      <div className="contacts-block2">
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Ade76f8f407611b8910389e757fece993a048b7424958ac702d67cf33b43b457c&amp;source=constructor" className="iframe"
          
        ></iframe>
      </div>
    </div>
    </div>
  );
};

export default Contacts;