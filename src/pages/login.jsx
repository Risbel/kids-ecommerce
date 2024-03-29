import useHandleSubmitCredentials from "@/hooks/useHandleSubmitCredentials";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Input from "@/components/Input";
import Button from "@/components/Button";

const Login = () => {
  const { handleChange, credentials, isLoading, setIsLoading, error, setError, onSubmitWithCredentials } =
    useHandleSubmitCredentials({
      email: "",
      password: "",
    });

  const handleGoogleSignin = async () => {
    setError("");
    setIsLoading(true);
    await signIn("google", {
      callbackUrl: process.env.NEXT_PUBLIC_BASE_URL_CLIENT,
    });
    setIsLoading(false);
  };

  const handleGithubSignin = async () => {
    setError("");
    setIsLoading(true);
    signIn("github", {
      callbackUrl: process.env.NEXT_PUBLIC_BASE_URL_CLIENT,
    });
    setIsLoading(false);
  };

  return (
    <div className="p-16">
      <div className="flex justify-start pb-8">
        <Link
          className="border border-gray-400 border-dashed p-2 ml-4 bg-orange-200 hover:bg-orange-kids"
          href="/signup"
        >
          Signup
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <form onSubmit={onSubmitWithCredentials}>
          <div className="flex flex-col gap-4 border p-4 bg-orange-100">
            <Input
              required
              name="email"
              onChange={handleChange}
              value={credentials.email}
              type="email"
              placeholder="email"
            />
            <Input
              required
              name="password"
              onChange={handleChange}
              value={credentials.password}
              type="password"
              placeholder="password"
            />
            <Button type="submit">Login</Button>
            <span className="text-center">or</span>

            <button
              className="flex justify-center gap-3 items-center bg-white rounded-md p-2 hover:scale-105"
              type="button"
              onClick={handleGoogleSignin}
            >
              <FcGoogle className="scale-125" /> Login with Google
            </button>

            <button
              className="flex justify-center gap-3 items-center bg-white rounded-md p-2 hover:scale-105"
              type="button"
              onClick={handleGithubSignin}
            >
              <FaGithub className="scale-125" /> Login with Github
            </button>
            {<span className="text-red-600 text-center">{error}</span>}
            {isLoading && <span className="text-center">Loading...</span>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
