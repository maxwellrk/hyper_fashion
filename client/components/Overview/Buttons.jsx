import React from "react";
import axios from "axios";
import {Button, Space} from "antd";
import {StarOutlined} from "@ant-design/icons";

const Buttons = (props) => {
  const addToCart = () => {
    if (!props.currentSize.length) {
      alert("Please select a size!");
    }
    let url = `http://18.224.200.47/cart/`;
    let user_token = 1;
    let cartModel = {
      user_token: user_token,
      sku_id: props.currentStyle.style_id,
    };

    return axios.post(url, cartModel).then((results) => {
      console.log("add to cart response", results);
    });
  };

  return (
    <div>
      <Space size="large">
        <Button type="default" size="large" onClick={() => addToCart()}>
          {/* <PlusOutlined size="large" /> */}
          ADD TO BAG
        </Button>
        <Button
          type="default"
          icon={<StarOutlined />}
          size="large"
          onClick={() => {
            props.addDeleteOutfit(props.productById.id, true, false);
          }}
        />
      </Space>
    </div>
  );
};

export default Buttons;
