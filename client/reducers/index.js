import { combineReducers } from 'redux';
import productListReducer from './productListReducer';
import productByIdReducer from './productByIdReducer';

export default combineReducers({
  productList: productListReducer,
  productById: productByIdReducer,
});
