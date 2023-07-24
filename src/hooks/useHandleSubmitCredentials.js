import { useState } from "react";
import sendCredentials from "@/services/sendCredentials";

const useHandleSubmitCredentials = (initialState) => {
  const [credentials, setCredentials] = useState(initialState);

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const submitCredentials = (e) => {
    e.preventDefault();
    sendCredentials(credentials);
    setCredentials(initialState);
  };
  return { handleChange, submitCredentials, credentials };
};

export default useHandleSubmitCredentials;
