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
      <div className="flex justify-center sm:justify-start pb-16">
        <Link className="border border-gray-400 border-dashed p-2 ml-4 hover:bg-orange-kids" href="/login">
          Signin
        </Link>
      </div>

      <div className="flex justify-center">
        <form className="flex flex-col gap-4 border p-4" onSubmit={handleSubmit}>
          <input
            autoComplete="off"
            onChange={handleChange}
            value={personalDates.name}
            name="name"
            type="text"
            placeholder="name"
          />
          <input
            autoComplete="off"
            required
            onChange={handleChange}
            value={personalDates.lastName}
            name="lastName"
            type="text"
            placeholder="last name"
          />
          <input
            autoComplete="off"
            required
            onChange={handleChange}
            value={personalDates.email}
            name="email"
            type="email"
            placeholder="email"
          />
          <input
            autoComplete="off"
            required
            onChange={handleChange}
            value={personalDates.phone}
            name="phone"
            type="text"
            placeholder="phone number"
          />
          <input
            autoComplete="off"
            required
            onChange={handleChange}
            value={personalDates.password}
            name="password"
            type="password"
            placeholder="password"
          />
          <input
            autoComplete="off"
            required
            onChange={handleChange}
            value={personalDates.imageUrl}
            name="imageUrl"
            type="text"
            placeholder="imageUrl"
          />
          <button type="submit">Signup</button>
          <span className="text-center">{signupResponse}</span>
        </form>
      </div>
    </div>
  );
};

export default Signup;
