import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import OutfitEntry from "./OutfitEntry";
import getAverageReview from "../../actions/ReviewComponentActions/ActionHelpers/averageReviewHelper";

const Outfit = ({ currentProduct, addDeleteOutfit, outfitIdArr }) => {
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
        const ratingUrl = `http://18.224.200.47/reviews/${id}/meta`;

        const requestItem = axios.get(itemsUrl);
        const requestStyle = axios.get(styleUrl);
        const requestRating = axios.get(ratingUrl);

        return axios.all([requestItem, requestStyle, requestRating]).then(
          axios.spread((...responses) => {
            const responseItem = responses[0].data;
            const responseStyle = responses[1].data;
            const responseRating = getAverageReview(responses[2].data.ratings);
            return [responseItem, responseStyle, responseRating];
          })
        );
      })
    ).then((itemsAndStyleArr) => {
      setRelatedItemsAndStyle(firstCard.concat(itemsAndStyleArr));
    });
  };

  return (
    <div className="relatedOutfit">
      <h3 className="related-outfit-h3">Your Outfit</h3>
      <OutfitEntry
        currentProduct={currentProduct}
        addDeleteOutfit={addDeleteOutfit}
        relatedItemsAndStyle={relatedItemsAndStyle}
        outfitIdArr={outfitIdArr}
      />
    </div>
  );
};

export default Outfit;
