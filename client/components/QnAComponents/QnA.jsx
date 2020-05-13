import React from 'react';
import { useEffect } from 'react';

const QnA = (props) => {
  useEffect(() => {
    props.fetchQuestionsById(props.id);
  }, [props.url]);

  return <div>QnA</div>;
};

export default QnA;
