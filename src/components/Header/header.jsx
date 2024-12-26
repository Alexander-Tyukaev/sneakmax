import React from "react"
import '../Header/header.css'

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-menu">
        <div className="header-mini-menu">
        <div className="header-logo">SneakMax</div>
        <div className="header-navigate-menu">
        <div className="navigate-menu">
            <a href="#catalog" className="navigate-about"> Каталог</a>
              </div>
            <div className="navigate-menu">
            <a href="#about" className="navigate-about"> О нас</a>
             </div>
            <div className="navigate-menu"></div>
             <a href="#slider" className="navigate-about">Подбор товара</a>
            <div className="navigate-menu">
            <a href="#team" className="navigate-about">Наша команда</a>
              </div>
            <div className="navigate-menu">
                 <a href="#contacts" className="navigate-about">Доставка и оплата</a></div>
            <div className="navigate-menu">
                <a href="#contacts" className="navigate-about">Контакты</a>
 </div>
        </div>
        <div className="header-basket">
            <div className="navigate-menu">Корзина </div>
            <img src={require('../image/Vector.png')} alt="" className="header-img1"/>
            <img src={require('../image/tovarj.png')} alt="" className="header-img2"/>
        
        </div>
        </div>
        <div className="header-line"></div>
      </div>
      <div className="header-description">Кроссовки известных брендов <br/>
      с доставкой по России и СНГ
      </div>
      <div className="header-description2">Мы продаем кроссовки брендов Nike, Adidas, Puma, Reebok,<br/> Converse и многие другие по низким ценам</div>
      <div className="header-description3">SneakMax</div>
      <div className="button-div">
      <button className="header-button">Перейти к покупкам</button>
      </div>
    </div>
  )
};

export default Header;
