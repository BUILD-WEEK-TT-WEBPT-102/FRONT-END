import React from 'react';
import { Link } from 'react-router-dom'
import PlantCard from './PlantCard';
import AddPlant from './AddPlant'
import { Route } from 'react-router-dom'

const PlantList = ({ plants }) => {

    return (
        <div>
            {
                plants.map(plant => {
                    return (
                    <Link key={plant.id} to={`/edit-plant/${plant.id}`}>
                        <PlantCard plant={plant}/>
                    </Link>
                    )
                })
            }
            <Link to={'/addplant'}>
                <h3>Add new plant</h3>
            </Link>
        </div>
    )
}

export default PlantList