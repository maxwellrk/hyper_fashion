import React, { useEffect } from "react";
import { Space, Card, Divider } from "antd";
import {
  FacebookFilled,
  TwitterSquareFilled,
  InstagramFilled,
} from "@ant-design/icons";

const ProductDescription = ({ productById }) => {
  useEffect(() => {
    console.log("product description props", productById);
  }, [productById]);
  return (
    <Space direction="horizontal">
      <Card title={productById.slogan} bordered={false}>
        <p>{productById.description}</p>
      </Card>
      <Card style={{ width: 300 }} bordered={false} align={"center"}>
        <Space direction="vertical">
          <FacebookFilled style={{ fontSize: "30px" }} />
          <br />
          <TwitterSquareFilled style={{ fontSize: "30px" }} />
          <br />
          <InstagramFilled style={{ fontSize: "30px" }} />
        </Space>
      </Card>
    </Space>
  );
};

export default ProductDescription;
