import sendContact from "@/services/sendContact";
import { useState } from "react";

const useHandleSubmitContact = (initialState) => {
  const [formData, setFormData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccessful, setSuccessful] = useState(false);

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmitContact = async (e) => {
    e.preventDefault();
    setIsError(false);
    setSuccessful(false);
    setIsLoading(true);

    try {
      await sendContact(formData);

      setSuccessful(true);
      setFormData(initialState);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return { handleSubmitContact, handleChange, isLoading, isError, isSuccessful, formData };
};

export default useHandleSubmitContact;
