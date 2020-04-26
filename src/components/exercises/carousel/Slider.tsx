import React, { useState, useRef, useEffect } from "react";
import { css } from "@emotion/core";
import { SliderContentCompo } from "./Slidee-content";
import { SlideCompo } from "./Slide";
import { ArrowCompo } from "./Arrow";
import { DotsCompo } from "./Dots";

const getWidth = () => window.innerWidth;

export const SliderCompo = ({ slides, autoPlay, widthProp, heightProp }: any) => {
  const firstSlide = slides[0];
  const secondSlide = slides[2];
  const lastSlide = slides[slides.length - 1];

  const [state, setState] = useState({
    activeSlide: 0,
    translate: getWidth(),
    transition: 0.45,
    _slides: [lastSlide, firstSlide, secondSlide],
  });

  const { activeSlide, translate, _slides, transition } = state;

  const autoPlayRef = useRef<any>();
  const transitionRef = useRef<any>();
  const resizeRef = useRef<any>();

  const smoothTransition = () => {
    let _slides = [];
    if (activeSlide === slides.length - 1)
      _slides = [slides[slides.length - 2], lastSlide, firstSlide];
    else if (activeSlide === 0) _slides = [lastSlide, firstSlide, secondSlide];
    else _slides = slides.slice(activeSlide - 1, activeSlide + 2);

    setState({
      ...state,
      _slides,
      transition: 0,
      translate: getWidth(),
    });
  };

  const nextSlide = () =>
    setState({
      ...state,
      translate: translate + getWidth(),
      activeSlide: activeSlide === slides.length - 1 ? 0 : activeSlide + 1,
    });

  const prevSlide = () =>
    setState({
      ...state,
      translate: 0,
      activeSlide: activeSlide === 0 ? slides.length - 1 : activeSlide - 1,
    });

  useEffect(() => {
    autoPlayRef.current = nextSlide;
    transitionRef.current = smoothTransition;
    resizeRef.current = handleResize;
  });

  useEffect(() => {
    const play = () => {
      autoPlayRef.current();
    };

    const smooth = (e: any) => {
      if (e.target.className.includes("SliderContent")) {
        transitionRef.current();
      }
    };

    const resize = () => {
      resizeRef.current();
    };

    const transitionEnd = window.addEventListener("transitionend", smooth);
    const onResize = window.addEventListener("resize", resize);

    let interval: any = null;

    if (autoPlay) {
      interval = setInterval(play, autoPlay * 1000);
    }

    return () => {
    //   window.removeEventListener("transitionend", transitionEnd);
    //   window.removeEventListener("resize", onResize);

      if (autoPlay) {
        clearInterval(interval);
      }
    };
  }, []);

  useEffect(() => {
    if (transition === 0) setState({ ...state, transition: 0.45 });
  }, [transition]);

  const handleResize = () => {
    setState({ ...state, translate: getWidth(), transition: 0 });
  };

  const sliderCSS = css`
    height: ${heightProp ? heightProp + "px" : "100vh"};
    width: ${widthProp ? widthProp + "px" : "100vw"};
  `;

  return (
    <div css={sliderCSS} className="relative overflow-hidden mx-auto whitespace-no-wrap">
      <SliderContentCompo
        translate={translate}
        transition={transition}
        width={getWidth() * _slides.length}
      >
        {_slides.map((_slide, i) => {
          return (
            <SlideCompo key={_slide + i} width={getWidth()} content={_slide} />
          );
        })}
      </SliderContentCompo>

      <ArrowCompo direction="left" handleClick={prevSlide} />
      <ArrowCompo direction="right" handleClick={nextSlide} />
	  <DotsCompo slides={slides} activeSlide={activeSlide} />
    </div>
  );
};
