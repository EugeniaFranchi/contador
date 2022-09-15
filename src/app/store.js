import { createStore, combineReducers } from 'redux'
import { counterReducer } from "./reducers/CounterReducers";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
    count: counterReducer
  })

export default createStore(reducer, composeWithDevTools());
