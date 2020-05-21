import React, { useState, useEffect } from "react";
import { Carousel, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Rating from "@material-ui/lab/Rating";
import CompareModal from "./CompareModal";

const RelatedItems = ({ productById, relatedItemsAndStyle }) => {
  const [displayModal, setDisplayModal] = useState(false);
  const [relatedItem, setrelatedItem] = useState([]);

  const closeModal = () => {
    setDisplayModal(false);
  };

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

  return (
    <div className="relatedProducts">
      <h3 className='related-outfit-h3'>Related Product</h3>
      <CompareModal
        relatedItem={relatedItem}
        currentItem={productById}
        displayModal={displayModal}
        closeModal={closeModal}
      />
      {relatedItemsAndStyle.length ? (
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
                      <Col key={j} className="relatedProductsOutfit-carousel-col">
                        <Card className="product-card">
                          <button
                          className='btn-compare'
                            onClick={() => {
                              setrelatedItem(eachItem);
                              setDisplayModal(true);
                            }}
                          >
                            ✩
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
                              {/* <p>double check id: {eachItem[0].id}</p> */}
                              <Card.Text>{eachItem[0].category}</Card.Text>
                              <Card.Title>{eachItem[0].name}</Card.Title>
                              <Card.Text>
                                ${eachItem[0].default_price}
                              </Card.Text>
                              <Rating
                                style={{ color: "black", "font-size": "12px", "margin-top": "0px", "padding-top": "0px"}}
                                precision={0.1}
                                size="small"
                                readOnly
                                value={eachItem[2]}
                              />
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
        <h6 className='non-related-h6'>There is no related products...</h6>
      )}
    </div>
  );
};
export default RelatedItems;
