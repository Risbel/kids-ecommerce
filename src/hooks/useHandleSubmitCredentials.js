import { useState } from "react";
import sendCredentials from "@/services/sendCredentials";
import { useRouter } from "next/router";
import { useMutation } from "@tanstack/react-query";

const useHandleSubmitCredentials = (initialState) => {
  const [credentials, setCredentials] = useState(initialState);
  const [loginResponse, setLoginResponse] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const { data, mutate: submitCredentials } = useMutation({
    mutationFn: (credentials) => sendCredentials(credentials),
    onSuccess: (resp) => {
      if (resp.response) {
        const { response } = resp;
        const { data } = response;

        return setLoginResponse(data.error);
      } else {
        setLoginResponse("Successfully authenticated");
        router.push("/");
      }
    },
  });

  return { handleChange, submitCredentials, credentials, loginResponse, data };
};

export default useHandleSubmitCredentials;
