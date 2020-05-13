import React, { useEffect } from "react";
import Overview from "./Overview/Overview";

const ProductDetailPage = (props) => {
  useEffect(() => {
    console.log("product detail props", props);
    props.fetchProductById(props.match.params.id);
  }, [props.location]);

  return (
    <div>
      {/* <h1>PRODUCT PAGE</h1>
      {Object.keys(props.productById).map((info) => (
        <div>
          {<h3>{info}</h3>}
          {info !== "features" && <p>{props.productById[info]}</p>}
        </div>
      ))} */}
      <Overview />
    </div>
  );
};

export default ProductDetailPage;
