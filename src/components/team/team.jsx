import React, { useEffect, useState } from "react"
import axios from "axios";
import "./team.css"

const Team = () => {
    const [comanda, setComanda] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://eea03eb3f415caef.mokky.dev/comanda');
                setComanda(response.data); 
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching:', error.message);
            }
        };
        fetchData(); 
    }, []);

  return (
<div className="team-container" id="team">
    <div className="team-title">Наша команда</div>
    <div className="team-figure">
      <img src={require('../image/Group 72.png')} alt="" />
      </div>
    <div className="team-block">
            {comanda && comanda.map((item) => ( 
                <div key={item.id} className="team-member"> 
                    <img src={item.imgUrl} alt={item.name} className="team-image"/>
                    <h3 className="team-name">{item.name}</h3>
                    <p className="team-role">{item.role}</p>
                </div>
            ))}
        </div>
        </div>
  )
};

export default Team;