export default (state = {}, action) => {
  if (action.type === "UPDATE_ID") {
    return action.currentId;
  }
  return state;
};
