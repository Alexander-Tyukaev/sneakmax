import React, { useState } from 'react';
import Header from './Header';
import MyComponent from './MyComponent';

const items = [
    {
        "id": 1,
        "title": "Air Jordan 1 Retro High OG",
        "price": 150,
        "oldPrice": 200,
        "vendorCode": "555088-100",
        "imgUrl": "https://cdn.shopify.com/s/files/1/0579/2044/8770/products/air-jordan-1-retro-high-og-black-white_1_1200x1200.jpg?v=1676281467",
        "inStock": true,
        "stars": 5,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44",
            "45"
        ],
        "description": "Jordan Brand revives a classic with the Air Jordan 1 Retro High OG. The iconic basketball shoe is constructed with a leather upper and features Nike Air cushioning for added comfort and support. It's a must-have for sneakerheads and basketball fans.",
        "gender": "Male",
        "color": "Black, White",
        "country": "China",
        "compound": "Leather, Rubber"
    },
    {
      "id": 2,
        "title": "Nike Air Force 1 '07",
        "price": 110,
        "oldPrice": null,
        "vendorCode": "CW2288-111",
        "imgUrl": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/0f92386a-063b-41a5-b21a-2a2a9ff26d45/air-force-1-07-mens-shoes-jR85Fw.png",
        "inStock": true,
         "stars": 4,
        "sizes": [
          "40",
          "41",
          "42",
          "43",
          "44",
          "45"
        ],
        "description": "The radiance lives on in the Nike Air Force 1 ’07, the b-ball OG that puts a fresh spin on what you know best: crisp leather, bold colors and the perfect amount of flash to make you shine. Soft suede accents and modern branding update the look.",
        "gender": "Male",
        "color": "White",
        "country": "Vietnam",
         "compound": "Leather, Rubber"
    },
]

const ParentComponent = () => {
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const closeCart = () => {
        setIsCartOpen(false);
    };

    const openCart = () => {
        setIsCartOpen(true);
    };

    const handleAddToCart = (cartItem) => {
        setCartItems((prevItems) => [...prevItems, cartItem]);
    };

    return (
        <div>
            <Header  cartItems={cartItems}  onOpenCart={openCart}/>
            {items.map((item) => (
                <MyComponent
                    key={item.id}
                    item={item}
                    onAddToCart={handleAddToCart}
                    cartItems={cartItems}
                    onCloseCart={closeCart}
                    isOpenCart={isCartOpen}
                />
            ))}
        </div>
    );
};

export default ParentComponent;