import React, { useState, useEffect } from "react";

const CompareModal = ({
  relatedItem,
  currentItem,
  closeModal,
  displayModal,
}) => {
  // combinedFeatures [[feature, currentItemFeatureVal, relatedItemFeatureVal], [feature, currentItemFeatureVal, ..]..]
  // if there is no such feature for currentItem or relatedItem. then the value = none
  const [combinedFeatures, setCombinedFeatures] = useState([]);
  // console.log("combinedFeatures", combinedFeatures);
  // console.log('currentItem feature', currentItem);
  // console.log("relatedItem feature", relatedItem[0]);

  useEffect(() => {
    if (displayModal) {
      combineFeatures(relatedItem, currentItem);
    }
  }, [relatedItem]);

  const combineFeatures = (relatedItem, currentItem) => {
    let combined = new Set();
    let current = [];
    let related = [];
    if (currentItem.features.length) {
      currentItem.features.forEach((eachFeature) => {
        combined.add(eachFeature.feature);
        current.push(eachFeature.feature, eachFeature.value);
      });
    }
    if (relatedItem[0].features.length) {
      relatedItem[0].features.forEach((eachFeature) => {
        combined.add(eachFeature.feature);
        related.push(eachFeature.feature, eachFeature.value);
      });
    }
    let combinedFeatureArr = Array.from(combined).map((feature) => {
      let currentVal = 'none';
      let relatedVal = 'none';
      let curInd = current.indexOf(feature);
      let relInd = related.indexOf(feature);
      if (curInd > -1) {
        currentVal = current[curInd + 1];
      }
      if (relInd > -1) {
        relatedVal = related[relInd + 1];
      }
      return ([feature, currentVal, relatedVal]);
    })
    setCombinedFeatures(combinedFeatureArr);
  };

  return (
    <div>
      {displayModal ? (
        <div className="compareModal">
          {/* <!-- Modal content --> */}
          <div className="modal-content">
            <span className="close" onClick={() => closeModal()}>
              &times;
            </span>
            <h5 className="compareModal-title-h5">Compare</h5>
            <table className="compareModal-table">
              <thead className="thead">
              <tr className="table-th-box">
                <th>{currentItem.name}</th>
                <th> </th>
                <th>{relatedItem[0].name}</th>
              </tr>
              </thead>
              <tbody className="table-body">
              {combinedFeatures.map((feature, i) => {
                return (
                  <tr key={i} className="table-td-box">
                    <td name='curItemFeatureVal'>{feature[1]==='none' ? ' ' : (feature[1]==='null'? '✓' : feature[1]) } </td>
                    <td name='features'>{feature[0]}</td>
                    <td name='relItemFeatureVal'>{feature[2]==='none' ? ' ' : (feature[2]==='null'? '✓' : feature[2])} </td>
                  </tr>
                );
              })}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CompareModal;
