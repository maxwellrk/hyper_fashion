import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Helpful from './Helpful';

const Answer = ({ info }) => {
  const [reportedStatus, changeReportedStatus] = useState(true);

  return (
    <div>
      {info ? (
        <div>
          <p className="answer">
            <span className="bold" style={{ 'font-size': '18px' }}>
              A:{' '}
            </span>
            {info.body || ''}
          </p>

          <p className="text14">
            by{' '}
            {info.answerer_name === 'Seller' ? (
              <span className="text14 bold">{info.answerer_name}</span>
            ) : (
              <span>{info.answerer_name}</span>
            )}
            , {info.newDate} |{' '}
            <Helpful
              idBeingUsed={info.id}
              helpfulness={info.helpfulness}
              typeOfStored="answerId"
            />{' '}
            |{' '}
            {reportedStatus ? (
              <a
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
              </a>
            ) : (
              <a>Reported</a>
            )}
          </p>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default Answer;
