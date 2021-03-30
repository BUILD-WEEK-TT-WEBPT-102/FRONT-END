import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import "./nav.styles.css";

export default function Nav() {
  const [userName, setUserName] = useState("");
  const userId = localStorage.getItem("id");

  useEffect(() => {
    axiosWithAuth()
      .get(`/users/${userId}`)
      .then((response) => {
        console.log(response.data);
        setUserName(response.data.username);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="nav-container">
      <Link className="option" to="/profile/:id">
        Hello {userName}
      </Link>
      <Link className="option" to="/">
        Home
      </Link>
      <Link className="option" to="/my-plants">
        My Plants
      </Link>
      <Link
        className="option"
        to="/sign-up"
        onClick={() => localStorage.removeItem("authToken")}
      >
        Sign out
      </Link>
    </div>
  );
}
