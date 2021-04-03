import React, { useEffect, useContext } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import PlantCard from "./PlantCard";
import AddPlant from "./AddPlant";
import { PlantContext } from "../contexts/PlantContext";

export default function PlantList() {
  const { plantList, setPlantList } = useContext(PlantContext);
  const userId = localStorage.getItem("id");

  useEffect(() => {
    axiosWithAuth()
      .get(`/users/${userId}/plants`)
      .then((res) => {
        console.log("plant res data", res);
        setPlantList(res.data.plantCollection);
      })
      .catch((err) => console.log(err));
  }, [userId]);
  console.log(plantList);

  return (
    <div className="container-wrap">
      <div class="plant-card-container container mt-2">
        <div className="row">
          <AddPlant updatePlantList={setPlantList} />
          {plantList.map((plant) => (
            <PlantCard plant={plant} key={plant.species_id} />
          ))}
        </div>
      </div>
    </div>
  );
}
