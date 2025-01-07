import React, { useState, useEffect } from 'react';
import MyComponent from "../../components/catalog/MyComponent";
import CartModal from './CartModal';
import  "../../components/catalog/MyComponent.css";
import axios from 'axios';
import SimpleModal from '../../components/catalog/SimpleModal';

function Korsina({ isOpen, onClose }) {
    const [sneakers, setSneakers] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
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

    const addToCart = (sneaker) => {
        setCartItems((prev) => [...prev, sneaker]);
    };

    const openCart = () => {
        setIsCartOpen(true);
    };

    const closeCart = () => {
        setIsCartOpen(false);
    };
    if (!isOpen) return null;
    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <SimpleModal isOpen={isOpen} onClose={onClose} >
            <button className="cart-button" onClick={openCart}>Корзина ({cartItems.length}) </button>
            <div className='cart-wrapper'>
                {sneakers.map((item) => (
                    <div key={item.id} className="cart-sneacker">
                        <img src={item.imgUrl} alt={item.title} className="cart-images"/>
                        <div className="cart-cart">
                        <h3>{item.title}</h3>
                        <p>Цена: {item.price}</p>
                        <MyComponent item={item} addToCart={addToCart}/>
                        </div>
                    </div>
                ))}
            </div>
            <CartModal isOpen={isCartOpen} onClose={closeCart} cartItems={cartItems} />
        </SimpleModal>
    );
}

export default Korsina;
