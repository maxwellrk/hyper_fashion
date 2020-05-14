import React from "react";

const ThumbNails = ({ index, thumbnails }) => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: "25px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      Thumbnails
    </div>
  );
};

export default ThumbNails;
