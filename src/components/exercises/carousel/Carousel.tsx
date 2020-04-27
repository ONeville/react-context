import React from "react";
import { SliderCompo } from "./Slider";

export const CarouselPage = () => {
  const imagesA = [
    "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80",
    "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
    "https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80",
    "https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80",
  ];

  const images = [
    "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg",
    "https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg",
    "https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg",
    "https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg",
    "https://mdbootstrap.com/img/Photos/Slides/img%20(7).jpg",
    "https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg",
    "https://mdbootstrap.com/img/Photos/Slides/img%20(60).jpg",
    "https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg",
    "https://mdbootstrap.com/img/Photos/Slides/img%20(25).jpg",
  ];

  return (
    <div className="px-16 py-4">
      <h1 className="text-center text-5xl mb-6">Here you go! my Slides Show</h1>
      {/*  heightProp={450}  autoPlay={1} */}
      <SliderCompo slides={images} heightProp={660} widthProp={860} />
      <div className="w-full w-1/2 px-12 py-6 bg-gray-100 mb-12 mt-6 z-30">
        <div className="block bg-indigo-200 mx-8 pt-16 pb-20 px-8 rounded-md">
          <h2 className="text-white text-5xl text-center font-bold">
            Special <span className="text-orange-500">Master Class</span>
          </h2>
          <h6 className="text-white font-medium text-center">
            Art dhesmmd To be Atex jdksd, n'aimdnd bfaire la na tation
            djhsdkksd.
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
    </div>
  );
};