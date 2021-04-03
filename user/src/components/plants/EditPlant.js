import React, { useState, useEffect, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import { PlantContext } from "../contexts/PlantContext";

const EditPlant = () => {
  const { plantList, setPlantList } = useContext(PlantContext);
  const [editPlant, setEditPlant] = useState({
    nickname: "",
    species_type: "",
    water_frequency: "",
    user_id: parseInt(localStorage.getItem("id")),
  });

  const { push } = useHistory();
  const { id } = useParams();

  useEffect(() => {
    axiosWithAuth()
      .get(`/plants/${id}`)
      .then((res) => {
        console.log("plant_id", res);
        setEditPlant(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleChanges = (e) => {
    e.persist();
    e.preventDefault();
    setEditPlant({
      ...editPlant,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    //console.log(editPlant);
    const editedPlant = {
      nickname: editPlant.nickname,
      species: editPlant.species_type,
      water_frequency: editPlant.water_frequency,
      user_id: parseInt(localStorage.getItem("id")),
    };
    axiosWithAuth()
      .put(`/plants/${id}`, editedPlant)
      .then((res) => {
        console.log(res);
        setPlantList([...plantList, res.data]);
        push("/my-plants");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2>Edit Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nickname"
          onChange={handleChanges}
          placeholder="nickname"
          value={editPlant.nickname}
        />
        <input
          type="text"
          name="species"
          onChange={handleChanges}
          placeholder="species"
          value={editPlant.species_type}
        />
        <input
          type="text"
          name="water_frequency"
          onChange={handleChanges}
          placeholder="h2oFrequency"
          value={editPlant.water_frequency}
        />
        <button onClick={handleSubmit}>Update</button>
      </form>
    </div>
  );
};

export default EditPlant;
