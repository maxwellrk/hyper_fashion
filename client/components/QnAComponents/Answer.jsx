import React, { useEffect } from 'react';

import Helpful from './Helpful';

const Answer = ({ info }) => {
  console.log('Answer -> info', info);

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
        | Report
      </p>
    </div>
  );
};

export default Answer;
