import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Helpful from './Helpful';

const Answer = ({ info }) => {
  const [reportedStatus, changeReportedStatus] = useState(true);

  return (
    <div>
      <h3>A: </h3>
      <p>{info.body}</p>

      <p>
        by{' '}
        {info.answerer_name === 'Seller' ? (
          <span style={{ 'font-weight': 'bold' }}>{info.answerer_name}</span>
        ) : (
          info.answerer_name
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
