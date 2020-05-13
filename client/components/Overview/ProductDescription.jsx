import React, { useEffect } from "react";

const ProductDescription = (props) => {
  useEffect(() => {
    console.log("product description props", props);
  }, [props.productById]);
  return <div>I am the product description</div>;
};

export default ProductDescription;
