import React, { useEffect, useState } from "react";
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory, useParams } from "react-router-dom";
import PlantCard from "./PlantCard";

const Plant = ({ plantList, setPlantList }) => {
  const [plant, setPlant] = useState(null);
  const userId = localStorage.getItem("id");
  // const params = useParams();
  const history = useHistory();

  const fetchPlant = () => {
    axiosWithAuth()
      .get(`/users/${userId}/plants`)
      .then((res) => {
        console.log("plant res data", res);
        setPlant(res.data);
      })
      .catch((err) => console.log(err));
  };

  const deletePlant = (e) => {
    e.preventDefault();
    axios
      .delete(
        `https://backend-u4-ttwebpt102.herokuapp.com/api/plants/${userId}`
      )
      .then((res) => {
        setPlantList(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchPlant(userId);
  }, [userId]);

  return (
    <div>
      <PlantCard plant={plant} />
      <button onClick={() => history.push(`/edit-plant/${userId}`)}>
        Update
      </button>
      <button onClick={deletePlant}>Delete</button>
    </div>
  );
};

export default Plant;
