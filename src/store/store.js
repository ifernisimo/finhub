import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import mainReducer from "./reducers/main-reducer";
import { createLogger } from "redux-logger";
import authReducer from "./reducers/auth-reducer";
import calcReducer from "./reducers/calc-reducer";

let reducers = combineReducers({
  main: mainReducer,
  auth: authReducer,
  calc: calcReducer,
});

const logger = createLogger({
  diff: true,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware, logger));

window.store = store;

export default store;
