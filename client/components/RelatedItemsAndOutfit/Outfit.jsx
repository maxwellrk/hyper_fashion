import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import OutfitEntry from "./OutfitEntry";

const Outfit = ({
  prodRating,
  currentProduct,
  addDeleteOutfit,
  outfitIdArr,
}) => {
  let firstCard = [
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
                  "https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814051_1280.png",
              },
            ],
          },
        ],
      },
    ],
  ];
  let fakeCard = [
    [
      {
        id: -91,
      },
      {
        product_id: -91,
        results: [
          {
            photos: [
              {
                thumbnail_url:
                  "https://img.pngio.com/index-of-files-37108-37108-page-images-blank-png-1754_2596.png",
              },
            ],
          },
        ],
      },
    ],
  ];
  const [relatedItemsAndStyle, setRelatedItemsAndStyle] = useState(firstCard);

  useEffect(() => {
    if (outfitIdArr.length > 0) {
      fetchRelatedItemsAndStyleById(outfitIdArr);
    } else {
      setRelatedItemsAndStyle(firstCard);
    }
  }, [outfitIdArr]);

  const fetchRelatedItemsAndStyleById = (outfitIdArr) => {
    Promise.all(
      outfitIdArr.map((id) => {
        const itemsUrl = `http://18.224.200.47/products/${id}`;
        const styleUrl = `http://18.224.200.47/products/${id}/styles`;
        const requestItem = axios.get(itemsUrl);
        const requestStyle = axios.get(styleUrl);
        return axios.all([requestItem, requestStyle]).then(
          axios.spread((...responses) => {
            const responseItem = responses[0].data;
            const responseStyle = responses[1].data;
            return [responseItem, responseStyle];
          })
        );
      })
    ).then((itemsAndStyleArr) => {
      setRelatedItemsAndStyle(firstCard.concat(itemsAndStyleArr));
    });
  };

  return (
    <div className="relatedOut">
      <h3 className="related-outfit-h3">Your Outfit</h3>
      <OutfitEntry
        currentProduct={currentProduct}
        addDeleteOutfit={addDeleteOutfit}
        relatedItemsAndStyle={relatedItemsAndStyle}
        prodRating={prodRating}
      />
    </div>
  );
};

export default Outfit;
