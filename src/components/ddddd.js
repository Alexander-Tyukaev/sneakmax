import React, { useState } from 'react';
import '../Header/header.css'
import Korsina from "../../components/CartModal/Korsina";
import "../../components/catalog/MyComponent.css";  


<button className="korsina-button" onClick={openKorsina}>Открыть корзину</button>
<Korsina isOpen={isKorsinaOpen} onClose={closeKorsina} />

const [isKorsinaOpen, setIsKorsinaOpen] = useState(false);

const openKorsina = () => {
    setIsKorsinaOpen(true);
};

const closeKorsina = () => {
    setIsKorsinaOpen(false);
};



import React, { useState, useContext } from 'react';
import axios from 'axios';
import SimpleModal from './SimpleModal';
import './MyComponent.css';
import { CartContext } from '../../context/CartContext';

const renderStars = (stars) => {
    if (!stars) return null;
    const fullStars = "★".repeat(stars);
    const emptyStars = "☆".repeat(5 - stars);
    return <span className="star-rating">{fullStars}{emptyStars}</span>;
};

const MyComponent = ({item}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [sneaker, setSneaker] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
  const {addToCart} = useContext(CartContext);

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
        setSelectedSize(size);
    };

    const handleAddToCart = () => {
        if (selectedSize && sneaker) {
          addToCart({...sneaker, selectedSize});
           setIsModalOpen(false);
           setSelectedSize(null)
        } else {
            alert("Пожалуйста, выберите размер");
        }
    };

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
                            <div className="modal-footer">
                                <button className="cart-button" onClick={handleAddToCart}>Добавить в корзину</button>
                            </div>
                        </div>
                    </div>
                ) : null}
            </SimpleModal>
        </div>
    );
};

export default MyComponent;