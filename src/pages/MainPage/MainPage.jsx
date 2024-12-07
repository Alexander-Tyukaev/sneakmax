import axios from "axios";
import React, { useEffect, useState } from "react"
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";



const MainPage = () => {

    const [sneackers,setSneackers] = useState(null)
    const [min, setMin] = useState(1850)
    const [max, setMax] = useState(25768)
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
       
        const url = 'https://03d0ddaaff43dfdf.mokky.dev/sneackers?price[from]='+ min +'&price[to]=' + max
        fetchData(url)
    }
  

  return (
    <div>
    MainPage

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
