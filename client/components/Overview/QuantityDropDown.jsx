import React, {useState, useEffect} from "react";
import {Dropdown, Button, Menu} from "antd";
import {DownOutlined, UserOutlined} from "@ant-design/icons";

const QuantityDropdown = ({currentSize, currentStyle}) => {
  const [currentQuantity, setQuantity] = useState([]);
  const [quantities, setQuantities] = useState([]);

  function handleMenu2Click(e) {
    console.log(e.key);
    setQuantity(e.key);
  }

  useEffect(() => {
    console.log("currentSTyle", currentStyle);
    console.log("currentSize", currentSize);
    if (currentSize.length) {
      let num = currentStyle.skus[currentSize];
      createQuantities(num);
    }
  }, [currentSize]);

  const createQuantities = (num) => {
    let quantities = [];
    for (let i = 1; i <= num + 1; i++) {
      quantities.push(i);
    }
    setQuantities(quantities);
  };

  const menu2 = (
    <Menu onClick={handleMenu2Click}>
      {Object.values(currentSize).length
        ? Object.keys(quantities).map((index) => {
            return (
              <Menu.Item key={index} icon={<UserOutlined />}>
                {index}
              </Menu.Item>
            );
          })
        : ""}
    </Menu>
  );

  return (
    <div>
      {currentSize.length ? (
        <Dropdown overlay={menu2}>
          <Button>
            {currentQuantity.length ? currentQuantity : "Select Quantity"}{" "}
            <DownOutlined />
          </Button>
        </Dropdown>
      ) : (
        ""
      )}
    </div>
  );
};

export default QuantityDropdown;
