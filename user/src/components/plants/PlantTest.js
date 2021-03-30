import React from "react";
import { Link } from "react-router-dom";

export default function Test() {
  const userId = localStorage.getItem("id");

  return (
    <div>
      <h2>Test PrivateRoute</h2>
      <Link to={`/profile/${userId}`}>profile</Link>
    </div>
  );
}
