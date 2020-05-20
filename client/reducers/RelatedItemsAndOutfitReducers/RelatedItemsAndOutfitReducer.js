export default (state =   JSON.parse(localStorage.getItem("outfitIds")) || [], action) => {
  const curLocalStorage = JSON.parse(localStorage.getItem("outfitIds")) || [];
  if (action.type === "Add_OUTFIT_ID") {
    const ind1 = curLocalStorage.indexOf(action.outfitId);
    if (ind1 < 0) {
      localStorage.setItem("outfitIds", JSON.stringify(curLocalStorage.concat(action.outfitId)));
      return JSON.parse(localStorage.getItem("outfitIds"));
    }
  }
  if (action.type === "DELETE_OUTFIT_ID") {
    const ind2 = curLocalStorage.indexOf(action.outfitId);
    // console.log('ind2', ind2);
    if (ind2 !== -1) {
        curLocalStorage.splice(ind2, 1);
    }

    // console.log('curLocalStorage after splice', curLocalStorage);
    localStorage.setItem("outfitIds", JSON.stringify(curLocalStorage));
    return JSON.parse(localStorage.getItem("outfitIds"));
  }
  return state;
};
