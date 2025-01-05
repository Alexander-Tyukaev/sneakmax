
import React from "react"
import Header from "../../components/Header/header";
import About from "../../components/about/about";
import Team from "../../components/team/team";
import MySlider from "../../components/slider/Slider1";
import Faq from "../../components/faq/faq";
import Contacts from "../../components/contacts/contacts";
import Insta from "../../components/insta/insta";
import Footer from "../../components/footer/footer";
import Catalog from "../../components/catalog/catalog";
import MyComponent from "../../components/catalog/MyComponent";


const MainPage = () => {



  return (
    <div>
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
  )
};

export default MainPage;
