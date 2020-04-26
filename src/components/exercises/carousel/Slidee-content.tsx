import React from "react";
import { css } from "@emotion/core";

export const SliderContentCompo = ({
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
