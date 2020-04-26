import React from "react";
import { css } from "@emotion/core";

 const Dot = ({ active }: any) => <div css={css`background: ${active ? 'black': 'white'};`} className="p-3 mr-2 cursor-pointer rounded-full"></div>


export const DotsCompo = ({ slides, activeSlide }: any) => <div className="absolute w-full flex justify-center items-center mb-4">
	{
		slides.map((slide: any, i: number)=>(<Dot key={slide} active={activeSlide === i}/>))
	}
</div>;
