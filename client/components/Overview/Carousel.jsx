import React, { useState } from "react";
import CarouselContent from "./CarouselContent";
import Slide from "./Slide";

/**
 * @function Slider
 */
const Carousel = ({ currentStyle }) => {
  //   const getWidth = () => window.innerWidth;

  const [state, setState] = useState({
    translate: 0,
    transition: 0.45,
  });

  const { translate, transition } = state;
  console.log(currentStyle.photos);

  return (
    <div
      style={{
        height: 400,
        width: 400,
        position: "relative",
        overflow: "hidden",
        margin: 0,
      }}
    >
      <CarouselContent
        translate={translate}
        transition={transition}
        width={400}
        height={400}
        overflow="hidden"
      >
        {currentStyle.photos
          ? currentStyle.photos.map((slide, index) => (
              <Slide key={index} content={slide.thumbnail_url} />
            ))
          : ""}
      </CarouselContent>
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
