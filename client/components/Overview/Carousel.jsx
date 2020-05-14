import React, { useState } from "react";
import CarouselContent from "./CarouselContent";
import Slide from "./Slide";
import Arrow from "./Arrows";

/**
 * @function Slider
 */
const Carousel = ({ currentStyle }) => {
  //   const getWidth = () => window.innerWidth;

  const [state, setState] = useState({
    index: 0,
    translate: 0,
    transition: 0.45,
  });

  const { translate, transition, index } = state;

  const nextSlide = () => {
    if (index === currentStyle.photos.length - 1) {
      return setState({
        ...state,
        translate: 0,
        index: 0,
      });
    }

    setState({
      ...state,
      index: index + 1,
      translate: (index + 1) * 600,
    });
  };

  const prevSlide = () => {
    if (index === 0) {
      return setState({
        ...state,
        translate: (currentStyle.photos.length - 1) * 600,
        index: currentStyle.photos.length - 1,
      });
    }

    setState({
      ...state,
      index: index - 1,
      translate: (index - 1) * 600,
    });
  };

  return (
    <div
      style={{
        height: 400,
        width: 600,
        position: "relative",
        overflow: "hidden",
        margin: 0,
      }}
    >
      {currentStyle.photos ? (
        <CarouselContent
          translate={translate}
          transition={transition}
          width={600 * currentStyle.photos.length}
          height={600}
          overflow="hidden"
        >
          {currentStyle.photos
            ? currentStyle.photos.map((slide, index) => (
                <Slide key={index} content={slide.thumbnail_url} />
              ))
            : ""}
        </CarouselContent>
      ) : (
        ""
      )}
      <Arrow direction="left" handleClick={prevSlide} />
      <Arrow direction="right" handleClick={nextSlide} />
    </div>
  );
};

// const CarouselCSS = css`
//   position: relative;
//   height: 400;
//   width: 400;
//   margin: 0 auto;
//   overflow: hidden;
// `;

export default Carousel;
