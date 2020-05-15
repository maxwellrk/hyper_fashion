const reviewPercentage = function (input) {
  let notRecommended = input["0"];
  let recommended = input["1"];
  let total = recommended + notRecommended;
  if (!recommended) {
    return "0";
  } else if (!notRecommended) {
    return "100";
  } else {
    return ((recommended / total) * 100).toFixed(0);
  }
};

export default reviewPercentage;
