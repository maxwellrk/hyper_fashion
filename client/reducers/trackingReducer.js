export default (state = [], action) => {
  if (action.type === "TRACKING_INFO") {
    return [...state, action.payload];
  }
  return state;
};
