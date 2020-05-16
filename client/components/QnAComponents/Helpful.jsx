import React from 'react';

const Helpful = ({ helpfulness, answerId }) => {
  const handleClick = () => {};

  return (
    <div>
      <p>
        Helpful? <span>Yes({helpfulness})</span>
      </p>
    </div>
  );
};

export default Helpful;
