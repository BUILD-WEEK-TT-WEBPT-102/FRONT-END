import React, { useState } from "react";
import "./updateProfile.styles.css";

export default function UpdateProfile() {
  const [newInfo, setNewInfo] = useState({
    username: "",
    password: "",
    phoneNumber: "",
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-10 col-xl-9 mx-auto">
          <div className="card card-signin flex-row my-5">
            <div className="card-img-left d-none d-md-flex"></div>
            <div className="card-body">
              <h5 className="card-title text-center">Update Your Basic Info</h5>
              <form className="form-signin">
                <div className="form-label-group">
                  <input
                    type="text"
                    id="inputUserame"
                    className="form-control"
                    placeholder="Username"
                    required
                    autofocus
                  />
                  <label for="inputUserame">Username</label>
                </div>

                <div className="form-label-group">
                  <input
                    type="text"
                    id="inputPhone"
                    className="form-control"
                    placeholder="Phone Number"
                    required
                  />
                  <label for="inputPhone">Phone Number</label>
                </div>

                <div className="form-label-group">
                  <input
                    type="password"
                    id="inputPassword"
                    className="form-control"
                    placeholder="Password"
                    required
                  />
                  <label for="inputPassword">Password</label>
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
