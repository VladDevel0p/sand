import {configureStore} from '@reduxjs/toolkit';
import thunk from "redux-thunk";
import {history, rootReducers} from "./rootReducers";
import logger from "redux-logger";

let middleware = [thunk];

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

export const store = configureStore({
  reducer: rootReducers,
  middleware: [...middleware],
  preloadedState: {},
});

