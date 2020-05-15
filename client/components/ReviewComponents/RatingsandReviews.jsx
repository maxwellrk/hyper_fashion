import React from "react";
import { useEffect, useState } from "react";
import RatingInfo from "../../containers/ReviewComponentContainers/RatingInfoContainer";
import ReviewList from "../../containers/ReviewComponentContainers/ReviewListContainer";

const RatingsandReviews = (props) => {
  return (
    <div>
      <h1>Review Component</h1>
      <RatingInfo page={props.page} />
      <ReviewList page={props.page} />
    </div>
  );
};

export default RatingsandReviews;
