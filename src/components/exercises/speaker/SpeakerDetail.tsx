import React from "react";
import head from "../../../assets/images/head.png";

export const SpeakerDetail = React.memo(
  ({ speaker, onToggleFavorite }: any) => {
    console.log(`${speaker.id} -  ${speaker.lastName} - FAV: ${speaker.favorite}`);
    return (
      <div className="max-w-sm rounded my-4 mx-2 bg-white shadow-lg">
        <img
          className="w-1/4 mx-auto"
          src={head}
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="flex justify-between">
            <div className="font-bold text-xl mb-2">
              {speaker.firstName + ", " + speaker.lastName}
            </div>
            <svg
              onClick={e => onToggleFavorite(e, !speaker.favorite, speaker.id)}
              className={
                "fill-current w-6  h-6 mr-2 cursor-pointer" +
                (speaker.favorite ? " text-red-500" : " text-gray-500")
              }
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z"></path>
            </svg>
          </div>
          <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="px-6 py-4">
          <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            {speaker.bio}
          </div>
        </div>
      </div>
    );
  }
);
