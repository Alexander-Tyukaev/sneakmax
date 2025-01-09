import React, { useState,  useEffect, useContext } from 'react';
import '../Header/header.css';
import CartModal from "../../components/CartModal/CartModal";
import "../../components/catalog/MyComponent.css";
import Korsina from "../../components/CartModal/Korsina";
import axios from 'axios';
import { CartContext } from "../../context/CartContext";
const Header = () => {
    const { cartItems } = useContext(CartContext);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [sneakers, setSneakers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isKorsinaOpen, setIsKorsinaOpen] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://03d0ddaaff43dfdf.mokky.dev/sneackers');
                setSneakers(response.data);
            } catch (e) {
                console.error('error', e);
                setError("Ошибка загрузки данных");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const openCart = () => {
    setIsCartOpen(true);
  };

const openKorsina = () => {
    setIsKorsinaOpen(true);
};

const closeKorsina = () => {
    setIsKorsinaOpen(false);
};



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
              <div className="navigate-menu" >Корзина 
                {/* ({cartItems.length}) */}

              </div>
             
            <img src={require('../image/Vector.png')} alt="" className="header-img1" />
            <img src={require('../image/tovarj.png')} alt="" className="header-img2" />
          </div>
        </div>
        <div className="header-line"></div>
      </div>
      <div className="header-description">Кроссовки известных брендов <br />
      с доставкой по России и СНГ
      </div>
      <div className="header-description2">Мы продаем кроссовки брендов Nike, Adidas, Puma, Reebok,<br/> Converse и многие другие по низким ценам</div>
      <div className="header-description3">SneakMax</div>
      <div className="button-div">
        <button className="header-button" onClick={openCart}>Перейти к покупкам</button>
        <CartModal isOpen={isCartOpen} onClose={closeCart} cartItems={cartItems} />
        {/* <Korsina isOpen={isKorsinaOpen} onClose={closeKorsina} /> */}
      </div>
    </div>
  );
};

export default Header;