import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import { PlantContext } from "../contexts/PlantContext";
import "./plantCard.styles.css";

const PlantCard = ({ plant }) => {
  const { plantList, setPlantList } = useContext(PlantContext);
  const { push } = useHistory();

  const deletePlant = () => {
    axiosWithAuth()
      .delete(`/plants/${plant.plant_id}`)
      .then((res) => {
        console.log(res);
        const result = [
          ...plantList.filter(
            (item) => `${item.plant_id}` !== res.data.plant_id
          ),
        ];
        setPlantList(result);
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
            class="material-icons"
            onClick={() => push(`/edit-plant/${plant.plant_id}`)}
          >
            create
          </i>
          <i
            className="material-icons"
            onClick={(e) => {
              e.stopPropagation();
              deletePlant();
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
