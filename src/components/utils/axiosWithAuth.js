import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("authToken");
  return axios.create({
    //baseURL: "https://reqres.in/api",
    baseURL: "https://backend-u4-ttwebpt102.herokuapp.com/api",
    headers: { Authorization: token },
  });
};
