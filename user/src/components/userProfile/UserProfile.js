import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import "./userProfile.styles.css";

export default function UserProfile() {
  const [currentUser, setCurrentUser] = useState({
    username: "",
    phoneNumber: "",
    password: "",
  });
  const { push } = useHistory();
  const userId = localStorage.getItem("id");

  useEffect(() => {
    axiosWithAuth()
      .get(`/users/${userId}`)
      .then((response) => {
        //console.log(response.data);
        setCurrentUser(response.data);
      })
      .catch((error) => console.log(error));
  }, [userId]);

  return (
    <div>
      <div className="profile-container">
        <div className="profile-title">
          <h3>Welcome, {currentUser.username}</h3>
        </div>
        <div className="profile-box row px-4">
          <div className="col-md-5 mx-auto">
            <div className="bg-white shadow rounded overflow-hidden">
              <div className="px-4 pt-0 pb-4 cover">
                <div className="media align-items-end profile-head">
                  <div className="profile mr-3">
                    <img
                      src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                      alt="Profile avatar"
                      width="130"
                      className="rounded mb-2 img-thumbnail"
                    />
                    <div
                      className="btn btn-outline-dark btn-sm btn-block"
                      onClick={() => push(`/update-profile/${userId}`)}
                    >
                      Edit profile <i class="fas fa-pen"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-light p-4 d-flex justify-content-end text-center">
                <p>Manage your info</p>
              </div>
              <div className="px-4 py-3">
                <h5 className="mb-0">BASIC INFO</h5>

                <div className="p-4 rounded shadow-sm bg-light ">
                  <table class="table table-borderless">
                    <thead>
                      <tr>
                        <th scope="col">Username:</th>
                        <td>{currentUser.username}</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">Phone:</th>
                        <td>{currentUser.phoneNumber}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
