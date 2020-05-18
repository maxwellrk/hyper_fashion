import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Helpful from './Helpful';

const Answer = ({ info }) => {
  const [reportedStatus, changeReportedStatus] = useState(true);

  return (
    <div>
      <p className="answer">
        <span style={{ 'font-size': '18px', 'font-weight': 'bold' }}>A: </span>
        {info.body}
      </p>

      <p className="text14">
        by{' '}
        {info.answerer_name === 'Seller' ? (
          <span className="text14" style={{ 'font-weight': 'bold' }}>
            {info.answerer_name}
          </span>
        ) : (
          <span>info.answerer_name</span>
        )}
        , {info.newDate} |{' '}
        <Helpful
          idBeingUsed={info.id}
          helpfulness={info.helpfulness}
          typeOfStored="answerId"
        />{' '}
        |{' '}
        {reportedStatus ? (
          <span
            onClick={() => {
              axios
                .put(`http://18.224.200.47/qa/answer/${info.id}/report`)
                .then((resp) => {
                  console.log(resp);
                  changeReportedStatus(false);
                });
            }}
          >
            Report
          </span>
        ) : (
          <span>Reported</span>
        )}
      </p>
    </div>
  );
};

export default Answer;
