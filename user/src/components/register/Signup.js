import React, { useState } from "react";
//import { useHistory } from "react-router-dom";
import axios from "axios";

const initialState = {
  username: "",
  password: "",
  phoneNumber: "",
};

export default function Signup() {
  const [newUser, setNewUser] = useState(initialState);
  //const { push } = useHistory();

  const handleChange = (event) => {
    const { value, name } = event.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const signUp = async (event) => {
    event.preventDefault();
    try {
      // const response = axios.post(
      //   " https://reqres.in/api/users/register",
      //   newUser
      // );
      const response = axios.post(
        " https://backend-u4-ttwebpt102.herokuapp.com/api/auth/register",
        newUser
      );
      //localStorage.setItem("authToken", response.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    //push("/sign-in");
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
