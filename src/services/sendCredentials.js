import axios from "axios";

const sendCredentials = async (formData) => {
  const response = await axios.post("https://e-commerce-backend-self.vercel.app/login", formData, {
    withCredentials: true, // Habilita el envío de cookies en la solicitud
  });

  console.log("Response:", response);
};

export default sendCredentials;
