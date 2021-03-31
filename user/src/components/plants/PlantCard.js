import React from 'react'

const PlantCard = props => {
    console.log("plant props", props)
    return (
        
        <div>
            <h2>{props.plant.nickname}</h2>
            <h3>Species: {props.plant.species}</h3>
            <h3>Water me {props.plant.water_frequency}</h3>
        </div>
    )
}

export default PlantCard;