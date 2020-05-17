import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Helpful = ({ helpfulness, idBeingUsed, typeOfStored }) => {
  let stored = JSON.parse(window.localStorage.getItem(typeOfStored)) || {};

  const [isVoted, toggleVote] = useState(false);

  return (
    <div>
      <p>
        Helpful?
        {stored[idBeingUsed] || isVoted ? (
          <span>Yes(voted)({isVoted ? helpfulness + 1 : helpfulness})</span>
        ) : (
          <span
            onClick={(e) => {
              stored[idBeingUsed.toString()] = true;
              axios
                .put(
                  typeOfStored === 'questionId'
                    ? `http://18.224.200.47/qa/question/${idBeingUsed}/helpful`
                    : `http://18.224.200.47/qa/answer/${idBeingUsed}/helpful`
                )
                .then((resp) => {
                  console.log(resp);
                  window.localStorage.setItem(
                    typeOfStored,
                    JSON.stringify(stored)
                  );
                })
                .then(() => {
                  stored = JSON.parse(
                    window.localStorage.getItem(typeOfStored)
                  );
                })
                .then(() => {
                  toggleVote(true);
                });
            }}
          >
            Yes ({helpfulness})
          </span>
        )}
      </p>
    </div>
  );
};

export default Helpful;
