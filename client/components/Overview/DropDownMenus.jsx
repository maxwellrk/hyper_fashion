import React, {useState} from "react";
import {Dropdown, Button, Menu, Row, Col} from "antd";
import {DownOutlined, UserOutlined} from "@ant-design/icons";
import QuantityDropDown from "./QuantityDropDown";

const DropDownMenus = ({currentStyle}) => {
  const [currentSize, setSize] = useState([]);

  function handleMenu1Click(e) {
    setSize(e.key);
  }

  const menu1 = (
    <div>
      {currentStyle ? (
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
      ) : (
        ""
      )}
    </div>
  );

  return (
    <div>
      <Row>
        <Col span={4}>
          <div>
            <Dropdown overlay={menu1}>
              <Button>
                {currentSize.length ? currentSize : "Select A Size!"}{" "}
                <DownOutlined />
              </Button>
            </Dropdown>
          </div>
        </Col>
        <Col span={12}>
          <div>
            <QuantityDropDown
              style={{width: "100px"}}
              currentSize={currentSize}
              currentStyle={currentStyle}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default DropDownMenus;
