import React from "react";
import StarRatings from "react-star-ratings";
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";
import Slider from "@material-ui/core/Slider";
import Tooltip from "@material-ui/core/Tooltip";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import reviewPercentage from "./ReviewComponentHelpers/reviewPercentage";
import RatingBreakdown from "./RatingBreakdown";
import ratingBreakDownPercentage from "./ReviewComponentHelpers/ratingBreakdownPercentage";
import "./ReviewStyles/reviewstyles.css";

const RatingInfo = (props) => {
  useEffect(() => {
    props.fetchReviewMetaData(props.page);
  }, [props.page]);

  if (props.prodRating.fulldata) {
    var breakDown = ratingBreakDownPercentage(
      props.prodRating.fulldata.ratings
    );
  }

  const markssize = [
    {
      value: 1,
      label: "Too small",
    },
    {
      value: 2,
      label: "",
    },
    {
      value: 3,
      label: "Perfect",
    },
    {
      value: 4,
      label: "",
    },
    {
      value: 5,
      label: "Too large",
    },
  ];

  const markswidth = [
    {
      value: 1,
      label: "Too narrow",
    },
    {
      value: 2,
      label: "",
    },
    {
      value: 3,
      label: "Perfect",
    },
    {
      value: 4,
      label: "",
    },
    {
      value: 5,
      label: "Too wide",
    },
  ];

  const markscomfort = [
    {
      value: 1,
      label: "Uncomfortable",
    },
    {
      value: 2,
      label: "",
    },
    {
      value: 3,
      label: "Ok",
    },
    {
      value: 4,
      label: "",
    },
    {
      value: 5,
      label: "Perfect",
    },
  ];

  const marksquality = [
    {
      value: 1,
      label: "Poor",
    },
    {
      value: 2,
      label: "",
    },
    {
      value: 3,
      label: "What I expected",
    },
    {
      value: 4,
      label: "",
    },
    {
      value: 5,
      label: "Perfect",
    },
  ];

  const markslength = [
    {
      value: 1,
      label: "Runs Short",
    },
    {
      value: 2,
      label: "",
    },
    {
      value: 3,
      label: "Perfect",
    },
    {
      value: 4,
      label: "",
    },
    {
      value: 5,
      label: "Runs Long",
    },
  ];

  const marksfit = [
    {
      value: 1,
      label: "Runs tight",
    },
    {
      value: 2,
      label: "",
    },
    {
      value: 3,
      label: "Perfect",
    },
    {
      value: 4,
      label: "",
    },
    {
      value: 5,
      label: "Runs long",
    },
  ];

  function valuetext(value) {
    return `${value}°C`;
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      width: 300 + theme.spacing(3) * 2,
    },
    margin: {
      height: 4,
    },
  }));

  const iOSBoxShadow =
    "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)";

  const IOSSlider = withStyles({
    root: {
      color: "#dfdfdf",
      height: 2,
      width: 290,
      padding: "15px 0",
      left: -6,
    },

    markLabel: {
      color: "gray",
      fontSize: 12,
      fontWeight: "normal",
      '&[data-index="0"]': {
        right: 700,
      },

      '&[data-index="4"]': {
        left: 500,
      },
    },

    thumb: {
      height: 35,

      width: 27,
      color: "black",
      backgroundColor: "transparent",
      border: "0px solid black",
      marginTop: -13.5,
      marginLeft: -13,

      "& .bar": {
        height: 9,
        width: 1,
        backgroundColor: "#000",
        marginLeft: 1,
        marginRight: 1,
      },
    },

    active: {},
    valueLabel: {
      left: "calc(-50% + 12px)",
      top: -22,
      "& *": {
        background: "transparent",
        color: "gray",
      },
    },
    track: {
      height: 8,
      color: "#dfdfdf",
    },
    rail: {
      height: 8,
      opacity: 0.5,
      backgroundColor: "#dfdfdf",
    },
    mark: {
      backgroundColor: "white",
      height: 11,
      width: 10,
      marginTop: -3,
    },
    markActive: {
      opacity: 1,
      width: 10,
      backgroundColor: "white",
    },
  })(Slider);

  const classes = useStyles();

  const convertedRating = Number(props.prodRating.averageRating);
  return (
    <div className="overallComponent" id="section1">
      <Grid container direction="row" spacing={0.5}>
        <h1 className="overallRating">{props.prodRating.averageRating}</h1>
        <div>
          {props.prodRating.averageRating ? (
            <Box
              component="fieldset"
              mb={3}
              borderColor="transparent"
              marginTop="10px"
              marginLeft="14px"
            >
              <Rating
                name="overallRating"
                style={{
                  color: "black",
                  backgroundColor: "white",
                  borderColor: "black",
                }}
                value={convertedRating}
                precision={0.1}
                size="small"
                emptyIcon={
                  <StarBorderIcon
                    fontSize="inherit"
                    style={{ color: "black", borderColor: "black" }}
                  />
                }
                readOnly
              />
            </Box>
          ) : (
            <div></div>
          )}
        </div>
        <Grid container item xs={12} spacing={0.2} marginTop="5px">
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
      <div className="ratingsbreakdownbox" style={{ marginBottom: -70 }}>
        <RatingBreakdown
          totalFilters={props.totalFilters}
          addtoFilter={props.addtoFilter}
          removefromFilter={props.removefromFilter}
          removeAllFilters={props.removeAllFilters}
          rate={breakDown}
        />
      </div>
      <div
        className={classes.root}
        style={{ position: "relative", left: 35, marginLeft: -30 }}
      >
        {props.prodRating.fulldata &&
        props.prodRating.fulldata.characteristics.Size ? (
          <div>
            <Typography
              style={{
                left: 10,
                fontSize: 13,
                fontWeight: "normal",
              }}
              gutterBottom
            >
              Size
            </Typography>
            <IOSSlider
              aria-label="ios slider"
              defaultValue={
                props.prodRating.fulldata &&
                props.prodRating.fulldata.characteristics.Size
                  ? props.prodRating.fulldata.characteristics.Size.value
                  : 3
              }
              marks={markssize}
              max={5}
              min={1}
              valueLabelDisplay="on"
              ThumbComponent={ArrowDropDownIcon}
            />
          </div>
        ) : (
          <div style={{ height: 0 }}></div>
        )}
        <div className={classes.margin} />
        {props.prodRating.fulldata &&
        props.prodRating.fulldata.characteristics.Width ? (
          <div>
            <Typography
              style={{
                position: "relative",
                top: 10,
                left: 6,
                fontSize: 14,
                fontWeight: "normal",
              }}
              gutterBottom
            >
              Width
            </Typography>
            <IOSSlider
              aria-label="ios slider"
              defaultValue={
                props.prodRating.fulldata &&
                props.prodRating.fulldata.characteristics.Width
                  ? props.prodRating.fulldata.characteristics.Width.value
                  : 3
              }
              marks={markswidth}
              max={5}
              min={1}
              valueLabelDisplay="on"
              ThumbComponent={ArrowDropDownIcon}
            />
          </div>
        ) : (
          <div style={{ height: 0 }}></div>
        )}

        <div className={classes.margin} />
        {props.prodRating.fulldata &&
        props.prodRating.fulldata.characteristics.Comfort ? (
          <div>
            <Typography
              style={{
                position: "relative",
                top: 10,
                left: 6,
                fontSize: 14,
                fontWeight: "normal",
              }}
              gutterBottom
            >
              Comfort
            </Typography>
            <IOSSlider
              aria-label="ios slider"
              defaultValue={
                props.prodRating.fulldata &&
                props.prodRating.fulldata.characteristics.Comfort
                  ? props.prodRating.fulldata.characteristics.Comfort.value
                  : 3
              }
              marks={markscomfort}
              max={5}
              min={1}
              valueLabelDisplay="on"
              ThumbComponent={ArrowDropDownIcon}
            />
          </div>
        ) : (
          <div style={{ height: 0 }}></div>
        )}

        <div className={classes.margin} />

        {props.prodRating.fulldata &&
        props.prodRating.fulldata.characteristics.Quality ? (
          <div>
            <Typography
              style={{
                position: "relative",
                top: 10,
                left: 6,
                fontSize: 14,
                fontWeight: "normal",
              }}
              gutterBottom
            >
              Quality
            </Typography>
            <IOSSlider
              aria-label="ios slider"
              defaultValue={
                props.prodRating.fulldata &&
                props.prodRating.fulldata.characteristics.Quality
                  ? props.prodRating.fulldata.characteristics.Quality.value
                  : 3
              }
              marks={marksquality}
              max={5}
              min={1}
              valueLabelDisplay="on"
              ThumbComponent={ArrowDropDownIcon}
            />
          </div>
        ) : (
          <div style={{ height: 0 }}></div>
        )}

        <div className={classes.margin} />

        {props.prodRating.fulldata &&
        props.prodRating.fulldata.characteristics.Length ? (
          <div>
            <Typography
              style={{
                position: "relative",
                top: 10,
                left: 6,
                fontSize: 14,
                fontWeight: "normal",
              }}
              gutterBottom
            >
              Length
            </Typography>
            <IOSSlider
              aria-label="ios slider"
              defaultValue={
                props.prodRating.fulldata &&
                props.prodRating.fulldata.characteristics.Length
                  ? props.prodRating.fulldata.characteristics.Length.value
                  : 3
              }
              marks={markslength}
              max={5}
              min={1}
              valueLabelDisplay="on"
              ThumbComponent={ArrowDropDownIcon}
            />
          </div>
        ) : (
          <div style={{ height: 0 }}></div>
        )}

        <div className={classes.margin} />

        {props.prodRating.fulldata &&
        props.prodRating.fulldata.characteristics.Fit ? (
          <div>
            <Typography
              style={{
                position: "relative",
                top: 10,
                left: 6,
                fontSize: 14,
                fontWeight: "normal",
              }}
              gutterBottom
            >
              Fit
            </Typography>
            <IOSSlider
              aria-label="ios slider"
              defaultValue={
                props.prodRating.fulldata &&
                props.prodRating.fulldata.characteristics.Fit
                  ? props.prodRating.fulldata.characteristics.Fit.value
                  : 3
              }
              marks={marksfit}
              max={5}
              min={1}
              valueLabelDisplay="on"
              ThumbComponent={ArrowDropDownIcon}
            />
          </div>
        ) : (
          <div style={{ height: 0 }}></div>
        )}

        <div className={classes.margin} />
      </div>
    </div>
  );
};

export default RatingInfo;
