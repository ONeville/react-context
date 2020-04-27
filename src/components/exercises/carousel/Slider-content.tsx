/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

export const SliderContent = ({
  children,
  width,
  translate,
  transition,
}: any) => (
  <div
    css={css`
      width: ${width}px;
      transform: translateX(-${translate});
      transition: transform ease-out ${transition}s;
    `}
    className="h-full flex"
  >
    {children}
  </div>
);
