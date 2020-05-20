import React from "react";
import {Button, Radio, Space} from "antd";
import {PlusOutlined, StarOutlined} from "@ant-design/icons";

const Buttons = (props) => {
  return (
    <div>
      <Space size="large">
        <Button type="default" size="large">
          {/* <PlusOutlined size="large" /> */}
          ADD TO BAG
        </Button>
        <Button
          type="default"
          icon={<StarOutlined />}
          size="large"
          onClick={() => {
            console.log("button hook up");
            props.addDeleteOutfit(props.productById.id, true, false);
          }}
        />
      </Space>
    </div>
  );
};

export default Buttons;
