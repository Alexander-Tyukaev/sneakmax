import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { MAIN_PAGE_ROUTE } from "../../router/consts";

const DetailPage = () => {
    const [sneak, setSneak] = useState(null);
    const { id: sneakId } = useParams(); 
    const navigate = useNavigate();

    const fetchData = async () => {
        try {
            const url = `https://03d0ddaaff43dfdf.mokky.dev/sneackers/${sneakId}`; 
            const response = await axios.get(url);
            setSneak(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
          
            if(error.response && error.response.status === 404){
                setSneak({error: "Кроссовки не найдены"});
            }
        }
    };

    useEffect(() => {
        if (sneakId) { 
            fetchData();
        }
    }, [sneakId]); 

    return (
        <div>
            <button onClick={() => navigate(MAIN_PAGE_ROUTE)}>Назад</button>
            <h1>Детальная информация о кроссовках</h1> 

            {sneak && sneak.error ? (
                <p>Ошибка: {sneak.error}</p>
            ) : sneak ? (
                <div>
                    <h2>{sneak.title}</h2>
                    <p>Цена: {sneak.price}</p>
                    <img src={sneak.imgUrl} alt={sneak.title} /> 
                </div>
            ) : (
                <p>Загрузка...</p>
            )}
        </div>
    );
};

export default DetailPage;