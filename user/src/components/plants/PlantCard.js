import React from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import "./plantCard.styles.css";

const PlantCard = ({ updatePlantList, plantList, plant }) => {
  const { push } = useHistory();

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
        //console.log(result);
        //console.log(res.data.plant_id);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="col-md-3 col-sm-6">
      <div className="card card-block">
        <h4 className="card-title text-right">
          <i
            class="material-icons"
            onClick={() => push(`/edit-plant/${plant.species_id}`)}
          >
            create
          </i>
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
          src="https://images.pexels.com/photos/1445419/pexels-photo-1445419.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt="plant"
        />
        <h5 className="card-title mt-2 mb-3">{plant.nickname}</h5>
        <p className="card-text mb-1">Species: {plant.species_type}</p>
        <h6>Water me {plant.water_frequency}</h6>
      </div>
    </div>
  );
};

export default PlantCard;
