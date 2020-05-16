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
  // console.log("relatedItemsAndStyle in child level", relatedItemsAndStyle);
  const createSlides = () => {
    let itemSlides = [];
    let start = 0;
    for (let i = 0; i < relatedItemsAndStyle.length - 2; i++) {
      itemSlides.push(relatedItemsAndStyle.slice(start, i + 3));
      start += 1;
    }
    return itemSlides;
  };

  const itemSlides = createSlides();
  // console.log("slides", itemSlides);
  return (
    <div className="relatedProducts">
      <h3>Related Product</h3>
      <Carousel
        wrap={false}
        interval={null}
        indicators={false}
        controls={true}
        slide={true}
      >
        {itemSlides.map((slide, i) => {
          return (
            <Carousel.Item key={i}>
              <Row className="relatedProducts-carousel-row">
                {slide.map((eachItem, j) => {
                  return (
                    <Col key={j} className="relatedProducts-carousel-col">
                      <Card
                        className="product-card"
                        // onClick={() => {
                        //   console.log("eachItem[0].id", eachItem[0].id);
                        // }}
                      >
                        <Card.Img
                          src={eachItem[1].results.length ? eachItem[1].results[0].photos[0].thumbnail_url : null}
                          alt="Missing product image"
                          className="img"
                        />
                        <Card.Body className="info">
                          {/* <p>double check id: {eachItem[0].id}</p> */}
                          <Card.Text>{eachItem[0].category}</Card.Text>
                          <Card.Title>{eachItem[0].name}</Card.Title>
                          <Card.Text>{eachItem[0].name}</Card.Text>
                          <Card.Text>${eachItem[0].default_price}</Card.Text>
                          <Card.Text>Rating</Card.Text>
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
