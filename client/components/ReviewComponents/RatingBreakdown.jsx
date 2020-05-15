import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import { lighten, makeStyles, withStyles } from "@material-ui/core/styles";
import ratingBreakDownPercentage from "./ReviewComponentHelpers/ratingBreakdownPercentage";

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
      height: 20,
      backgroundColor: lighten("#ebebeb", 0.3),
      margin: 30,
    },
    bar: {
      borderRadius: 0,
      backgroundColor: "#23f0a0",
    },
  })(LinearProgress);
  return (
    <div>
      <div>
        <div>5 stars</div>
        <BorderLinearProgress
          className="whatever"
          variant="determinate"
          color="secondary"
          value={valueFive}
        />
      </div>
      <div>
        <div>4 stars</div>
        <BorderLinearProgress
          className="whatever"
          variant="determinate"
          color="secondary"
          value={valueFour}
        />
      </div>
      <div>
        <div>3 stars</div>
        <BorderLinearProgress
          className="whatever"
          variant="determinate"
          color="secondary"
          value={valueThree}
        />
      </div>
      <div>
        <div>2 stars</div>
        <BorderLinearProgress
          className="whatever"
          variant="determinate"
          color="secondary"
          value={valueTwo}
        />
      </div>
      <div>
        <div>1 stars</div>
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
