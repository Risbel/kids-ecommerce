import useHandleSubmitCredentials from "@/hooks/useHandleSubmitCredentials";
import Link from "next/link";

const Login = () => {
  const { handleChange, submitCredentials, credentials } = useHandleSubmitCredentials({
    email: "",
    password: "",
  });

  return (
    <div className="p-16">
      <Link className="border border-gray-400 border-dashed p-2 ml-4 hover:bg-orange-kids" href="/signup">
        Signup
      </Link>
      <div className="flex justify-center  items-center">
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
      </div>
    </div>
  );
};

export default Login;
