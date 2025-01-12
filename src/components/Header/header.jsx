import React, { useState, useEffect, useContext } from 'react';
import '../Header/header.css';
import '../Header/header1024.css';
import CartModal from "../../components/CartModal/CartModal";
import "../../components/catalog/MyComponent.css";
import axios from 'axios';
import { CartContext } from "../../context/CartContext";
import CartModalFull from "../../components/CartModal/CartModalFull";

const Header = () => {
    const { cartItems } = useContext(CartContext);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isFullCartOpen, setIsFullCartOpen] = useState(false);
    const [sneakers, setSneakers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


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

    const closeFullCart = () => {
      setIsFullCartOpen(false);
    };

    const openFullCart = () => {
       setIsCartOpen(false);
       setIsFullCartOpen(true);
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
                        <div className="navigate-menu">
                        <a href="#slider" className="navigate-about">Подбор товара</a>
                        </div>
                        <div className="navigate-menu">
                            <a href="#team" className="navigate-about">Наша команда</a>
                        </div>
                        <div className="navigate-menu">
                            <a href="#contacts" className="navigate-about">Доставка и оплата</a>
                        </div>
                        <div className="navigate-menu">
                            <a href="#contacts" className="navigate-about">Контакты</a>
                        </div>
                    </div>
                    <div className="header-basket">
                    <div className="navigate-menu" onClick={openFullCart}>
           <p className="navigate-kors"> Корзина </p>
           <img src={require('../image/Vector.png')} alt="" className="header-img1" />
           {cartItems.length > 0 && (
             <span className="cart-count-badge">
                 {cartItems.length}
            </span>
          )}
       </div>
                       
                   

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
                 <button className="header-button" onClick={openCart}>Перейти к покупкам</button>
                <CartModal isOpen={isCartOpen} onClose={closeCart} openFullCart={openFullCart}  />
            </div>
             <CartModalFull isOpen={isFullCartOpen} onClose={closeFullCart} />
        </div>
    );
};
export default Header;