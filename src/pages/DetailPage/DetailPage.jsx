import React, { useEffect, useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./DetailPage.css"; 


const DetailPage = () => {
const [sneak, setSneak] = useState(null);
    const {id} = useParams();
const navigate = useNavigate();


const fetchData = useCallback(async () => {
    try {
        const url = `https://03d0ddaaff43dfdf.mokky.dev/sneackers/${id}`;
        const response = await axios.get(url);
        setSneak(response.data);
    } catch (error) {
        console.error("Error fetching data:", error);
        if (error.response && error.response.status === 404) {
        setSneak({ error: "Кроссовки не найдены" });
        }
    }
    }, [id]);

useEffect(() => {
        fetchData();
}, [fetchData]);


const handleOrderClick = () => {
   
    console.log("Order button clicked for:", sneak);
    alert("Вы нажали заказать. В консоли можно посмотреть информацию.")
};


return (
    <div className="page-container">
        <h1>Детальная информация о кроссовках</h1>

        {sneak && sneak.error ? (
        <p>Ошибка: {sneak.error}</p>
        ) : sneak ? (
        <div className="sneak-details">
            <img src={sneak.imgUrl} alt={sneak.title} className="sneak-image" />
            <div className="sneak-text-container">
            <h2>{sneak.title}</h2>
            <p>Цена: {sneak.price}</p>
            {sneak.oldPrice && <p>Старая цена: {sneak.oldPrice}</p>}
            {sneak.stars && <p>Рейтинг: {sneak.stars}</p>}
            <p>Описание: {sneak.description}</p>
            <p>Артикул: {sneak.vendorCode}</p>
            {sneak.inStock && (
                <p>В наличии: {sneak.inStock ? "Да" : "Нет"}</p>
            )}
            {sneak.gender && <p>Пол: {sneak.gender}</p>}
            {sneak.sizes && <p>Размеры: {sneak.sizes.join(', ')}</p>}
            {sneak.country && <p>Страна: {sneak.country}</p>}
            {sneak.compound && <p>Состав: {sneak.compound}</p>}
            {sneak.color && <p>Цвет: {sneak.color}</p>}

            <button onClick={handleOrderClick} className="order-button">
                Заказать
            </button>
            </div>
        </div>
        ) : (
        <p>Загрузка...</p>
        )}
    </div>
    
);
};

export default DetailPage;