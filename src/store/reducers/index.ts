import {reducer as formReducer} from "redux-form";
import searchR from './search';
import mealPlanR from './mealPlan'
import {combineReducers} from "redux";

const rootReducer = combineReducers({
  searchR,
  mealPlanR,
  form: formReducer
})

export default rootReducer
