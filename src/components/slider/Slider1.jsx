import React, { useState } from 'react';
import SliderComponent from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";
import ShoeTypeSelection from "./ShoeTypeSelection";
import ShoeSizeSelection from "./ShoeSizeSelection";
import FeedbackForm from "./FeedbackForm";
import ContactForm from "./ContactForm";

const MySlider = () => {
  const [shoeType, setShoeType] = useState('');
  const [shoeSize, setShoeSize] = useState('');
  const [feedback, setFeedback] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow currentSlide={currentSlide} />, 
    afterChange: (current) => setCurrentSlide(current), 
  };

  const handleSubmit = () => {
    console.log({ shoeType, shoeSize, feedback, name, email });
    setName('');
    setEmail('');
    setFeedback('');
  };

  const handleFeedbackSubmit = () => {
    console.log({ feedback });
    setFeedback('');
  };

  return (
    <div className="slider">
    <SliderComponent {...settings}>
      <ShoeTypeSelection shoeType={shoeType} onChange={setShoeType} />
      <ShoeSizeSelection shoeSize={shoeSize} onChange={setShoeSize} />
      <FeedbackForm feedback={feedback} onChange={setFeedback} onSubmit={handleFeedbackSubmit} />
      <ContactForm name={name} email={email} onChangeName={setName} onChangeEmail={setEmail} onSubmit={handleSubmit} />
    </SliderComponent>
  </div>
);
};

const NextArrow = (props) => {
const { onClick } = props;
return (
  <button onClick={onClick} className="slider-forward">Следующий шаг</button>
);
};

const PrevArrow = ({ currentSlide, ...props }) => { // Destructure currentSlide
const { onClick } = props;
return (
  <button
    onClick={onClick}
    className={`slider-back ${currentSlide === 0 ? 'hide' : ''}`} // Conditional class
  >
    Предыдущий шаг
  </button>
);
};

export default MySlider;
                                          