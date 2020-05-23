import React, { useState, useEffect } from "react";
import RelatedItems from "../../containers/RelatedItemsAndOutfitContainers/RelatedItemsContainer";
import Outfit from "../../containers/RelatedItemsAndOutfitContainers/OutfitContainer";
import { fetchRelatedItemsAndStyleById } from "./helperFetchItemsAndStyleById";


const RelatedItemsAndOutfit = ({ currentProduct }) => {
  const [relatedItemsAndStyle, setRelatedItemsAndStyle] = useState([]);

  useEffect(() => {
    fetchRelatedItemsAndStyleById(currentProduct.id).then(
      (itemsAndStyle) => {
        setRelatedItemsAndStyle(itemsAndStyle);
      },
    );
  }, [currentProduct]);

  return (
    <div className="itemsAndOutfit">
      <RelatedItems relatedItemsAndStyle={relatedItemsAndStyle} />
      <Outfit currentProduct={currentProduct} />
    </div>
  );
};

export default RelatedItemsAndOutfit;
