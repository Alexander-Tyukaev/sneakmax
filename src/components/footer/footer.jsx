import React from "react"
import "./footer.css"
import "../Header/header1024.css"


const Footer = () => {
  return (
    <div className="footer-container"> 
       <div className="footer-menu">
        <div className="footer-logo">SneakMax</div>
        <div className="footer-navigate-menu">
            <div className="navigate-menu-footer">
            <a href="#catalog" className="navigate-about"> Каталог</a>
              </div>
            <div className="navigate-menu-footer">
            <a href="#about" className="navigate-about-footer"> О нас</a>
             </div>
            <div className="navigate-menu-footer">
             <a href="#slider" className="navigate-about-footer">Подбор товара</a>
             </div>
            <div className="navigate-menu-footer">
            <a href="#team" className="navigate-about-footer">Наша команда</a>
              </div>
            <div className="navigate-menu-footer">
                 <a href="#contacts" className="navigate-about-footer">Доставка и оплата</a></div>
            <div className="navigate-menu-footer">
                <a href="#contacts" className="navigate-about-footer">Контакты</a>
 </div>
        </div>
    </div>
    </div>
  )
};

export default Footer;
