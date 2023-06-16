import React, { useEffect, useState } from "react";
import { SinglePost } from "./singlePost";
import { Link } from "react-router-dom";
import { Editor } from "./newPost";

export const Homepage = () => {
  return (
    <>
      <div className="font-serif gap-16 bg-[#212121] relative heightFull lg:flex-row flex-col-reverse flex">
        <div className="inline-flex gap-x-10 w-full lg:relative fixed z-20 top-[90vh] bg-[#212121] lg:heightFull lg:bg-inherit lg:left-0 items-center lg:border-0 border-2 py-2 lg:top-0 justify-center text-center lg:flex-col lg:py-32 lg:gap-y-10 border-[#279af1] lg:border-r-4 lg:w-36">
          <span className="bg-[#279af1] rounded-full py-1 lg:mx-auto w-10 h-10">
            <p className="text-2xl font-semibold">F</p>
          </span>
          <span>
            <i className="text-4xl text-[#279af1] uil uil-search"></i>
            <p className="text-sm text-white hidden lg:block">search</p>
          </span>
          <span className="lg:mb-28">
            <i className="uil uil-arrow-growth text-4xl text-[#279af1]"></i>
            <p className="text-white text-sm hidden lg:block">trending</p>
          </span>

          <span className="cursor-pointer">
            <Link to="/editor" element={<Editor />}>
              <i className="text-4xl text-[#279af1] uil uil-plus-circle"></i>
              <p className="text-white text-sm hidden lg:block">create</p>
            </Link>
          </span>
        </div>

        <div className="lg:py-16 py-8 mb-10">
          <div className="relative mb-5 flex lg:block items-center flex-col justify-center">
            <div className="w-4 lg:left-4 border-[#279af1] border-b-4 rounded-full relative"></div>
            <h3 className="text-white">Latest</h3>
          </div>

          <div>
            <SinglePost />
          </div>
        </div>
      </div>
    </>
  );
};
