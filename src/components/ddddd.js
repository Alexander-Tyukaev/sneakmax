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
