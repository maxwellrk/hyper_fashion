import React from "react";

const CompareModal = ({ relatedItem, currentItem, closeModal, displayModal }) => {

  return (
    <div>
      {displayModal ? (
        <div className="compareModal">
          {/* <!-- Modal content --> */}
          <div className="modal-content">
            <span className="close" onClick={() => closeModal()}>
              &times;
            </span>
            <p>
              compare
            </p>
            <p>relatedItem id{relatedItem[0].id}</p>
            <p>currentItem id{currentItem.id}</p>

          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CompareModal;
