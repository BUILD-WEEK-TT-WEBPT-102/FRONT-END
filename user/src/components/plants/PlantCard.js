import React, { useState } from 'react'
import axios from 'axios'

const PlantCard = props => {
    const userId = localStorage.getItem("id")
    const [plant, setPlant] = useState({
      nickname: "",
      // species: "",
      water_frequency: "",
      species_id: "",
      user_id: ""
    });

    // const deletePlant = (e) => {
    //     e.preventDefault();
    //     axios
    //       .delete(
    //         `https://backend-u4-ttwebpt102.herokuapp.com/api/plants/${userId}`
    //       )
    //       .then((res) => {
    //         setPlant(res.data);
    //       })
    //       .catch((err) => console.log(err));
    //   }

    return (
        
        <div>
            <h2>{props.plant.nickname}</h2>
            <h3>Species: {props.plant.species}</h3>
            <h3>Water me {props.plant.water_frequency}</h3>
        </div>
    )
}

export default PlantCard;