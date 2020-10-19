import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import mainReducer from "./reducers/main-reducer";
import { createLogger } from "redux-logger";

let reducers = combineReducers({
    main: mainReducer
});

const logger = createLogger({
    diff: true,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware, logger));

window.store = store;

export default store;
