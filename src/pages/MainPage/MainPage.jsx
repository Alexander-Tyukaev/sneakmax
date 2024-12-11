import axios from "axios";
import React, { useEffect, useState } from "react"
import Nouislider from "nouislider-react";
import "./slider.css";
import "./mainpage.css"
import { useNavigate } from "react-router-dom";
import { DETAIL_PAGE_ROUTE } from "../../router/consts";
import Header from "../../components/Header/header";



const MainPage = () => {
    const navigate = useNavigate()

    const [sneackers,setSneackers] = useState(null)

    const [min, setMin] = useState(1850)
    const [max, setMax] = useState(25768)

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
        start={[1850,25768]}
        connect 
        onUpdate={(slider) =>{
            setMin(Number(slider[0]))
            setMax(Number(slider[1]))


            console.log(slider)
        }}
    />
    </div>    
    </div>
        <br />
        <div><input type="checkbox" checked={man} onChange={() => setMan(!man)} />Мужской </div>
        <div><input type="checkbox" checked={woman} onChange={() => setWoman(!woman)} />Женский </div>
        <br />
        <div>
            <div><input type="checkbox" checked={size35} onChange={() => setSize35(!size35)} />35 </div>
            <div><input type="checkbox" checked={size36} onChange={() => setSize36(!size36)} />36 </div>
            <div><input type="checkbox" checked={size37} onChange={() => setSize37(!size37)} />37 </div>
            <div><input type="checkbox" checked={size38} onChange={() => setSize38(!size38)} />38 </div>
            <div><input type="checkbox" checked={size39} onChange={() => setSize39(!size39)} />39 </div>
            <div><input type="checkbox" checked={size40} onChange={() => setSize40(!size40)} />40 </div>
            <div><input type="checkbox" checked={size41} onChange={() => setSize41(!size41)} />41 </div>
            <div><input type="checkbox" checked={size42} onChange={() => setSize42(!size42)} />42 </div>
            <div><input type="checkbox" checked={size43} onChange={() => setSize43(!size43)} />43 </div>

        </div>
        <br />
        <button onClick={filter}>Применить фильтры</button>
        </div>
        <div className="catalog-cart">
        <br />
       {sneackers && sneackers.map(item =>
            <div key={item.id}>
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
