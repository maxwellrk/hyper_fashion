import React from "react";
import { useEffect, useState } from "react";
import $ from "jquery";
import LinearProgress from "@material-ui/core/LinearProgress";
import { lighten, makeStyles, withStyles } from "@material-ui/core/styles";
import ratingBreakDownPercentage from "./ReviewComponentHelpers/ratingBreakdownPercentage";
import "./ReviewStyles/reviewstyles.css";

const RatingBreakdown = (props) => {
  const [bar, toggleBar] = useState([]);
  //   useEffect(() => {
  //     props.fetchReviewMetaData(props.page);
  //   }, [props.page]);
  //   if (props.rate) {
  //     var breakDown = ratingBreakDownPercentage(props.rate.ratings);
  //     console.log(breakDown);
  //   }
  // if(props.rate) {

  // }
  function updateFilter(event, input) {
    console.log("eventtarget", event.target);
    if (bar.includes(input)) {
      props.removefromFilter(input);
      toggleBar(bar.filter((item) => item !== input));
    } else {
      props.addtoFilter(input);
      toggleBar([...bar, input]);
    }
  }

  // function removeFilter(input) {
  //   props.removefromFilter(4);
  // }

  // <button onClick={() => updateFilter()}>sort by 5</button>
  // <button onClick={() => removeFilter()}>Remove 5</button>

  if (props.rate) {
    var valueFive;
    var valueFour;
    var valueThree;
    var valueTwo;
    var valueOne;
    isNaN(props.rate[5]) ? (valueFive = 0) : (valueFive = props.rate[5]);
    isNaN(props.rate[4]) ? (valueFour = 0) : (valueFour = props.rate[4]);
    isNaN(props.rate[3]) ? (valueThree = 0) : (valueThree = props.rate[3]);
    isNaN(props.rate[2]) ? (valueTwo = 0) : (valueTwo = props.rate[2]);
    isNaN(props.rate[1]) ? (valueOne = 0) : (valueOne = props.rate[1]);
    // var valueFive = props.rate[5] === NaN ? 0 : props.rate[5];
    // var valueFour = props.rate[4] === NaN ? 0 : props.rate[4];
    // var valueThree = props.rate[3] === NaN ? 0 : props.rate[3];
    // var valueTwo = props.rate[2] === NaN ? 0 : props.rate[2];
    // var valueOne = props.rate[1] === NaN ? 0 : props.rate[1];
  }
  const BorderLinearProgress = withStyles({
    root: {
      height: 10,
      width: 210,
      backgroundColor: lighten("#ebebeb", 0.3),
      margin: 10,
      position: "relative",
      left: 45,
    },
    bar: {
      borderRadius: 0,
      backgroundColor: "#23f0a0",
    },
  })(LinearProgress);
  return (
    <div>
      <div className="linearbar5">
        <div className="starrating" onClick={(event) => updateFilter(event, 5)}>
          5 stars
        </div>
        <BorderLinearProgress
          className="whatever"
          variant="determinate"
          color="secondary"
          value={valueFive || 0}
        />
      </div>
      <div className="linearbar4">
        <div className="starrating" onClick={(event) => updateFilter(event, 4)}>
          4 stars
        </div>
        <BorderLinearProgress
          className="whatever"
          variant="determinate"
          color="secondary"
          value={valueFour || 0}
        />
      </div>
      <div className="linearbar3">
        <div className="starrating" onClick={(event) => updateFilter(event, 3)}>
          3 stars
        </div>
        <BorderLinearProgress
          className="whatever"
          variant="determinate"
          color="secondary"
          value={valueThree || 0}
        />
      </div>
      <div className="linearbar2">
        <div className="starrating" onClick={(event) => updateFilter(event, 2)}>
          2 stars
        </div>
        <BorderLinearProgress
          className="whatever"
          variant="determinate"
          color="secondary"
          value={valueTwo || 0}
        />
      </div>
      <div className="linearbar1">
        <div className="starrating" onClick={(event) => updateFilter(event, 1)}>
          1 stars
        </div>
        <BorderLinearProgress
          className="whatever"
          variant="determinate"
          color="secondary"
          value={valueOne || 0}
        />
      </div>
    </div>
  );
};

export default RatingBreakdown;
