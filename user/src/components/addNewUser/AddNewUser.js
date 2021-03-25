import React from "react";
import { useState } from "react";
import axios from "axios";

const initialState = {
  username: "",
  password: "",
  phoneNumber: "",
};

export default function Register() {
  const [newUser, setNewUser] = useState(initialState);

  const handleChange = (event) => {
    const { value, name } = event.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const signUp = async (event) => {
    event.preventDefault();
    try {
      const response = axios.post(
        "https://backend-u4-ttwebpt102.herokuapp.com/api/auth/register",
        newUser
      );
      localStorage.setItem("authToken", response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // const signUp = (event) => {
  //   event.preventDefault();
  //   console.log("submitted");
  //   console.log(newUser);
  // };

  return (
    <div>
      <h1>TEST</h1>
      <form onSubmit={signUp}>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={newUser.username}
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={newUser.password}
          onChange={handleChange}
        />
        <label>PhoneNumber</label>
        <input
          type="text"
          name="phoneNumber"
          value={newUser.phoneNumber}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
