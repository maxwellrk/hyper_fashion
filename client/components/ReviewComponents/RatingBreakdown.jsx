import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import { lighten, makeStyles, withStyles } from "@material-ui/core/styles";
import ratingBreakDownPercentage from "./ReviewComponentHelpers/ratingBreakdownPercentage";
import "./ReviewStyles/reviewstyles.css";

const RatingBreakdown = (props) => {
  //   useEffect(() => {
  //     props.fetchReviewMetaData(props.page);
  //   }, [props.page]);
  //   if (props.rate) {
  //     var breakDown = ratingBreakDownPercentage(props.rate.ratings);
  //     console.log(breakDown);
  //   }
  // if(props.rate) {

  // }
  console.log(props.rate);
  if (props.rate) {
    var valueFive = props.rate[5];
    var valueFour = props.rate[4];
    var valueThree = props.rate[3];
    var valueTwo = props.rate[2];
    var valueOne = props.rate[1];
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
        <div className="starrating">5 stars</div>
        <BorderLinearProgress
          className="whatever"
          variant="determinate"
          color="secondary"
          value={valueFive}
        />
      </div>
      <div className="linearbar4">
        <div className="starrating">4 stars</div>
        <BorderLinearProgress
          className="whatever"
          variant="determinate"
          color="secondary"
          value={valueFour}
        />
      </div>
      <div className="linearbar3">
        <div className="starrating">3 stars</div>
        <BorderLinearProgress
          className="whatever"
          variant="determinate"
          color="secondary"
          value={valueThree}
        />
      </div>
      <div className="linearbar2">
        <div className="starrating">2 stars</div>
        <BorderLinearProgress
          className="whatever"
          variant="determinate"
          color="secondary"
          value={valueTwo}
        />
      </div>
      <div className="linearbar1">
        <div className="starrating">1 stars</div>
        <BorderLinearProgress
          className="whatever"
          variant="determinate"
          color="secondary"
          value={valueOne}
        />
      </div>
    </div>
  );
};

export default RatingBreakdown;
