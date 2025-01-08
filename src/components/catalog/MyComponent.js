
import React, { useState } from 'react';
import axios from 'axios';
import SimpleModal from './SimpleModal';
import './MyComponent.css';
import CartModal from "../../components/CartModal/CartModal";

const renderStars = (stars) => {
  if (!stars) return null;
  const fullStars = "★".repeat(stars);
  const emptyStars = "☆".repeat(5 - stars);
  return <span className="star-rating">{fullStars}{emptyStars}</span>;
};

const MyComponent = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sneaker, setSneaker] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  

    const closeCart = () => {
        setIsCartOpen(false);
    };
    const openCart = () => {
        setIsCartOpen(true);
    };

    const handleOpenModal = async (id) => {
        setLoading(true);
        try {
            const url = `https://03d0ddaaff43dfdf.mokky.dev/sneackers/${id}`;
            const response = await axios.get(url);
            setSneaker(response.data);
        } catch (e) {
            console.error('Error fetching sneaker data:', e);
            setError('Ошибка загрузки данных');
        } finally {
            setLoading(false);
            setIsModalOpen(true);
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSneaker(null);
        setError(null);
        setSelectedSize(null)
    };


   const handleSizeChange = (size) => {
        setSelectedSize(size)
    }
  const addToCart = (sneaker) => {
        setCartItems((prev) => [...prev, sneaker]);
    };
  const handleAddToCart = () => {
        if (selectedSize && sneaker) {
         addToCart({...sneaker, selectedSize});
          setIsModalOpen(false);
           setSelectedSize(null);
        } else {
          alert("Пожалуйста, выберите размер");
        }
     }


  return (
      <div className="modal-wrapper">
        <button onClick={() => handleOpenModal(item.id)} className="cart-viewing">Посмотреть</button>

          <SimpleModal isOpen={isModalOpen} onClose={handleCloseModal}>
              {loading ? (
                  <p>Загрузка...</p>
              ) : error ? (
                  <p>{error}</p>
              ) : sneaker ? (
                  <div className="modal-content-wrapper">


                      <div className="modal-header">
                       <button className="cart-button" onClick={openCart}>Корзина ({cartItems.length}) </button>
                       </div>
                        <div className="modal-img-description">
                          <img src={sneaker.imgUrl} alt={sneaker.title} className="sneaker-image1"/>
                          <p className="modal-description1">Описание: {sneaker.description}</p>
                        </div>
                       <div className="sneaker-info">


                         <div className="sneaker-atrb-instock">
                             <p className="sneaker-atrb">Артикул: {sneaker.vendorCode}</p>
                             {<p className="sneaker-atrb">В наличии: {sneaker.inStock ? "Да" : "Нет"}</p>}
                         </div>

                        <h2>{sneaker.title}</h2>
                         {sneaker.stars && <p> {renderStars(sneaker.stars)}</p>}

                         <div className='checkbox-wrapper'>
        {sneaker.sizes?.map(size => (
          <label
            key={size}
            className={`checkbox-label ${selectedSize === size ? 'selected' : ''}`}
            >
            <input
              type="radio"
              name="size"
              value={size}
              checked={selectedSize === size}
              onChange={() => handleSizeChange(size)}
            />
            <span>{size}</span>
          </label>
        ))}
      </div>

                      <p className="sneaker-price-oldPrice"> {sneaker.price}{sneaker.oldPrice && <>
                          <span className="old-price"> {sneaker.oldPrice}</span></>}</p>
                            <button className="sneaker-button" onClick={handleAddToCart}>Заказать</button>

                            <div className="sneaker-span">
                                <p>✓ Бесплатная доставка до двери</p>
                                <p>✓ Оплата заказа при получении</p>
                                <p>✓ Обмен в течении двух недель</p>
                            </div>
                            <div className="sneaker-characteristics">
                                <p className="characteristics">Характеристики</p>
                                {sneaker.gender && <p>Пол: {sneaker.gender}</p>}
                                {sneaker.color && <p>Цвет: {sneaker.color}</p>}
                                {sneaker.country && <p>Страна: {sneaker.country}</p>}
                                {sneaker.compound && <p>Состав: {sneaker.compound}</p>}
                            </div>
                        </div>
                  </div>
              ) : (
                null
              )}
          </SimpleModal>
              <CartModal isOpen={isCartOpen} onClose={closeCart} cartItems={cartItems} />
        </div>
  );
};

export default MyComponent;