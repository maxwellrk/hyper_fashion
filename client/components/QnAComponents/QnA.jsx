import React, { useEffect, useState } from 'react';
import QnABlock from './QnABlock';
import SearchBar from './SearchBar';

const QnA = ({ fetchQuestionsById, questionsList, productById }) => {
  const [renderAmount, changeRenderAmount] = useState(2);
  const [searchInput, changeSearchInput] = useState('');

  useEffect(() => {
    fetchQuestionsById(productById.id)
      .then(() => {
        return changeRenderAmount(2);
      })
      .then(() => {
        changeSearchInput('');
      });
  }, [productById]);

  //filter function for searchBar
  const filterQuestions = (entry) => {
    //this function is currently forcing a requery of questions even
    //if its under 3 characters, should come back to make it only query if over 3
    //maybe make a function that creates filter callbacks?

    //changing of the query will not reset the renderAmount, maybe it should?
    let query = searchInput.length > 2 ? searchInput.toLowerCase() : '';
    return entry.question_body.toLowerCase().indexOf(query) > -1;
  };

  //more questions button rendering function

  let button;

  if (
    questionsList.results === undefined ||
    !questionsList.results.length ||
    questionsList.results.length <= renderAmount
  ) {
    button = <div />;
  } else {
    button = (
      <button onClick={() => changeRenderAmount(renderAmount + 2)}>
        MORE ANSWERED QUESTIONS
      </button>
    );
  }

  return (
    <div
      style={{
        border: '2px solid black',
      }}
    >
      <SearchBar
        searchInput={searchInput}
        changeSearchInput={changeSearchInput}
      />
      {/* should find a better way to do this, it's going to need to sort the list
          everytime, this sort should be done after productById changes, and keep a local state
          of the sorted array
       */}
      {Object.keys(questionsList).length ? (
        questionsList.results
          .filter(filterQuestions)
          .sort((a, b) => {
            //sort by descending helpfulness
            return b.question_helpfulness - a.question_helpfulness;
          })
          .slice(0, renderAmount)
          .map((entry) => {
            return <QnABlock entry={entry} />;
          })
      ) : (
        <div />
      )}
      <button>ADD QUESTION</button>
      {button}
    </div>
  );
};

export default QnA;
