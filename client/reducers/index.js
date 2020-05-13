import { combineReducers } from 'redux';
import productListReducer from './productListReducer';
import productByIdReducer from './productByIdReducer';
import questionsByIdReducer from './QnAReducers/questionsByIdReducer';

export default combineReducers({
  productList: productListReducer,
  productById: productByIdReducer,
  questionsList: questionsByIdReducer,
});
