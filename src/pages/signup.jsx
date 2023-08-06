import Button from "@/components/Button";
import Input from "@/components/Input";
import useHandleSubmitSignup from "@/hooks/useHandleSubmitSignup";
import Link from "next/link";
import React from "react";

const Signup = () => {
  const { handleChange, submitPersonalDates, personalDates, signupResponse } = useHandleSubmitSignup({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    imageUrl: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    submitPersonalDates(personalDates);
  };

  return (
    <div className="p-16">
      <div className="flex justify-start pb-8">
        <Link
          className="border border-gray-400 border-dashed p-2 ml-4 bg-orange-200 hover:bg-orange-kids"
          href="/login"
        >
          Signin
        </Link>
      </div>

      <div className="flex justify-center">
        <form className="flex flex-col gap-4 border p-4 bg-orange-100" onSubmit={handleSubmit}>
          <Input
            autoComplete="off"
            onChange={handleChange}
            value={personalDates.name}
            name="name"
            type="text"
            placeholder="name"
          />
          <Input
            autoComplete="off"
            required
            onChange={handleChange}
            value={personalDates.lastName}
            name="lastName"
            type="text"
            placeholder="last name"
          />
          <Input
            autoComplete="off"
            required
            onChange={handleChange}
            value={personalDates.email}
            name="email"
            type="email"
            placeholder="email"
          />
          <Input
            autoComplete="off"
            required
            onChange={handleChange}
            value={personalDates.phone}
            name="phone"
            type="text"
            placeholder="phone number"
          />
          <Input
            autoComplete="off"
            required
            onChange={handleChange}
            value={personalDates.password}
            name="password"
            type="password"
            placeholder="password"
          />
          <Input
            autoComplete="off"
            required
            onChange={handleChange}
            value={personalDates.imageUrl}
            name="imageUrl"
            type="text"
            placeholder="image URL"
          />

          <Button type="submit">Signup</Button>
          <span className="text-center">{signupResponse}</span>
        </form>
      </div>
    </div>
  );
};

export default Signup;
