import useHandleSubmitCredentials from "@/hooks/useHandleSubmitCredentials";
import Link from "next/link";

const Login = () => {
  const { handleChange, submitCredentials, credentials, loginResponse, data } = useHandleSubmitCredentials({
    email: "",
    password: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    submitCredentials(credentials);
  };

  return (
    <div className="p-16">
      <Link className="border border-gray-400 border-dashed p-2 ml-4 hover:bg-orange-kids" href="/signup">
        Signup
      </Link>
      <div className="flex justify-center  items-center">
        <form onSubmit={onSubmit}>
          <div className="flex flex-col gap-4 border p-4">
            <input
              required
              name="email"
              onChange={handleChange}
              value={credentials.email}
              type="email"
              placeholder="email"
            />
            <input
              required
              name="password"
              onChange={handleChange}
              value={credentials.password}
              type="password"
              placeholder="password"
            />
            <button type="submit">Login</button>
            <span className="text-center">{loginResponse}</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
