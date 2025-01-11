import React, { useContext } from 'react';
import "../../components/catalog/MyComponent.css";
import { CartContext } from '../../context/CartContext';
import "./CartModal.css"

const CartModal = ({isOpen, onClose, openFullCart}) => {
const { cartItems, removeFromCart } = useContext(CartContext);

if (!isOpen) return null;

const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.price), 0);
};


return (
    <div className="cart-modal-container">
       <div className="cart-modal-block">
       <button className="modal-close-button" onClick={onClose}>
          &times;
        </button>
          {cartItems.length === 0 ? (
                <p>Ваша корзина пуста</p>
            ) : (
                <div className="modal-ul">
                  
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index} className='cart-item-CartModal'>
                            <img src={item.imgUrl} className='cart-item-png' alt={item.title}/>
                          <div className='cart-price-title'>
                              <p> {item.title} </p>
                                
                                <p> {item.price} руб.</p>
                            </div>
                            <button
                            className="cart-remove-button"
                            onClick={() => removeFromCart(item.id)}>
                              <img src={require('../image/trash 2.png')} alt="Удалить" className="cart-remove-icon"/>
                            </button>
                       </li>
                    ))}
                </ul>
                
                  </div>
            )}
            
            <div className="cart-info-block">
              <div className="calculateTotalPrice">
            <p className="cart-p1">Итого: </p>
            <p className="cart-p2">{calculateTotalPrice()} </p>
            </div>

             <button onClick={openFullCart} className="cart-modal-button">Перейти к оформлению</button>
             </div>
        </div>
    </div>
    );
};

export default CartModal;