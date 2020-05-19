const addDeleteOutfit = (id, addId, deleteId) => {
  if (addId) {
    return (dispatch) => {
      return dispatch({
        type: "Add_OUTFIT_ID",
        outfitId: id,
      });
    };
  }
  if (deleteId) {
    return (dispatch) => {
      return dispatch({
        type: "DELETE_OUTFIT_ID",
        outfitId: id,
      });
    };
  }
};

export default addDeleteOutfit;
