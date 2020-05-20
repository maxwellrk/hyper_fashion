import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Carousel, Row, Col, Card, Button } from "react-bootstrap";
// import { Carousel, Row, Col, Card} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Rating from "@material-ui/lab/Rating";


const Outfit = ({ currentProduct, addDeleteOutfit, outfitIdArr }) => {
//   const [relatedItemsAndStyle, setRelatedItemsAndStyle] = useState([]);
//   const [itemSlides, setItemSlides] = useState([]);

//   useEffect(() => {
//       if (outfitIdArr.length > 0) {
//           fetchRelatedItemsAndStyleById(outfitIdArr);
//       }
//       setItemSlides(createSlides());
//   }, [outfitIdArr]);

//   const fetchRelatedItemsAndStyleById = (outfitIdArr) => {
//     Promise.all(
//       outfitIdArr.map((id) => {
//         const itemsUrl = `http://18.224.200.47/products/${id}`;
//         const styleUrl = `http://18.224.200.47/products/${id}/styles`;
//         const requestItem = axios.get(itemsUrl);
//         const requestStyle = axios.get(styleUrl);
//         return axios.all([requestItem, requestStyle]).then(
//           axios.spread((...responses) => {
//             const responseItem = responses[0].data;
//             const responseStyle = responses[1].data;
//             return [responseItem, responseStyle];
//           })
//         );
//       })
//     ).then((itemsAndStyleArr) => {
//       setRelatedItemsAndStyle(itemsAndStyleArr);
//     });
//   };

//   const createSlides = () => {
//     let itemSlides = [];
//     let start = 0;
//     for (let i = 0; i < relatedItemsAndStyle.length - 2; i++) {
//       itemSlides.push(relatedItemsAndStyle.slice(start, i + 3));
//       start += 1;
//     }
//     return itemSlides;
//   };

  
// console.log('itemSlides',itemSlides  )
//   const addOutfitId = () => {
//     addDeleteOutfit(currentProduct.id, true, false);
//   };
//   const deleteOutfitId = () => {
//     addDeleteOutfit(currentProduct.id, false, true); //current id only for experiment for now
//   };

  return (
    <div className="relatedOut">
      <h3 className="related-outfit-h3">Your Outfit</h3>
      {/* {relatedItemsAndStyle.length ? (
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
                <Row className="relatedProductsOutfit-carousel-row">
                  {slide.map((eachItem, j) => {
                    return (
                      <Col
                        key={j}
                        className="relatedProductsOutfit-carousel-col"
                      >
                        <Card className="product-card">
                         <button
                            className="btn-compare"
                            onClick={() => {
                                console.log('eachItem[0].id', eachItem[0].id)
                                addDeleteOutfit(eachItem[0].id, false, true)
                            }}
                          >
                            ⓧ
                          </button>
                          <Card.Img
                            src={
                              eachItem[1].results.length
                                ? eachItem[1].results[0].photos[0].thumbnail_url
                                : null
                            }
                            alt="Missing product image"
                            className="img"
                          />
                          <Link
                            to={`/item/${eachItem[0].id}`}
                            className="related-product-link"
                          >
                            <Card.Body className="info">
                              <p>double check id: {eachItem[0].id}</p>
                              <Card.Text>{eachItem[0].category}</Card.Text>
                              <Card.Title>{eachItem[0].name}</Card.Title>
                              <Card.Text>{eachItem[0].name}</Card.Text>
                              <Card.Text>
                                ${eachItem[0].default_price}
                              </Card.Text>
                            </Card.Body>
                          </Link>
                        </Card>
                      </Col>
                    );
                  })}
                </Row>
              </Carousel.Item>
            );
          })}
        </Carousel>
      ) : (
        <h6 className="non-related-h6">There is no related products...</h6>
      )} */}
    </div>
  );
};

                            //   {/* <Rating
                            //     style={{ color: "black" }}
                            //     precision={0.1}
                            //     size="small"
                            //     readOnly
                            //     value={prodRating.averageRating}
                            //   /> */}
export default Outfit;
