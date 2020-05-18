import React, {useState, useEffect} from "react";
import {Modal} from "antd";

const Zoom = ({currentPhoto, zoom, zoomFunction}) => {
  console.log("current photo", currentPhoto);
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
          <img src={currentPhoto}></img>
        </Modal>
      ) : (
        ""
      )}
    </div>
  );
};

export default Zoom;
