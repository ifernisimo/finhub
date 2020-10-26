import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import mainReducer from "./reducers/main-reducer";
import { createLogger } from "redux-logger";
import authReducer from "./reducers/auth-reducer";

let reducers = combineReducers({
  main: mainReducer,
  auth: authReducer,
});

const logger = createLogger({
  diff: true,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware, logger));

window.store = store;

export default store;
