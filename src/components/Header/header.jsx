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
            <img src={require('../image/Vector.png')} alt="" />
            <img src={require('../image/tovarj.png')} alt="" />
        
        </div>
        </div>
        <div className="header-line"></div>
      </div>
      <div></div>
      <div></div>
      <button>Перейти к покупкам</button>
    </div>
  )
};

export default Header;
