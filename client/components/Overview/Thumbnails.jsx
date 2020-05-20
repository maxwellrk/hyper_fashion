import React from "react";
import {Avatar} from "antd";

const ThumbNails = ({index, thumbnails, setThumbnailCurrent}) => {
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
      {thumbnails.map((thumbnail, i) => {
        const image = thumbnail.thumbnail_url;
        if (index === i) {
          return (
            <Avatar
              shape="square"
              size={64}
              src={image}
              style={{margin: "5px", cursor: "pointer"}}
              onClick={() => setThumbnailCurrent(i)}
            />
          );
        }
        return (
          <Avatar
            shape="square"
            size={50}
            src={image}
            style={{margin: "5px", cursor: "pointer"}}
            onClick={() => setThumbnailCurrent(i)}
          />
        );
      })}
    </div>
  );
};

export default ThumbNails;
