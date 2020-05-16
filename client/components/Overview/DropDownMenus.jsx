import React from "react";
import {Dropdown, Button} from "antd";
import {DownOutlined} from "@ant-design/icons";

const DropDownMenus = (props) => {
  console.log("props in Dropdowns", props);
  return (
    <div>
      <Dropdown>
        <Button>
          Select Size <DownOutlined />
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
