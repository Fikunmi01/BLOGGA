import { SignUp } from "./signup";
import { Link } from "react-router-dom";
import axios from "axios";
import { Navigate } from "react-router-dom";
import React, { useState } from "react";

export const Login = () => {
  const [redirectLogin, setRedirectLogin] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    const token = localStorage.getItem("token");

    try {
      const response = await axios.post(
        "http://localhost:5000/users/login",
        {
          email,
          password,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      if (response.data.status === 200) {
        setRedirectLogin(true);
      }
      setMessage(response.data.message);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {redirectLogin ? (
        <Navigate to="/homepage" />
      ) : (
        <div className="flex relative font-serif bg-[#212121] items-center">
          <div className="bgImg w-4/12 relative border-r-4 lg:block hidden border-[#279af1]">
            <h1 className="absolute top-1/2 left-1/3 flex justify-center -rotate-90 font-sans text-5xl text-white ">
              LOG IN
            </h1>
            <img src="./assets/bgImg3.jpg" className="heightFull" alt="" />
          </div>

          <div className="lg:px-32 text-white lg:w-7/12 px-3 py-32 w-full">
            <div className="pb-8">
              <h1 className="text-4xl">
                <span className="font-sans text-7xl">W</span>elcome
              </h1>
              <p className="text-[#f1edee] font-normal text-xl">
                Let's log you in quickly
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <input
                  type="email"
                  className="mb-5 px-2 py-3 text-sm border-2 outline-none border-[#279af1] bg-inherit "
                  placeholder="Enter your email"
                  name="email"
                />

                <input
                  type="password"
                  className="mb-5 px-2 py-3 text-sm border-2 outline-none border-[#279af1] bg-inherit"
                  placeholder="Enter password"
                  name="password"
                  autoComplete="curentPassword"
                />
              </div>

              <p>{message}</p>

              <div className="flex lg:justify-between lg:flex-row flex-col lg:items-center lg:mt-10">
                <button className="px-6 py-2 bg-[#279af1]" type="submit">
                  SUBMIT
                </button>

                <span className="mt-4">
                  <p>don't have an account?</p>
                  <Link
                    to="/signup"
                    className="text-[#279af1]"
                    components={<SignUp />}
                  >
                    sign-up
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
       )}
    </>
  );
};
