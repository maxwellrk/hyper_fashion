const updateCurrentId = (id) => {
  return (dispatch) => {
    return dispatch({
      type: "UPDATE_ID",
      currentId: id,
    });
  };
};

export default updateCurrentId;
