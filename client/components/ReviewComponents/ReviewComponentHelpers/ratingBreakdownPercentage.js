const ratingBreakdownPopulate = function (input) {
  let finalBreakdown = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  for (var key in input) {
    finalBreakdown[key] = input[key];
  }
  return finalBreakdown;
};

const ratingBreakDownPercentage = function (input) {
  let newObject = ratingBreakdownPopulate(input);
  let total = 0;
  let percentagesObject = {};
  for (var key in newObject) {
    total += newObject[key];
  }
  for (var key in newObject) {
    percentagesObject[key] = (newObject[key] / total) * 100;
  }
  return percentagesObject;
};

export default ratingBreakDownPercentage;
