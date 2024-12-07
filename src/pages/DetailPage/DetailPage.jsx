import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailPage = () => {
    const [sneak, setSneak] = useState(null)
    const params = useParams()
    let sneakId = params.id

    useEffect(() =>{
        async function fetchData(url) {
            try{
                const response = await axios.get(url)
                setSneak(response.data)
              
            }catch (error){
                console.error('Error fetching :',error.message)
            }
        }
        const url = 'https://03d0ddaaff43dfdf.mokky.dev/sneackers'
        fetchData(url)

    },[])
  return (
    <div>
      Detail page {sneakId} sneak
 os{}    </div>
  )
};

export default DetailPage;
