import React, { useEffect } from "react";

const ProductDescription = () => {
  useEffect(() => {
    console.log("I am running on page load");
  });
  return <div>I am the product description</div>;
};

export default ProductDescription;
