import React, {useState, useEffect} from "react";
import {Modal} from "antd";

const Zoom = ({index, currentStyle, zoom, zoomFunction}) => {
  return (
    <div>
      {zoom ? (
        <Modal
          onCancel={() => zoomFunction()}
          title=""
          visible={zoom}
          okButtonProps={{style: {display: "none"}}}
          cancelButtonProps={{style: {display: "none"}}}
          //   onOk={this.handleOk}
          //   onCancel={this.handleCancel}
        >
          <p>what I have so far</p>
        </Modal>
      ) : (
        ""
      )}
    </div>
  );
};

export default Zoom;
