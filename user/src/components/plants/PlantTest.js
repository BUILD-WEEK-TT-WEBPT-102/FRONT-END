import React from "react";
import { useHistory } from "react-router-dom";

export default function Test({ userId }) {
  const { push } = useHistory();

  return (
    <div>
      <h2>Test PrivateRoute</h2>
      <button onClick={() => push("/my-plants")}>profile</button>
    </div>
  );
}
