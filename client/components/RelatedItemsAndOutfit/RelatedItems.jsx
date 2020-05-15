import React, { useState, useEffect } from "react";
import { Carousel, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// const RelatedItems = ({ relatedItemsAndStyle }) => {

//   return (
//     <div className="relatedItems">
//       <h3>Related Product</h3>
//       <div className="imgAndInfo">
//         {relatedItemsAndStyle.map((eachItemAndStyle) => {
//           return (
//             <div key={eachItemAndStyle[0].id} className="eachItem">
//               <img
//                 // style={{ weidth: 200, height: 200 }}
//                 src={eachItemAndStyle[1].results[0].photos[0].thumbnail_url}
//                 alt="Profuct image"
//               />
//               <div className="relatedItemInfo">
//                 <p>double check id: {eachItemAndStyle[0].id}</p>
//                 <p>{eachItemAndStyle[0].category}</p>
//                 <p>{eachItemAndStyle[0].name}</p>
//                 <p>${eachItemAndStyle[0].default_price}</p>
//                 <p>Rating</p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

const RelatedItems = ({ relatedItemsAndStyle }) => {
    console.log('relatedItemsAndStyle in child level', relatedItemsAndStyle);
  const createSlides = () => {
    let itemSlides = [];
    // for (let i = 0; i < relatedItemsAndStyle.length; i = i + 3) {
    //   itemSlides.push(relatedItemsAndStyle.slice(i, i + 3));
    // }
    let start = 0;
    for (let i = 0; i < relatedItemsAndStyle.length - 2; i++) {
      itemSlides.push(relatedItemsAndStyle.slice(start, i + 3));
      start += 1;
    }
    return itemSlides;
  };

  const itemSlides = createSlides();
  console.log("slides", itemSlides);
  return (
    <div className="relatedItems">
      <h3>Related Product</h3>
      <Carousel
        wrap={true}
        interval={null}
        indicators={false}
        controls={true}
        slide={true}
      >
        {itemSlides.map((slide, i) => {
          return (
            <Carousel.Item key={i}>
              <Row className="d-flex">
                {slide.map((eachItem, j) => {
                  return (
                    <Col key={j}>
                      <Card className="product-card" onClick={()=> {console.log('eachItem[0].id',eachItem[0].id)}}>
                        
                        <Card.Img
                          src={eachItem[1].results[0].photos[0].thumbnail_url}
                          alt="Profuct image"
                          className="itemImg"
                        />
                        <Card.Body className="itemInfo">
                          <Card.Title className="itemInfo name">
                            {eachItem[0].name}
                          </Card.Title>
                          <Card.Text className="itemInfo description">
                            <p>double check id: {eachItem[0].id}</p>
                            <p>{eachItem[0].category}</p>
                            <p>{eachItem[0].name}</p>
                            <p>${eachItem[0].default_price}</p>
                            <p>Rating</p>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                })}
              </Row>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};
export default RelatedItems;
