import React, { useState } from "react";
import axios from "axios";

const initialState = {
  username: "",
  password: "",
  phoneNumber: "",
};

export default function Signin() {
  const [user, setUser] = useState(initialState);

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUser({ ...user, [name]: value });
  };

  const signIn = async (event) => {
    event.preventDefault();
    try {
      const response = axios.post(
        "https://backend-u4-ttwebpt102.herokuapp.com/api/auth/login",
        user
      );
      localStorage.setItem("authToken", response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Signin TEST</h1>
      <form onSubmit={signIn}>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
        <label>PhoneNumber</label>
        <input
          type="text"
          name="phoneNumber"
          value={user.phoneNumber}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
