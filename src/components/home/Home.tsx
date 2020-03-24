import React from "react";
import { Link } from "react-router-dom";
// import { SignMeUp } from "./signMeUp";
import { Carousel } from "../exercises";

export const HomePage = () => (
  <div className="flex flex-col w-full h-full bg-gray-300">
    <h1 className="text-center my-5">Panel Administration</h1>
    <p className="text-center">
      React, Redux and React Router for ultra-responsive web Apps.
    </p>
    <nav className="my-5 flex flex-col p-8">
      <Link to="About">Learn more</Link>
    </nav>

    <div className="my-4 p-5">
      {/* <SignMeUp /> */}
      <Carousel />
    </div>
  </div>
);
