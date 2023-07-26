import axios from "axios";

const sendCredentials = async (formData) => {
  try {
    const response = await axios.post("http://localhost:4000/login", formData, {
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    if (error.response.status === 401) {
      return error;
    }
  }
};

export default sendCredentials;
