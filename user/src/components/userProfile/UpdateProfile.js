import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

import "./updateProfile.styles.css";

export default function UpdateProfile() {
  const [newInfo, setNewInfo] = useState({
    username: "",
    password: "",
    phoneNumber: "",
  });

  const { push } = useHistory();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewInfo({ ...newInfo, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = localStorage.getItem("id");
    axiosWithAuth()
      .put(`users/${userId}`, newInfo)
      .then((res) => {
        console.log(res.data);
        setNewInfo(res.data);
      })
      .catch((err) => console.log(err));

    push("/sign-in");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-10 col-xl-9 mx-auto">
          <div className="card card-signin flex-row my-5">
            <div className="card-img-left d-none d-md-flex"></div>
            <div className="card-body">
              <h5 className="card-title text-center">Update Your Basic Info</h5>
              <form className="form-signin" onSubmit={handleSubmit}>
                <div className="form-label-group">
                  <input
                    name="username"
                    type="text"
                    id="inputUserame"
                    className="form-control"
                    placeholder="Username"
                    value={newInfo.username}
                    onChange={handleChange}
                    required
                    autoFocus
                  />
                  <label htmlFor="inputUserame">Username</label>
                </div>

                <div className="form-label-group">
                  <input
                    name="password"
                    type="password"
                    id="inputPassword"
                    className="form-control"
                    placeholder="Password"
                    value={newInfo.password}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="inputPassword">Password</label>
                </div>

                <div className="form-label-group">
                  <input
                    name="phoneNumber"
                    type="text"
                    id="inputPhone"
                    className="form-control"
                    placeholder="Phone Number"
                    value={newInfo.phoneNumber}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="inputPhone">Phone Number</label>
                </div>

                <button
                  className="btn btn-lg btn-primary btn-block text-uppercase"
                  type="submit"
                >
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
