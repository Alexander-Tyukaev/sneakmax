import axios from "axios";
import React, { useEffect, useState } from "react"
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";



const MainPage = () => {

    const [sneackers,setSneackers] = useState(null)

    const [min, setMin] = useState(1850)
    const [max, setMax] = useState(25768)

const [man, setMan] = useState(true)
const [woman, setWoman] = useState(true)

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
  
        if(man && !woman){
            gender = '&gender=Мужской'
        }
        else if(!man && woman){
            gender = '&gender=Женский'
        }
        const url = 'https://03d0ddaaff43dfdf.mokky.dev/sneackers?price[from]='+ min +'&price[to]=' + max +gender
        fetchData(url)
    }
  

  return (
    <div>
    <h1> MainPage </h1>

    <div>Минимальная: {min}Руб</div>
    <div>Максимальная: {max}Руб </div>
    <div style={{width:"250px"}}>
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
        <br />
        <div><input type="checkbox" checked={man} onChange={() => setMan(!man)} />Мужской </div>
        <div><input type="checkbox" checked={woman} onChange={() => setWoman(!woman)} />Женский </div>

        <button onClick={filter}>Применить фильтры</button>
       {sneackers && sneackers.map(item =>
            <div key={item.id}>
            {item.id} | {item.title} | {item.price}

            </div>
       )}
    </div>
  )
};

export default MainPage;
