import { combineReducers } from "redux";
import productReducer from "./product";

//Combine the reducers
export default combineReducers({
  productIndex: productReducer
});
