import React, { useState, useEffect } from "react";

const RelatedItemAndOutfit = ({ currentProduct }) => {
  console.log("currentProduct in RelatedItemAndOutfit", currentProduct);
  return (
    <div>
      <h3>RelatedItemAndOutfit Widget: Susy working on it</h3>
      <div>
        RelatedItemAndOutfit Widget-- current product id:
        {currentProduct.id}
      </div>
    </div>
  );
};

export default RelatedItemAndOutfit;
