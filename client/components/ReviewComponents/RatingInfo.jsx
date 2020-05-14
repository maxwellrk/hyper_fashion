import React from "react";
import { useEffect, useState } from "react";

const RatingInfo = (props) => {
  useEffect(() => {
    // console.log("props:", props);
    props.fetchReviewMetaData(props.page);
  }, [props.page]);
  //   let { average } = props.prodRating.averageRating;
  console.log("newprops:", props);
  return (
    <div>
      <h1>{props.prodRating.averageRating}</h1>
    </div>
  );
};

export default RatingInfo;
