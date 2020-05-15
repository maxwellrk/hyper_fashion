import React, { useEffect, useState } from 'react';
import QnABlock from './QnABlock';
import SearchBar from './SearchBar';

const QnA = ({ fetchQuestionsById, questionsList, productById }) => {
  const [questionRender, changeQuestionRender] = useState(2);
  const [searchInput, changeSearchInput] = useState('');

  useEffect(() => {
    fetchQuestionsById(productById.id)
      .then(() => {
        return changeQuestionRender(2);
      })
      .then(() => {
        changeSearchInput('');
      });
  }, [productById]);
  //not sure if i want this
  // useEffect(() => {
  //   if (searchInput.length > 2) changeQuestionRender(2);
  // }, [searchInput]);

  //filter function for searchBar
  const filterQuestions = (entry) => {
    //this function is currently forcing a requery of questions even
    //if its under 3 characters, should come back to make it only query if over 3
    //maybe make a function that creates filter callbacks?

    //changing of the query will not reset the questionRender, maybe it should?
    let query = searchInput.length > 2 ? searchInput.toLowerCase() : '';
    return entry.question_body.toLowerCase().indexOf(query) > -1;
  };

  //more questions button rendering function

  let moreQuestions;

  if (
    questionsList.results === undefined ||
    !questionsList.results.length ||
    questionsList.results.filter(filterQuestions).length <= questionRender
  ) {
    moreQuestions = <div />;
  } else {
    moreQuestions = (
      <button onClick={() => changeQuestionRender(questionRender + 2)}>
        MORE ANSWERED QUESTIONS
      </button>
    );
  }

  let listOfQnABlock;

  if (Object.keys(questionsList).length) {
    listOfQnABlock = questionsList.results
      .filter(filterQuestions)
      .sort((a, b) => {
        //sort by descending helpfulness
        return b.question_helpfulness - a.question_helpfulness;
      })
      .slice(0, questionRender)
      .map((entry) => {
        return <QnABlock entry={entry} />;
      });
  } else {
    listOfQnABlock = <div />;
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
      {listOfQnABlock}
      <button>ADD QUESTION</button>
      {moreQuestions}
    </div>
  );
};

export default QnA;
