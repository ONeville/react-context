import React from "react";
import { Link } from "react-router-dom";
import { css } from "@emotion/core";
import { SignMeUp } from "./signMeUp";

export const HomePage = () => (
  <div className="flex flex-col w-full h-full bg-gray-300">
    <h1 className="text-center my-5">Panel Administration</h1>

    <div className="w-full w-1/2 px-12 py-6 bg-gray-100 mb-12">
      <div className="block bg-indigo-200 mx-8 pt-16 pb-20 px-8 rounded-md">
        <h2 className="text-white text-5xl text-center font-bold">
          Special <span className="text-orange-500">Master Class</span>
        </h2>
        <h6 className="text-white font-medium text-center">
          Art dhesmmd To be Atex jdksd, n'aimdnd bfaire la na tation djhsdkksd.
        </h6>
      </div>
      <div className="block bg-white w-2/3 mx-auto -mt-8 p-8 rounded-md">
        <div className="flex flex-row flex-wrap justify-center">
          <div className="flex-1 mx-2 p-5 bg-black text-white rounded">
            <span className="text-xl">Video I</span>
          </div>
          <div className="flex-1 mx-2 p-5 bg-black text-white rounded">
            <span className="text-xl">Video II</span>
          </div>
        </div>
      </div>
    </div>

    <div className="m-4">
      <h2 className="block text-center">Carousel Demo here:</h2>
      <div
        css={css`
          height: 240px;
          width: 350px;
          margin: 0 auto;
          background: royalblue,
          border-radius: 50px;
        `}
      >
        Place Holder
      </div>
    </div>
    <p className="text-center my-4">
      React, Redux and React Router for ultra-responsive web Apps.
    </p>
    <nav className="my-5 flex flex-col p-8">
      <Link to="About">Learn more</Link>
    </nav>

    <div className="p-5">
      <SignMeUp />
    </div>
  </div>
);
