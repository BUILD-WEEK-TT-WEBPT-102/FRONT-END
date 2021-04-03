import React, { useEffect, useContext } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import PlantCard from "./PlantCard";
import AddPlant from "./AddPlant";
import { PlantContext } from "../contexts/PlantContext";

export default function PlantList() {
  const { plantList, setPlantList } = useContext(PlantContext);
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
          <AddPlant updatePlantList={setPlantList} />
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
    </div>
  );
}
