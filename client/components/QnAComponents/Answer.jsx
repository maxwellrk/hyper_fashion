/* eslint-disable camelcase */
import React, { useState } from 'react';
import axios from 'axios';
import Helpful from './Helpful';

const Answer = ({ answerer_name, helpfulness, answer_id, newDate, body }) => {
  const [reportedStatus, changeReportedStatus] = useState(true);

  return (
    <div>
      {answerer_name ? (
        <div>
          <p className="answer">
            <span className="bold" style={{ fontSize: '18px' }}>
              A:{' '}
            </span>
            {body || ''}
          </p>

          <p className="text14">
            by{' '}
            {answerer_name === 'Seller' ? (
              <span className="text14 bold">{answerer_name}</span>
            ) : (
              <span>{answerer_name}</span>
            )}
            , {newDate} |{' '}
            <Helpful
              idBeingUsed={answer_id}
              helpfulness={helpfulness}
              typeOfStored="answerId"
            />{' '}
            |{' '}
            {reportedStatus ? (
              <a
                onClick={() => {
                  axios
                    .put(`http://18.224.200.47/qa/answer/${answer_id}/report`)
                    .then((resp) => {
                      changeReportedStatus(false);
                    });
                }}
              >
                Report
              </a>
            ) : (
              <span>Reported</span>
            )}
          </p>
        </div>
      ) : (
        <p />
      )}
    </div>
  );
};

export default Answer;
