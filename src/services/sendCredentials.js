import httpService from "@/config/axios.config";

const sendCredentials = async (formData) => {
  try {
    const response = await httpService.post("/login", formData, {
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    if (error) {
      return error;
    }
  }
};

export default sendCredentials;
