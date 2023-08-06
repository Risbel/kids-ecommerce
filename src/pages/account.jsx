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
        <h1>{session?.user.name}</h1>
        <h1>{session?.user.email}</h1>
        <div className="rounded-full overflow-hidden">
          <Image src={session?.user.image} alt="image-next-auth" width={250} height={250} />
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <Button onClick={logout}>Log out</Button>
      </div>
    </BaseLayout>
  );
};

export default Account;
