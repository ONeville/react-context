/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

export const ArrowCompo = ({direction, handleClick}: any) =>{
  return (
    <div
      onClick={handleClick}
      css={css`
        ${direction === "right" ? "right: 25px;" : "left: 25px;"}
        top: 50%;
        transition: transform ease-in 0.1s;
        &:hover {
          transform: scale(1.1);
        }
        svg {
          transform: translateX(${direction === "left" ? "-2" : "2"}px);
          &:focus {
            outline: 0;
          }
        }
      `}
      className="absolute flex justify-center bg-white rounded-full cursor-pointer items-center"
    >
      {direction === "right" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path
            className="fill-current w-12 h-12"
            d="M9.3 8.7a1 1 0 0 1 1.4-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.4-1.4l3.29-3.3-3.3-3.3z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path
            className="fill-current h-12 w-12"
            d="M14.7 15.3a1 1 0 0 1-1.4 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.4 1.4L11.42 12l3.3 3.3z"
          />
        </svg>
      )}
    </div>
  );
}