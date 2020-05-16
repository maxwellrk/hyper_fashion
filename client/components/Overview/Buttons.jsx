import React from "react";
import {Button, Radio, Space} from "antd";
import {PlusOutlined, StarOutlined} from "@ant-design/icons";

const Buttons = ({currentStyle}) => {
  return (
    <div>
      <Space size="large">
        <Button type="default" size="large">
          {/* <PlusOutlined size="large" /> */}
          ADD TO BAG
        </Button>
        <Button type="default" icon={<StarOutlined />} size="large" />
      </Space>
    </div>
  );
};

export default Buttons;
