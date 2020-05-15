import React from "react";
import StarRatings from "react-star-ratings";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import LinearProgress from "@material-ui/core/LinearProgress";
// import { lighten, makeStyles, withStyles } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import reviewPercentage from "./ReviewComponentHelpers/reviewPercentage";
import RatingBreakdown from "./RatingBreakdown";
import ratingBreakDownPercentage from "./ReviewComponentHelpers/ratingBreakdownPercentage";

const RatingInfo = (props) => {
  useEffect(() => {
    // console.log("props:", props);
    props.fetchReviewMetaData(props.page);
  }, [props.page]);

  if (props.prodRating.fulldata) {
    var breakDown = ratingBreakDownPercentage(
      props.prodRating.fulldata.ratings
    );
  }

  const convertedRating = Number(props.prodRating.averageRating);
  return (
    <div>
      <h1>{props.prodRating.averageRating}</h1>
      <div>
        {props.prodRating.averageRating ? (
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography component="legend">Read only</Typography>
            <Rating
              name="overallRating"
              style={{ color: "black" }}
              value={convertedRating}
              precision={0.1}
              size="large"
              readOnly
            />
          </Box>
        ) : (
          <div></div>
        )}
      </div>
      {props.prodRating.fulldata ? (
        <div>
          {reviewPercentage(props.prodRating.fulldata.recommended)}% of reviews
          recommend this product
        </div>
      ) : (
        <div></div>
      )}
      <div>
        <RatingBreakdown rate={breakDown} />
        {/* <div>
          <BorderLinearProgress
            className="whatever"
            variant="determinate"
            color="secondary"
            value={50}
          />
        </div> */}
      </div>
      {/* <div>
        {props.prodRating.averageRating ? (
          <StarRatings
            rating={convertedRating}
            starRatedColor="black"
            numberOfStars={5}
            name="rating"
          />
        ) : (
          <div></div>
        )}
      </div> */}
    </div>
  );
};

export default RatingInfo;
