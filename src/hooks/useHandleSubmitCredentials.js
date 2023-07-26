import { useState } from "react";
import sendCredentials from "@/services/sendCredentials";
import { useRouter } from "next/router";

const useHandleSubmitCredentials = (initialState) => {
  const [credentials, setCredentials] = useState(initialState);
  const router = useRouter();

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const submitCredentials = async (e) => {
    e.preventDefault();
    const resp = await sendCredentials(credentials);

    setCredentials(initialState);
    if (resp) {
      router.push("/");
    }
  };
  return { handleChange, submitCredentials, credentials };
};

export default useHandleSubmitCredentials;
