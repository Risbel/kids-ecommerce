import httpService from "@/config/axios.config";

const sendContact = async (formData) => {
  const response = await httpService.post("/send-message", formData, {
    withCredentials: true,
  });

  console.log(response);
  if (!response) {
    throw new Error("Error sending contact");
  }
};

export default sendContact;
