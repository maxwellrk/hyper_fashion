import axios from 'axios';

const fetchQuestionsById = (id) => {
  return (dispatch) => {
    let url = `http://18.224.200.47/qa/${id}`;
    return axios
      .get(url)
      .then((results) => {
        return dispatch({
          type: 'QUESTIONS_BY_ID',
          payload: results.data,
        });
      })
      .catch((err) => {
        console.log('error getting product by id:', err);
      });
  };
};

export default fetchQuestionsById;
