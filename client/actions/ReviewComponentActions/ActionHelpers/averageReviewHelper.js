const getAverageReview = function (input) {
  let sumRatings = 0;
  let totalRatings = 0;
  if (Object.keys(input).length === 0) {
    return "0.0";
  }
  for (var key in input) {
    totalRatings += input[key];
    sumRatings += input[key] * key;
  }
  const finalAverage = (sumRatings / totalRatings).toFixed(1);
  return finalAverage;
};
export default getAverageReview;
// input.filter()
