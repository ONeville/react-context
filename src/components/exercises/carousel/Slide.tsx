/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

export const SlideCompo = ({ content, width }: any) => (
  <div
    className="h-full bg-cover bg-no-repeat bg-center"
    css={css`width: ${width}px; background-image: url('${content}');`}
    // css={css`
    //   height: 100%;
    //   width: ${width}px;
    //   background-image: url('${content}');
    //   background-size: cover;
    //   background-repeat: no-repeat;
    //   background-position: center;
    // `}
  ></div>
);
