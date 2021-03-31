import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from 'react-router-dom'

const EditPlant = (props) => {
  const [plant, setPlant] = useState({
    nickname: "",
    // species: "",
    water_frequency: "",
    species_id: "",
    user_id: ""
  });

  const { id } = useParams()
  const history = useHistory();

  useEffect(() => {
      axios
        .get(`https://backend-u4-ttwebpt102.herokuapp.com/api/plants/${id}`)
        .then(res => setPlant(res.data))
        .catch(err => console.log(err))
  }, [id])

  const handleChanges = e => {
      e.persist();
      e.preventDefault();
      setPlant({
          ...plant,
          [e.target.name]: e.target.value
      })
  }

  const handleSubmit = ev => {
    ev.preventDefault();
    axios
        .put(`https://backend-u4-ttwebpt102.herokuapp.com/api/plants/${id}`, plant)
        .then(res => {
          console.log('res', res)
          setPlant(res.data)
          history.push(`/plant-list/${id}`)
        })
        .catch(err => console.log(err))
  }

  return (
    <div>
      <h2>Edit Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nickname"
          onChange={handleChanges}
          placeholder="nickname"
          value={plant.nickname}
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
          value={plant.water_frequency}
        />
        <button>Update</button>
      </form>
    </div>
  );
};

export default EditPlant;