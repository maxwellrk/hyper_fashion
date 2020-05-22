/* eslint-disable */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Helpful = ({ helpfulness, idBeingUsed, typeOfStored }) => {
  let stored = JSON.parse(window.localStorage.getItem(typeOfStored)) || {};
  const [isVoted, toggleVote] = useState(false);

  return (
    <span className="text14" style={{ display: 'inline' }}>
      Helpful?{' '}
      {stored[idBeingUsed] || isVoted ? (
        <span className="underline bold">
          {' '}
          Yes({isVoted ? helpfulness + 1 : helpfulness})
        </span>
      ) : (
        <a
          className="underline"
          onClick={(e) => {
            axios
              .put(
                typeOfStored === 'questionId'
                  ? `http://18.224.200.47/qa/question/${idBeingUsed}/helpful`
                  : `http://18.224.200.47/qa/answer/${idBeingUsed}/helpful`
              )
              .then((resp) => {
                stored =
                  JSON.parse(window.localStorage.getItem(typeOfStored)) || {};
              })
              .then(() => {
                stored[idBeingUsed.toString()] = true;
                window.localStorage.setItem(
                  typeOfStored,
                  JSON.stringify(stored)
                );
              })
              .then(() => {
                toggleVote(true);
              });
          }}
        >
          Yes ({helpfulness})
        </a>
      )}
    </span>
  );
};

export default Helpful;
