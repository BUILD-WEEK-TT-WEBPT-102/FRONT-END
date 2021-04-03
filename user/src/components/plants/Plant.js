import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import PlantCard from "./PlantCard";

const Plant = ({ plantList, setPlantList }) => {
  const [plant, setPlant] = useState(null);
  const params = useParams();
  const history = useHistory();

  const fetchPlant = (id) => {
    axios
      .get(`https://backend-u4-ttwebpt102.herokuapp.com/api/plants/${id}`)
      .then((res) => setPlant(res.data))
      .catch((err) => console.log(err));
  };

  const deletePlant = (e) => {
    e.preventDefault();
    axios
      .delete(
        `https://backend-u4-ttwebpt102.herokuapp.com/api/plants/${params.id}`
      )
      .then((res) => {
        setPlantList(res.data)
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchPlant(params.id);
  }, [params.id]);

  return (
    <div>
      <PlantCard plant={plant} />
      <button onClick={() => history.push(`/edit-plant/${params.id}`)}>
        Update
      </button>
      <button onClick={deletePlant}>Delete</button>
    </div>
  );
};

export default Plant;
