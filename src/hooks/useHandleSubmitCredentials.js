import { useState } from "react";

const useHandleSubmitCredentials = (initialState) => {
  const [credentials, setCredentials] = useState(initialState);

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  return { handleChange, credentials };
};

export default useHandleSubmitCredentials;
