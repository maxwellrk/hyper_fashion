import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Helpful = ({ helpfulness, idBeingUsed, typeOfStored }) => {
  let stored = JSON.parse(window.localStorage.getItem(typeOfStored)) || {};
  console.log('helpful example', helpfulness, idBeingUsed, typeOfStored);
  const [isVoted, toggleVote] = useState(false);

  return (
    <p className="text14" style={{ display: 'inline' }}>
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
                stored = JSON.parse(window.localStorage.getItem(typeOfStored));
              })
              .then(() => {
                toggleVote(true);
              });
          }}
        >
          Yes ({helpfulness})
        </a>
      )}
    </p>
  );
};

export default Helpful;
