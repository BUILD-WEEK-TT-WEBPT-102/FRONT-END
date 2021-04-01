import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import PlantCard from "./PlantCard";

export default function PlantList({ plantList, setPlantList }) {
  const userId = localStorage.getItem("id");

  const fetchPlant = () => {
    axiosWithAuth()
      .get(`/users/${userId}/plants`)
      .then((res) => {
        console.log("plant res data", res);
        setPlantList(res.data.plantCollection);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchPlant(userId);
  }, [userId]);

  console.log(plantList);

  return (
    <div className="container-wrap">
      <div class="plant-card-container container mt-2">
        <div className="row">
          {plantList.map((plant) => (
            <PlantCard
              plantList={plantList}
              updatePlantList={setPlantList}
              plant={plant}
              key={plant.index}
            />
          ))}
        </div>
      </div>
      <Link to={"/add-plant"}>
        <h3>Add new plant</h3>
      </Link>
    </div>
  );
}
