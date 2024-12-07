import axios from "axios";
import React, { useEffect, useState } from "react"
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";



const MainPage = () => {

    const [sneackers,setSneackers] = useState(null)
    useEffect(()=>{
        async function fetchData() {
            try{
                const response = await axios.get('https://03d0ddaaff43dfdf.mokky.dev/sneackers')
                setSneackers(response.data)
                console.log(response.data)
            }catch (error){
                console.error('Error fetching :',error.message)
            }
        }
        fetchData()
    },[])

  

  return (
    <div>
       MainPage
    
       <Nouislider range={{ min: 0, max: 100 }} start={[20, 80]} connect />    
       {sneackers && sneackers.map(item =>
            <div key={item.id}>
            {item.id} | {item.title}

            </div>
       )}
    </div>
  )
};

export default MainPage;
