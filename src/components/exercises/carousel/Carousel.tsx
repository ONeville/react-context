import React, { useState } from "react";
import "./carousel.css";

export const Carousel = () => {
  const [images] = useState([
    "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
    "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
    "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
    "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
    "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg",
    "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg",
    "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
    "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateValue, setTranslateValue] = useState(0);

  const goToPrevSlide = () => {
    if (currentIndex === 0) return;
    setCurrentIndex(currentIndex - 1);
    setTranslateValue(translateValue + slideWidth());
  };

  const goToNextSlide = () => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
      setTranslateValue(0);
    }

    setCurrentIndex(currentIndex + 1);
    setTranslateValue(translateValue + -slideWidth());
  };

  const slideWidth = () => {
    return document.querySelector(".slide")?.clientWidth ?? 0;
  };

  return (
    <div className="relative w-full mx-auto h-screen whitespace-no-wrap overflow-hidden">
      <div
        className="relative h-full w-full"
        style={{
          transform: `translateX(${translateValue}px)`,
          transition: "transform ease-out 0.45s"
        }}
      >
        {images.map((image, i) => (
          <Slide key={i} image={image} />
        ))}
      </div>
      <LeftArrow prevSlide={() => goToPrevSlide()} />
      <RightArrow nextSlide={() => goToNextSlide()} />
    </div>
  );
};

const Slide = ({ image }: any) => {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 60%"
  };
  return <div className="inline-block w-full h-full" style={styles}></div>;
};

const LeftArrow = ({ prevSlide }: any) => {
  return (
    // <div className="backArrow h-20 w-20 cursor-pointer transition-transform" onClick={prevSlide}>
    <div className="backArrow arrow" onClick={prevSlide}>
      <svg className="fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M13.891 17.418a.697.697 0 0 1 0 .979.68.68 0 0 1-.969 0l-7.83-7.908a.697.697 0 0 1 0-.979l7.83-7.908a.68.68 0 0 1 .969 0 .697.697 0 0 1 0 .979L6.75 10l7.141 7.418z" />
      </svg>
    </div>
  );
};

const RightArrow = ({ nextSlide }: any) => {
  return (
    <div className="nextArrow arrow" onClick={nextSlide}>
      <svg className="fill-curent" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13.25 10L6.109 2.58a.697.697 0 0 1 0-.979.68.68 0 0 1 .969 0l7.83 7.908a.697.697 0 0 1 0 .979l-7.83 7.908a.68.68 0 0 1-.969 0 .697.697 0 0 1 0-.979L13.25 10z"/></svg>
    </div>
  );
};
