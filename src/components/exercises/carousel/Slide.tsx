import React from "react";
import { css } from "@emotion/core";

export const SlideCompo = ({ content, width}:any) => <div className="h-full bg-cover bg-no-repeat bg-center" css={css `width: ${width}px; background-image: url('${content}');`}></div>;
