import React from "react";
import ReviewListItem from "./ReviewListItem";
import { useEffect, useState } from "react";

const ReviewList = (props) => {
  useEffect(() => {
    props.fetchReviews(props.page);
  }, [props.page]);

  //   console.log("reviewList:", props.reviewList.results);

  return (
    // <div>whatever</div>
    <div>
      <div>
        <h2>{props.prodRating.totalRating} reviews, sorted by</h2>
        <select name="sortdropdown" id="1">
          <option value="relevance">Relevance</option>
        </select>
      </div>
      <div>
        {Object.keys(props.reviewList).length ? (
          props.reviewList.results.map((item) => {
            return <ReviewListItem item={item} />;
          })
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default ReviewList;
