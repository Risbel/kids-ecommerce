import { useRouter } from "next/router";
import { useState } from "react";
import { signIn } from "next-auth/react";

const useHandleSubmitCredentials = (initialState) => {
  const router = useRouter();
  const [credentials, setCredentials] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitWithCredentials = async (e) => {
    e.preventDefault();

    setError("");
    setIsLoading(true);
    const status = await signIn("credentials", {
      redirect: false,
      email: credentials.email,
      password: credentials.password,
      callbackUrl: "/",
    });
    if (status.ok) {
      router.push(status.url);
    }
    if (!status.ok) {
      setError(status.error);
    }
    setIsLoading(false);
  };

  return { handleChange, credentials, isLoading, setIsLoading, error, setError, onSubmitWithCredentials };
};

export default useHandleSubmitCredentials;
