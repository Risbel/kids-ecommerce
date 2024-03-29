import Button from "@/components/Button";
import BaseLayout from "@/layouts/BaseLayout";

import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import Image from "next/image";

const Account = () => {
  const { data: session } = useSession();

  const logout = async () => {
    signOut({ callbackUrl: `${process.env.NEXT_PUBLIC_BASE_URL_CLIENT}/login` });
  };

  return (
    <BaseLayout>
      <div className="flex flex-col gap-4 items-center md:32 lg:px-64">
        <h1>My Acount</h1>
        <div className="rounded-full overflow-hidden">
          {session?.user.image ? (
            <Image src={session?.user.image} alt="image-next-auth" width={100} height={100} />
          ) : (
            <div className="flex items-center justify-center bg-orange-300 w-24 h-24 font-bold text-5xl text-white">
              {session?.user.name[0].toUpperCase()}
            </div>
          )}
        </div>
        <h1>{session?.user.name}</h1>
        <h1>{session?.user.email}</h1>
      </div>
      <div className="flex justify-center mt-6">
        <Button onClick={logout}>Log out</Button>
      </div>
    </BaseLayout>
  );
};

export default Account;
