import React from "react";
import StarRatings from "react-star-ratings";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useEffect, useState } from "react";
import reviewPercentage from "./ReviewComponentHelpers/reviewPercentage";
import RatingBreakdown from "./RatingBreakdown";
import ratingBreakDownPercentage from "./ReviewComponentHelpers/ratingBreakdownPercentage";
import "./ReviewStyles/reviewstyles.css";

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
    <div className="overallComponent">
      <Grid container direction="row" spacing={0.5}>
        <h1 className="overallRating">{props.prodRating.averageRating}</h1>
        <div>
          {props.prodRating.averageRating ? (
            <Box
              component="fieldset"
              mb={3}
              borderColor="transparent"
              marginTop="30px"
              marginLeft="14px"
            >
              {/* <Typography component="legend">
                {props.prodRating.averageRating}
            </Typography> */}
              <Rating
                name="overallRating"
                style={{ color: "black" }}
                value={convertedRating}
                precision={0.1}
                size="small"
                readOnly
              />
            </Box>
          ) : (
            <div></div>
          )}
        </div>
        <Grid container item xs={12} spacing={0.5} marginTop="2px">
          {props.prodRating.fulldata ? (
            <div className="reviewpercentage">
              {reviewPercentage(props.prodRating.fulldata.recommended)}% of
              reviews recommend this product
            </div>
          ) : (
            <div></div>
          )}
        </Grid>
      </Grid>
      <div className="ratingsbreakdownbox">
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
