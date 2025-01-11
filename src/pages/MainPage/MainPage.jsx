import React from "react";
import Header from "../../components/Header/header";
import About from "../../components/about/about";
import Team from "../../components/team/team";
import MySlider from "../../components/slider/Slider1";
import Faq from "../../components/faq/faq";
import Contacts from "../../components/contacts/contacts";
import Insta from "../../components/insta/insta";
import Footer from "../../components/footer/footer";
import Catalog from "../../components/catalog/catalog";
import { CartProvider } from "../../context/CartContext";


const MainPage = () => {
    return (
        <CartProvider>
             <div className="main-page">
                  <Header />
                   <Catalog />
                  <About />
                  <MySlider />
                  <Team />
                  <Faq />
                 <Contacts />
                  <Insta />
                 <Footer />
            </div>
        </CartProvider>
    );
};

export default MainPage;