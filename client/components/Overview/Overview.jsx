import {Avatar, Row, Col} from "antd";
import axios from "axios";
import React, {useEffect, useState} from "react";
import ProductDescription from "../../containers/OverviewContainers/productDescriptionContainer";
import Carousel from "../../containers/OverviewContainers/CarouselContainer";
import Display from "./Display.jsx";
import DropDownMenus from "./DropDownMenus";
import Reviews from "../../containers/OverviewContainers/ReviewsContainer";

const Overview = ({productById}) => {
  const [styles, setStyles] = useState([]);
  const [currentStyle, setCurrentStyle] = useState({});

  function getStyles() {
    let id = productById.id;
    let url = `http://18.224.200.47/products/${id}/styles`;
    return axios
      .get(url)
      .then((result) => {
        setStyles(result.data.results);
        setCurrentStyle(result.data.results[0]);
      })
      .catch((err) => {
        console.log("error getting styles", err);
      });
  }

  useEffect(() => {
    if (Object.keys(productById).length) {
      getStyles();
    }
  }, [productById]);

  return (
    <div>
      <Row>
        <Col span={16}>
          <Carousel currentStyle={currentStyle} />
        </Col>
        <Col span={8} style={{marginTop: 20}}>
          <Reviews />
          <Display currentStyle={currentStyle} productById={productById} />
          Style > {Object.values(currentStyle).length ? currentStyle.name : ""}
          <br />
          <br />
          {styles.map((style) => {
            const image = style.photos[0].thumbnail_url;
            return (
              <Avatar
                style={{margin: "2px"}}
                src={image}
                size={64}
                onClick={() => setCurrentStyle(style)}
              />
            );
          })}
          <br />
          <br />
          <DropDownMenus currentStyle={currentStyle} />
          <Buttons />
        </Col>
      </Row>
      <ProductDescription />
    </div>
  );
};

export default Overview;
