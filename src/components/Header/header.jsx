import React from "react"
import '../Header/header.css'

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-menu">
        <div className="header-mini-menu">
        <div className="header-logo">SneakMax</div>
        <div className="header-navigate-menu">
            <div className="navigate-menu">Каталог</div>
            <div className="navigate-menu">О нас</div>
            <div className="navigate-menu">Подбор товара</div>
            <div className="navigate-menu">Наша команда</div>
            <div className="navigate-menu">Доставка и оплата</div>
            <div className="navigate-menu">Контакты</div>
        </div>
        <div className="header-basket">
            <div className="navigate-menu">Корзина </div>
            <img src={require('../image/Vector.png')} alt="" className="header-img1"/>
            <img src={require('../image/tovarj.png')} alt="" className="header-img2"/>
        
        </div>
        </div>
        <div className="header-line"></div>
      </div>
      <div className="header-description">Кроссовки известных брендов 
      с доставкой по России и СНГ
      </div>
      <div className="header-description2">Мы продаем кроссовки брендов Nike, Adidas, Puma, Reebok, Converse и многие другие по низким ценам</div>
      <div className="header-description3">SneakMax</div>
      <button className="header-button">Перейти к покупкам</button>
    </div>
  )
};

export default Header;
