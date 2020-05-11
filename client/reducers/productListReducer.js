export default (state = {}, action) => {
  if (action.type === "PRODUCT_LIST") {
    return action.payload;
  }
  return state;
};
