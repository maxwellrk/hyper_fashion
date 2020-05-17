import React from "react";

const Display = ({currentStyle, productById}) => {
  console.log("current style in display", currentStyle);
  return (
    <div>
      <div>{productById.category}</div>
      <h1>{productById.name}</h1>
      <div>
        {currentStyle.sale_price > 0
          ? "SALE PRICE $" + currentStyle.sale_price
          : "$" + currentStyle.original_price}
      </div>
      <br />
    </div>
  );
};

export default Display;
