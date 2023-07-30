import { sendPersonalDates } from "@/services/sendPersonalDates";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useState } from "react";

const useHandleSubmitSignup = (initialState) => {
  const [personalDates, setPersonalDates] = useState(initialState);
  const [signupResponse, setSignupResponse] = useState("");
  const router = useRouter();
  const handleChange = (e) => {
    setPersonalDates({
      ...personalDates,
      [e.target.name]: e.target.value,
    });
  };

  const { mutate: submitPersonalDates } = useMutation({
    mutationFn: (personalDates) => sendPersonalDates(personalDates),
    onSuccess: (resp) => {
      if (resp.response) {
        const { response } = resp;
        return setSignupResponse(response.data.message);
      } else {
        setSignupResponse("Successfully registred");
        router.push("/");
      }
    },
  });

  return { handleChange, submitPersonalDates, personalDates, signupResponse };
};

export default useHandleSubmitSignup;
