import React from 'react'

const PlantCard = props => {
    return (
        <div>
            <h2>{props.nickname}</h2>
            <h3>Species: {props.species}</h3>
            <h3>Water me {props.h2oFrequency}</h3>
        </div>
    )
}

export default PlantCard;