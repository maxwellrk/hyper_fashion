import React, {useEffect} from "react";
import {Space, Card, Descriptions} from "antd";
import {
  FacebookFilled,
  TwitterSquareFilled,
  InstagramFilled,
  CheckOutlined,
} from "@ant-design/icons";

const ProductDescription = ({productById, currentStyle}) => {
  useEffect(() => {}, [productById]);
  console.log("current style in PD", productById.features);
  return (
    <div>
      {" "}
      <Space direction="horizontal">
        <Card title={productById.slogan} bordered={false}>
          <p>{productById.description}</p>
        </Card>

        <Card style={{width: 100}} bordered={false} align={"center"}>
          <Space direction="vertical">
            <FacebookFilled style={{fontSize: "30px"}} />
            <br />
            <TwitterSquareFilled style={{fontSize: "30px"}} />
            <br />
            <InstagramFilled style={{fontSize: "30px"}} />
          </Space>
        </Card>
        <Card title={"Features"} bordered={false}>
          {productById.features
            ? productById.features.map((feature) => {
                return (
                  <div>
                    <CheckOutlined /> {feature.value} {feature.feature}
                  </div>
                );
              })
            : ""}
        </Card>
      </Space>
      <Space>
        <Card style={{width: 300}} bordered={false} align={"center"}>
          <Space direction="vertical">
            {/* <FacebookFilled style={{fontSize: "30px"}} />
            <br />
            <TwitterSquareFilled style={{fontSize: "30px"}} />
            <br />
            <InstagramFilled style={{fontSize: "30px"}} /> */}
          </Space>
        </Card>
      </Space>
    </div>
  );
};

export default ProductDescription;
