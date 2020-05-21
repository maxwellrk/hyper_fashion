import React, { useState, useEffect } from "react";
import RelatedItems from "../../containers/RelatedItemsAndOutfitContainers/RelatedItemsContainer";
import Outfit from "../../containers/RelatedItemsAndOutfitContainers/OutfitContainer";
import axios from "axios";
import Promise from "bluebird";
// import "./RelatedItems.css";
import getAverageReview from "../../actions/ReviewComponentActions/ActionHelpers/averageReviewHelper";
const RelatedItemsAndOutfit = ({ currentProduct }) => {
  const [relatedItemsAndStyle, setRelatedItemsAndStyle] = useState([]);

  useEffect(() => {
    fetchRelatedItemsAndStyleById(currentProduct.id);
  }, [currentProduct.id]);

  const fetchRelatedItemsAndStyleById = (id) => {
    const url = `http://18.224.200.47/products/${id}/related`;
    let productIdListPromise = axios
      .get(url)
      .then((results) => {
        return results.data;
      })
      .catch((err) => {
        console.log("error getting related itemsId by id:", err);
      });

    Promise.all(productIdListPromise)
      .then((idArr) => {
        return Promise.all(
          idArr.map((id) => {
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
        );
      })
      .then((itemsAndStyleArr) => {
        setRelatedItemsAndStyle(itemsAndStyleArr);
      });
  };

  return (
    <div className="itemsAndOutfit">
      <RelatedItems relatedItemsAndStyle={relatedItemsAndStyle} />
      <Outfit currentProduct={currentProduct} />
    </div>
  );
};

export default RelatedItemsAndOutfit;
