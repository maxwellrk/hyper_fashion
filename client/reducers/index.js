import { combineReducers } from "redux";
import productListReducer from "./productListReducer";
import productByIdReducer from "./productByIdReducer";
import reviewMetaDataReducer from "./ReviewComponentReducers/reviewMetaDataReducer";

export default combineReducers({
  productList: productListReducer,
  productById: productByIdReducer,
  prodRating: reviewMetaDataReducer,
});
