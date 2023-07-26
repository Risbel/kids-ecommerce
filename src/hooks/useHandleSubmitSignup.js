import { sendPersonalDates } from "@/services/sendPersonalDates";
import { useRouter } from "next/router";
import { useState } from "react";

const useHandleSubmitSignup = (initialState) => {
  const [personalDates, setPersonalDates] = useState(initialState);
  const router = useRouter();
  const handleChange = (e) => {
    setPersonalDates({
      ...personalDates,
      [e.target.name]: e.target.value,
    });
  };

  const submitPersonalDates = async (e) => {
    e.preventDefault();
    const res = await sendPersonalDates(personalDates);

    if (res) {
      router.push("/");
    }
  };

  return { handleChange, submitPersonalDates, setPersonalDates, personalDates };
};

export default useHandleSubmitSignup;
