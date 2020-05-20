import React, {useState} from "react";
import {Dropdown, Button, Menu, Row, Col} from "antd";
import {DownOutlined, UserOutlined} from "@ant-design/icons";
import QuantityDropDown from "./QuantityDropDown";
import Buttons from "../../containers/OverviewContainers/ButtonsContainer";

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
        "OUT OF STOCK!"
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
      <Col span={24} style={{marginTop: "20px"}}>
        <Buttons currentStyle={currentStyle} currentSize={currentSize} />
      </Col>
    </div>
  );
};

export default DropDownMenus;
