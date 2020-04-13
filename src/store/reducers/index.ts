import {reducer as formReducer} from "redux-form";
import searchR from './search/index';
import {combineReducers} from "redux";

const rootReducer = combineReducers({
  searchR,
  form: formReducer
})

export default rootReducer
