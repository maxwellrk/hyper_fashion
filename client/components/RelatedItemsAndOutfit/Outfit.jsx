import React, { useState, useEffect } from "react";

const Outfit = ({ currentProduct, addDeleteOutfit, outfitIdArr }) => {


  const addOutfitId = () => {
    addDeleteOutfit(currentProduct.id, true, false);
  };
  const deleteOutfitId = () => {
    addDeleteOutfit(currentProduct.id, false, true);//current id only for experiment for now
  };
  return (
    <div>
      <h3 className="related-outfit-h3">Your Outfit</h3>
      <p onClick={addOutfitId}>Add Outfit</p>
      <p onClick={deleteOutfitId}>Delete Outfit</p>
    </div>
  );
};

export default Outfit;
