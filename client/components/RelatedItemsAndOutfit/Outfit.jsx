import React, { useState, useEffect } from "react";
import OutfitEntry from "./OutfitEntry";
import { fetchOutfitItemsAndStyleByIdArr } from './helperFetchItemsAndStyleById';

const Outfit = ({ currentProduct, addDeleteOutfit, outfitIdArr }) => {
  const firstCard = [
    [
      {
        id: -90,
        name: "Add to Outfit",
      },
      {
        product_id: -90,
        results: [
          {
            photos: [
              {
                thumbnail_url:
                  // "https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814051_1280.png",
                  "./assets/addOutfit.png",
              },
            ],
          },
        ],
      },
    ],
  ];
  const [outfitItemsAndStyle, setOutfitItemsAndStyle] = useState(firstCard);

  useEffect(() => {
    if (outfitIdArr.length > 0) {
      fetchOutfitItemsAndStyleByIdArr(outfitIdArr).then((itemsAndStyle) => {
        setOutfitItemsAndStyle(firstCard.concat(itemsAndStyle));
      });
    } else {
      setOutfitItemsAndStyle(firstCard);
    }
  }, [outfitIdArr]);

  return (
    <div className="relatedOutfit">
      <h3 className="related-outfit-h3">YOUR OUTFIT</h3>
      <OutfitEntry
        currentProduct={currentProduct}
        addDeleteOutfit={addDeleteOutfit}
        outfitItemsAndStyle={outfitItemsAndStyle}
      />
    </div>
  );
};

export default Outfit;
