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
    <div className=" container">
      <div className="row">
        <div className="col-lg-10 col-xl-9 mx-auto">
          <div className="card card-signin flex-row my-5">
            <div className="card-img-left3 d-none d-md-flex"></div>
            <div className="card-body">
              <h5 className="card-title text-center">EDIT PLANT</h5>
              <form className="form-signin" onSubmit={handleSubmit}>
                <div className="form-label-group">
                  <input
                    type="text"
                    name="nickname"
                    onChange={handleChanges}
                    placeholder="nickname"
                    value={editPlant.nickname}
                    className="form-control"
                    required
                    autoFocus
                  />
                  <label htmlFor="inputNickname">nickname</label>
                </div>

                <div className="form-label-group">
                  <input
                    type="text"
                    name="species"
                    onChange={handleChanges}
                    placeholder="species"
                    value={editPlant.species_type}
                    className="form-control"
                    required
                  />
                  <label htmlFor="inputSpecies">species</label>
                </div>

                <div className="form-label-group">
                  <input
                    type="text"
                    name="water_frequency"
                    onChange={handleChanges}
                    placeholder="h2oFrequency"
                    value={editPlant.water_frequency}
                    className="form-control"
                    required
                  />
                  <label htmlFor="inputH2oFrequency">h2o Frequency</label>
                </div>

                <button
                  className="btn btn-lg btn-outline-success btn-block text-uppercase"
                  type="submit"
                >
                  UPDATE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPlant;
