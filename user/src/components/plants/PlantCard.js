import React, { useState } from "react";
import axios from "axios";

import "./plantCard.styles.css";

const PlantCard = (props) => {
  const userId = localStorage.getItem("id");
  const [plant, setPlant] = useState({
    nickname: "",
    // species: "",
    water_frequency: "",
    species_id: "",
    user_id: "",
  });

  // const deletePlant = (e) => {
  //     e.preventDefault();
  //     axios
  //       .delete(
  //         `https://backend-u4-ttwebpt102.herokuapp.com/api/plants/${userId}`
  //       )
  //       .then((res) => {
  //         setPlant(res.data);
  //       })
  //       .catch((err) => console.log(err));
  //   }

  return (
    <div className="row">
      <div className="col-md-3 col-sm-6">
        <div className="card card-block">
          <h4 className="card-title text-right">
            <i className="material-icons">delete_forever</i>
          </h4>
          <img
            classNameName="plant-card-img"
            src="https://static.pexels.com/photos/7096/people-woman-coffee-meeting.jpg"
            alt="sunset"
          />
          <h5 className="card-title mt-3 mb-3">{props.plant.nickname}</h5>
          <p className="card-text">Species: {props.plant.species}</p>
          <p>Water me {props.plant.water_frequency}</p>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
