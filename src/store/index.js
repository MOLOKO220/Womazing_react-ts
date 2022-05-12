import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { mainReducer } from "./mainReducer";
import { basketReducer } from "./basketReducer";

const rootReducer = combineReducers({
  main: mainReducer,
  basket: basketReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
