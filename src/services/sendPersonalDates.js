import axios from "axios";

export const sendPersonalDates = async (personalDates) => {
  try {
    const resp = await axios.post("http://localhost:4000/signup", personalDates, {
      withCredentials: true,
    });
    return resp.data;
  } catch (error) {
    return error;
  }
};
