import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { MAIN_PAGE_ROUTE } from "../../router/consts";

const DetailPage = () => {
    const [sneak, setSneak] = useState(null)
    const params = useParams()
    let sneakId = params.id

    const navigate = useNavigate()

    const fetchData = async (url) => {
      try {
        const response = await axios.get(url);
        setSneak(response.data);
      } catch (error) {
        console.error("Error fetching :", error.message);
      }
    };
  
    useEffect(() => {
      const initialUrl = "https://03d0ddaaff43dfdf.mokky.dev/sneackers";
      fetchData(initialUrl);
    
  

    },[])
  return (
    <div>
        <button onClick={() => navigate(MAIN_PAGE_ROUTE)}>Назад</button>
      Detail page {sneakId} sneak

    {sneak && <div>
        {sneak.title}
        {sneak.price}
        <img src={sneak.imgUrl} alt="img" />
    </div> }

  </div>
  )
};

export default DetailPage;
