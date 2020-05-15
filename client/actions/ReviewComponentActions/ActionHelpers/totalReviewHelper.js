const getTotalReview = function (input) {
  let totalRatings = 0;
  for (var key in input) {
    totalRatings += input[key];
  }

  return totalRatings;
};
export default getTotalReview;
