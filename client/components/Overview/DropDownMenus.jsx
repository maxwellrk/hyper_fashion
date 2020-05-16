import React, {useState} from "react";
import {Dropdown, Button, Menu} from "antd";
import {DownOutlined, UserOutlined} from "@ant-design/icons";

const DropDownMenus = ({currentStyle, productById}) => {
  console.log("currentStyle in Dropdowns", currentStyle);

  const [currentSize, setSize] = useState([]);

  function handleMenu1Click(e) {
    setSize(e.key);
  }

  const menu1 = (
    <Menu onClick={handleMenu1Click}>
      {Object.values(currentStyle).length
        ? Object.keys(currentStyle.skus).map((size, i) => {
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
    <div>
      <Dropdown overlay={menu1}>
        <Button>
          {currentSize.length ? currentSize : "Select A Size!"} <DownOutlined />
        </Button>
      </Dropdown>
      <Dropdown>
        <Button>
          1 <DownOutlined />
        </Button>
      </Dropdown>
    </div>
  );
};

export default DropDownMenus;
