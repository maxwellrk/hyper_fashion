import React, { useState, useEffect } from "react";
import axios from "axios";
import Promise from "bluebird";

const RelatedItems = ({ relatedItems, relatedItemsStyle }) => {
//   console.log("relatedItems in child", relatedItems);
//   console.log("relatedItemsStyle in child", relatedItemsStyle);

  return (
    <div className="relatedItems">
        <h3>Related Product</h3>
      <div className="relatedItemImgAndInfo">
        {relatedItemsStyle.map((eachItemStyle) => {
          return (
            <img
              style={{ weidth: 200, height: 200 }}
              key={eachItemStyle.product_id}
              src={eachItemStyle.results[0].photos[0].thumbnail_url}
            />
          );
        })}
        {relatedItems.map((eachItem) => {
          return (
            <div key={eachItem.id} className="RelatedItemInfo">
              <p>{eachItem.category}</p>
              <p>{eachItem.name}</p>
              <p>{eachItem.default_price}</p>
              <p>Rating</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RelatedItems;
