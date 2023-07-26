import BaseLayout from "@/layouts/BaseLayout";
import axios from "axios";
import { useRouter } from "next/router";
import React from "react";

const Account = () => {
  const router = useRouter();
  const logout = async () => {
    const resp = await axios.get("http://localhost:4000/logout", {
      withCredentials: true,
    });

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
