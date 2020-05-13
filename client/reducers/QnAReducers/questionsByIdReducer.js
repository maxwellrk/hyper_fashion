export default (state = {}, action) => {
  if (action.type === 'QUESTIONS_BY_ID') {
    return action.payload;
  }
  return state;
};
