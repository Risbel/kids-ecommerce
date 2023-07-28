import httpService from "@/config/axios.config";

export const sendPersonalDates = async (personalDates) => {
  try {
    const resp = await httpService.post("/signup", personalDates, {
      withCredentials: true,
    });
    return resp.data;
  } catch (error) {
    return error;
  }
};
