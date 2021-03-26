import { axiosWithAuth } from "../components/utils/axiosWithAuth";

export const fetchUserData = async () => {
  try {
    const response = axiosWithAuth().get("/users");
    return response;
  } catch (error) {
    console.log(error);
  }
};
