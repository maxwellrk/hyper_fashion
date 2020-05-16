import React, { useEffect } from 'react';

import Helpful from './Helpful';

const Answer = ({ info }) => {
  return (
    <div>
      <h3>A: </h3>
      <p>{info.body}</p>

      <p>
        by{' '}
        {info.answerer_name === 'Seller'
          ? info.answerer_name + '(BOLD)'
          : info.answerer_name}
        , {info.newDate} |{' '}
        <Helpful helpfulness={info.helpfulness} answerId={info.id} /> | Report
      </p>
    </div>
  );
};

export default Answer;
