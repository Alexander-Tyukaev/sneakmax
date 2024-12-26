import React from "react"
import "./footer.css"

const Footer = () => {
  return (
    <div className="footer-container"> 
       <div className="footer-menu">
        <div className="footer-logo">SneakMax</div>
        <div className="footer-navigate-menu">
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
    </div>
    </div>
  )
};

export default Footer;
