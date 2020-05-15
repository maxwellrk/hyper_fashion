export default (state = {}, action) => {
  if (action.type === "REVIEWS_BY_PRODUCT") {
    return action.payload;
  }
  return state;
};
