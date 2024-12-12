import axios from "axios";
import React, { useEffect, useState } from "react"
import Nouislider from "nouislider-react";
import "./slider.css";
import "./mainpage.css"
import "./cart.css"
import { useNavigate } from "react-router-dom";
import { DETAIL_PAGE_ROUTE } from "../../router/consts";
import Header from "../../components/Header/header";



const MainPage = () => {
    const navigate = useNavigate()
    
    const [sneackers,setSneackers] = useState(null)
    
    const [min, setMin] = useState(1850)
    const [max, setMax] = useState(25768)
    const [sliderValues, setSliderValues] = useState([1850, 25768]);
const [man, setMan] = useState(true)
const [woman, setWoman] = useState(true)

const [size35,setSize35] = useState(false)
const [size36,setSize36] = useState(false)
const [size37,setSize37] = useState(false)
const [size38,setSize38] = useState(false)
const [size39,setSize39] = useState(false)
const [size40,setSize40] = useState(false)
const [size41,setSize41] = useState(false)
const [size42,setSize42] = useState(false)
const [size43,setSize43] = useState(false)

async function fetchData(url) {
  try{
      const response = await axios.get(url)
      setSneackers(response.data)
      console.log(response.data)
  }catch (error){
      console.error('Error fetching :',error.message)
  }
}

useEffect(()=>{
  const url = 'https://03d0ddaaff43dfdf.mokky.dev/sneackers'
  fetchData(url)
},[])


    const clearFilters = () => {
      
        setSliderValues([1850, 25768]);
        setMin(1850);
        setMax(25768);
        setMan(false);
        setWoman(false);
        setSize35(false);
        setSize36(false);
        setSize37(false);
        setSize38(false);
        setSize39(false);
        setSize40(false);
        setSize41(false);
        setSize42(false);
        setSize43(false);
        filter();
        fetchData('https://03d0ddaaff43dfdf.mokky.dev/sneackers'); 
        
        
        
      };

    const filter = () => {
        let gender =''
        let sizes = ''
  
        if(man && !woman){
            gender = '&gender=Мужской'
        }
        else if(!man && woman){
            gender = '&gender=Женский'
        }


        if(size35) { sizes += "&sizes[]=35"}
        if(size36) { sizes += "&sizes[]=36"}
        if(size37) { sizes += "&sizes[]=37"}
        if(size38) { sizes += "&sizes[]=38"}
        if(size39) { sizes += "&sizes[]=39"}
        if(size40) { sizes += "&sizes[]=40"}
        if(size41) { sizes += "&sizes[]=41"}
        if(size42) { sizes += "&sizes[]=42"}
        if(size43) { sizes += "&sizes[]=43"}

      

        const url = 'https://03d0ddaaff43dfdf.mokky.dev/sneackers?price[from]='+ min +'&price[to]=' + max + gender + sizes
        fetchData(url)
    }


  return (
    <div >
    <Header />
    <section className="catalog">
    <div className="catalog-block1">
        <div className="catalog-title">Каталог</div>
    </div>
    <div className="catalog-block2">
    <div className="catalog-filter">
    <div className="filter-text">Подбор по параметрам</div>
    <div className="catalog-price">
        <div className="filter-price">Цена, руб</div>
    <div className="catalog-filter-price">
    <div> {min}</div>
    <div className="catalog-polosa"></div>
    <div>{max} </div>
    </div>
    <div className="slide-filter">
    <Nouislider 
        range={{ min: 1850, max: 25768 }} 
        start={sliderValues}
        connect 
        onUpdate={(slider) =>{
          setSliderValues([Number(slider[0]), Number(slider[1])]);
          setMin(Number(slider[0]))
          setMax(Number(slider[1]))


            console.log(slider)
        }}
    />
    </div>    
    </div>
        <div className="catalog-gender">
        <div className="gender">Пол</div>
        <div className="gender-checkbox">
            <div className="checkbox-gender">
        <label class="custom-checkbox">
            <input type="checkbox" checked={man} onChange={() => setMan(!man)} id="myCheckbox"/>
            <span  class="checkmark"></span>
        </label>
        <span>Мужской</span>
            </div>
            <div className="checkbox-gender">
        <label className="custom-checkbox">
            <input type="checkbox" checked={woman} onChange={() => setWoman(!woman)} />
            <span  class="checkmark"></span>
        </label>
        <span>Женский</span>
        </div>
        </div>
        </div>

        <div className="catalog-size">
            <span className="size-span">Размер</span>
      <div className="size-container">    
    <div  className={`size-number ${size35 ? 'size-number-checked' : '35'}`}onClick={() => setSize35(!size35)}>
      <input type="checkbox" id="size35" checked={size35} onChange={() => {}} style={{ display: 'none' }} /> 35
    </div>
    <div  className={`size-number ${size36 ? 'size-number-checked' : '36'}`}onClick={() => setSize36(!size36)}>
      <input type="checkbox" id="size36" checked={size36} onChange={() => {}} style={{ display: 'none' }} /> 36
    </div>
    <div  className={`size-number ${size37 ? 'size-number-checked' : '37'}`}onClick={() => setSize37(!size37)}>
      <input type="checkbox" id="size37" checked={size37} onChange={() => {}} style={{ display: 'none' }} /> 37
    </div>
    <div  className={`size-number ${size38 ? 'size-number-checked' : '38'}`}onClick={() => setSize38(!size38)}>
      <input type="checkbox" id="size38" checked={size38} onChange={() => {}} style={{ display: 'none' }} /> 38
    </div>
    <div  className={`size-number ${size39 ? 'size-number-checked' : '39'}`}onClick={() => setSize39(!size39)}>
      <input type="checkbox" id="size39" checked={size39} onChange={() => {}} style={{ display: 'none' }} /> 39
    </div>
    <div  className={`size-number ${size40 ? 'size-number-checked' : '40'}`}onClick={() => setSize40(!size40)}>
      <input type="checkbox" id="size40" checked={size40} onChange={() => {}} style={{ display: 'none' }} /> 40
    </div>
    <div  className={`size-number ${size41 ? 'size-number-checked' : '41'}`}onClick={() => setSize41(!size41)}>
      <input type="checkbox" id="size41" checked={size41} onChange={() => {}} style={{ display: 'none' }} /> 41
    </div>
    <div  className={`size-number ${size42 ? 'size-number-checked' : '42'}`}onClick={() => setSize42(!size42)}>
      <input type="checkbox" id="size42" checked={size42} onChange={() => {}} style={{ display: 'none' }} /> 42
    </div>
    <div  className={`size-number ${size43 ? 'size-number-checked' : '43'}`}onClick={() => setSize43(!size43)}>
      <input type="checkbox" id="size43" checked={size43} onChange={() => {}} style={{ display: 'none' }} /> 43
    </div>
        </div>      
        </div>
        <br />
        <button onClick={filter} className="button-filter">Применить фильтры</button>
        <button onClick={clearFilters} className="button-clean">Очистить фильтры</button>
        </div>
        <div className="catalog-cart">
        <br />
       {sneackers && sneackers.map(item =>
            <div key={item.id} className="cart-sneackers">
            {item.id} | {item.title} | {item.price} | {item.sizes.map(size => <span key = {size}>  [{ size }]  </span>)}
        <button onClick={() => navigate(DETAIL_PAGE_ROUTE+ '/' + item.id )}>Посмотреть</button>
            </div>
       )}
<br />

       </div>
       </div>
    </section>
    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ade76f8f407611b8910389e757fece993a048b7424958ac702d67cf33b43b457c&amp;source=constructor" width="680" height="500" frameBorder="0"></iframe>
    </div>
  )
};

export default MainPage;
