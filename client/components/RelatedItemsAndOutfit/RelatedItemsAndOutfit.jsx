import React, { useState, useEffect } from "react";
import RelatedItems from "../../containers/RelatedItemsAndOutfitContainers/RelatedItemsContainer";
import Outfit from "./Outfit";
import axios from "axios";
import Promise from "bluebird";
import './RelatedItems.css';

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
        );
      })
      .then((itemsAndStyleArr) => {
        setRelatedItemsAndStyle(itemsAndStyleArr);
      });
  };

  // let curOutfitIds = [];
  // const [outfitIds, setOutfitIds] = useState(curOutfitIds);

  // useEffect(() => {
  //   localStorage.setItem("outfitIds", JSON.stringify(outfitIds));
  // }, [outfitIds]);

  // const addOutfitId = () => {
  //   setOutfitIds(outfitIds.concat(currentProduct.id));
  // };

  return (
    <div className="itemsAndOutfit">
      <RelatedItems relatedItemsAndStyle={relatedItemsAndStyle} />
      <Outfit currentProduct={currentProduct}/>
      {/* <p onClick={addOutfitId}>Add Outfit222</p> */}
    </div>
  );
};

export default RelatedItemsAndOutfit;
