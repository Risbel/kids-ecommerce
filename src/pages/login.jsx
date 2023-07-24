import useHandleSubmitCredentials from "@/hooks/useHandleSubmitCredentials";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

const Login = () => {
  const [user, setUser] = useState({ email: "", username: "" });
  const router = useRouter();

  const { handleChange, submitCredentials, credentials } = useHandleSubmitCredentials({
    email: "",
    password: "",
  });

  const getProfile = async () => {
    const response = await axios.get("http://localhost:4000/getProfile", {
      withCredentials: true,
    });
    const { data } = response;
    const { email, username } = data;

    setUser({ email: email, username: username });
  };

  const logout = async () => {
    const response = await axios.get("http://localhost:4000/logout", {
      withCredentials: true,
    });

    console.log(response);
  };

  return (
    <div className="flex justify-center h-screen items-center">
      <form onSubmit={submitCredentials}>
        <div className="flex flex-col gap-4 border p-4">
          <input name="email" onChange={handleChange} value={credentials.email} type="email" placeholder="email" />
          <input
            name="password"
            onChange={handleChange}
            value={credentials.password}
            type="password"
            placeholder="password"
          />
          <button type="submit">Login</button>
        </div>
      </form>
      <button onClick={() => getProfile()}>Get Profile</button>
      <button onClick={() => logout()}>Log Out</button>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};

export default Login;
