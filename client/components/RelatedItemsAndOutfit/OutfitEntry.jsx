import React, { useState, useEffect } from "react";
import { Carousel, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Rating from "@material-ui/lab/Rating";

const OutfitEntry = ({
  currentProduct,
  addDeleteOutfit,
  relatedItemsAndStyle,
  outfitIdArr,
}) => {
  let fakeCard = [
    [
      {
        id: -91,
      },
      {
        product_id: "-91",
        results: [
          {
            photos: [
              {
                thumbnail_url:
                  // "https://img.pngio.com/index-of-files-37108-37108-page-images-blank-png-1754_2596.png",
                  './assets/white.png',
              },
            ],
          },
        ],
      },
    ],
  ];
  const [itemSlides, setItemSlides] = useState([]);

  useEffect(() => {
    setItemSlides(createSlides());
  }, [currentProduct]);

  useEffect(() => {
    setItemSlides(createSlides());
  }, [relatedItemsAndStyle]);

  const createSlides = () => {
    let itemSlides = [];
    let start = 0;
    let finalItemsAndStyle = [];
    if (relatedItemsAndStyle.length === 1) {
      finalItemsAndStyle = relatedItemsAndStyle.concat(fakeCard, fakeCard);
    } else if (relatedItemsAndStyle.length === 2) {
      finalItemsAndStyle = relatedItemsAndStyle.concat(fakeCard);
    } else {
      finalItemsAndStyle = relatedItemsAndStyle;
    }
    for (let i = 0; i < finalItemsAndStyle.length - 2; i++) {
      itemSlides.push(finalItemsAndStyle.slice(start, i + 3));
      start += 1;
    }
    return itemSlides;
  };

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
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
                    {eachItem[0].id === -90 ? (
                      <Card
                        className="product-card firstCard"
                        onClick={() => {
                          addDeleteOutfit(currentProduct.id, true, false);
                        }}
                      >
                        <Card.Img
                          src={
                            eachItem[1].results.length
                              ? eachItem[1].results[0].photos[0].thumbnail_url
                              : null
                          }
                          alt="Missing product image"
                          className="img"
                        />
                        <Card.Body className="info">
                          <Card.Title style={{ "textAlign": "center", "marginTop": "50px" }}>
                            {eachItem[0].name}
                          </Card.Title>
                        </Card.Body>
                      </Card>
                    ) : (
                      <Card className="product-card">
                        <button
                          className="btn-compare"
                          onClick={() => {
                            addDeleteOutfit(eachItem[0].id, false, true);
                            setIndex(index >= 1 ? index - 1 : 0);
                          }}
                        >
                          ⓧ
                        </button>
                        <Card.Img
                          src={
                            eachItem[1].results.length
                              ? (eachItem[1].results[0].photos[0].thumbnail_url ? eachItem[1].results[0].photos[0].thumbnail_url : './assets/noImg.png')
                              : null
                          }
                          alt="Missing product image"
                          className="img"
                        />
                        <Link
                          to={
                            eachItem[0].id === -91
                              ? `/item/${currentProduct.id}`
                              : `/item/${eachItem[0].id}`
                          }
                          className="related-product-link"
                        >
                          {eachItem[0].id === -91 ? (
                            <Card.Body className="info"></Card.Body>
                          ) : (
                            <Card.Body className="info">
                              <Card.Text>{eachItem[0].category}</Card.Text>
                              <Card.Title>{eachItem[0].name}</Card.Title>
                              <Card.Text>
                                ${eachItem[0].default_price}
                              </Card.Text>
                              <Rating
                                style={{
                                  color: "black",
                                  "font-size": "12px",
                                  "margin-top": "0px",
                                  "padding-top": "0px",
                                }}
                                precision={0.1}
                                size="small"
                                readOnly
                                value={eachItem[2]}
                              />
                            </Card.Body>
                          )}
                        </Link>
                      </Card>
                    )}
                  </Col>
                );
              })}
            </Row>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default OutfitEntry;
