import React, { useState, useEffect } from "react";

const Outfit = ({ currentProduct }) => {
  let curOutfitIds = JSON.parse(localStorage.getItem("outfitIds")) || [];
  const [outfitIds, setOutfitIds] = useState(curOutfitIds);

  useEffect(() => {
    localStorage.setItem("outfitIds", JSON.stringify(outfitIds));
  }, [outfitIds]);

  const addOutfitId = () => {
    setOutfitIds(outfitIds.concat(currentProduct.id));
  };

 

  return (
    <div>
      <h3 className="related-outfit-h3">Your Outfit</h3>
      <p onClick={addOutfitId}>Add Outfit</p>
      {/* <p onclick={deleteOutfitId}>Delete Outfit</p> */}
    </div>
  );
};

export default Outfit;
