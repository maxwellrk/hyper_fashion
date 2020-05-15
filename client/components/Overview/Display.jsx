import React from "react";

const Display = ({ currentStyle, productById }) => {
  return (
    <div>
      <div>{productById.category}</div>
      <h1>{productById.name}</h1>
      <div>{currentStyle.original_price}</div>
    </div>
  );
};

export default Display;
