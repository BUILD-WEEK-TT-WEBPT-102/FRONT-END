import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import "./plantCard.styles.css";

const PlantCard = ({ updatePlantList, plantList, plant }) => {
  console.log(plant.species_id);

  const deletePlant = (plant) => {
    axiosWithAuth()
      .delete(`/plants/${plant.species_id}`)
      .then((res) => {
        const result = [
          ...plantList.filter(
            (plant) => `${plant.species_id}` !== res.data.plant_id
          ),
        ];
        updatePlantList(result);
        console.log(result);
        console.log(res.data.plant_id);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="col-md-3 col-sm-6">
      <div className="card card-block">
        <h4 className="card-title text-right">
          <i
            className="material-icons"
            onClick={(e) => {
              e.stopPropagation();
              deletePlant(plant);
            }}
          >
            delete_forever
          </i>
        </h4>
        <img
          className="plant-card-img"
          src="https://images.pexels.com/photos/1084188/pexels-photo-1084188.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt="plant"
        />
        <h5 className="card-title mt-3 mb-3">{plant.nickname}</h5>
        <p className="card-text">Species: {plant.species}</p>
        <p>Water me {plant.water_frequency}</p>
      </div>
    </div>
  );
};

export default PlantCard;
