import React, { useState, useContext } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import { PlantContext } from "../contexts/PlantContext";
import "./plantCard.styles.css";

const AddPlant = () => {
  const { plantList, setPlantList } = useContext(PlantContext);
  const [newPlant, setNewPlant] = useState({
    nickname: "",
    species: "",
    water_frequency: "",
    user_id: parseInt(localStorage.getItem("id")),
    // species_id: "",
  });

  const handleChanges = (e) => {
    e.persist();
    setNewPlant({
      ...newPlant,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    console.log("submit plant", newPlant);
    e.preventDefault();
    axiosWithAuth()
      .post("/plants", newPlant)
      .then((res) => setPlantList([...plantList, res.data.plantCollection]))
      .catch((err) => console.log(err));
  };

  return (
    <div class="plant-card-bttm col-md-3 col-sm-6">
      <div className="text-center">
        <div className="centered">
          <div className="card card-block">
            <h5 class="card-title mt-3 mb-3 firstLine">
              {" "}
              N &nbsp; E &nbsp; W &nbsp; &nbsp; P &nbsp; L &nbsp; A &nbsp; N
              &nbsp; T
            </h5>
            ----------------------------
            <p className="card-text secondLine add-plant-input">
              Add new plant to the list
            </p>
            <p>
              {" "}
              <input
                type="text"
                name="nickname"
                onChange={handleChanges}
                placeholder="nickname"
                value={newPlant.nickname}
              />{" "}
            </p>
            <p>
              {" "}
              <input
                type="text"
                name="species"
                onChange={handleChanges}
                placeholder="species"
                value={newPlant.species}
              />{" "}
            </p>
            <p>
              {" "}
              <input
                type="text"
                name="water_frequency"
                onChange={handleChanges}
                placeholder="h20Frequency"
                value={newPlant.water_frequency}
              />{" "}
            </p>
            <button
              onClick={handleSubmit}
              type="button"
              class="add-btn btn btn-outline-success"
            >
              ADD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPlant;
