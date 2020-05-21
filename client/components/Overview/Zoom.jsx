import React, {useState, useEffect} from "react";
import {Modal} from "antd";

const Zoom = ({currentPhoto, zoom, zoomFunction}) => {
  return (
    <div>
      {zoom ? (
        <Modal
          title=""
          visible={zoom}
          centered
          bodyStyle={{padding: "0"}}
          width={"60%"}
          height={"80%"}
          footer={null}
          closable={false}
          onCancel={zoomFunction}
          onClick={zoomFunction}
          okButtonProps={{disabled: true}}
          cancelButtonProps={{disabled: true}}
        >
          <img src={currentPhoto} style={{width: "100%", height: "100%"}}></img>
        </Modal>
      ) : (
        ""
      )}
    </div>
  );
};

export default Zoom;
