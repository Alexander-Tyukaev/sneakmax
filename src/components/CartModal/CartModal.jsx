import React from 'react';
import  "../../components/catalog/MyComponent.css";
const CartModal = ({isOpen, onClose, cartItems}) => {
  if (!isOpen) return null;

  return (
    <div className="cart-modal-overlay">
       <div className="cart-modal">
            <h2>Корзина</h2>
          {cartItems.length === 0 ? (
                <p>Ваша корзина пуста</p>
            ) : (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index} className='cart-item'>
                            <img src={item.imgUrl} className='cart-item-img' alt={item.title}/>
                          <div className='cart-item-text'>
                            <p> {item.title} </p>
                              <p>Размер: {item.selectedSize}</p>
                            <p>Цена: {item.price} руб.</p>
                          </div>

                       </li>
                    ))}
                </ul>
            )}
            <button onClick={onClose}>Закрыть корзину</button>
        </div>
    </div>
  );
};
export default CartModal;