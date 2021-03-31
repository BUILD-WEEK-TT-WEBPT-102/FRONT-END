import React, { useState } from "react";
import axios from "axios";

const AddPlant = () => {
  const [plant, setPlant] = useState({
    nickname: "",
    species: "",
    water_frequency: "",
    species_id: "",
    user_id: "",
  });

  const handleChanges = (e) => {
    e.persist();
    setPlant({
      ...plant,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    // // would replace plant in post request
    // const newPlant = {
    //   ...plant,
    //   // if redux
    //   user_id: props.user.id
    // }
      e.preventDefault();
      console.log("seth", plant)
      axios
        .post('https://backend-u4-ttwebpt102.herokuapp.com/api/plants', plant)
        .then(res => console.log('addplant post req', res))
        .catch(err => console.log(err.message))
  }

  return (
    <div>
      <h2>Add New Plant!</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nickname"
          onChange={handleChanges}
          placeholder="nickname"
          value={plant.nickname}
        />
        <input
          type="text"
          name="species"
          onChange={handleChanges}
          placeholder="species"
          value={plant.species}
        />
        <input
          type="text"
          name="water_frequency"
          onChange={handleChanges}
          placeholder="h20Frequency"
          value={plant.water_frequency}
        />
        <button>Add New Plant</button>
      </form>
    </div>
  );
};

export default AddPlant;
