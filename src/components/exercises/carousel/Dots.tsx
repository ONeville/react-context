/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

const Dot = ({ active }: any) => (
  <span
    css={css`
      padding: 10px;
      margin-right: 5px;
      cursor: pointer;
      border-radius: 50%;
      background: ${active ? "black" : "white"};
    `}
  />
);

export const DotsCompo = ({ slides, activeSlide }: any) => (
  <div
    className="absolute w-full flex justify-center items-center"
    css={css`
      bottom: 25px;
    `}
  >
    {slides.map((slide: any, i: number) => (
      <Dot key={i} active={activeSlide === i} />
    ))}
  </div>
);
