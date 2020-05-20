import React, {useState} from "react";
import CarouselContent from "./CarouselContent";
import Slide from "./Slide";
import Arrow from "./Arrows";
import ThumbNails from "./Thumbnails";
import Zoom from "./Zoom";

const Carousel = ({currentStyle}) => {
  const [state, setState] = useState({
    index: 0,
    translate: 0,
    transition: 0.45,
    zoom: false,
    currentPhoto: [],
  });

  const {translate, transition, index, zoom, currentPhoto} = state;

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
      translate: (index + 1) * 800,
    });
  };

  const prevSlide = () => {
    if (index === 0) {
      return setState({
        ...state,
        translate: (currentStyle.photos.length - 1) * 800,
        index: currentStyle.photos.length - 1,
      });
    }

    setState({
      ...state,
      index: index - 1,
      translate: (index - 1) * 800,
    });
  };

  const setThumbnailCurrent = (i) => {
    setState({
      ...state,
      index: i,
      translate: i * 800,
    });
  };

  const zoomFunction = (index) => {
    let newCurrent;

    currentStyle.photos.forEach((photo, i) => {
      if (index === i) {
        newCurrent = photo.thumbnail_url;
      }
    });
    let current = state.zoom;
    setState({
      ...state,
      zoom: !current,
      currentPhoto: [newCurrent],
    });
  };

  return (
    <div
      style={{
        height: 600,
        width: 800,
        position: "relative",
        overflow: "hidden",
        margin: 0,
      }}
    >
      <Zoom
        zoom={zoom}
        currentStyle={currentStyle}
        index={index}
        zoomFunction={zoomFunction}
        currentPhoto={currentPhoto}
      />
      {currentStyle.photos ? (
        <CarouselContent
          translate={translate}
          transition={transition}
          width={800 * currentStyle.photos.length}
          height="100%"
          overflow="hidden"
          style={{cursor: "zoom-in"}}
          onClick={() => zoomFunction(index)}
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
      {currentStyle.photos ? (
        <ThumbNails
          thumbnails={currentStyle.photos}
          index={index}
          setThumbnailCurrent={setThumbnailCurrent}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Carousel;
