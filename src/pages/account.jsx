import BaseLayout from "@/layouts/BaseLayout";
import { useRouter } from "next/router";

const Account = () => {
  const router = useRouter();
  const logout = async () => {
    localStorage.removeItem("accessToken");

    router.push("/login");
  };

  return (
    <BaseLayout>
      <div className="md:32 lg:px-64">
        <h1>My Acount</h1>
        <button onClick={logout}>Log out</button>
      </div>
    </BaseLayout>
  );
};

export default Account;
