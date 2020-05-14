export default (state = {}, action) => {
  if (action.type === 'PRODUCT_BY_ID') {
    return action.payload;
  }
  return state;
};
