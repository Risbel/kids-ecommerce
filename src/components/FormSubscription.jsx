import React from "react";
import Input from "./Input";
import Button from "./Button";

const FormSubscription = () => {
  return (
    <div className="bg-orangeStrong-kids px-6 py-4">
      <h2 className="text-center text-4xl py-8 text-white">Join Our Newsletter</h2>
      <form className="flex flex-col gap-5">
        <Input type="email" className="w-full text-ellipsis" placeholder="Your Email Address" variant="secondary" />
        <Button type="submit" className="w-full" variant="secondary">
          SUBSCRIBE
        </Button>
      </form>
    </div>
  );
};

export default FormSubscription;
