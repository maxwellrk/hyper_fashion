import React from "react";
import { Avatar } from "antd";

const ThumbNails = ({ index, thumbnails }) => {
  console.log(thumbnails[0]);
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
      {thumbnails.map((thumbnail) => {
        const image = thumbnail.thumbnail_url;
        return <Avatar shape="square" size={50} src={image} />;
      })}
    </div>
  );
};

export default ThumbNails;
