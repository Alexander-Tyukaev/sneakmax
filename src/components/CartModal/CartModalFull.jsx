import React, { useState, useContext } from 'react';
import "../../components/catalog/MyComponent.css";
import { CartContext } from '../../context/CartContext';
import "./CartModalFull.css"

const CartModalFull = ({ isOpen, onClose }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const { cartItems, removeFromCart } = useContext(CartContext);

    if (!isOpen) return null;

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + parseFloat(item.price), 0);
    };
    const handleOrder = () => {
        if (!name || !phone || !email) {
            alert('Пожалуйста, заполните все поля');
            return;
        }
        const orderData = {
            name,
            phone,
            email,
            items: cartItems,
            totalPrice: calculateTotalPrice(),
        };

        console.log('Order data:', orderData);
        alert('Спасибо за ваш заказ!');

        setName('');
        setPhone('');
        setEmail('');
        onClose();
    }

    return (
        <div className="cart-modal-container2">
            <div className="cart-modal-block2">
                <div className="cart-modal-header2">
                  <h3>Оформление заказа</h3>
                   <button className="modal-close-button1" onClick={onClose}>
                       &times;
                    </button>
                   </div>

                {cartItems.length === 0 ? (
                    <p>Ваша корзина пуста</p>
                ) : (
                    <div className="modal-ul2">
                      <div className="modal-info1-container">
                      <div className="modal-p-container">
                      <p className="modal-p">Количество товаров в заказе:  </p>
                      <p className="modal-p2">{cartItems.length} </p>
                      </div>
                        <div className="modal-p-container">
                        <p className="modal-p">Общая сумма заказа: </p>
                        <p className="modal-p2">{calculateTotalPrice()}</p>
                        </div>
                        <p className="modal-p3">Состав заказа</p>
                        </div>
                        <ul>
                            {cartItems.map((item, index) => (
                                <li key={index} className='cart-item-CartModal'>
                                    <img src={item.imgUrl} className='cart-item-png1' alt={item.title}/>
                                    <div className='cart-price-title'>
                                        <p> {item.title} </p>
                                        <p>Цена: {item.price} руб.</p>
                                    </div>
                                    <button
                                        className="cart-remove-button1"
                                        onClick={() => removeFromCart(item.id)}>
                                        удалить
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                <div className="cart-form">

                    <input className="cart-input"
                           type="text"
                           placeholder="Ваше имя"
                           value={name}
                           onChange={(e) => setName(e.target.value)}
                    />
                    <input className="cart-input"
                           type="tel"
                           placeholder="Номер телефона"
                           value={phone}
                           onChange={(e) => setPhone(e.target.value)}
                    />
                    <input className="cart-input"
                           type="email"
                           placeholder="Электронная почта"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                    />
                    <button onClick={handleOrder} className="checkout-button">
                        Заказать
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartModalFull;