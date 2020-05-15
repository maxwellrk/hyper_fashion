import React, { useState, useEffect } from "react";

const RelatedItems = ({ relatedItemsAndStyle }) => {

  return (
    <div className="relatedItems">
      <h3>Related Product</h3>
      <div className="imgAndInfo">
        {relatedItemsAndStyle.map((eachItemAndStyle) => {
          return (
            <div key={eachItemAndStyle[0].id} className="eachItem">
              <img
                // style={{ weidth: 200, height: 200 }}
                src={eachItemAndStyle[1].results[0].photos[0].thumbnail_url}
                alt="Profuct image"
              />
              <div className="relatedItemInfo">
                <p>double check id: {eachItemAndStyle[0].id}</p>
                <p>{eachItemAndStyle[0].category}</p>
                <p>{eachItemAndStyle[0].name}</p>
                <p>${eachItemAndStyle[0].default_price}</p>
                <p>Rating</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RelatedItems;
