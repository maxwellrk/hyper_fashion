export default (state = {}, action) => {
  if (action.type === "META_BY_PRODUCT") {
    return action.payload;
  }
  return state;
};
