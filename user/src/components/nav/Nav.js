import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import "./nav.styles.css";

export default function Nav() {
  const [helloName, setHelloName] = useState("");
  const userId = localStorage.getItem("id");

  useEffect(() => {
    axiosWithAuth()
      .get(`/users/${userId}`)
      .then((response) => {
        console.log(response.data);
        setHelloName(response.data.username);
      })
      .catch((error) => console.log(error));
  }, [userId]);

  return (
    <div className="nav-container">
      <Link className="option" to="/profile/:id">
        Hello {helloName}
      </Link>
      <Link className="option" to="/">
        Home
      </Link>
      <Link className="option" to="/my-plants">
        My Plants
      </Link>
      <Link
        className="option"
        to="/"
        onClick={() => localStorage.removeItem("authToken")}
      >
        Sign out
      </Link>
    </div>
  );
}