import {Avatar, Row, Col, Space, Badge} from "antd";
import axios from "axios";
import React, {useEffect, useState} from "react";
import ProductDescription from "../../containers/OverviewContainers/productDescriptionContainer";
import Carousel from "../../containers/OverviewContainers/CarouselContainer";
import Display from "./Display.jsx";
import DropDownMenus from "./DropDownMenus";
import Reviews from "../../containers/OverviewContainers/ReviewsContainer";
import NavBar from "./NavBar";

const Overview = ({productById}) => {
  const [styles, setStyles] = useState([]);
  const [currentStyle, setCurrentStyle] = useState({});
  const [currentSelected, setCurrentSelected] = useState([]);

  function getStyles() {
    let id = productById.id;
    let url = `http://18.224.200.47/products/${id}/styles`;
    return axios
      .get(url)
      .then((result) => {
        setStyles(result.data.results);
        setCurrentStyle(result.data.results[0]);
        setCurrentSelected([result.data.results[0].style_id]);
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

  const setAsCurrent = (style) => {
    setCurrentStyle(style);
    setCurrentSelected([style.style_id]);
  };

  return (
    <div>
      <NavBar />
      <Row>
        <Col span={16}>
          <Carousel currentStyle={currentStyle} />
        </Col>
        <Col span={8} style={{marginTop: 20}}>
          <Row>
            <Col span={24}>
              <Reviews />
            </Col>
            <Col span={24}>
              <Display currentStyle={currentStyle} productById={productById} />
            </Col>
            <Col span={24}>
              Style >{" "}
              {Object.values(currentStyle).length ? currentStyle.name : ""}
            </Col>
            <br />
            <br />
            <Col span={16}>
              {styles.map((style) => {
                const image = style.photos[0].thumbnail_url;
                if (style.style_id === currentSelected[0]) {
                  return (
                    <Avatar
                      style={{margin: "5px", cursor: "pointer"}}
                      src={image}
                      size={64}
                      onClick={() => setAsCurrent(style)}
                    />
                  );
                } else {
                  return (
                    <Avatar
                      style={{margin: "5px", cursor: "pointer"}}
                      src={image}
                      size={50}
                      onClick={() => setAsCurrent(style)}
                    />
                  );
                }
              })}
            </Col>
          </Row>
          <br />
          <br />
          <Row>
            <Col span={24}>
              <DropDownMenus currentStyle={currentStyle} />
            </Col>
          </Row>
        </Col>
      </Row>
      <div style={{width: "80%", margin: "auto"}}>
        <ProductDescription currentStyle={currentStyle} />
      </div>
    </div>
  );
};

export default Overview;
