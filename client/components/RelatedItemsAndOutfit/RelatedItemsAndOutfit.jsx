import React, { useState, useEffect } from "react";
import RelatedItems from "./RelatedItems";
import Outfit from "./Outfit";
import axios from "axios";
import Promise from "bluebird";

const RelatedItemsAndOutfit = ({currentProduct}) => {

  const [relatedItems, setRelatedItems] = useState([]);
  const [relatedItemsStyle, setRelatedItemsStyle] = useState([]);

  // console.log('props id in related', props.id);
  // console.log('props in related', props);

  useEffect(() => {
    console.log('useEffect in related');
    fetchRelatedItemsById(currentProduct.id);
  }, [currentProduct.id]);

  const fetchRelatedItemsById = (id) => {
    const url = `http://18.224.200.47/products/${id}/related`;
    let productIdListPromise = axios
      .get(url)
      .then((results) => {
        return results.data;
      })
      .catch((err) => {
        console.log("error getting related itemsId by id:", err);
      });

    // getting items list
    Promise.all(productIdListPromise)
      .then((idArr) => {
        // console.log("related Id arr", idArr);
        return Promise.all(
          idArr.map((id) => {
            const url1 = `http://18.224.200.47/products/${id}`;
            return axios.get(url1).then((result) => {
              return result.data;
            });
          })
        );
      })
      .then((itemsArr) => {
        setRelatedItems(itemsArr);
      });

    // getting style list for the item
    Promise.all(productIdListPromise)
      .then((idArr) => {
        // console.log("related Id arr", idArr);
        return Promise.all(
          idArr.map((id) => {
            const url2 = `http://18.224.200.47/products/${id}/styles`;
            return axios.get(url2).then((result) => {
              return result.data;
            });
          })
        );
      })
      .then((stylesArr) => {
        setRelatedItemsStyle(stylesArr);
      });
  };

  return (
    <div>
      <RelatedItems relatedItems={relatedItems} relatedItemsStyle={relatedItemsStyle} />
      <Outfit />
    </div>
  );
};

export default RelatedItemsAndOutfit;
