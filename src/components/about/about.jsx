import React from "react"
import "./about.css"
import "./about1024.css"
import "./about768.css"
import "./about480.css"
import "./about.375.css"

const About = () => {
  return (
    <div className="about-container" id="about">
      <div className="about-figure">
      <img src={require('../image/figure.png')} alt=""  className="about-figure-img"/>
      </div>
      <div className="about-text">
        <div className="about-title">
            <h2>Пара слов о нас</h2>
        </div>
        <div className="about-block">Спорт держит нас в форме. Учит дисциплине. Объединяет нас. Через спорт мы можем менять жизни. В том числе с помощью воодушевляющих историй спортсменов. Чтобы помочь тебе подняться и двигаться вперед. </div>
        <div className="about-sneackmax">
            <div className="about-polosa"></div> SneakMax
            </div>
      </div>
      <div className="about-image">
      <img src={require('../image/Mask Group.png')} alt="" className="about-image-png"/>
      </div>
    </div>
  )
};

export default About;
