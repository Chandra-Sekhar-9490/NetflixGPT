import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "@redux-devtools/extension";

import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";

const appStore = configureStore(
  { reducer: { user: userReducer, movies: moviesReducer } },
  composeWithDevTools()
);

export default appStore;
