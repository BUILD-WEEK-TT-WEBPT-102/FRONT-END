import React, { useState } from 'react'


const PlantCard = props => {
    const userId = localStorage.getItem("id")
    const [plant, setPlant] = useState({
      nickname: "",
      // species: "",
      water_frequency: "",
      species_id: "",
      user_id: ""
    });

    return (
        
        <div>
            <h2>{props.plant.nickname}</h2>
            <h3>Species: {props.plant.species}</h3>
            <h3>Water me {props.plant.water_frequency}</h3>
        </div>
    )
}

export default PlantCard;