import React from 'react';
import { Link } from 'react-router-dom'
import PlantCard from './PlantCard';

const PlantList = ({ plants }) => {
    return (
        <div>
            {
                plants.map(plant => {
                    <Link key={plant.id} to={}>
                        <PlantCard plant={plant}/>
                    </Link>
                })
            }
        </div>
    )
}

export default PlantList