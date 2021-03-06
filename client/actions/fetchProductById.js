import axios from 'axios';

const fetchProductById = (id) => {
  return (dispatch) => {
    let url = `http://18.224.200.47/products/${id}`;
    return axios
      .get(url)
      .then((results) => {
        return dispatch({
          type: 'PRODUCT_BY_ID',
          payload: results.data,
        });
      })
      .catch((err) => {
        console.log('error getting product by id:', err);
      });
  };
};

export default fetchProductById;
