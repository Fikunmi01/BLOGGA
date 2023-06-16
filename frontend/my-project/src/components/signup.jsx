import { Link } from "react-router-dom";
import { Login } from "./login";

export const SignUp = () => {
  return (
    <>
      <div className="flex relative font-serif bg-[#212121] items-center">
        <div className="bgImg lg:w-4/12 lg:block hidden relative border-r-4 border-[#279af1]">
          <h1 className="absolute top-1/2 left-1/4 flex justify-center -rotate-90 font-sans text-5xl text-white ">
            SIGN UP
          </h1>
          <img src="./assets/bgImg3.jpg" className="heightFull" alt="" />
        </div>

        <div className="lg:px-32 px-3 py-8 text-white lg:w-7/12 w-full">
          <div className="pb-8">
            <h1 className="text-4xl">
              <span className="font-sans text-7xl">W</span>elcome
            </h1>
            <p className="text-[#f1edee] font-normal text-xl">
              Let's Sign you up quickly
            </p>
          </div>

          <form>
            <div className="flex flex-col">
              <input
                type="text"
                className="mb-5 px-2 py-3 bg-inherit text-sm border-2 outline-none border-[#279af1]"
                placeholder="Enter your name"
              />
              <input
                type="email"
                className="mb-5 px-2 py-3 text-sm border-2 outline-none border-[#279af1] bg-inherit"
                placeholder="Enter your email"
              />
              <input
                type="text"
                className="mb-5 px-2 py-3 text-sm border-2 outline-none border-[#279af1] bg-inherit"
                placeholder="Enter your username"
              />

              <input
                type="password"
                className="mb-5 px-2 py-3 text-sm border-2 outline-none border-[#279af1] bg-inherit"
                placeholder="Enter password"
              />
              
              <input
                type="password"
                className="mb-2 px-2 py-3 text-sm border-2 outline-none border-[#279af1] bg-inherit"
                placeholder="Confirm Password"
              />
            </div>

            <div className="flex lg:flex-row flex-col justify-between lg:items-center mt-5 lg:mt-10">
              <button className="px-6 py-2 bg-[#279af1]" type="submit">SUBMIT</button>

              <span>
                <p>already have an account?</p>
                <Link to="/" className="text-[#279af1]" component={<Login />}>
                  log-in
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
