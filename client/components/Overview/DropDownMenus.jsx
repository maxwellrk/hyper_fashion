import React, {useState} from "react";
import {Dropdown, Button, Menu} from "antd";
import {DownOutlined, UserOutlined} from "@ant-design/icons";
import QuantityDropDown from "./QuantityDropDown";

const DropDownMenus = ({currentStyle}) => {
  const [currentSize, setSize] = useState([]);

  function handleMenu1Click(e) {
    setSize(e.key);
  }

  const menu1 = (
    <Menu onClick={handleMenu1Click}>
      {Object.values(currentStyle).length
        ? Object.keys(currentStyle.skus).map((size) => {
            return (
              <Menu.Item key={size} icon={<UserOutlined />}>
                {size}
              </Menu.Item>
            );
          })
        : ""}
    </Menu>
  );

  return (
    <div style={{display: "flex", justifyContent: "space-around"}}>
      <Dropdown overlay={menu1}>
        <Button>
          {currentSize.length ? currentSize : "Select A Size!"} <DownOutlined />
        </Button>
      </Dropdown>
      <QuantityDropDown currentSize={currentSize} currentStyle={currentStyle} />
    </div>
  );
};

export default DropDownMenus;
