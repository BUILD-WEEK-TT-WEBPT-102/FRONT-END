import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const EditPlant = (props) => {
  const userId = localStorage.getItem("id");
  const [editPlant, setEditPlant] = useState({
    nickname: "",
    // species: "",
    water_frequency: "",
    species_id: "",
    user_id: "",
  });

  const history = useHistory();
  const plantId = localStorage.getItem("plantId");

  // useEffect(() => {
  //   axiosWithAuth()
  //     .get(`/users/${userId}/plants`)
  //     .then((res) => {
  //       console.log("edit res", res);
  //       localStorage.setItem("plantId", res.data.plantCollection[0].species_id);
  //     })
  //     .catch((err) => console.log(err));
  // }, [id]);

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
    axiosWithAuth()
      .put(`/plants/${plantId}`, editPlant)
      .then((res) => {
        console.log("res", res);
        setEditPlant(res.data);
        history.push("/my-plants");
      })
      .catch((err) => console.log(err));
  };

  const deletePlant = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .delete(`/plants/${plantId}`)
      .then((res) => {
        setEditPlant(res.data);
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
        {/* <input
          type="text"
          name="species"
          onChange={handleChanges}
          placeholder="species"
          value={plant.species}
        /> */}
        <input
          type="text"
          name="water_frequency"
          onChange={handleChanges}
          placeholder="h2oFrequency"
          value={editPlant.water_frequency}
        />
        <button>Update</button>
        <button onClick={deletePlant}>Delete</button>
      </form>
    </div>
  );
};

export default EditPlant;
